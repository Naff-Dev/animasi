export interface SceneTimingSpec {
  id: string;
  durationSec: number;
}

export function secondsToFrames(seconds: number, fps: number): number {
  return Math.round(seconds * fps);
}

export function calculateSeriesTotalFrames(
  sceneDurationsInFrames: readonly number[],
  transitionDurationFrames: number,
): number {
  const sum = sceneDurationsInFrames.reduce((acc, d) => acc + d, 0);
  const overlap = Math.max(0, sceneDurationsInFrames.length - 1) * transitionDurationFrames;
  return Math.max(1, sum - overlap);
}

