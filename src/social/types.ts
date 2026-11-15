import type { EpisodeSocialCaption } from "../data/episodes/types";

export type TebarPlatform =
  | "instagram"
  | "threads"
  | "tiktok"
  | "youtube"
  | "facebook"
  | "x"
  | "linkedin"
  | "telegram"
  | "discord"
  | "pinterest";

export interface TebarAccount {
  id: string;
  profile_id: string;
  platform: TebarPlatform;
  username: string | null;
  display_name: string | null;
  avatar_url: string | null;
  status: "active" | "expired" | "revoked";
  scopes: string[];
  token_expires_at: string | null;
  connected_at: string;
  plan_suspended: boolean;
  expired_at: string | null;
  expired_reason: string | null;
}

export interface TebarMedia {
  id: string;
  profile_id: string;
  type: "image" | "video";
  mime_type: string;
  size_bytes: number | null;
  width: number | null;
  height: number | null;
  duration_ms: number | null;
  frame_rate: number | null;
  status: "pending" | "ready" | "failed" | "expired";
  public_url: string | null;
  poster_url: string | null;
  alt_text: string | null;
  keep: boolean;
  original_name: string | null;
  created_at: string;
}

export interface TebarPostTargetResult {
  id: string;
  account_id: string;
  platform: TebarPlatform;
  username: string | null;
  display_name: string | null;
  status: "pending" | "publishing" | "published" | "failed" | "canceled";
  content: string | null;
  platform_post_id: string | null;
  permalink: string | null;
  error_code: string | null;
  error_message: string | null;
  retry_after: string | null;
}

export interface TebarPostMediaItem {
  id: string;
  type: "image" | "video";
  mime_type: string;
  public_url: string | null;
  poster_url: string | null;
  status: "pending" | "ready" | "failed" | "expired";
}

export interface TebarPostRecord {
  id: string;
  profile_id: string;
  content: string | null;
  type: "text" | "image" | "video" | "carousel";
  status:
    | "draft"
    | "scheduled"
    | "publishing"
    | "published"
    | "partial"
    | "failed"
    | "canceled";
  source: "dashboard" | "api" | "mcp";
  scheduled_at: string | null;
  created_at: string;
  media: TebarPostMediaItem[];
  targets: TebarPostTargetResult[];
}

export interface InstagramTargetOptions {
  format?: "feed" | "story";
  share_to_feed?: boolean;
  first_comment?: string;
}

export interface ThreadsTargetOptions {
  topic_tag?: string;
  reply_control?: "everyone" | "accounts_you_follow" | "mentioned_only";
}

export interface YouTubeTargetOptions {
  title: string;
  made_for_kids: boolean;
  privacy?: "public" | "unlisted" | "private";
  tags?: string[];
  category_id?: string;
  contains_synthetic_media?: boolean;
  notify_subscribers?: boolean;
  cover_media_id?: string;
}

export interface FacebookTargetOptions {
  video_as?: "reel" | "video";
  first_comment?: string;
  link?: string;
}

export type PlatformTargetOptions =
  | InstagramTargetOptions
  | ThreadsTargetOptions
  | YouTubeTargetOptions
  | FacebookTargetOptions
  | Record<string, never>;

export interface YouTubeUploadQuota {
  used?: number;
  limit?: number;
  remaining?: number;
  reset_at?: string;
}

export interface CreatePostTargetInput {
  account_id: string;
  content?: string;
  media_ids?: string[];
  options?: PlatformTargetOptions;
}

export interface CreatePostPayload {
  content: string;
  media_ids?: string[];
  scheduled_at?: string;
  targets: CreatePostTargetInput[];
}

export interface EpisodePublishItem {
  id: string;
  episodeNumber: string;
  title: string;
  topic: string;
  seriesName: string;
  durationSec: number;
  totalFrames: number;
  meetsMinDuration: boolean;
  minDurationTargetSec: number;
  videoFile: string;
  videoExists: boolean;
  videoSizeBytes: number;
  videoPreviewUrl: string | null;
  socialCaption: EpisodeSocialCaption;
}

export interface ServerHealthResponse {
  ok: boolean;
  apiKeyConfigured: boolean;
  apiKeyHint: string | null;
  apiBaseUrl: string;
  minDurationTargetSec: number;
}

export type AsyncState<T> =
  | { status: "loading" }
  | { status: "empty"; message: string; actionLabel?: string }
  | { status: "error"; message: string; code?: string }
  | { status: "success"; data: T };

export type ActivityLogLevel = "info" | "success" | "warn" | "error";

export type ActivityLogStage = "server" | "accounts" | "upload" | "publish" | "posts";

export interface ActivityLogEntry {
  id: string;
  ts: string;
  level: ActivityLogLevel;
  stage: ActivityLogStage;
  message: string;
  detail?: string;
  jobId?: string;
}

export type UploadPhase =
  | "client_transfer"
  | "reading"
  | "init"
  | "uploading_parts"
  | "uploading_single"
  | "completing"
  | "verifying"
  | "ready"
  | "error";

export interface UploadProgressSnapshot {
  jobId: string;
  fileName: string;
  totalBytes: number;
  uploadedBytes: number;
  percent: number;
  phase: UploadPhase;
  partCurrent?: number;
  partTotal?: number;
  speedBytesPerSec?: number;
  statusText: string;
  error?: string;
  updatedAt: string;
}

export const PLATFORM_LIMITS: Record<
  TebarPlatform,
  { label: string; maxChars: number; supportsVideo: boolean; supportsStory: boolean }
> = {
  instagram: { label: "Instagram", maxChars: 2200, supportsVideo: true, supportsStory: true },
  threads: { label: "Threads", maxChars: 500, supportsVideo: true, supportsStory: false },
  tiktok: { label: "TikTok", maxChars: 2200, supportsVideo: true, supportsStory: false },
  youtube: { label: "YouTube", maxChars: 5000, supportsVideo: true, supportsStory: false },
  facebook: { label: "Facebook", maxChars: 5000, supportsVideo: true, supportsStory: false },
  x: { label: "X", maxChars: 280, supportsVideo: true, supportsStory: false },
  linkedin: { label: "LinkedIn", maxChars: 3000, supportsVideo: true, supportsStory: false },
  telegram: { label: "Telegram", maxChars: 4096, supportsVideo: true, supportsStory: false },
  discord: { label: "Discord", maxChars: 2000, supportsVideo: true, supportsStory: false },
  pinterest: { label: "Pinterest", maxChars: 500, supportsVideo: true, supportsStory: false },
};

