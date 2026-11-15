import type { EpisodeConfig, EpisodeSceneConfig, EpisodeSocialCaption } from "./types";

function extractSceneTranscript(scene: EpisodeSceneConfig | undefined): string {
  if (!scene || !scene.subtitles.length) {
    return "";
  }
  return scene.subtitles
    .map((segment) => segment.words.map((w) => w.text).join(" "))
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

function buildTopicHashtags(topic: string): string[] {
  const cleanTag = topic
    .replace(/[^a-zA-Z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join("");

  const base = [
    "#ITSupport",
    "#SatuHariSatuFakta",
    "#ErrorTerus",
    "#TipsKomputer",
    "#TechIndonesia",
    "#KerjaKantor",
  ];

  if (cleanTag && cleanTag.length >= 3 && cleanTag.length <= 28) {
    return [`#${cleanTag}`, ...base];
  }
  return base;
}

export function getDefaultEpisodeVideoFile(episode: EpisodeConfig): string {
  const num = episode.episodeNumber.padStart(2, "0");
  return `out/SATU-HARI-SATU-FAKTA-IT-SUPPORT-EP${num}.mp4`;
}

/**
 * Menghasilkan caption media sosial siap posting secara otomatis dari konfigurasi episode.
 * Jika `episode.socialCaption` sudah diisi manual, nilai tersebut dipakai langsung dengan fallback cerdas.
 */
export function buildEpisodeSocialCaption(episode: EpisodeConfig): EpisodeSocialCaption {
  if (episode.socialCaption) {
    return episode.socialCaption;
  }

  const hook = episode.scenes.find((s) => s.type === "hook");
  const fact = episode.scenes.find((s) => s.type === "fact");
  const twist = episode.scenes.find((s) => s.type === "twist");
  const closing = episode.scenes.find((s) => s.type === "closing");

  const hookText = extractSceneTranscript(hook) || episode.title;
  const factText = extractSceneTranscript(fact);
  const twistText = extractSceneTranscript(twist);
  const closingText = extractSceneTranscript(closing);
  const hashtags = buildTopicHashtags(episode.topic);
  const hashtagLine = hashtags.join(" ");

  const cta =
    "Simpan video ini biar tidak lupa saat darurat di kantor, dan follow @error_terusya untuk fakta kerja IT Support berikutnya.";

  const instagramReels = [
    `EPISODE ${episode.episodeNumber}: ${episode.title}`,
    "",
    hookText,
    factText ? `\nFaktanya: ${factText}` : "",
    twistText ? `\nRealita di lapangan: ${twistText}` : "",
    closingText ? `\nSolusi cepat: ${closingText}` : "",
    "",
    cta,
    "",
    hashtagLine,
  ]
    .filter((line, idx, arr) => !(line === "" && arr[idx - 1] === ""))
    .join("\n")
    .trim();

  const threadsSummary = [
    `[Fakta IT Support #${episode.episodeNumber}] ${episode.title}`,
    "",
    twistText || factText || hookText,
    "",
    "Tim kantor kamu sering kejadian seperti ini juga? Cerita di reply.",
    "",
    hashtags.slice(0, 4).join(" "),
  ]
    .join("\n")
    .trim();

  const tiktok = [
    `${episode.title} (Ep. ${episode.episodeNumber} - Satu Hari Satu Fakta Kerja IT Support)`,
    "",
    twistText || closingText || hookText,
    "",
    hashtags.slice(0, 5).join(" "),
  ]
    .join("\n")
    .trim();

  return {
    instagramReels,
    threads: threadsSummary.slice(0, 490),
    tiktok,
    youtubeShorts: {
      title: `${episode.title} | IT Support Eps ${episode.episodeNumber}`.slice(0, 98),
      description: `${instagramReels}\n\n#Shorts #ITSupport`,
    },
    hashtags,
    cta,
    firstComment: `Menurut kamu masalah "${episode.topic}" di kantor paling sering bikin panik siapa?`,
    videoFile: getDefaultEpisodeVideoFile(episode),
    coverFrameSec: 1.5,
  };
}

