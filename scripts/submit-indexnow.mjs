import { readFile } from "node:fs/promises";
import { basename, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const ORIGIN = "https://www.jinlingmetals.com";
const ENDPOINT = "https://api.indexnow.org/indexnow";
const MAX_URLS = 10_000;
const TIMEOUT_MS = 20_000;

export function prepareSubmission(keyFile, keyText, urls) {
  const key = keyText.replace(/\r?\n$/, "");
  if (!/^[a-f0-9]{32}$/.test(key)) {
    throw new Error("Key file must contain exactly 32 lowercase hexadecimal characters (optional final newline; no BOM).");
  }
  if (basename(keyFile) !== `${key}.txt`) {
    throw new Error("Key filename must match its contents followed by .txt.");
  }
  if (!urls.length) throw new Error("Provide at least one new or updated production page URL.");

  const urlList = [...new Set(urls.map((value) => {
    const url = new URL(value);
    if (url.origin !== ORIGIN || url.username || url.password || url.search || url.hash) {
      throw new Error("Only HTTPS www.jinlingmetals.com page URLs without credentials, query strings or fragments are allowed.");
    }
    if (/\.[^/]+$/.test(url.pathname) || /^\/(?:_next|cdn-cgi)(?:\/|$)/.test(url.pathname)) {
      throw new Error("Submit canonical page URLs, not assets, verification files or legacy file URLs.");
    }
    if (url.pathname.replace(/\/$/, "") === "/get-quote") {
      throw new Error("The excluded quote utility URL must not be submitted.");
    }
    return url.href;
  }))];
  if (urlList.length > MAX_URLS) throw new Error("A request may contain at most 10,000 unique URLs.");

  return { host: new URL(ORIGIN).hostname, key, keyLocation: `${ORIGIN}/${key}.txt`, urlList };
}

function decodeAttribute(value) {
  return value.replace(/&#(?:x([0-9a-f]+)|([0-9]+));?/gi, (match, hex, decimal) => {
    const codePoint = Number.parseInt(hex || decimal, hex ? 16 : 10);
    return codePoint > 0 && codePoint <= 0x10ffff ? String.fromCodePoint(codePoint) : "\uFFFD";
  }).replace(/&(amp|quot|apos|lt|gt);/g, (_, name) => ({ amp: "&", quot: '"', apos: "'", lt: "<", gt: ">" })[name]);
}

function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)]
    .map((match) => [match[1].toLowerCase(), decodeAttribute(match[2] ?? match[3] ?? match[4])]));
}

function verifyPage(html, headers, url) {
  if (/\b(?:noindex|none)\b/i.test(headers.get("x-robots-tag") || "")) {
    throw new Error(`Page has an X-Robots-Tag exclusion: ${url}`);
  }
  const markup = html.replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<(script|style|template|textarea|title|xmp)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, "");
  const tags = [...markup.matchAll(/<(?:meta|link)\b[^>]*>/gi)].map(([tag]) => ({
    name: tag.match(/^<(\w+)/)[1].toLowerCase(), attrs: attributes(tag),
  }));
  if (tags.some(({ name, attrs }) => name === "meta" && /^(?:robots|bingbot)$/i.test(attrs.name || "")
      && /\b(?:noindex|none)\b/i.test(attrs.content || ""))) {
    throw new Error(`Page has a robots meta exclusion: ${url}`);
  }
  const canonicals = tags.filter(({ name, attrs }) => name === "link"
    && (attrs.rel || "").toLowerCase().split(/\s+/).includes("canonical"));
  if (canonicals.length !== 1 || !canonicals[0].attrs.href
      || new URL(canonicals[0].attrs.href, url).href !== url) {
    throw new Error(`Page must declare exactly one matching canonical URL: ${url}`);
  }
}

async function fetchDirect(fetchImpl, url, options = {}) {
  return fetchImpl(url, {
    ...options,
    redirect: "manual",
    credentials: "omit",
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
}

export async function runSubmission(payload, { mode = "dry-run", fetchImpl = globalThis.fetch } = {}) {
  if (!["dry-run", "check", "submit"].includes(mode)) throw new Error("Unknown run mode.");
  const result = { mode, host: payload.host, urlCount: payload.urlList.length };
  if (mode === "dry-run") return { ...result, status: "local_validation_passed_no_network" };

  const keyResponse = await fetchDirect(fetchImpl, payload.keyLocation);
  if (keyResponse.status !== 200 || !/^text\/plain\b/i.test(keyResponse.headers.get("content-type") || "")
      || (await keyResponse.text()).replace(/\r?\n$/, "") !== payload.key) {
    throw new Error("Live key file must return direct HTTP 200, plain text and the exact expected key.");
  }

  for (const url of payload.urlList) {
    const response = await fetchDirect(fetchImpl, url);
    if (response.status !== 200 || !/^text\/html\b/i.test(response.headers.get("content-type") || "")) {
      throw new Error(`Page must return direct HTTP 200 HTML before new/update submission: ${url}`);
    }
    verifyPage(await response.text(), response.headers, url);
  }
  if (mode === "check") return { ...result, status: "live_validation_passed_no_submission" };

  const response = await fetchDirect(fetchImpl, ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });
  if (response.status !== 200 && response.status !== 202) {
    throw new Error(`IndexNow returned HTTP ${response.status}; no automatic retry was attempted.`);
  }
  return { ...result, httpStatus: response.status, status: response.status === 202
    ? "received_key_validation_pending" : "received_not_a_guarantee_of_indexing" };
}

export function parseArgs(args) {
  const urls = [];
  let keyFile;
  let mode = "dry-run";
  for (let index = 0; index < args.length; index++) {
    const arg = args[index];
    if (arg === "--key-file") {
      if (keyFile || !args[index + 1] || args[index + 1].startsWith("--")) {
        throw new Error("Provide --key-file exactly once with a filename.");
      }
      keyFile = args[++index];
    } else if (arg === "--check" || arg === "--submit") {
      if (mode !== "dry-run") throw new Error("Choose only one of --check or --submit.");
      mode = arg.slice(2);
    } else if (arg.startsWith("--")) {
      throw new Error(`Unknown option: ${arg}`);
    } else {
      urls.push(arg);
    }
  }
  if (!keyFile) throw new Error("Provide --key-file site/public/<key>.txt.");
  return { keyFile, urls, mode };
}

export function formatError(error) {
  return String(error?.message || error).replace(/\b[a-f0-9]{32}\b/gi, "[redacted-key]");
}

async function main() {
  if (process.argv.slice(2).includes("--help")) {
    console.log("Usage: node scripts/submit-indexnow.mjs --key-file site/public/<key>.txt [--check | --submit] <new-or-updated-www-url> [...urls]");
    console.log("Default: local dry-run, no network. --check: live GET validation only. --submit: validate then POST. Run only after production deployment.");
    return;
  }
  const { keyFile, urls, mode } = parseArgs(process.argv.slice(2));
  const payload = prepareSubmission(keyFile, await readFile(keyFile, "utf8"), urls);
  console.log(JSON.stringify(await runSubmission(payload, { mode }), null, 2));
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main().catch((error) => {
    console.error(`IndexNow: ${formatError(error)}`);
    process.exitCode = 1;
  });
}
