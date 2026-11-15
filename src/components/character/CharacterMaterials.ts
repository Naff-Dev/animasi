import * as THREE from "three";
import { CHARACTER_PRESETS, type CharacterRoleId } from "./types";

export const CHARACTER_PALETTE = {
  skin: "#F3C6A5",
  hair: "#162038",
  hoodieNavy: "#162954",
  hoodieDeepNavy: "#0F1D3D",
  cargoBlack: "#111827",
  cargoPocket: "#1B2436",
  electricBlue: "#1D63ED",
  cyanNeon: "#06B6D4",
  cyanGlow: "#22D3EE",
  pureWhite: "#F8FAFC",
  offWhite: "#E2E8F0",
  headsetDark: "#0B1120",
  glassesFrame: "#0F172A",
  chromeSteel: "#CBD5E1",
  irisBlue: "#1D4ED8",
  pupilDark: "#090D16",
  lipWarm: "#D97B6C",
  laptopAluminum: "#1E293B",
} as const;

export interface ITSupportMaterialSet {
  skin: THREE.MeshPhysicalMaterial;
  hair: THREE.MeshStandardMaterial;
  hoodieNavy: THREE.MeshPhysicalMaterial;
  hoodieDeepNavy: THREE.MeshStandardMaterial;
  cargoBlack: THREE.MeshStandardMaterial;
  cargoPocket: THREE.MeshStandardMaterial;
  electricBlue: THREE.MeshStandardMaterial;
  cyanNeon: THREE.MeshStandardMaterial;
  pureWhite: THREE.MeshStandardMaterial;
  headsetDark: THREE.MeshStandardMaterial;
  glassesFrame: THREE.MeshStandardMaterial;
  glassesLens: THREE.MeshPhysicalMaterial;
  chromeSteel: THREE.MeshStandardMaterial;
  eyeWhite: THREE.MeshStandardMaterial;
  irisBlue: THREE.MeshStandardMaterial;
  pupil: THREE.MeshStandardMaterial;
  mouthSmile: THREE.MeshStandardMaterial;
  teethWhite: THREE.MeshStandardMaterial;
  chestLogo: THREE.MeshStandardMaterial;
  laptopChassis: THREE.MeshStandardMaterial;
  laptopScreen: THREE.MeshStandardMaterial;
  bagNylon: THREE.MeshStandardMaterial;
  /** Legacy compatibility alias for scripts */
  badge: THREE.MeshStandardMaterial;
}

export type StickmanMaterialSet = ITSupportMaterialSet;

// Minimal crisp 3x5 bitmap font glyphs (rows from top to bottom)
const BITMAP_FONT_3X5: Record<string, string[]> = {
  A: ["010", "101", "111", "101", "101"],
  C: ["111", "100", "100", "100", "111"],
  E: ["111", "100", "110", "100", "111"],
  F: ["111", "100", "110", "100", "100"],
  G: ["111", "100", "101", "101", "111"],
  I: ["111", "010", "010", "010", "111"],
  M: ["101", "111", "111", "101", "101"],
  N: ["101", "111", "111", "111", "101"],
  O: ["111", "101", "101", "101", "111"],
  P: ["111", "101", "111", "100", "100"],
  R: ["110", "101", "110", "101", "101"],
  S: ["111", "100", "111", "001", "111"],
  T: ["111", "010", "010", "010", "010"],
  U: ["101", "101", "101", "101", "111"],
  " ": ["000", "000", "000", "000", "000"],
};

function setRgbaPixel(
  data: Uint8Array,
  width: number,
  height: number,
  px: number,
  topDownY: number,
  r: number,
  g: number,
  b: number,
  a: number = 255,
) {
  if (px < 0 || px >= width || topDownY < 0 || topDownY >= height) return;
  const glY = height - 1 - topDownY;
  const idx = (glY * width + px) * 4;
  data[idx] = r;
  data[idx + 1] = g;
  data[idx + 2] = b;
  data[idx + 3] = a;
}

function fillRectTopDown(
  data: Uint8Array,
  width: number,
  height: number,
  x0: number,
  y0: number,
  w: number,
  h: number,
  r: number,
  g: number,
  b: number,
) {
  for (let dy = 0; dy < h; dy++) {
    for (let dx = 0; dx < w; dx++) {
      setRgbaPixel(data, width, height, x0 + dx, y0 + dy, r, g, b);
    }
  }
}

/**
 * Generates a crisp chest emblem / ID patch DataTexture for any character role.
 */
export function createChestBadgeTexture(
  labelText: string,
  bgRgb: [number, number, number] = [15, 29, 61],
  accentRgb: [number, number, number] = [34, 211, 238],
): THREE.DataTexture {
  if (labelText === "IT SUPPORT") {
    return createITSupportChestLogoTexture();
  }
  const width = 256;
  const height = 96;
  const data = new Uint8Array(width * height * 4);

  fillRectTopDown(data, width, height, 0, 0, width, height, 248, 250, 252);
  fillRectTopDown(data, width, height, 0, 0, width, 16, bgRgb[0], bgRgb[1], bgRgb[2]);
  fillRectTopDown(data, width, height, 0, height - 8, width, 8, accentRgb[0], accentRgb[1], accentRgb[2]);
  fillRectTopDown(data, width, height, 14, 28, 34, 48, bgRgb[0], bgRgb[1], bgRgb[2]);
  fillRectTopDown(data, width, height, 22, 36, 18, 16, accentRgb[0], accentRgb[1], accentRgb[2]);

  const clean = labelText.toUpperCase().slice(0, 8);
  const scale = 6;
  let curX = 62;
  for (const ch of clean) {
    const glyph = BITMAP_FONT_3X5[ch] ?? BITMAP_FONT_3X5[" "];
    for (let gy = 0; gy < 5; gy++) {
      for (let gx = 0; gx < 3; gx++) {
        if (glyph[gy][gx] === "1") {
          fillRectTopDown(
            data,
            width,
            height,
            curX + gx * scale,
            34 + gy * scale,
            scale,
            scale,
            15,
            23,
            42,
          );
        }
      }
    }
    curX += 4 * scale + 2;
  }

  const texture = new THREE.DataTexture(data, width, height, THREE.RGBAFormat);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.magFilter = THREE.NearestFilter;
  texture.needsUpdate = true;
  return texture;
}

/**
 * Generates the crisp "IT SUPPORT" woven chest emblem patch DataTexture.
 * Uses raw RGBA buffers so lettering stays razor sharp in both WebGL and Node GLB exports.
 */
export function createITSupportChestLogoTexture(): THREE.DataTexture {
  const width = 256;
  const height = 96;
  const data = new Uint8Array(width * height * 4);

  // Dark Navy woven patch background
  fillRectTopDown(data, width, height, 0, 0, width, height, 15, 29, 61);

  // Electric Cyan glowing border frame
  fillRectTopDown(data, width, height, 0, 0, width, 6, 34, 211, 238);
  fillRectTopDown(data, width, height, 0, height - 6, width, 6, 34, 211, 238);
  fillRectTopDown(data, width, height, 0, 0, 6, height, 34, 211, 238);
  fillRectTopDown(data, width, height, width - 6, 0, 6, height, 34, 211, 238);

  // Left micro tech badge square ("IT" emblem mark)
  fillRectTopDown(data, width, height, 14, 18, 34, 60, 29, 99, 237);
  fillRectTopDown(data, width, height, 20, 26, 22, 8, 248, 250, 252);
  fillRectTopDown(data, width, height, 20, 42, 22, 8, 34, 211, 238);
  fillRectTopDown(data, width, height, 20, 58, 14, 8, 248, 250, 252);

  // Render crisp uppercase "IT" + "SUPPORT" in two clean rows or compact banner
  const line1 = "IT";
  const line2 = "SUPPORT";

  // Row 1: bold "IT" in Cyan Glow at top right of badge
  let curX = 62;
  for (const ch of line1) {
    const glyph = BITMAP_FONT_3X5[ch] ?? BITMAP_FONT_3X5[" "];
    const scale = 5;
    for (let gy = 0; gy < 5; gy++) {
      for (let gx = 0; gx < 3; gx++) {
        if (glyph[gy][gx] === "1") {
          fillRectTopDown(
            data,
            width,
            height,
            curX + gx * scale,
            16 + gy * scale,
            scale,
            scale,
            34,
            211,
            238,
          );
        }
      }
    }
    curX += 4 * scale;
  }

  // Row 1 decorative progress accent bar beside "IT"
  fillRectTopDown(data, width, height, 110, 24, 126, 9, 29, 99, 237);
  fillRectTopDown(data, width, height, 110, 24, 82, 9, 34, 211, 238);

  // Row 2: crisp white "SUPPORT" lettering
  curX = 62;
  const scale2 = 5;
  for (const ch of line2) {
    const glyph = BITMAP_FONT_3X5[ch] ?? BITMAP_FONT_3X5[" "];
    for (let gy = 0; gy < 5; gy++) {
      for (let gx = 0; gx < 3; gx++) {
        if (glyph[gy][gx] === "1") {
          fillRectTopDown(
            data,
            width,
            height,
            curX + gx * scale2,
            52 + gy * scale2,
            scale2,
            scale2,
            248,
            250,
            252,
          );
        }
      }
    }
    curX += 4 * scale2 + 4;
  }

  const texture = new THREE.DataTexture(data, width, height, THREE.RGBAFormat);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.magFilter = THREE.NearestFilter;
  texture.needsUpdate = true;
  return texture;
}

/**
 * Generates an illuminated diagnostic display DataTexture for the Specialist's handheld laptop.
 */
export function createLaptopScreenTexture(): THREE.DataTexture {
  const width = 256;
  const height = 160;
  const data = new Uint8Array(width * height * 4);

  // Deep slate terminal background
  fillRectTopDown(data, width, height, 0, 0, width, height, 11, 18, 34);
  // Top window bar
  fillRectTopDown(data, width, height, 0, 0, width, 22, 22, 41, 84);
  fillRectTopDown(data, width, height, 12, 7, 46, 8, 34, 211, 238);
  fillRectTopDown(data, width, height, width - 28, 7, 16, 8, 29, 99, 237);

  // System metrics cards
  fillRectTopDown(data, width, height, 14, 34, 108, 44, 18, 30, 56);
  fillRectTopDown(data, width, height, 134, 34, 108, 44, 18, 30, 56);
  // Bars inside cards
  fillRectTopDown(data, width, height, 22, 44, 72, 8, 34, 211, 238);
  fillRectTopDown(data, width, height, 22, 60, 52, 8, 248, 250, 252);
  fillRectTopDown(data, width, height, 142, 44, 84, 8, 29, 99, 237);
  fillRectTopDown(data, width, height, 142, 60, 62, 8, 34, 211, 238);

  // Diagnostic wave / console rows at bottom half
  fillRectTopDown(data, width, height, 14, 90, 228, 56, 15, 23, 42);
  for (let i = 0; i < 6; i++) {
    const barH = 14 + ((i * 11) % 24);
    fillRectTopDown(
      data,
      width,
      height,
      26 + i * 22,
      138 - barH,
      14,
      barH,
      i % 2 === 0 ? 34 : 29,
      i % 2 === 0 ? 211 : 99,
      i % 2 === 0 ? 238 : 237,
    );
  }
  fillRectTopDown(data, width, height, 166, 104, 62, 6, 226, 232, 240);
  fillRectTopDown(data, width, height, 166, 118, 48, 6, 34, 211, 238);

  const texture = new THREE.DataTexture(data, width, height, THREE.RGBAFormat);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

/** Legacy export name alias so scripts importing `createBadgeDataTexture` continue working seamlessly. */
export const createBadgeDataTexture = createITSupportChestLogoTexture;

export function createCharacterMaterials(
  role: CharacterRoleId = "it_support",
): ITSupportMaterialSet {
  const preset = CHARACTER_PRESETS[role];
  const chestLogoTex = createChestBadgeTexture(
    preset.badgeText,
    preset.badgeBgRgb,
    preset.badgeAccentRgb,
  );
  const laptopScreenTex = createLaptopScreenTexture();

  const skin = new THREE.MeshPhysicalMaterial({
    name: `CharacterSkin_${role}`,
    color: new THREE.Color(preset.skin),
    roughness: 0.54,
    metalness: 0.0,
    sheen: 0.25,
    sheenRoughness: 0.65,
    sheenColor: new THREE.Color("#FFE4D6"),
  });

  const hair = new THREE.MeshStandardMaterial({
    name: `CharacterHair_${role}`,
    color: new THREE.Color(preset.hair),
    roughness: 0.48,
    metalness: 0.06,
  });

  const hoodieNavy = new THREE.MeshPhysicalMaterial({
    name: `CharacterTop_${role}`,
    color: new THREE.Color(preset.topPrimary),
    roughness: 0.78,
    metalness: 0.03,
    sheen: 0.34,
    sheenRoughness: 0.72,
    sheenColor: new THREE.Color(preset.glow),
  });

  const hoodieDeepNavy = new THREE.MeshStandardMaterial({
    name: `CharacterTopTrim_${role}`,
    color: new THREE.Color(preset.topSecondary),
    roughness: 0.72,
    metalness: 0.08,
  });

  const cargoBlack = new THREE.MeshStandardMaterial({
    name: `CharacterPants_${role}`,
    color: new THREE.Color(preset.pants),
    roughness: 0.84,
    metalness: 0.02,
  });

  const cargoPocket = new THREE.MeshStandardMaterial({
    name: `CharacterPantsTrim_${role}`,
    color: new THREE.Color(preset.pantsTrim),
    roughness: 0.76,
    metalness: 0.06,
  });

  const electricBlue = new THREE.MeshStandardMaterial({
    name: `CharacterAccent_${role}`,
    color: new THREE.Color(preset.accent),
    roughness: 0.34,
    metalness: 0.24,
  });

  const cyanNeon = new THREE.MeshStandardMaterial({
    name: `CharacterGlow_${role}`,
    color: new THREE.Color(preset.glow),
    emissive: new THREE.Color(preset.glow),
    emissiveIntensity: preset.glowIntensity,
    roughness: 0.24,
    metalness: 0.16,
  });

  const pureWhite = new THREE.MeshStandardMaterial({
    name: "PureWhiteTrim",
    color: new THREE.Color(CHARACTER_PALETTE.pureWhite),
    roughness: 0.38,
    metalness: 0.08,
  });

  const headsetDark = new THREE.MeshStandardMaterial({
    name: "HeadsetMatteBlack",
    color: new THREE.Color(CHARACTER_PALETTE.headsetDark),
    roughness: 0.35,
    metalness: 0.42,
  });

  const glassesFrame = new THREE.MeshStandardMaterial({
    name: `GlassesFrame_${role}`,
    color: new THREE.Color(preset.glassesFrame),
    roughness: 0.25,
    metalness: 0.65,
  });

  const glassesLens = new THREE.MeshPhysicalMaterial({
    name: "GlassesClearLens",
    color: new THREE.Color("#E0F2FE"),
    transparent: true,
    opacity: 0.2,
    roughness: 0.06,
    metalness: 0.05,
    clearcoat: 1.0,
    clearcoatRoughness: 0.05,
    ior: 1.45,
    depthWrite: false,
  });

  const chromeSteel = new THREE.MeshStandardMaterial({
    name: "ChromeSteel",
    color: new THREE.Color(CHARACTER_PALETTE.chromeSteel),
    roughness: 0.2,
    metalness: 0.88,
  });

  const eyeWhite = new THREE.MeshStandardMaterial({
    name: "EyeScleraWhite",
    color: new THREE.Color("#FFFFFF"),
    roughness: 0.24,
    metalness: 0.02,
  });

  const irisBlue = new THREE.MeshStandardMaterial({
    name: `EyeIris_${role}`,
    color: new THREE.Color(preset.iris),
    roughness: 0.22,
    metalness: 0.08,
  });

  const pupil = new THREE.MeshStandardMaterial({
    name: "EyePupil",
    color: new THREE.Color(CHARACTER_PALETTE.pupilDark),
    roughness: 0.15,
    metalness: 0.05,
  });

  const mouthSmile = new THREE.MeshStandardMaterial({
    name: "MouthSmile",
    color: new THREE.Color(CHARACTER_PALETTE.lipWarm),
    roughness: 0.5,
    metalness: 0.0,
  });

  const teethWhite = new THREE.MeshStandardMaterial({
    name: "TeethWhite",
    color: new THREE.Color("#FFFFFF"),
    roughness: 0.28,
    metalness: 0.0,
  });

  const chestLogo = new THREE.MeshStandardMaterial({
    name: `ChestBadge_${role}`,
    map: chestLogoTex,
    roughness: 0.45,
    metalness: 0.05,
    emissive: new THREE.Color(preset.glow),
    emissiveMap: chestLogoTex,
    emissiveIntensity: role === "it_support" ? 0.22 : 0.05,
  });

  const laptopChassis = new THREE.MeshStandardMaterial({
    name: "LaptopChassisDark",
    color: new THREE.Color(CHARACTER_PALETTE.laptopAluminum),
    roughness: 0.3,
    metalness: 0.72,
  });

  const laptopScreen = new THREE.MeshStandardMaterial({
    name: "LaptopDisplay",
    map: laptopScreenTex,
    emissiveMap: laptopScreenTex,
    emissive: new THREE.Color("#FFFFFF"),
    emissiveIntensity: 0.75,
    roughness: 0.2,
  });

  const bagNylon = new THREE.MeshStandardMaterial({
    name: "TechnicianBagNylon",
    color: new THREE.Color("#0D1526"),
    roughness: 0.72,
    metalness: 0.12,
  });

  return {
    skin,
    hair,
    hoodieNavy,
    hoodieDeepNavy,
    cargoBlack,
    cargoPocket,
    electricBlue,
    cyanNeon,
    pureWhite,
    headsetDark,
    glassesFrame,
    glassesLens,
    chromeSteel,
    eyeWhite,
    irisBlue,
    pupil,
    mouthSmile,
    teethWhite,
    chestLogo,
    laptopChassis,
    laptopScreen,
    bagNylon,
    badge: chestLogo,
  };
}

export const createITSupportMaterials = () => createCharacterMaterials("it_support");
export const createStickmanMaterials = createITSupportMaterials;
