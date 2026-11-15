import {
  calculateSeriesTotalFrames,
  secondsToFrames,
  type SceneTimingSpec,
} from "./timing";

export const BRAND_PROFILE = {
  accountName: "ERROR TERUS",
  handle: "@error_terusya",
  tagline: "SEPUTAR IT",
  seriesName: "SATU HARI SATU FAKTA KERJA DI BAGIAN IT SUPPORT",
  outroDurationSec: 4.2,
  minEpisodeDurationSec: 60,
  targetFps: 30,
  engagementActions: ["LIKE", "KOMEN", "SHARE", "FOLLOW"] as const,
  outroHeadline: "SUKA FAKTA KERJA IT?",
  outroCta: "FOLLOW AKUN ERROR TERUS",
} as const;

/**
 * Menghitung total frame episode termasuk sequence outro permanen ERROR TERUS.
 */
export function getEpisodeRenderTotalFrames(
  scenes: readonly SceneTimingSpec[],
  transitionFrames: number,
  fps: number = BRAND_PROFILE.targetFps,
): number {
  const sceneFrames = scenes.map((s) => secondsToFrames(s.durationSec, fps));
  const outroFrames = secondsToFrames(BRAND_PROFILE.outroDurationSec, fps);
  return calculateSeriesTotalFrames([...sceneFrames, outroFrames], transitionFrames);
}

