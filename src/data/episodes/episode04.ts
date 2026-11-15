import { SERIES_COLORS } from "../../utils/theme";
import type { EpisodeConfig } from "./types";

const C_BLUE = SERIES_COLORS.electricBlue;
const C_YELLOW = SERIES_COLORS.yellow;
const C_ORANGE = SERIES_COLORS.orange;
const C_RED = SERIES_COLORS.red;
const C_GREEN = SERIES_COLORS.green;

export const episode04: EpisodeConfig = {
  id: "Episode04",
  episodeNumber: "04",
  title: "KATANYA UDAH DI-RESTART, KOK UPTIME 47 HARI?!",
  topic: "Mitos Sudah Di-Restart",
  seriesName: "SATU HARI SATU FAKTA KERJA DI BAGIAN IT SUPPORT",
  bgmFile: "audio/bgm/tech-corporate-loop.wav",
  bgmVolume: 0.14,
  transitionFrames: 12,
  scenes: [
    {
      id: "ep04-scene-1-hook",
      type: "hook",
      title: "Hook: Mitos Sudah Restart 3 Kali",
      voiceoverFile: "audio/ep04/scene1.wav",
      voiceoverVolume: 1,
      durationSec: 13.56,
      subBadge: "SATU HARI SATU FAKTA IT SUPPORT",
      headline: "UDAH DI-RESTART 3 KALI, KOK TETEP LEMOT?!",
      headlineHighlight: "UDAH DI-RESTART,",
      accentColor: C_BLUE,
      screenMode: "freezing",
      overheatFactor: 0.25,
      serverAlert: false,
      characterAnimation: "explaining",
      cast: [
        {
                "id": "user-hook-ep04",
                "role": "office_worker",
                "position": [
                        -0.46,
                        0,
                        0.08
                ],
                "rotation": [
                        0,
                        0.42,
                        0
                ],
                "animation": "panicking",
                "cues": [
                        {
                                "fromSec": 0,
                                "animation": "panicking"
                        },
                        {
                                "fromSec": 3.5,
                                "animation": "confused",
                                "blendSec": 0.35
                        },
                        {
                                "fromSec": 8.8,
                                "animation": "pointing",
                                "blendSec": 0.3
                        }
                ],
                "holdLaptop": true
        },
        {
                "id": "it-hook-ep04",
                "role": "it_support",
                "position": [
                        0.34,
                        0,
                        0.32
                ],
                "rotation": [
                        0,
                        -0.26,
                        0
                ],
                "animation": "explaining",
                "cues": [
                        {
                                "fromSec": 0,
                                "animation": "walking"
                        },
                        {
                                "fromSec": 1.8,
                                "animation": "explaining",
                                "blendSec": 0.35
                        },
                        {
                                "fromSec": 9.5,
                                "animation": "thinking",
                                "blendSec": 0.35
                        }
                ],
                "holdLaptop": true
        }
],
      cameraKeyframes: [
        {
                "timeSec": 0,
                "position": [
                        0.14,
                        1.54,
                        5.15
                ],
                "lookAt": [
                        0,
                        1.38,
                        0
                ]
        },
        {
                "timeSec": 5.5,
                "position": [
                        -0.08,
                        1.46,
                        4.78
                ],
                "lookAt": [
                        0,
                        1.42,
                        0.1
                ],
                "ease": "power2.inOut"
        },
        {
                "timeSec": 13.2,
                "position": [
                        0.1,
                        1.46,
                        4.72
                ],
                "lookAt": [
                        0.05,
                        1.42,
                        0.12
                ],
                "ease": "power1.out"
        }
],
      subtitles: [
        {
          startMs: 200,
          endMs: 2450,
          words: [
            { text: "Satu", startMs: 200, endMs: 650 },
            { text: "hari,", startMs: 650, endMs: 1200 },
            { text: "satu", startMs: 1200, endMs: 1650 },
            { text: "fakta", startMs: 1650, endMs: 2450, highlightColor: C_BLUE },
          ],
        },
        {
          startMs: 2550,
          endMs: 4400,
          words: [
            { text: "kerja", startMs: 2550, endMs: 2950 },
            { text: "di", startMs: 2950, endMs: 3250 },
            { text: "bagian", startMs: 3250, endMs: 3700 },
            { text: "IT", startMs: 3700, endMs: 4050, highlightColor: C_YELLOW },
            { text: "Support!", startMs: 4050, endMs: 4400, highlightColor: C_YELLOW },
          ],
        },
        {
          startMs: 4600,
          endMs: 6500,
          words: [
            { text: "Kalimat", startMs: 4600, endMs: 5050 },
            { text: "paling", startMs: 5050, endMs: 5450 },
            { text: "sering", startMs: 5450, endMs: 5850 },
            { text: "didengar", startMs: 5850, endMs: 6500, highlightColor: C_ORANGE },
          ],
        },
        {
          startMs: 6600,
          endMs: 9100,
          words: [
            { text: "teknisi:", startMs: 6600, endMs: 7150 },
            { text: "Mas,", startMs: 7150, endMs: 7550 },
            { text: "PC", startMs: 7550, endMs: 7900, highlightColor: C_BLUE },
            { text: "saya", startMs: 7900, endMs: 8200 },
            { text: "lemot", startMs: 8200, endMs: 8650, highlightColor: C_RED },
            { text: "banget,", startMs: 8650, endMs: 9100, highlightColor: C_RED },
          ],
        },
        {
          startMs: 9200,
          endMs: 11600,
          words: [
            { text: "padahal", startMs: 9200, endMs: 9600 },
            { text: "udah", startMs: 9600, endMs: 9950 },
            { text: "saya", startMs: 9950, endMs: 10250 },
            { text: "restart", startMs: 10250, endMs: 10700, highlightColor: C_YELLOW },
            { text: "tiga", startMs: 10700, endMs: 11100, highlightColor: C_YELLOW },
            { text: "kali!", startMs: 11100, endMs: 11600, highlightColor: C_YELLOW },
          ],
        },
        {
          startMs: 11750,
          endMs: 13350,
          words: [
            { text: "Tapi", startMs: 11750, endMs: 12050 },
            { text: "pas", startMs: 12050, endMs: 12300 },
            { text: "IT", startMs: 12300, endMs: 12600, highlightColor: C_BLUE },
            { text: "ngecek...", startMs: 12600, endMs: 13050 },
            { text: "jeng", startMs: 13050, endMs: 13200, highlightColor: C_RED },
            { text: "jeng!", startMs: 13200, endMs: 13350, highlightColor: C_RED },
          ],
        },
      ],
      sfx: [
        {
                "file": "audio/sfx/impact.wav",
                "fromSec": 0.15,
                "volume": 0.7
        },
        {
                "file": "audio/sfx/glitch.wav",
                "fromSec": 3.8,
                "volume": 0.55
        },
        {
                "file": "audio/sfx/record-scratch.wav",
                "fromSec": 9.2,
                "volume": 0.65
        },
        {
                "file": "audio/sfx/vine-boom.wav",
                "fromSec": 11.4,
                "volume": 0.75
        }
],
    },
    {
      id: "ep04-scene-2-uptime",
      type: "fact",
      title: "Fakta 1: Uptime Task Manager 47 Hari",
      voiceoverFile: "audio/ep04/scene2.wav",
      voiceoverVolume: 1,
      durationSec: 15.76,
      subBadge: "FAKTA 1: BUKTI LOG SISTEM",
      headline: "UPTIME CPU TERTERA 47 HARI 14 JAM!",
      headlineHighlight: "47 HARI 14 JAM!",
      accentColor: C_ORANGE,
      screenMode: "task_manager",
      overheatFactor: 0.45,
      serverAlert: false,
      characterAnimation: "pointing",
      factCard: {
        title: "TASK MANAGER: CPU UPTIME",
        statusTag: "TERCYDUK",
        statusColor: C_RED,
        rows: [
          { label: "Pengakuan User", detail: "Sudah restart 3 kali barusan", color: C_RED },
          { label: "Uptime Windows", detail: "47 Hari, 14 Jam, 23 Menit", color: C_ORANGE },
          { label: "Penyebab Riil", detail: "Cuma pencet tombol monitor!", color: C_GREEN },
        ],
      },
      cast: [
        {
                "id": "user-scene2-ep04",
                "role": "office_worker",
                "position": [
                        -0.42,
                        0,
                        0.12
                ],
                "rotation": [
                        0,
                        0.38,
                        0
                ],
                "animation": "surprised",
                "cues": [
                        {
                                "fromSec": 0,
                                "animation": "looking_at_screen"
                        },
                        {
                                "fromSec": 6.2,
                                "animation": "surprised",
                                "blendSec": 0.35
                        },
                        {
                                "fromSec": 11,
                                "animation": "facepalm",
                                "blendSec": 0.35
                        }
                ],
                "holdLaptop": true
        },
        {
                "id": "it-scene2-ep04",
                "role": "it_support",
                "position": [
                        0.36,
                        0,
                        0.28
                ],
                "rotation": [
                        0,
                        -0.28,
                        0
                ],
                "animation": "troubleshooting",
                "cues": [
                        {
                                "fromSec": 0,
                                "animation": "troubleshooting"
                        },
                        {
                                "fromSec": 4.5,
                                "animation": "pointing",
                                "blendSec": 0.35
                        },
                        {
                                "fromSec": 10.8,
                                "animation": "facepalm",
                                "blendSec": 0.35
                        }
                ],
                "holdLaptop": true
        }
],
      cameraKeyframes: [
        {
                "timeSec": 0,
                "position": [
                        0.04,
                        1.56,
                        5.36
                ],
                "lookAt": [
                        0,
                        1.38,
                        0.08
                ]
        },
        {
                "timeSec": 7,
                "position": [
                        0.12,
                        1.48,
                        5.05
                ],
                "lookAt": [
                        0.04,
                        1.42,
                        0.14
                ],
                "ease": "power2.inOut"
        },
        {
                "timeSec": 15.4,
                "position": [
                        -0.04,
                        1.48,
                        5.05
                ],
                "lookAt": [
                        0,
                        1.4,
                        0.1
                ],
                "ease": "power1.out"
        }
],
      subtitles: [
        {
          startMs: 250,
          endMs: 2300,
          words: [
            { text: "Fakta", startMs: 250, endMs: 700 },
            { text: "pertama:", startMs: 700, endMs: 1300, highlightColor: C_BLUE },
            { text: "IT", startMs: 1300, endMs: 1650, highlightColor: C_YELLOW },
            { text: "Support", startMs: 1650, endMs: 2300, highlightColor: C_YELLOW },
          ],
        },
        {
          startMs: 2400,
          endMs: 5100,
          words: [
            { text: "langsung", startMs: 2400, endMs: 2900 },
            { text: "buka", startMs: 2900, endMs: 3250 },
            { text: "Task", startMs: 3250, endMs: 3700, highlightColor: C_BLUE },
            { text: "Manager", startMs: 3700, endMs: 4250, highlightColor: C_BLUE },
            { text: "tab", startMs: 4250, endMs: 4600 },
            { text: "Performance.", startMs: 4600, endMs: 5100, highlightColor: C_YELLOW },
          ],
        },
        {
          startMs: 5200,
          endMs: 7800,
          words: [
            { text: "Dan", startMs: 5200, endMs: 5500 },
            { text: "taraa!", startMs: 5500, endMs: 6100, highlightColor: C_ORANGE },
            { text: "Uptime", startMs: 6100, endMs: 6600, highlightColor: C_RED },
            { text: "CPU", startMs: 6600, endMs: 7000, highlightColor: C_RED },
            { text: "tertulis", startMs: 7000, endMs: 7800 },
          ],
        },
        {
          startMs: 7900,
          endMs: 11200,
          words: [
            { text: "empat", startMs: 7900, endMs: 8350 },
            { text: "puluh", startMs: 8350, endMs: 8750 },
            { text: "tujuh", startMs: 8750, endMs: 9200, highlightColor: C_RED },
            { text: "hari,", startMs: 9200, endMs: 9800, highlightColor: C_RED },
            { text: "empat", startMs: 9800, endMs: 10250 },
            { text: "belas", startMs: 10250, endMs: 10700 },
            { text: "jam!", startMs: 10700, endMs: 11200, highlightColor: C_RED },
          ],
        },
        {
          startMs: 11300,
          endMs: 13300,
          words: [
            { text: "Loh,", startMs: 11300, endMs: 11700 },
            { text: "katanya", startMs: 11700, endMs: 12150 },
            { text: "barusan", startMs: 12150, endMs: 12600 },
            { text: "restart?", startMs: 12600, endMs: 13300, highlightColor: C_YELLOW },
          ],
        },
        {
          startMs: 13400,
          endMs: 15550,
          words: [
            { text: "Ternyata", startMs: 13400, endMs: 13752 },
            { text: "yang", startMs: 13752, endMs: 13947 },
            { text: "dimatiin", startMs: 13947, endMs: 14299 },
            { text: "cuma", startMs: 14299, endMs: 14534 },
            { text: "layar", startMs: 14534, endMs: 14808, highlightColor: C_RED },
            { text: "monitornya", startMs: 14808, endMs: 15160, highlightColor: C_RED },
            { text: "doang!", startMs: 15160, endMs: 15550, highlightColor: C_RED },
          ],
        },
      ],
      sfx: [
        {
                "file": "audio/sfx/pop.wav",
                "fromSec": 0.3,
                "volume": 0.6
        },
        {
                "file": "audio/sfx/keyboard-typing.wav",
                "fromSec": 1.2,
                "volume": 0.5
        },
        {
                "file": "audio/sfx/windows-xp-error.wav",
                "fromSec": 5.8,
                "volume": 0.75
        },
        {
                "file": "audio/sfx/vine-boom.wav",
                "fromSec": 9.8,
                "volume": 0.7
        },
        {
                "file": "audio/sfx/pop.wav",
                "fromSec": 13.5,
                "volume": 0.55
        }
],
    },
    {
      id: "ep04-scene-3-fast-startup",
      type: "fact",
      title: "Fakta 2: Jebakan Windows Fast Startup",
      voiceoverFile: "audio/ep04/scene3.wav",
      voiceoverVolume: 1,
      durationSec: 15.24,
      subBadge: "FAKTA 2: FITUR FAST STARTUP",
      headline: "SHUTDOWN BUKAN RESTART KARENA FAST STARTUP!",
      headlineHighlight: "BUKAN RESTART",
      accentColor: C_BLUE,
      screenMode: "idle_desktop",
      overheatFactor: 0.15,
      serverAlert: false,
      characterAnimation: "explaining",
      factCard: {
        title: "SHUTDOWN VS RESTART WINDOWS",
        statusTag: "BEDANYA JAUH",
        statusColor: C_BLUE,
        rows: [
          { label: "Opsi Shutdown", detail: "Hybrid Sleep: Kernel & bug tetap disimpan", color: C_RED },
          { label: "Fitur Aktif", detail: "Fast Startup (default Windows 10/11)", color: C_ORANGE },
          { label: "Opsi Restart", detail: "Kernel di-reset total + RAM kosong 100%", color: C_GREEN },
        ],
      },
      cast: [
        {
                "id": "manager-scene3-ep04",
                "role": "manager",
                "position": [
                        -0.48,
                        0,
                        0.05
                ],
                "rotation": [
                        0,
                        0.35,
                        0
                ],
                "animation": "confused",
                "cues": [
                        {
                                "fromSec": 0,
                                "animation": "confused"
                        },
                        {
                                "fromSec": 5.5,
                                "animation": "thinking",
                                "blendSec": 0.35
                        },
                        {
                                "fromSec": 11.2,
                                "animation": "pointing",
                                "blendSec": 0.3
                        }
                ],
                "holdLaptop": true
        },
        {
                "id": "it-scene3-ep04",
                "role": "it_support",
                "position": [
                        0.38,
                        0,
                        0.3
                ],
                "rotation": [
                        0,
                        -0.28,
                        0
                ],
                "animation": "explaining",
                "cues": [
                        {
                                "fromSec": 0,
                                "animation": "explaining"
                        },
                        {
                                "fromSec": 6,
                                "animation": "pointing",
                                "blendSec": 0.35
                        },
                        {
                                "fromSec": 11.8,
                                "animation": "celebrating",
                                "blendSec": 0.35
                        }
                ],
                "holdLaptop": true
        }
],
      cameraKeyframes: [
        {
                "timeSec": 0,
                "position": [
                        -0.05,
                        1.56,
                        5.2
                ],
                "lookAt": [
                        0,
                        1.38,
                        0.08
                ]
        },
        {
                "timeSec": 6.8,
                "position": [
                        0.16,
                        1.46,
                        4.82
                ],
                "lookAt": [
                        0.06,
                        1.42,
                        0.14
                ],
                "ease": "power2.inOut"
        },
        {
                "timeSec": 14.8,
                "position": [
                        0.04,
                        1.48,
                        4.92
                ],
                "lookAt": [
                        0,
                        1.4,
                        0.1
                ],
                "ease": "power1.out"
        }
],
      subtitles: [
        {
          startMs: 250,
          endMs: 2300,
          words: [
            { text: "Fakta", startMs: 250, endMs: 700 },
            { text: "kedua:", startMs: 700, endMs: 1300, highlightColor: C_BLUE },
            { text: "Bahkan", startMs: 1300, endMs: 1750 },
            { text: "kalau", startMs: 1750, endMs: 2300 },
          ],
        },
        {
          startMs: 2400,
          endMs: 5300,
          words: [
            { text: "user", startMs: 2400, endMs: 2757 },
            { text: "klik", startMs: 2757, endMs: 3069 },
            { text: "Shutdown,", startMs: 3069, endMs: 3694, highlightColor: C_RED },
            { text: "di", startMs: 3694, endMs: 3917 },
            { text: "Windows", startMs: 3917, endMs: 4319, highlightColor: C_BLUE },
            { text: "sepuluh", startMs: 4319, endMs: 4676 },
            { text: "dan", startMs: 4676, endMs: 4899 },
            { text: "sebelas", startMs: 4899, endMs: 5300 },
          ],
        },
        {
          startMs: 5400,
          endMs: 7800,
          words: [
            { text: "ada", startMs: 5400, endMs: 5750 },
            { text: "fitur", startMs: 5750, endMs: 6150 },
            { text: "Fast", startMs: 6150, endMs: 6600, highlightColor: C_YELLOW },
            { text: "Startup!", startMs: 6600, endMs: 7300, highlightColor: C_YELLOW },
            { text: "Shutdown", startMs: 7300, endMs: 7800, highlightColor: C_RED },
          ],
        },
        {
          startMs: 7900,
          endMs: 10600,
          words: [
            { text: "cuma", startMs: 7900, endMs: 8205 },
            { text: "nyimpen", startMs: 8205, endMs: 8597 },
            { text: "status", startMs: 8597, endMs: 8902 },
            { text: "kernel", startMs: 8902, endMs: 9294, highlightColor: C_BLUE },
            { text: "ke", startMs: 9294, endMs: 9512 },
            { text: "disk", startMs: 9512, endMs: 9817 },
            { text: "kayak", startMs: 9817, endMs: 10078 },
            { text: "hibernasi.", startMs: 10078, endMs: 10600, highlightColor: C_ORANGE },
          ],
        },
        {
          startMs: 10700,
          endMs: 13000,
          words: [
            { text: "Driver", startMs: 10700, endMs: 11100, highlightColor: C_RED },
            { text: "rusak", startMs: 11100, endMs: 11550, highlightColor: C_RED },
            { text: "dan", startMs: 11550, endMs: 11800 },
            { text: "cache", startMs: 11800, endMs: 12150 },
            { text: "error", startMs: 12150, endMs: 12600, highlightColor: C_RED },
            { text: "tetap", startMs: 12600, endMs: 13000 },
          ],
        },
        {
          startMs: 13100,
          endMs: 15000,
          words: [
            { text: "nyangkut!", startMs: 13100, endMs: 13522, highlightColor: C_RED },
            { text: "Yang", startMs: 13522, endMs: 13698 },
            { text: "beneran", startMs: 13698, endMs: 13944 },
            { text: "bersih", startMs: 13944, endMs: 14225, highlightColor: C_GREEN },
            { text: "cuma", startMs: 14225, endMs: 14436 },
            { text: "RESTART!", startMs: 14436, endMs: 14999, highlightColor: C_GREEN },
          ],
        },
      ],
      sfx: [
        {
                "file": "audio/sfx/ding.wav",
                "fromSec": 0.4,
                "volume": 0.6
        },
        {
                "file": "audio/sfx/glitch.wav",
                "fromSec": 4.8,
                "volume": 0.5
        },
        {
                "file": "audio/sfx/pop.wav",
                "fromSec": 8.5,
                "volume": 0.55
        },
        {
                "file": "audio/sfx/switch.wav",
                "fromSec": 12.2,
                "volume": 0.65
        }
],
    },
    {
      id: "ep04-scene-4-solusi-restart",
      type: "fact",
      title: "Fakta 3: Kenapa Restart Itu Obat Ajaib",
      voiceoverFile: "audio/ep04/scene4.wav",
      voiceoverVolume: 1,
      durationSec: 13.28,
      subBadge: "FAKTA 3: KEKUATAN RESTART",
      headline: "RESTART MEMBERSIHKAN RAM & PROSES ZOMBIE!",
      headlineHighlight: "PROSES ZOMBIE!",
      accentColor: C_GREEN,
      screenMode: "healthy",
      overheatFactor: 0.05,
      serverAlert: false,
      characterAnimation: "explaining",
      factCard: {
        title: "MANFAAT NYATA TOMBOL RESTART",
        statusTag: "SOLUSI 90%",
        statusColor: C_GREEN,
        rows: [
          { label: "RAM & Memory Leak", detail: "Dikosongkan tuntas dan fresh", color: C_GREEN },
          { label: "Proses Zombie", detail: "Background macet langsung di-kill", color: C_GREEN },
          { label: "Socket & Driver", detail: "Koneksi jaringan di-reset dari nol", color: C_BLUE },
        ],
      },
      cast: [
        {
                "id": "finance-scene4-ep04",
                "role": "finance_staff",
                "position": [
                        -0.44,
                        0,
                        0.1
                ],
                "rotation": [
                        0,
                        0.36,
                        0
                ],
                "animation": "looking_at_screen",
                "cues": [
                        {
                                "fromSec": 0,
                                "animation": "looking_at_screen"
                        },
                        {
                                "fromSec": 4.2,
                                "animation": "surprised",
                                "blendSec": 0.35
                        },
                        {
                                "fromSec": 9.5,
                                "animation": "celebrating",
                                "blendSec": 0.35
                        }
                ],
                "holdLaptop": true
        },
        {
                "id": "it-scene4-ep04",
                "role": "it_support",
                "position": [
                        0.35,
                        0,
                        0.3
                ],
                "rotation": [
                        0,
                        -0.25,
                        0
                ],
                "animation": "explaining",
                "cues": [
                        {
                                "fromSec": 0,
                                "animation": "explaining"
                        },
                        {
                                "fromSec": 5.2,
                                "animation": "troubleshooting",
                                "blendSec": 0.35
                        },
                        {
                                "fromSec": 9.8,
                                "animation": "celebrating",
                                "blendSec": 0.35
                        }
                ],
                "holdLaptop": true
        }
],
      cameraKeyframes: [
        {
                "timeSec": 0,
                "position": [
                        0.04,
                        1.56,
                        5.4
                ],
                "lookAt": [
                        -0.02,
                        1.38,
                        0.04
                ]
        },
        {
                "timeSec": 6,
                "position": [
                        -0.04,
                        1.48,
                        5.1
                ],
                "lookAt": [
                        0,
                        1.4,
                        0.06
                ],
                "ease": "power2.inOut"
        },
        {
                "timeSec": 12.8,
                "position": [
                        0.06,
                        1.48,
                        5
                ],
                "lookAt": [
                        0.04,
                        1.4,
                        0.08
                ],
                "ease": "power1.out"
        }
],
      subtitles: [
        {
          startMs: 200,
          endMs: 2350,
          words: [
            { text: "Fakta", startMs: 200, endMs: 650 },
            { text: "ketiga:", startMs: 650, endMs: 1250, highlightColor: C_GREEN },
            { text: "Kenapa", startMs: 1250, endMs: 1700 },
            { text: "restart", startMs: 1700, endMs: 2350, highlightColor: C_YELLOW },
          ],
        },
        {
          startMs: 2450,
          endMs: 4600,
          words: [
            { text: "selalu", startMs: 2450, endMs: 2915 },
            { text: "jadi", startMs: 2915, endMs: 3322 },
            { text: "solusi", startMs: 3322, endMs: 3845, highlightColor: C_GREEN },
            { text: "pertama?", startMs: 3845, endMs: 4600, highlightColor: C_GREEN },
          ],
        },
        {
          startMs: 4700,
          endMs: 7600,
          words: [
            { text: "Karena", startMs: 4700, endMs: 5130 },
            { text: "restart", startMs: 5130, endMs: 5667, highlightColor: C_YELLOW },
            { text: "mengosongkan", startMs: 5667, endMs: 6419 },
            { text: "seluruh", startMs: 6419, endMs: 6902 },
            { text: "RAM,", startMs: 6902, endMs: 7600, highlightColor: C_GREEN },
          ],
        },
        {
          startMs: 7700,
          endMs: 10400,
          words: [
            { text: "mematikan", startMs: 7700, endMs: 8143 },
            { text: "proses", startMs: 8143, endMs: 8465 },
            { text: "zombie", startMs: 8465, endMs: 8908, highlightColor: C_RED },
            { text: "yang", startMs: 8908, endMs: 9150 },
            { text: "nyangkut", startMs: 9150, endMs: 9553, highlightColor: C_RED },
            { text: "di", startMs: 9553, endMs: 9714 },
            { text: "latar", startMs: 9714, endMs: 9956 },
            { text: "belakang,", startMs: 9956, endMs: 10399 },
          ],
        },
        {
          startMs: 10500,
          endMs: 13000,
          words: [
            { text: "dan", startMs: 10500, endMs: 10723 },
            { text: "me-reset", startMs: 10723, endMs: 11125, highlightColor: C_BLUE },
            { text: "koneksi", startMs: 11125, endMs: 11482 },
            { text: "socket", startMs: 11482, endMs: 11839, highlightColor: C_YELLOW },
            { text: "jaringan", startMs: 11839, endMs: 12241 },
            { text: "dari", startMs: 12241, endMs: 12509 },
            { text: "nol!", startMs: 12509, endMs: 13000, highlightColor: C_GREEN },
          ],
        },
      ],
      sfx: [
        {
                "file": "audio/sfx/pop.wav",
                "fromSec": 0.3,
                "volume": 0.6
        },
        {
                "file": "audio/sfx/ding.wav",
                "fromSec": 4.5,
                "volume": 0.65
        },
        {
                "file": "audio/sfx/keyboard-typing.wav",
                "fromSec": 6.8,
                "volume": 0.5
        },
        {
                "file": "audio/sfx/yippee.wav",
                "fromSec": 11.2,
                "volume": 0.6
        }
],
    },
    {
      id: "ep04-scene-5-twist",
      type: "twist",
      title: "Plot Twist: Tombol Monitor Disangka Restart",
      voiceoverFile: "audio/ep04/scene5.wav",
      voiceoverVolume: 1,
      durationSec: 14.8,
      subBadge: "PLOT TWIST REALITA KANTOR",
      headline: "MATIIN MONITOR DIKIRA SUDAH RESTART PC!",
      headlineHighlight: "MATIIN MONITOR",
      accentColor: C_RED,
      screenMode: "freezing",
      overheatFactor: 0.35,
      serverAlert: false,
      characterAnimation: "facepalm",
      twistCallouts: {
        "topLabel": "PENCET TOMBOL POWER MONITOR",
        "bottomLabel": "DIKIRA UDAH RESTART SATU KOMPUTER!"
},
      cast: [
        {
                "id": "user-scene5-ep04",
                "role": "office_worker",
                "position": [
                        -0.45,
                        0,
                        0.1
                ],
                "rotation": [
                        0,
                        0.38,
                        0
                ],
                "animation": "pointing",
                "cues": [
                        {
                                "fromSec": 0,
                                "animation": "pointing"
                        },
                        {
                                "fromSec": 5.5,
                                "animation": "panicking",
                                "blendSec": 0.35
                        },
                        {
                                "fromSec": 10.5,
                                "animation": "facepalm",
                                "blendSec": 0.35
                        }
                ],
                "holdLaptop": true
        },
        {
                "id": "it-scene5-ep04",
                "role": "it_support",
                "position": [
                        0.35,
                        0,
                        0.3
                ],
                "rotation": [
                        0,
                        -0.26,
                        0
                ],
                "animation": "facepalm",
                "cues": [
                        {
                                "fromSec": 0,
                                "animation": "surprised"
                        },
                        {
                                "fromSec": 4.8,
                                "animation": "facepalm",
                                "blendSec": 0.35
                        },
                        {
                                "fromSec": 10.2,
                                "animation": "confused",
                                "blendSec": 0.35
                        }
                ],
                "holdLaptop": true
        },
        {
                "id": "manager-scene5-ep04",
                "role": "manager",
                "position": [
                        0.92,
                        0,
                        -0.15
                ],
                "rotation": [
                        0,
                        -0.45,
                        0
                ],
                "animation": "confused",
                "cues": [
                        {
                                "fromSec": 0,
                                "animation": "idle"
                        },
                        {
                                "fromSec": 6,
                                "animation": "facepalm",
                                "blendSec": 0.35
                        }
                ],
                "holdLaptop": false
        }
],
      cameraKeyframes: [
        {
                "timeSec": 0,
                "position": [
                        0,
                        1.54,
                        5.8
                ],
                "lookAt": [
                        0,
                        1.38,
                        0.05
                ]
        },
        {
                "timeSec": 6.5,
                "position": [
                        0.04,
                        1.5,
                        5.4
                ],
                "lookAt": [
                        0,
                        1.4,
                        0.08
                ],
                "ease": "power2.inOut"
        },
        {
                "timeSec": 14.2,
                "position": [
                        -0.04,
                        1.48,
                        5.3
                ],
                "lookAt": [
                        0,
                        1.4,
                        0.08
                ],
                "ease": "power1.out"
        }
],
      subtitles: [
        {
          startMs: 200,
          endMs: 2500,
          words: [
            { text: "Plot", startMs: 200, endMs: 568 },
            { text: "twist-nya:", startMs: 568, endMs: 1212, highlightColor: C_RED },
            { text: "Sembilan", startMs: 1212, endMs: 1718 },
            { text: "dari", startMs: 1718, endMs: 2040 },
            { text: "sepuluh", startMs: 2040, endMs: 2500 },
          ],
        },
        {
          startMs: 2600,
          endMs: 5100,
          words: [
            { text: "user", startMs: 2600, endMs: 2928 },
            { text: "yang", startMs: 2928, endMs: 3174 },
            { text: "ngotot", startMs: 3174, endMs: 3543, highlightColor: C_ORANGE },
            { text: "udah", startMs: 3543, endMs: 3830 },
            { text: "restart,", startMs: 3830, endMs: 4322, highlightColor: C_YELLOW },
            { text: "pas", startMs: 4322, endMs: 4568 },
            { text: "dipraktekkan", startMs: 4568, endMs: 5100 },
          ],
        },
        {
          startMs: 5200,
          endMs: 8200,
          words: [
            { text: "di", startMs: 5200, endMs: 5442 },
            { text: "depan", startMs: 5442, endMs: 5781 },
            { text: "IT,", startMs: 5781, endMs: 6168, highlightColor: C_BLUE },
            { text: "jarinya", startMs: 6168, endMs: 6603 },
            { text: "dengan", startMs: 6603, endMs: 6942 },
            { text: "santai", startMs: 6942, endMs: 7377 },
            { text: "mencet", startMs: 7377, endMs: 7812, highlightColor: C_RED },
            { text: "tombol", startMs: 7812, endMs: 8199, highlightColor: C_RED },
          ],
        },
        {
          startMs: 8300,
          endMs: 11000,
          words: [
            { text: "power", startMs: 8300, endMs: 8680, highlightColor: C_RED },
            { text: "di", startMs: 8680, endMs: 8891 },
            { text: "bawah", startMs: 8891, endMs: 9186 },
            { text: "monitor!", startMs: 9186, endMs: 9819, highlightColor: C_RED },
            { text: "Layar", startMs: 9819, endMs: 10199 },
            { text: "mati", startMs: 10199, endMs: 10537 },
            { text: "sedetik,", startMs: 10537, endMs: 11000 },
          ],
        },
        {
          startMs: 11100,
          endMs: 14500,
          words: [
            { text: "dinyalain", startMs: 11100, endMs: 11547 },
            { text: "lagi,", startMs: 11547, endMs: 11950 },
            { text: "terus", startMs: 11950, endMs: 12263 },
            { text: "bilang:", startMs: 12263, endMs: 12666 },
            { text: "tuh", startMs: 12666, endMs: 12934 },
            { text: "kan", startMs: 12934, endMs: 13202 },
            { text: "mas,", startMs: 13202, endMs: 13515 },
            { text: "masih", startMs: 13515, endMs: 13828 },
            { text: "lemot!", startMs: 13828, endMs: 14499, highlightColor: C_RED },
          ],
        },
      ],
      sfx: [
        {
                "file": "audio/sfx/record-scratch.wav",
                "fromSec": 0.2,
                "volume": 0.7
        },
        {
                "file": "audio/sfx/vine-boom.wav",
                "fromSec": 5.2,
                "volume": 0.8
        },
        {
                "file": "audio/sfx/glitch.wav",
                "fromSec": 9.4,
                "volume": 0.55
        },
        {
                "file": "audio/sfx/windows-xp-error.wav",
                "fromSec": 12,
                "volume": 0.65
        }
],
    },
    {
      id: "ep04-scene-6-closing",
      type: "closing",
      title: "Closing: Cara Restart Benar & Cek Uptime",
      voiceoverFile: "audio/ep04/scene6.wav",
      voiceoverVolume: 1,
      durationSec: 16.76,
      subBadge: "SOLUSI & CHECKLIST IT SUPPORT",
      headline: "RESTART BENAR BIKIN PC KANTOR NGEBUT LAGI!",
      headlineHighlight: "RESTART BENAR",
      accentColor: C_GREEN,
      screenMode: "healthy",
      overheatFactor: 0,
      serverAlert: false,
      characterAnimation: "celebrating",
      factCard: {
        title: "CARA RESTART BENAR DI KANTOR",
        statusTag: "TIPS RESMI",
        statusColor: C_GREEN,
        rows: [
          { label: "Langkah 1", detail: "Klik Start > Power > Pilih RESTART", color: C_GREEN },
          { label: "Shortcut Cepat", detail: "Pencet Alt + F4 di desktop, pilih Restart", color: C_BLUE },
          { label: "Cek Sukses", detail: "Task Manager > Uptime kembali 00:00:00", color: C_ORANGE },
        ],
      },
      cast: [
        {
                "id": "user-scene6-ep04",
                "role": "office_worker",
                "position": [
                        -0.42,
                        0,
                        0.12
                ],
                "rotation": [
                        0,
                        0.36,
                        0
                ],
                "animation": "celebrating",
                "cues": [
                        {
                                "fromSec": 0,
                                "animation": "idle"
                        },
                        {
                                "fromSec": 5.5,
                                "animation": "celebrating",
                                "blendSec": 0.35
                        },
                        {
                                "fromSec": 12,
                                "animation": "explaining",
                                "blendSec": 0.35
                        }
                ],
                "holdLaptop": true
        },
        {
                "id": "it-scene6-ep04",
                "role": "it_support",
                "position": [
                        0.36,
                        0,
                        0.28
                ],
                "rotation": [
                        0,
                        -0.26,
                        0
                ],
                "animation": "celebrating",
                "cues": [
                        {
                                "fromSec": 0,
                                "animation": "explaining"
                        },
                        {
                                "fromSec": 6.2,
                                "animation": "celebrating",
                                "blendSec": 0.35
                        },
                        {
                                "fromSec": 12.8,
                                "animation": "celebrating",
                                "blendSec": 0.35
                        }
                ],
                "holdLaptop": true
        }
],
      cameraKeyframes: [
        {
                "timeSec": 0,
                "position": [
                        0.2,
                        1.46,
                        4.45
                ],
                "lookAt": [
                        0.08,
                        1.42,
                        0.15
                ]
        },
        {
                "timeSec": 7.5,
                "position": [
                        -0.08,
                        1.48,
                        4.28
                ],
                "lookAt": [
                        0.1,
                        1.42,
                        0.2
                ],
                "ease": "power2.inOut"
        },
        {
                "timeSec": 16.2,
                "position": [
                        0.12,
                        1.46,
                        4.22
                ],
                "lookAt": [
                        0.12,
                        1.42,
                        0.2
                ],
                "ease": "power1.out"
        }
],
      subtitles: [
        {
          startMs: 250,
          endMs: 2500,
          words: [
            { text: "Kesimpulannya:", startMs: 250, endMs: 1100, highlightColor: C_GREEN },
            { text: "Kalau", startMs: 1100, endMs: 1550 },
            { text: "komputer", startMs: 1550, endMs: 2050 },
            { text: "kantor", startMs: 2050, endMs: 2500 },
          ],
        },
        {
          startMs: 2600,
          endMs: 5800,
          words: [
            { text: "lemot,", startMs: 2600, endMs: 3089, highlightColor: C_RED },
            { text: "klik", startMs: 3089, endMs: 3400 },
            { text: "Start,", startMs: 3400, endMs: 3844, highlightColor: C_BLUE },
            { text: "tombol", startMs: 3844, endMs: 4200 },
            { text: "Power,", startMs: 4200, endMs: 4644, highlightColor: C_BLUE },
            { text: "lalu", startMs: 4644, endMs: 4911 },
            { text: "pilih", startMs: 4911, endMs: 5222 },
            { text: "Restart,", startMs: 5222, endMs: 5800, highlightColor: C_GREEN },
          ],
        },
        {
          startMs: 5900,
          endMs: 8200,
          words: [
            { text: "bukan", startMs: 5900, endMs: 6291 },
            { text: "matiin", startMs: 6291, endMs: 6731, highlightColor: C_RED },
            { text: "layar!", startMs: 6731, endMs: 7367, highlightColor: C_RED },
            { text: "Cek", startMs: 7367, endMs: 7710 },
            { text: "uptime", startMs: 7710, endMs: 8199, highlightColor: C_ORANGE },
          ],
        },
        {
          startMs: 8300,
          endMs: 11000,
          words: [
            { text: "di", startMs: 8300, endMs: 8525 },
            { text: "Task", startMs: 8525, endMs: 8885, highlightColor: C_BLUE },
            { text: "Manager.", startMs: 8885, endMs: 9425, highlightColor: C_BLUE },
            { text: "Kalau", startMs: 9425, endMs: 9785 },
            { text: "udah", startMs: 9785, endMs: 10100 },
            { text: "puluhan", startMs: 10100, endMs: 10550, highlightColor: C_RED },
            { text: "hari,", startMs: 10550, endMs: 11000, highlightColor: C_RED },
          ],
        },
        {
          startMs: 11100,
          endMs: 13800,
          words: [
            { text: "kasih", startMs: 11100, endMs: 11550 },
            { text: "nafas", startMs: 11550, endMs: 12056, highlightColor: C_GREEN },
            { text: "komputer", startMs: 12056, endMs: 12619 },
            { text: "kamu!", startMs: 12619, endMs: 13350, highlightColor: C_GREEN },
            { text: "Follow", startMs: 13350, endMs: 13800, highlightColor: C_YELLOW },
          ],
        },
        {
          startMs: 13900,
          endMs: 16500,
          words: [
            { text: "akun", startMs: 13900, endMs: 14208 },
            { text: "ERROR", startMs: 14208, endMs: 14605, highlightColor: C_RED },
            { text: "TERUS", startMs: 14605, endMs: 15046, highlightColor: C_RED },
            { text: "untuk", startMs: 15046, endMs: 15354 },
            { text: "fakta", startMs: 15354, endMs: 15707, highlightColor: C_BLUE },
            { text: "IT", startMs: 15707, endMs: 16015, highlightColor: C_YELLOW },
            { text: "lainnya!", startMs: 16015, endMs: 16500, highlightColor: C_YELLOW },
          ],
        },
      ],
      sfx: [
        {
                "file": "audio/sfx/pop.wav",
                "fromSec": 0.3,
                "volume": 0.6
        },
        {
                "file": "audio/sfx/ding.wav",
                "fromSec": 4.8,
                "volume": 0.65
        },
        {
                "file": "audio/sfx/yippee.wav",
                "fromSec": 10.5,
                "volume": 0.75
        },
        {
                "file": "audio/sfx/impact.wav",
                "fromSec": 15.2,
                "volume": 0.6
        }
],
    },
  ],
  socialCaption: {
    instagramReels:
      "Katanya udah restart 3 kali barusan, kok pas dibuka Task Manager Uptime-nya 47 Hari 14 Jam?! 😭💻 Siapa yang di kantornya sering ngalamin drama ini? Ternyata tombol yang dipencet cuma tombol monitor doang, atau kejebak fitur Fast Startup Windows! Simak fakta teknisnya di episode 04!",
    threads:
      "User: 'Udah saya restart 3 kali mas, tetep lemot!'\nIT Support buka Task Manager: CPU Uptime 47 hari 14 jam... 🗿\n\nMatiin layar monitor bukan restart PC ya teman-teman kantor!",
    tiktok:
      "Mitos 'Udah di-restart' dari user kantor! Ternyata yang dimatiin cuma layar monitornya doang 😂💻 #ITSupport #RelateKantor #SatuHariSatuFakta #ErrorTerus",
    youtubeShorts: {
      title: "KATANYA UDAH RESTART, KOK UPTIME 47 HARI?! | Fakta IT Support Ep. 04",
      description:
        "Fakta dunia kerja IT Support Episode 04: Membongkar mitos user yang ngaku udah restart komputer tapi Uptime Task Manager masih 47 hari! Follow akun ERROR TERUS (@error_terusya).",
    },
    hashtags: [
      "#ITSupport",
      "#FaktaIT",
      "#KerjaDiIT",
      "#ErrorTerus",
      "#Windows11",
      "#TaskManager",
      "#KomputerKantor",
      "#AnakKantor",
      "#Relatable",
    ],
    cta: "Pernah nemu user model begini atau kamu sendiri yang pernah ngelakuin? Tulis di kolom komentar! 👇",
    firstComment:
      "📌 TIPS IT: Kalau mau beneran bersihin RAM dan cache Windows, pilih tombol RESTART di Start Menu, bukan Shutdown!",
    videoFile: "out/SATU-HARI-SATU-FAKTA-IT-SUPPORT-EP04.mp4",
    coverFrameSec: 2.5,
  },
};
