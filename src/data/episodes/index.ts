import { episode01 } from "./episode01";
import { episode02 } from "./episode02";
import { episode03 } from "./episode03";
import { episode04 } from "./episode04";
import type { EpisodeConfig } from "./types";

export * from "./types";
export * from "./episode01";
export * from "./episode02";
export * from "./episode03";
export * from "./episode04";
export * from "./captionGenerator";

/**
 * Daftar semua episode terdaftar. Setiap episode baru yang ditambahkan di sini
 * otomatis muncul di Studio & Halaman Posting Sosmed lengkap dengan caption-nya.
 */
export const ALL_EPISODES: EpisodeConfig[] = [
  episode01,
  episode02,
  episode03,
  episode04,
];
