import { SERIES_COLORS } from "../../utils/theme";
import type { EpisodeConfig } from "./types";

const C_BLUE = SERIES_COLORS.cyanLight;
const C_YELLOW = SERIES_COLORS.yellow;
const C_ORANGE = "#FB923C";
const C_RED = "#F87171";
const C_GREEN = "#4ADE80";

/**
 * Episode 01 configuration for:
 * Series: SATU HARI SATU FAKTA KERJA DI BAGIAN IT SUPPORT
 * Topic: KENAPA KOMPUTER KANTOR SERING LEMOT?
 *
 * All subtitle timestamps strictly match `public/audio/ep01/scene1..5.wav`
 * shifted by +200ms scene voiceover lead-in.
 * Total frames @ 30 FPS with 12-frame transitions:
 * (255 + 198 + 267 + 279 + 252) - (4 * 12) = 1203 frames (40.10 seconds).
 */
export const episode01: EpisodeConfig = {
  id: "Episode01",
  episodeNumber: "01",
  title: "KENAPA KOMPUTER KANTOR SERING LEMOT?",
  topic: "Komputer Lemot",
  seriesName: "SATU HARI SATU FAKTA KERJA DI BAGIAN IT SUPPORT",
  bgmFile: "audio/bgm/tech-corporate-loop.wav",
  bgmVolume: 0.14,
  transitionFrames: 12,
  scenes: [
    {
      id: "scene-1-hook",
      type: "hook",
      title: "Hook Series & Fakta Cepat",
      voiceoverFile: "audio/ep01/scene1.wav",
      voiceoverVolume: 1.0,
      durationSec: 8.5,
      subBadge: "EPISODE 01 / FAKTA HARIAN",
      headline: "SATU HARI SATU FAKTA KERJA DI BAGIAN IT SUPPORT!",
      headlineHighlight: "IT SUPPORT!",
      accentColor: SERIES_COLORS.electricBlue,
      screenMode: "idle_desktop",
      overheatFactor: 0.1,
      serverAlert: false,
      characterPosition: [0.08, 0, 0.35],
      characterRotation: [0, 0.14, 0],
      characterScale: 1,
      characterAnimation: "explaining",
      characterCues: [
        { fromSec: 0, animation: "explaining" },
        { fromSec: 2.3, animation: "pointing", blendSec: 0.35 },
        { fromSec: 4.4, animation: "explaining", blendSec: 0.35 },
        { fromSec: 6.6, animation: "surprised", blendSec: 0.3 },
      ],
      cameraKeyframes: [
        {
          timeSec: 0,
          position: [0.22, 1.38, 4.15],
          lookAt: [0, 1.24, 0],
        },
        {
          timeSec: 4.2,
          position: [-0.28, 1.34, 3.85],
          lookAt: [0.02, 1.18, 0.1],
          ease: "power2.inOut",
        },
        {
          timeSec: 8.4,
          position: [0.18, 1.32, 3.72],
          lookAt: [0.06, 1.16, 0.15],
          ease: "power1.out",
        },
      ],
      subtitles: [
        {
          startMs: 200,
          endMs: 1670,
          words: [
            { text: "Satu", startMs: 200, endMs: 520 },
            { text: "hari,", startMs: 520, endMs: 900 },
            { text: "satu", startMs: 900, endMs: 1240 },
            { text: "fakta", startMs: 1240, endMs: 1670, highlightColor: C_BLUE },
          ],
        },
        {
          startMs: 1860,
          endMs: 3230,
          words: [
            { text: "kerja", startMs: 1860, endMs: 2150 },
            { text: "di", startMs: 2150, endMs: 2310 },
            { text: "bagian", startMs: 2310, endMs: 2630 },
            { text: "IT", startMs: 2630, endMs: 2910, highlightColor: C_YELLOW },
            { text: "Support!", startMs: 2910, endMs: 3230, highlightColor: C_YELLOW },
          ],
        },
        {
          startMs: 3770,
          endMs: 4290,
          words: [
            { text: "Tahu", startMs: 3770, endMs: 4030 },
            { text: "nggak,", startMs: 4030, endMs: 4290 },
          ],
        },
        {
          startMs: 4440,
          endMs: 5580,
          words: [
            { text: "komputer", startMs: 4440, endMs: 4820 },
            { text: "lemot", startMs: 4820, endMs: 5150, highlightColor: C_RED },
            { text: "itu", startMs: 5150, endMs: 5340 },
            { text: "sering", startMs: 5340, endMs: 5580 },
          ],
        },
        {
          startMs: 5580,
          endMs: 6820,
          words: [
            { text: "bukan", startMs: 5580, endMs: 5860 },
            { text: "karena", startMs: 5860, endMs: 6160 },
            { text: "speknya", startMs: 6160, endMs: 6490 },
            { text: "rendah,", startMs: 6490, endMs: 6820, highlightColor: C_ORANGE },
          ],
        },
        {
          startMs: 7080,
          endMs: 8260,
          words: [
            { text: "tapi", startMs: 7080, endMs: 7340 },
            { text: "proses", startMs: 7340, endMs: 7670, highlightColor: C_BLUE },
            { text: "di", startMs: 7670, endMs: 7840 },
            { text: "background!", startMs: 7840, endMs: 8260, highlightColor: C_YELLOW },
          ],
        },
      ],
      sfx: [
        { file: "audio/sfx/impact.wav", fromSec: 0.04, volume: 0.52 },
        { file: "audio/sfx/pop.wav", fromSec: 2.35, volume: 0.42 },
        { file: "audio/sfx/ding.wav", fromSec: 7.05, volume: 0.45 },
      ],
    },
    {
      id: "scene-2-problem",
      type: "problem",
      title: "Masalah Komputer Lemot",
      voiceoverFile: "audio/ep01/scene2.wav",
      voiceoverVolume: 1.0,
      durationSec: 6.6,
      subBadge: "KELUHAN USER HARIAN",
      headline: "KENAPA KOMPUTER KANTOR SERING LEMOT?",
      headlineHighlight: "SERING LEMOT?",
      accentColor: SERIES_COLORS.red,
      screenMode: "freezing",
      overheatFactor: 0.92,
      serverAlert: true,
      characterPosition: [-0.36, 0, 0.36],
      characterRotation: [0, 0.36, 0],
      characterScale: 0.96,
      characterAnimation: "looking_at_screen",
      characterCues: [
        { fromSec: 0, animation: "looking_at_screen" },
        { fromSec: 2.0, animation: "panicking", blendSec: 0.35 },
        { fromSec: 4.4, animation: "confused", blendSec: 0.35 },
      ],
      cameraKeyframes: [
        {
          timeSec: 0,
          position: [0.16, 1.4, 4.4],
          lookAt: [0.02, 1.24, 0],
        },
        {
          timeSec: 3.0,
          position: [-0.08, 1.36, 4.18],
          lookAt: [0.0, 1.22, 0.06],
          ease: "power2.out",
        },
        {
          timeSec: 6.5,
          position: [0.08, 1.34, 4.08],
          lookAt: [-0.02, 1.2, 0.08],
          ease: "power1.inOut",
        },
      ],
      subtitles: [
        {
          startMs: 200,
          endMs: 1160,
          words: [
            { text: "Sering", startMs: 200, endMs: 640 },
            { text: "kejadian,", startMs: 640, endMs: 1160 },
          ],
        },
        {
          startMs: 1450,
          endMs: 3070,
          words: [
            { text: "user", startMs: 1450, endMs: 1800 },
            { text: "ngeluh", startMs: 1800, endMs: 2150 },
            { text: "komputer", startMs: 2150, endMs: 2560 },
            { text: "nge-freeze,", startMs: 2560, endMs: 3070, highlightColor: C_RED },
          ],
        },
        {
          startMs: 3310,
          endMs: 4230,
          words: [
            { text: "kipas", startMs: 3310, endMs: 3740 },
            { text: "kenceng,", startMs: 3740, endMs: 4230, highlightColor: C_ORANGE },
          ],
        },
        {
          startMs: 4460,
          endMs: 6390,
          words: [
            { text: "klik", startMs: 4460, endMs: 4780 },
            { text: "mouse", startMs: 4780, endMs: 5120 },
            { text: "aja", startMs: 5120, endMs: 5380 },
            { text: "loading-nya", startMs: 5380, endMs: 5820, highlightColor: C_YELLOW },
            { text: "lama", startMs: 5820, endMs: 6100, highlightColor: C_RED },
            { text: "banget!", startMs: 6100, endMs: 6390, highlightColor: C_RED },
          ],
        },
      ],
      sfx: [
        { file: "audio/sfx/whoosh.wav", fromSec: 0.02, volume: 0.48 },
        { file: "audio/sfx/keyboard-typing.wav", fromSec: 0.35, volume: 0.42, durationSec: 1.5 },
        { file: "audio/sfx/loading-lag.wav", fromSec: 2.35, volume: 0.46, durationSec: 1.8 },
        { file: "audio/sfx/mouse-click.wav", fromSec: 4.45, volume: 0.58 },
        { file: "audio/sfx/windows-xp-error.wav", fromSec: 5.15, volume: 0.5 },
      ],
    },
    {
      id: "scene-3-fact",
      type: "fact",
      title: "Fakta Utama Task Manager",
      voiceoverFile: "audio/ep01/scene3.wav",
      voiceoverVolume: 1.0,
      durationSec: 8.9,
      subBadge: "DIAGNOSA IT SUPPORT",
      headline: "CEK TASK MANAGER DULU!",
      headlineHighlight: "TASK MANAGER",
      accentColor: SERIES_COLORS.electricBlue,
      screenMode: "task_manager",
      overheatFactor: 0.68,
      serverAlert: false,
      characterPosition: [0.33, 0, 0.36],
      characterRotation: [0, -0.28, 0],
      characterScale: 0.88,
      characterAnimation: "troubleshooting",
      characterCues: [
        { fromSec: 0, animation: "pointing" },
        { fromSec: 2.2, animation: "troubleshooting", blendSec: 0.35 },
        { fromSec: 5.5, animation: "explaining", blendSec: 0.35 },
      ],
      showTaskManagerHud: true,
      cameraKeyframes: [
        {
          timeSec: 0,
          position: [0.08, 1.54, 4.65],
          lookAt: [0.02, 1.62, 0],
        },
        {
          timeSec: 4.5,
          position: [0.32, 1.5, 4.48],
          lookAt: [0.06, 1.6, 0.06],
          ease: "power2.inOut",
        },
        {
          timeSec: 8.8,
          position: [0.16, 1.52, 4.55],
          lookAt: [0.04, 1.6, 0.06],
          ease: "power1.out",
        },
      ],
      subtitles: [
        {
          startMs: 200,
          endMs: 860,
          words: [{ text: "Faktanya,", startMs: 200, endMs: 860, highlightColor: C_BLUE }],
        },
        {
          startMs: 1110,
          endMs: 3290,
          words: [
            { text: "IT", startMs: 1110, endMs: 1360, highlightColor: C_YELLOW },
            { text: "Support", startMs: 1360, endMs: 1760, highlightColor: C_YELLOW },
            { text: "cek", startMs: 1760, endMs: 2020 },
            { text: "dulu", startMs: 2020, endMs: 2290 },
            { text: "lewat", startMs: 2290, endMs: 2560 },
            { text: "Task", startMs: 2560, endMs: 2900, highlightColor: C_BLUE },
            { text: "Manager!", startMs: 2900, endMs: 3290, highlightColor: C_BLUE },
          ],
        },
        {
          startMs: 3780,
          endMs: 5360,
          words: [
            { text: "Kelihatan", startMs: 3780, endMs: 4220 },
            { text: "jelas", startMs: 4220, endMs: 4580 },
            { text: "CPU,", startMs: 4580, endMs: 4980, highlightColor: C_RED },
            { text: "RAM,", startMs: 4980, endMs: 5360, highlightColor: C_ORANGE },
          ],
        },
        {
          startMs: 5550,
          endMs: 7000,
          words: [
            { text: "dan", startMs: 5550, endMs: 5790 },
            { text: "Disk", startMs: 5790, endMs: 6160, highlightColor: C_RED },
            { text: "mana", startMs: 6160, endMs: 6500 },
            { text: "yang", startMs: 6500, endMs: 6720 },
            { text: "nyedot", startMs: 6720, endMs: 7000 },
          ],
        },
        {
          startMs: 7000,
          endMs: 8620,
          words: [
            { text: "performa", startMs: 7000, endMs: 7520 },
            { text: "sampai", startMs: 7520, endMs: 7860 },
            { text: "seratus", startMs: 7860, endMs: 8240, highlightColor: C_RED },
            { text: "persen.", startMs: 8240, endMs: 8620, highlightColor: C_RED },
          ],
        },
      ],
      sfx: [
        { file: "audio/sfx/switch.wav", fromSec: 0.05, volume: 0.5 },
        { file: "audio/sfx/ding.wav", fromSec: 1.1, volume: 0.45 },
        { file: "audio/sfx/pop.wav", fromSec: 3.75, volume: 0.44 },
        { file: "audio/sfx/pop.wav", fromSec: 5.55, volume: 0.44 },
      ],
    },
    {
      id: "scene-4-twist",
      type: "twist",
      title: "Plot Twist Realita Lapangan",
      voiceoverFile: "audio/ep01/scene4.wav",
      voiceoverVolume: 1.0,
      durationSec: 9.3,
      subBadge: "REALITA LAPANGAN",
      headline: "TERNYATA PENYEBABNYA BIKIN TEPOK JIDAT!",
      headlineHighlight: "TEPOK JIDAT!",
      accentColor: SERIES_COLORS.orange,
      screenMode: "chrome_chaos",
      overheatFactor: 1.0,
      serverAlert: true,
      looseLanCable: true,
      characterPosition: [-0.1, 0, 0.38],
      characterRotation: [0, 0.16, 0],
      characterScale: 1,
      characterAnimation: "thinking",
      characterCues: [
        { fromSec: 0, animation: "thinking" },
        { fromSec: 2.8, animation: "surprised", blendSec: 0.3 },
        { fromSec: 5.6, animation: "facepalm", blendSec: 0.35 },
      ],
      twistCallouts: {
        topLabel: "47 TAB CHROME AKTIF!",
        bottomLabel: "3 MINGGU TANPA RESTART!",
      },
      cameraShake: {
        amplitude: 0.045,
        startSec: 3.15,
        durationSec: 0.48,
      },
      cameraKeyframes: [
        {
          timeSec: 0,
          position: [0.14, 1.48, 4.5],
          lookAt: [0.04, 1.48, 0],
        },
        {
          timeSec: 3.1,
          position: [0.02, 1.44, 4.22],
          lookAt: [0.04, 1.44, 0.1],
          ease: "power3.out",
        },
        {
          timeSec: 6.2,
          position: [-0.14, 1.44, 4.2],
          lookAt: [0.02, 1.44, 0.1],
          ease: "power2.inOut",
        },
      ],
      subtitles: [
        {
          startMs: 200,
          endMs: 2150,
          words: [
            { text: "Eh,", startMs: 200, endMs: 660 },
            { text: "pas", startMs: 860, endMs: 1200 },
            { text: "dicek", startMs: 1200, endMs: 1620 },
            { text: "serius...", startMs: 1620, endMs: 2150, highlightColor: C_YELLOW },
          ],
        },
        {
          startMs: 2510,
          endMs: 3470,
          words: [
            { text: "ternyata", startMs: 2510, endMs: 2990 },
            { text: "user-nya", startMs: 2990, endMs: 3470, highlightColor: C_ORANGE },
          ],
        },
        {
          startMs: 3730,
          endMs: 5050,
          words: [
            { text: "buka", startMs: 3730, endMs: 4030 },
            { text: "empat", startMs: 4030, endMs: 4380, highlightColor: C_RED },
            { text: "puluh", startMs: 4380, endMs: 4720, highlightColor: C_RED },
            { text: "tujuh", startMs: 4720, endMs: 5050, highlightColor: C_RED },
          ],
        },
        {
          startMs: 5050,
          endMs: 6480,
          words: [
            { text: "tab", startMs: 5050, endMs: 5650, highlightColor: C_YELLOW },
            { text: "browser,", startMs: 5650, endMs: 6480, highlightColor: C_YELLOW },
          ],
        },
        {
          startMs: 6830,
          endMs: 7750,
          words: [
            { text: "dan", startMs: 6830, endMs: 7080 },
            { text: "komputernya", startMs: 7080, endMs: 7450 },
            { text: "nggak", startMs: 7450, endMs: 7600 },
            { text: "pernah", startMs: 7600, endMs: 7750 },
          ],
        },
        {
          startMs: 7750,
          endMs: 8790,
          words: [
            { text: "di-restart", startMs: 7750, endMs: 8160, highlightColor: C_ORANGE },
            { text: "tiga", startMs: 8160, endMs: 8480, highlightColor: C_RED },
            { text: "minggu!", startMs: 8480, endMs: 8790, highlightColor: C_RED },
          ],
        },
      ],
      sfx: [
        { file: "audio/sfx/record-scratch.wav", fromSec: 2.95, volume: 0.56 },
        { file: "audio/sfx/vine-boom.wav", fromSec: 3.22, volume: 0.62 },
        { file: "audio/sfx/glitch.wav", fromSec: 6.0, volume: 0.45 },
        { file: "audio/sfx/pop.wav", fromSec: 6.15, volume: 0.5 },
      ],
    },
    {
      id: "scene-5-closing",
      type: "closing",
      title: "Solusi & CTA Series",
      voiceoverFile: "audio/ep01/scene5.wav",
      voiceoverVolume: 1.0,
      durationSec: 8.4,
      subBadge: "TIPS PRAKTIS",
      headline: "TUTUP TAB & RESTART BERKALA!",
      headlineHighlight: "RESTART BERKALA!",
      accentColor: SERIES_COLORS.green,
      screenMode: "healthy",
      overheatFactor: 0.05,
      serverAlert: false,
      characterPosition: [0, 0, 0.36],
      characterRotation: [0, 0.08, 0],
      characterScale: 1,
      characterAnimation: "explaining",
      characterCues: [
        { fromSec: 0, animation: "explaining" },
        { fromSec: 3.8, animation: "celebrating", blendSec: 0.35 },
      ],
      cameraKeyframes: [
        {
          timeSec: 0,
          position: [0.12, 1.48, 4.45],
          lookAt: [0, 1.5, 0],
        },
        {
          timeSec: 4.0,
          position: [0, 1.46, 4.28],
          lookAt: [0, 1.5, 0.1],
          ease: "power2.out",
        },
        {
          timeSec: 8.3,
          position: [0.06, 1.46, 4.24],
          lookAt: [0, 1.5, 0.1],
          ease: "power1.inOut",
        },
      ],
      subtitles: [
        {
          startMs: 200,
          endMs: 1100,
          words: [
            { text: "Makanya", startMs: 200, endMs: 560 },
            { text: "tutup", startMs: 560, endMs: 850, highlightColor: C_GREEN },
            { text: "tab", startMs: 850, endMs: 1100, highlightColor: C_GREEN },
          ],
        },
        {
          startMs: 1300,
          endMs: 3630,
          words: [
            { text: "nggak", startMs: 1300, endMs: 1680 },
            { text: "kepake", startMs: 1680, endMs: 2120 },
            { text: "dan", startMs: 2120, endMs: 2420 },
            { text: "restart", startMs: 2420, endMs: 2940, highlightColor: C_BLUE },
            { text: "berkala", startMs: 2940, endMs: 3340, highlightColor: C_BLUE },
            { text: "ya!", startMs: 3340, endMs: 3630 },
          ],
        },
        {
          startMs: 4080,
          endMs: 6260,
          words: [
            { text: "Itulah", startMs: 4080, endMs: 4400 },
            { text: "satu", startMs: 4400, endMs: 4680 },
            { text: "fakta", startMs: 4680, endMs: 5000, highlightColor: C_YELLOW },
            { text: "kerja", startMs: 5000, endMs: 5300 },
            { text: "di", startMs: 5300, endMs: 5460 },
            { text: "bagian", startMs: 5460, endMs: 5760 },
            { text: "IT", startMs: 5760, endMs: 5990, highlightColor: C_BLUE },
            { text: "Support.", startMs: 5990, endMs: 6260, highlightColor: C_BLUE },
          ],
        },
        {
          startMs: 6550,
          endMs: 7810,
          words: [
            { text: "Follow", startMs: 6550, endMs: 6900, highlightColor: C_GREEN },
            { text: "untuk", startMs: 6900, endMs: 7160 },
            { text: "fakta", startMs: 7160, endMs: 7440, highlightColor: C_YELLOW },
            { text: "berikutnya!", startMs: 7440, endMs: 7810, highlightColor: C_YELLOW },
          ],
        },
      ],
      sfx: [
        { file: "audio/sfx/whoosh.wav", fromSec: 0.02, volume: 0.44 },
        { file: "audio/sfx/ding.wav", fromSec: 0.45, volume: 0.48 },
        { file: "audio/sfx/yippee.wav", fromSec: 4.05, volume: 0.5 },
        { file: "audio/sfx/pop.wav", fromSec: 6.5, volume: 0.46 },
      ],
    },
  ],
  socialCaption: {
    instagramReels: [
      "Komputer kantor sering dibilang lemot padahal baru beli?",
      "",
      "Setiap hari tim IT Support paling sering dapat tiket 'PC lemot parah, tolong cek sekarang'. Pas dicek di Task Manager: CPU 96%, RAM 95%, Disk 100%.",
      "",
      "Tersangka utamanya? Bukan prosesor rusak, melainkan 47 tab browser kebuka barengan plus auto-update diam-diam di background.",
      "",
      "Tips cepat biar kerja tetap ngebut: tutup tab yang sudah tidak dipakai dan restart berkala minimal seminggu dua kali.",
      "",
      "Coba cek browser kamu sekarang, ada berapa tab kebuka? Tulis di komentar.",
      "",
      "#ITSupport #SatuHariSatuFakta #KomputerLemot #ErrorTerus #TipsKomputer #AnakIT #TechIndonesia #KerjaKantor",
    ].join("\n"),
    threads: [
      "Fakta kerja di bagian IT Support #01: komputer kantor lemot 90% bukan karena speknya kurang.",
      "",
      "Pas dibuka Task Manager isinya RAM 95% gara-gara 47 tab Chrome dibiarkan hidup berminggu-minggu + laptop nggak pernah di-restart.",
      "",
      "Rekor tab terbanyak di kantor kamu pernah nyentuh angka berapa?",
      "",
      "#ITSupport #ErrorTerus #KerjaKantor #TechIndonesia",
    ].join("\n"),
    tiktok: [
      "Tiket klasik anak IT Support: 'Mas, PC lemot banget nih!' Pas cek Task Manager isinya 47 tab Chrome aktif barengan.",
      "",
      "Solusi paling ampuh sebelum panggil IT: tutup tab nggak kepake dan restart berkala.",
      "",
      "#ITSupport #SatuHariSatuFakta #ErrorTerus #AnakIT #TipsPC",
    ].join("\n"),
    youtubeShorts: {
      title: "Kenapa Komputer Kantor Sering Lemot? (Fakta IT Support #01)",
      description:
        "Satu hari, satu fakta kerja di bagian IT Support!\nKomputer kantor lemot sering kali bukan karena spek rendah, melainkan puluhan tab browser dan proses background.\n\n#Shorts #ITSupport #ErrorTerus",
    },
    hashtags: [
      "#ITSupport",
      "#SatuHariSatuFakta",
      "#KomputerLemot",
      "#ErrorTerus",
      "#TipsKomputer",
      "#AnakIT",
      "#TechIndonesia",
      "#KerjaKantor",
    ],
    cta: "Tutup tab nggak kepake & follow @error_terusya untuk fakta kerja IT Support berikutnya.",
    firstComment: "Jujur sekarang lagi buka berapa tab di Chrome kamu?",
    videoFile: "out/SATU-HARI-SATU-FAKTA-IT-SUPPORT-EP01.mp4",
    coverFrameSec: 1.5,
  },
};

