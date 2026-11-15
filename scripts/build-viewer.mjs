import { build } from "esbuild";
import { resolve } from "node:path";

async function main() {
  await build({
    entryPoints: [resolve(process.cwd(), "src/viewer/specialist-viewer.ts")],
    outfile: resolve(
      process.cwd(),
      "public/it-support-specialist-viewer/specialist-viewer.js",
    ),
    bundle: true,
    minify: true,
    format: "esm",
    platform: "browser",
    target: ["es2020"],
  });
  console.log("Built public/it-support-specialist-viewer/specialist-viewer.js");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

