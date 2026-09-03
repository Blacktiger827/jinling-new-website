import { spawnSync } from "node:child_process";
import { copyFileSync, cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const siteDir = join(rootDir, "site");
const rootOutDir = join(rootDir, "out");
const rootPublicDir = join(rootDir, "public");
const siteOutDir = join(siteDir, "out");
const sitePublicDir = join(siteDir, "public");

function run(command, args, cwd) {
  const result = spawnSync(command, args, {
    cwd,
    env: {
      ...process.env,
      NODE_OPTIONS: [process.env.NODE_OPTIONS, "--max-old-space-size=4096"]
        .filter(Boolean)
        .join(" "),
    },
    shell: process.platform === "win32",
    stdio: "inherit",
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

if (!existsSync(join(siteDir, "node_modules"))) {
  run("npm", ["ci"], siteDir);
}

run("npm", ["run", "build"], siteDir);

if (!existsSync(siteOutDir)) {
  throw new Error(`Expected build output not found: ${siteOutDir}`);
}

rmSync(rootOutDir, { force: true, recursive: true });
rmSync(rootPublicDir, { force: true, recursive: true });
cpSync(siteOutDir, rootOutDir, { recursive: true });
mkdirSync(rootPublicDir, { recursive: true });

for (const fileName of ["sitemap.xml", "sitemap-0.xml", "robots.txt"]) {
  copyFileSync(join(sitePublicDir, fileName), join(rootPublicDir, fileName));
}
