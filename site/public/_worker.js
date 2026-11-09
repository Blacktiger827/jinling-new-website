const ASSET_EXTENSION = /\.(?:avif|bmp|css|csv|docx?|eot|gif|ico|jpe?g|js|json|map|mp3|mp4|ogg|otf|pdf|png|svg|ttf|txt|webm|webp|woff2?|xlsx?|xml|zip)$/i;
const LEGACY_PAGE_EXTENSION = /\.(?:aspx?|html?|php)$/i;
const SYSTEM_PATH = /^\/(?:_next|cdn-cgi)(?:\/|$)/;
const GOOGLE_SITE_VERIFICATION_RESPONSES = new Map([
  ["/googlee13a9dcb0a5eaebc.html", "google-site-verification: googlee13a9dcb0a5eaebc.html\n"],
  ["/googlefe87bd278ecbddbd.html", "google-site-verification: googlefe87bd278ecbddbd.html"],
]);

function shouldRedirectMissingPage(request, url) {
  if (request.method !== "GET" && request.method !== "HEAD") return false;
  if (SYSTEM_PATH.test(url.pathname)) return false;
  if (LEGACY_PAGE_EXTENSION.test(url.pathname)) return true;
  return !ASSET_EXTENSION.test(url.pathname);
}

const worker = {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "jinlingmetals.com") {
      return Response.redirect(`https://www.jinlingmetals.com${url.pathname}${url.search}`, 301);
    }

    if (GOOGLE_SITE_VERIFICATION_RESPONSES.has(url.pathname)) {
      const body = GOOGLE_SITE_VERIFICATION_RESPONSES.get(url.pathname);
      return new Response(request.method === "HEAD" ? null : body, {
        headers: { "content-type": "text/html; charset=UTF-8" },
      });
    }

    const response = await env.ASSETS.fetch(request);

    if (response.status !== 404) return response;

    if (!shouldRedirectMissingPage(request, url)) return response;

    return Response.redirect(new URL("/", url), 301);
  },
};

export default worker;
