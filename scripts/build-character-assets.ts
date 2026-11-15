import { writeFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { deflateSync } from "node:zlib";
import * as THREE from "three";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import {
  buildITSupportRig,
  STICKMAN_METRICS,
} from "../src/components/character/CharacterRig";
import { buildAllStickmanAnimationClips } from "../src/components/character/CharacterAnimations";
import {
  CHARACTER_PALETTE,
  createITSupportChestLogoTexture,
  createLaptopScreenTexture,
} from "../src/components/character/CharacterMaterials";
import { STICKMAN_ANIMATIONS } from "../src/components/character/types";

function crc32(buf: Buffer): number {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i];
    for (let k = 0; k < 8; k++) {
      c = (c >>> 1) ^ (c & 1 ? 0xedb88320 : 0);
    }
  }
  return (c ^ 0xffffffff) >>> 0;
}

function pngChunk(type: string, data: Buffer): Buffer {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, "ascii");
  const crcBuf = Buffer.alloc(4);
  const combined = Buffer.concat([typeBuf, data]);
  crcBuf.writeUInt32BE(crc32(combined), 0);
  return Buffer.concat([len, combined, crcBuf]);
}

function encodeRgbaToPng(width: number, height: number, rgba: Uint8Array): Buffer {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  const stride = width * 4;
  const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y++) {
    const srcRow = (height - 1 - y) * stride;
    const dstRow = y * (stride + 1);
    raw[dstRow] = 0;
    Buffer.from(rgba.buffer, rgba.byteOffset + srcRow, stride).copy(raw, dstRow + 1);
  }

  const idat = deflateSync(raw, { level: 9 });
  return Buffer.concat([
    signature,
    pngChunk("IHDR", ihdr),
    pngChunk("IDAT", idat),
    pngChunk("IEND", Buffer.alloc(0)),
  ]);
}

function ensureNodePolyfills() {
  if (typeof (globalThis as Record<string, unknown>).FileReader === "undefined") {
    class NodeFileReader {
      result: ArrayBuffer | string | null = null;
      onloadend: (() => void) | null = null;
      onload: (() => void) | null = null;
      onerror: ((err: unknown) => void) | null = null;

      readAsArrayBuffer(blob: Blob) {
        blob
          .arrayBuffer()
          .then((ab) => {
            this.result = ab;
            this.onload?.();
            this.onloadend?.();
          })
          .catch((err) => {
            this.onerror?.(err);
          });
      }

      readAsDataURL(blob: Blob) {
        blob
          .arrayBuffer()
          .then((ab) => {
            const b64 = Buffer.from(ab).toString("base64");
            this.result = `data:${blob.type || "application/octet-stream"};base64,${b64}`;
            this.onload?.();
            this.onloadend?.();
          })
          .catch((err) => {
            this.onerror?.(err);
          });
      }
    }
    (globalThis as Record<string, unknown>).FileReader = NodeFileReader;
  }
}

async function exportCharacterBundle(targetDir: string) {
  const modelDir = join(targetDir, "model");
  const texDir = join(targetDir, "textures");
  const previewDir = join(targetDir, "previews");

  mkdirSync(modelDir, { recursive: true });
  mkdirSync(texDir, { recursive: true });
  mkdirSync(previewDir, { recursive: true });

  // 1. Export crisp DataTexture PNGs
  const chestTex = createITSupportChestLogoTexture();
  writeFileSync(
    join(texDir, "chest-logo-it-support.png"),
    encodeRgbaToPng(chestTex.image.width, chestTex.image.height, chestTex.image.data as Uint8Array),
  );
  chestTex.dispose();

  const laptopTex = createLaptopScreenTexture();
  writeFileSync(
    join(texDir, "laptop-screen.png"),
    encodeRgbaToPng(laptopTex.image.width, laptopTex.image.height, laptopTex.image.data as Uint8Array),
  );
  laptopTex.dispose();

  // Palette reference swatch PNG (256x64): Navy, Black, Cyan Neon, Pure White
  const swatchW = 256;
  const swatchH = 64;
  const swatchRgba = new Uint8Array(swatchW * swatchH * 4);
  const swatchColors = [
    [22, 41, 84], // Navy Hoodie
    [17, 24, 39], // Black Cargo Pants
    [6, 182, 212], // Cyan Neon Accent
    [248, 250, 252], // Pure White Trim
  ];
  for (let y = 0; y < swatchH; y++) {
    for (let x = 0; x < swatchW; x++) {
      const band = Math.min(3, Math.floor((x / swatchW) * 4));
      const c = swatchColors[band];
      const idx = (y * swatchW + x) * 4;
      swatchRgba[idx] = c[0];
      swatchRgba[idx + 1] = c[1];
      swatchRgba[idx + 2] = c[2];
      swatchRgba[idx + 3] = 255;
    }
  }
  writeFileSync(join(texDir, "palette-swatch.png"), encodeRgbaToPng(swatchW, swatchH, swatchRgba));

  // 2. Build Rig + Detach DataTextures during headless Node GLB Export (GLTFExporter canvas bypass)
  const rig = buildITSupportRig();
  const savedChestMap = rig.materials.chestLogo.map;
  const savedChestEmissiveMap = rig.materials.chestLogo.emissiveMap;
  const savedScreenMap = rig.materials.laptopScreen.map;
  const savedScreenEmissiveMap = rig.materials.laptopScreen.emissiveMap;

  if (typeof document === "undefined") {
    rig.materials.chestLogo.map = null;
    rig.materials.chestLogo.emissiveMap = null;
    rig.materials.chestLogo.color.set("#1D63ED");
    rig.materials.chestLogo.needsUpdate = true;

    rig.materials.laptopScreen.map = null;
    rig.materials.laptopScreen.emissiveMap = null;
    rig.materials.laptopScreen.color.set("#0EA5E9");
    rig.materials.laptopScreen.needsUpdate = true;
  }

  const animations = buildAllStickmanAnimationClips(rig, 15, 2.0);
  const exporter = new GLTFExporter();

  const glbBuffer = await new Promise<ArrayBuffer>((resolve, reject) => {
    exporter.parse(
      rig.root,
      (result) => {
        if (result instanceof ArrayBuffer) {
          resolve(result);
        } else {
          reject(new Error("Expected ArrayBuffer from binary GLTFExporter"));
        }
      },
      (error) => reject(error),
      {
        binary: true,
        animations,
        onlyVisible: true,
      },
    );
  });

  savedChestMap?.dispose();
  if (savedChestEmissiveMap && savedChestEmissiveMap !== savedChestMap) {
    savedChestEmissiveMap.dispose();
  }
  savedScreenMap?.dispose();
  if (savedScreenEmissiveMap && savedScreenEmissiveMap !== savedScreenMap) {
    savedScreenEmissiveMap.dispose();
  }
  rig.dispose();

  const glbPath = join(modelDir, "character.glb");
  const nodeBuf = Buffer.from(glbBuffer);
  writeFileSync(glbPath, nodeBuf);

  // 3. Validate GLB round-trip
  const diskBuf = readFileSync(glbPath);
  const magic = diskBuf.toString("ascii", 0, 4);
  const version = diskBuf.readUInt32LE(4);
  const totalBytes = diskBuf.readUInt32LE(8);
  if (magic !== "glTF" || version !== 2 || totalBytes !== diskBuf.length) {
    throw new Error(`Invalid GLB header: magic=${magic}, version=${version}, totalBytes=${totalBytes}`);
  }

  const loader = new GLTFLoader();
  const parsedGltf = await loader.parseAsync(
    diskBuf.buffer.slice(diskBuf.byteOffset, diskBuf.byteOffset + diskBuf.byteLength),
    "",
  );

  let meshCount = 0;
  let vertexCount = 0;
  parsedGltf.scene.traverse((obj) => {
    if (obj instanceof THREE.Mesh) {
      meshCount++;
      const posAttr = obj.geometry.getAttribute("position");
      if (posAttr) vertexCount += posAttr.count;
    }
  });

  const metadata = {
    id: "it-support-specialist",
    name: "IT Support Specialist",
    series: "SATU HARI SATU FAKTA KERJA DI BAGIAN IT SUPPORT",
    version: "2.0.0",
    originality: "Procedural 3D stylized cartoon Three.js character built modularly from primitives",
    metrics: STICKMAN_METRICS,
    palette: CHARACTER_PALETTE,
    assets: {
      glb: "model/character.glb",
      glbBytes: diskBuf.length,
      meshCount,
      vertexCount,
      textures: [
        "textures/chest-logo-it-support.png",
        "textures/laptop-screen.png",
        "textures/palette-swatch.png",
      ],
      preview: "previews/character-preview.png",
    },
    joints: [
      "Hips",
      "Spine",
      "Chest",
      "Neck",
      "Head",
      "LeftShoulder",
      "LeftUpperArm",
      "LeftElbow",
      "LeftWrist",
      "RightShoulder",
      "RightUpperArm",
      "RightElbow",
      "RightWrist",
      "LeftHip",
      "LeftKnee",
      "LeftAnkle",
      "RightHip",
      "RightKnee",
      "RightAnkle",
    ],
    animations: [...STICKMAN_ANIMATIONS],
    embeddedAnimationClips: parsedGltf.animations.map((c) => ({
      name: c.name,
      durationSec: c.duration,
      tracks: c.tracks.length,
    })),
  };

  writeFileSync(join(targetDir, "metadata.json"), JSON.stringify(metadata, null, 2));

  console.log(
    `GLB Export & Verification PASSED!\n` +
      `- Path: ${glbPath}\n` +
      `- Size: ${diskBuf.length} bytes\n` +
      `- Meshes: ${meshCount}, Vertices: ${vertexCount}\n` +
      `- Embedded AnimationClips: ${parsedGltf.animations.length} (${parsedGltf.animations.map((a) => a.name).join(", ")})`,
  );
}

async function main() {
  ensureNodePolyfills();
  await exportCharacterBundle(join(process.cwd(), "public", "character", "it-support-specialist"));
  await exportCharacterBundle(join(process.cwd(), "public", "character", "it-support-stickman"));
}

main().catch((err) => {
  console.error("Failed to build character assets:", err);
  process.exit(1);
});
