import { createServer } from "node:http";
import { readFileSync, existsSync, statSync } from "node:fs";
import { extname, join, resolve } from "node:path";

const PORT = 4173;
const ROOT = resolve(process.cwd(), "public/it-support-specialist-viewer");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".glb": "model/gltf-binary",
};

createServer((req, res) => {
  const urlPath = (req.url || "/").split("?")[0];
  let filePath = join(ROOT, urlPath === "/" ? "index.html" : urlPath);
  if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
    filePath = join(ROOT, "index.html");
  }
  const ext = extname(filePath).toLowerCase();
  res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
  res.end(readFileSync(filePath));
}).listen(PORT, () => {
  console.log(`IT Support Specialist 3D Viewer running at http://localhost:${PORT}/`);
});

