import type {
  CharacterAnimationCue,
  CharacterRoleId,
  StickmanAnimationName,
} from "../../components/character";
import type { CameraKeyframe, MonitorScreenMode } from "../../components/environment";

export interface SubtitleWord {
  text: string;
  startMs: number;
  endMs: number;
  highlightColor?: string;
}

export interface SubtitleSegment {
  startMs: number;
  endMs: number;
  words: SubtitleWord[];
}

export interface FactCardRow {
  label: string;
  detail: string;
  color?: string;
}

export interface FactCardConfig {
  title: string;
  statusTag: string;
  statusColor?: string;
  rows: FactCardRow[];
}

export interface SceneSfxCue {
  file: string;
  fromSec: number;
  volume?: number;
  durationSec?: number;
}

export interface EpisodeSceneCastMember {
  id: string;
  role: CharacterRoleId;
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  animation: StickmanAnimationName;
  cues?: CharacterAnimationCue[];
  holdLaptop?: boolean;
  headYaw?: number;
  headPitch?: number;
}

export interface EpisodeSceneConfig {
  id: string;
  type: "hook" | "problem" | "fact" | "twist" | "closing";
  title: string;
  voiceoverFile: string;
  voiceoverVolume?: number;
  durationSec: number;
  headline: string;
  headlineHighlight?: string;
  subBadge?: string;
  accentColor?: string;
  screenMode: MonitorScreenMode;
  overheatFactor?: number;
  serverAlert?: boolean;
  looseLanCable?: boolean;
  characterRole?: CharacterRoleId;
  characterPosition?: [number, number, number];
  characterRotation?: [number, number, number];
  characterScale?: number;
  characterAnimation: StickmanAnimationName;
  characterCues?: CharacterAnimationCue[];
  cast?: EpisodeSceneCastMember[];
  cameraKeyframes: CameraKeyframe[];
  cameraShake?: {
    amplitude: number;
    startSec: number;
    durationSec: number;
  };
  showTaskManagerHud?: boolean;
  factCard?: FactCardConfig;
  twistCallouts?: {
    topLabel: string;
    bottomLabel: string;
  };
  subtitles: SubtitleSegment[];
  sfx: SceneSfxCue[];
}

export interface EpisodeSocialCaption {
  instagramReels: string;
  threads: string;
  tiktok?: string;
  youtubeShorts?: {
    title: string;
    description: string;
  };
  hashtags: string[];
  cta: string;
  firstComment?: string;
  videoFile: string;
  coverFrameSec?: number;
}

export interface EpisodeConfig {
  id: string;
  episodeNumber: string;
  title: string;
  topic: string;
  seriesName: string;
  bgmFile: string;
  bgmVolume: number;
  transitionFrames: number;
  scenes: EpisodeSceneConfig[];
  socialCaption?: EpisodeSocialCaption;
}

