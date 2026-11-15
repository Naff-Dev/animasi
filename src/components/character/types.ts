export const STICKMAN_ANIMATIONS = [
  "idle",
  "walking",
  "running",
  "sitting",
  "typing",
  "thinking",
  "pointing",
  "explaining",
  "surprised",
  "confused",
  "panicking",
  "troubleshooting",
  "celebrating",
  "facepalm",
  "looking_at_screen",
] as const;

export type StickmanAnimationName = (typeof STICKMAN_ANIMATIONS)[number];
export type ITSupportAnimationName = StickmanAnimationName;

export type EulerTuple = [number, number, number];
export type Vec3Tuple = [number, number, number];

export interface StickmanRigPose {
  /** Root hip offset relative to standing ground baseline */
  hipPosition: Vec3Tuple;
  /** Joint rotations in Euler XYZ radians */
  hips: EulerTuple;
  spine: EulerTuple;
  chest: EulerTuple;
  neck: EulerTuple;
  head: EulerTuple;
  leftShoulder: EulerTuple;
  leftUpperArm: EulerTuple;
  leftElbow: EulerTuple;
  leftWrist: EulerTuple;
  rightShoulder: EulerTuple;
  rightUpperArm: EulerTuple;
  rightElbow: EulerTuple;
  rightWrist: EulerTuple;
  leftHip: EulerTuple;
  leftKnee: EulerTuple;
  leftAnkle: EulerTuple;
  rightHip: EulerTuple;
  rightKnee: EulerTuple;
  rightAnkle: EulerTuple;
  /** Expressive cartoon face parameters (eyes, eyebrows, blink, smile) */
  leftEyeScale: Vec3Tuple;
  rightEyeScale: Vec3Tuple;
  leftBrowOffsetY: number;
  rightBrowOffsetY: number;
  leftBrowTilt: number;
  rightBrowTilt: number;
  pupilOffset: [number, number];
  /** 0 = eyes wide open, 1 = eyes smoothly closed (blink) */
  blinkAmount: number;
  /** Whether the character is holding the work laptop in the left hand */
  holdLaptop: boolean;
  /** Subtle expression stress factor (0 = calm/confident, 1 = shocked/alert) */
  alertFactor: number;
}

export const CHARACTER_ROLES = [
  "it_support",
  "office_worker",
  "manager",
  "finance_staff",
] as const;

export type CharacterRoleId = (typeof CHARACTER_ROLES)[number];

export type CharacterHairStyle =
  | "swept_tech"
  | "casual_crop"
  | "executive_part"
  | "sleek_bun";

export type CharacterOutfitStyle =
  | "tech_hoodie"
  | "polo_vest"
  | "executive_blazer"
  | "knit_sweater";

export type CharacterGlassesStyle =
  | "none"
  | "tech_rim"
  | "round_amber"
  | "half_rim";

export type HandheldPropKind = "laptop" | "tablet" | "coffee_mug" | "clipboard";

export interface CharacterPresetSpec {
  role: CharacterRoleId;
  displayName: string;
  badgeText: string;
  skin: string;
  hair: string;
  iris: string;
  topPrimary: string;
  topSecondary: string;
  pants: string;
  pantsTrim: string;
  accent: string;
  glow: string;
  glowIntensity: number;
  glassesFrame: string;
  shoeAccent: string;
  badgeBgRgb: [number, number, number];
  badgeAccentRgb: [number, number, number];
  hairStyle: CharacterHairStyle;
  outfitStyle: CharacterOutfitStyle;
  glassesStyle: CharacterGlassesStyle;
  hasHeadset: boolean;
  hasToolSatchel: boolean;
  hasCargoPockets: boolean;
  hasEarrings: boolean;
  dressLoafers: boolean;
  handheldProp: HandheldPropKind;
}

export const CHARACTER_PRESETS: Record<CharacterRoleId, CharacterPresetSpec> = {
  it_support: {
    role: "it_support",
    displayName: "IT Support Specialist",
    badgeText: "IT SUPPORT",
    skin: "#F3C6A5",
    hair: "#162038",
    iris: "#1D4ED8",
    topPrimary: "#162954",
    topSecondary: "#0F1D3D",
    pants: "#111827",
    pantsTrim: "#1B2436",
    accent: "#1D63ED",
    glow: "#22D3EE",
    glowIntensity: 0.95,
    glassesFrame: "#0F172A",
    shoeAccent: "#1D63ED",
    badgeBgRgb: [15, 29, 61],
    badgeAccentRgb: [34, 211, 238],
    hairStyle: "swept_tech",
    outfitStyle: "tech_hoodie",
    glassesStyle: "tech_rim",
    hasHeadset: true,
    hasToolSatchel: true,
    hasCargoPockets: true,
    hasEarrings: false,
    dressLoafers: false,
    handheldProp: "laptop",
  },
  office_worker: {
    role: "office_worker",
    displayName: "Raka (Karyawan Kantor)",
    badgeText: "STAFF",
    skin: "#EAC09A",
    hair: "#2E1F18",
    iris: "#4B3621",
    topPrimary: "#0F766E",
    topSecondary: "#115E59",
    pants: "#334155",
    pantsTrim: "#1E293B",
    accent: "#0284C7",
    glow: "#38BDF8",
    glowIntensity: 0.08,
    glassesFrame: "#78350F",
    shoeAccent: "#0284C7",
    badgeBgRgb: [15, 118, 110],
    badgeAccentRgb: [224, 242, 254],
    hairStyle: "casual_crop",
    outfitStyle: "polo_vest",
    glassesStyle: "round_amber",
    hasHeadset: false,
    hasToolSatchel: false,
    hasCargoPockets: false,
    hasEarrings: false,
    dressLoafers: false,
    handheldProp: "tablet",
  },
  manager: {
    role: "manager",
    displayName: "Pak Bos (Manajer Divisi)",
    badgeText: "MANAGER",
    skin: "#E6B898",
    hair: "#334155",
    iris: "#1E293B",
    topPrimary: "#1E293B",
    topSecondary: "#0F172A",
    pants: "#18181B",
    pantsTrim: "#27272A",
    accent: "#D97706",
    glow: "#F59E0B",
    glowIntensity: 0.06,
    glassesFrame: "#475569",
    shoeAccent: "#78350F",
    badgeBgRgb: [30, 41, 59],
    badgeAccentRgb: [245, 158, 11],
    hairStyle: "executive_part",
    outfitStyle: "executive_blazer",
    glassesStyle: "half_rim",
    hasHeadset: false,
    hasToolSatchel: false,
    hasCargoPockets: false,
    hasEarrings: false,
    dressLoafers: true,
    handheldProp: "coffee_mug",
  },
  finance_staff: {
    role: "finance_staff",
    displayName: "Sari (Staf Admin & Keuangan)",
    badgeText: "FINANCE",
    skin: "#F6CCB0",
    hair: "#291A16",
    iris: "#3B2F2F",
    topPrimary: "#BE123C",
    topSecondary: "#881337",
    pants: "#1E293B",
    pantsTrim: "#334155",
    accent: "#FB7185",
    glow: "#FDA4AF",
    glowIntensity: 0.06,
    glassesFrame: "#334155",
    shoeAccent: "#FB7185",
    badgeBgRgb: [136, 19, 55],
    badgeAccentRgb: [253, 164, 175],
    hairStyle: "sleek_bun",
    outfitStyle: "knit_sweater",
    glassesStyle: "none",
    hasHeadset: false,
    hasToolSatchel: false,
    hasCargoPockets: false,
    hasEarrings: true,
    dressLoafers: false,
    handheldProp: "clipboard",
  },
};

export interface CharacterAnimationCue {
  fromSec: number;
  animation: StickmanAnimationName;
  blendSec?: number;
}
