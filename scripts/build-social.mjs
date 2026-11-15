import { build } from "esbuild";
import { resolve } from "node:path";

async function main() {
  await build({
    entryPoints: [resolve(process.cwd(), "src/social/index.tsx")],
    outfile: resolve(process.cwd(), "public/social-poster/app.js"),
    bundle: true,
    minify: true,
    format: "esm",
    platform: "browser",
    target: ["es2020"],
  });
  console.log("Built public/social-poster/app.js");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

