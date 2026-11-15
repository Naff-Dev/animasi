import { SERIES_COLORS } from "../../utils/theme";
import type { EpisodeConfig } from "./types";

const C_BLUE = SERIES_COLORS.electricBlue;
const C_YELLOW = SERIES_COLORS.yellow;
const C_ORANGE = SERIES_COLORS.orange;
const C_RED = SERIES_COLORS.red;
const C_GREEN = SERIES_COLORS.green;

export const episode03: EpisodeConfig = {
  id: "Episode03",
  episodeNumber: "03",
  title: "USER BILANG GAK KLIK APA-APA, TAPI LOG KETAWA!",
  topic: "User Gak Klik Apa-Apa",
  seriesName: "SATU HARI SATU FAKTA KERJA DI BAGIAN IT SUPPORT",
  bgmFile: "audio/bgm/tech-corporate-loop.wav",
  bgmVolume: 0.14,
  transitionFrames: 12,
  scenes: [
    {
      id: "ep03-scene-1-hook",
      type: "hook",
      title: "Hook: Kalimat Sakti User Kantor",
      voiceoverFile: "audio/ep03/scene1.wav",
      voiceoverVolume: 1.0,
      durationSec: 13.2,
      subBadge: "SATU HARI SATU FAKTA IT SUPPORT",
      headline: "KATANYA NGGAK KLIK APA-APA, EH?!",
      headlineHighlight: "NGGAK KLIK APA-APA,",
      accentColor: C_BLUE,
      screenMode: "idle_desktop",
      overheatFactor: 0.2,
      serverAlert: false,
      characterAnimation: "explaining",
      cast: [
        {
          id: "raka-hook-ep03",
          role: "office_worker",
          position: [-0.46, 0, 0.08],
          rotation: [0, 0.42, 0],
          animation: "confused",
          cues: [
            { fromSec: 0, animation: "walking" },
            { fromSec: 2.0, animation: "confused", blendSec: 0.35 },
            { fromSec: 9.2, animation: "pointing", blendSec: 0.3 },
          ],
          holdLaptop: true,
        },
        {
          id: "it-hook-ep03",
          role: "it_support",
          position: [0.34, 0, 0.32],
          rotation: [0, -0.26, 0],
          animation: "explaining",
          cues: [
            { fromSec: 0, animation: "idle" },
            { fromSec: 1.4, animation: "explaining", blendSec: 0.35 },
            { fromSec: 7.2, animation: "thinking", blendSec: 0.35 },
          ],
          holdLaptop: true,
        },
      ],
      cameraKeyframes: [
        {
          timeSec: 0,
          position: [0.14, 1.54, 5.15],
          lookAt: [0, 1.38, 0],
        },
        {
          timeSec: 5.5,
          position: [-0.08, 1.46, 4.78],
          lookAt: [0, 1.42, 0.1],
          ease: "power2.inOut",
        },
        {
          timeSec: 13.0,
          position: [0.1, 1.46, 4.72],
          lookAt: [0.05, 1.42, 0.12],
          ease: "power1.out",
        },
      ],
      subtitles: [
  {
    startMs: 220,
    endMs: 1610,
    words: [
      {
        text: "Satu",
        startMs: 220,
        endMs: 560
      },
      {
        text: "hari,",
        startMs: 560,
        endMs: 910
      },
      {
        text: "satu",
        startMs: 910,
        endMs: 1250
      },
      {
        text: "fakta",
        startMs: 1250,
        endMs: 1610,
        highlightColor: C_BLUE
      }
    ]
  },
  {
    startMs: 1750,
    endMs: 3430,
    words: [
      {
        text: "paling",
        startMs: 1750,
        endMs: 2200
      },
      {
        text: "sering",
        startMs: 2200,
        endMs: 2640
      },
      {
        text: "bikin",
        startMs: 2640,
        endMs: 3070
      },
      {
        text: "IT",
        startMs: 3070,
        endMs: 3430,
        highlightColor: C_YELLOW
      }
    ]
  },
  {
    startMs: 3430,
    endMs: 4960,
    words: [
      {
        text: "Support",
        startMs: 3430,
        endMs: 3890,
        highlightColor: C_YELLOW
      },
      {
        text: "geleng",
        startMs: 3890,
        endMs: 4340,
        highlightColor: C_RED
      },
      {
        text: "kepala!",
        startMs: 4340,
        endMs: 4960,
        highlightColor: C_RED
      }
    ]
  },
  {
    startMs: 5400,
    endMs: 6590,
    words: [
      {
        text: "Setiap",
        startMs: 5400,
        endMs: 5680
      },
      {
        text: "kali",
        startMs: 5680,
        endMs: 5940
      },
      {
        text: "ada",
        startMs: 5940,
        endMs: 6190
      },
      {
        text: "masalah",
        startMs: 6190,
        endMs: 6590,
        highlightColor: C_ORANGE
      }
    ]
  },
  {
    startMs: 6590,
    endMs: 7000,
    words: [
      {
        text: "di",
        startMs: 6590,
        endMs: 6720
      },
      {
        text: "kantor,",
        startMs: 6720,
        endMs: 7000
      }
    ]
  },
  {
    startMs: 7210,
    endMs: 9270,
    words: [
      {
        text: "kalimat",
        startMs: 7210,
        endMs: 7770
      },
      {
        text: "saktinya",
        startMs: 7770,
        endMs: 8360,
        highlightColor: C_BLUE
      },
      {
        text: "selalu",
        startMs: 8360,
        endMs: 8900
      },
      {
        text: "sama:",
        startMs: 8900,
        endMs: 9270
      }
    ]
  },
  {
    startMs: 9780,
    endMs: 10060,
    words: [
      {
        text: "Mas,",
        startMs: 9780,
        endMs: 10060,
        highlightColor: C_YELLOW
      }
    ]
  },
  {
    startMs: 10270,
    endMs: 11190,
    words: [
      {
        text: "sumpah",
        startMs: 10270,
        endMs: 10580
      },
      {
        text: "aku",
        startMs: 10580,
        endMs: 10850
      },
      {
        text: "nggak",
        startMs: 10850,
        endMs: 11030,
        highlightColor: C_RED
      },
      {
        text: "klik",
        startMs: 11030,
        endMs: 11190,
        highlightColor: C_RED
      }
    ]
  },
  {
    startMs: 11190,
    endMs: 12920,
    words: [
      {
        text: "apa-apa,",
        startMs: 11190,
        endMs: 11620,
        highlightColor: C_RED
      },
      {
        text: "tiba-tiba",
        startMs: 11620,
        endMs: 12190
      },
      {
        text: "error",
        startMs: 12190,
        endMs: 12480,
        highlightColor: C_ORANGE
      },
      {
        text: "sendiri!",
        startMs: 12480,
        endMs: 12920
      }
    ]
  }
],
      sfx: [
        { file: "audio/sfx/whoosh.wav", fromSec: 0.05, volume: 0.55 },
        { file: "audio/sfx/pop.wav", fromSec: 4.1, volume: 0.48 },
        { file: "audio/sfx/windows-xp-error.wav", fromSec: 10.6, volume: 0.42 },
      ],
    },
    {
      id: "ep03-scene-2-phishing",
      type: "problem",
      title: "Fakta 1: Tercyduk Log Firewall & Browser",
      voiceoverFile: "audio/ep03/scene2.wav",
      voiceoverVolume: 1.0,
      durationSec: 13.0,
      subBadge: "FAKTA #1: LOG GAK PERNAH BOHONG",
      headline: "TERCYDUK LOG FIREWALL & BROWSER!",
      headlineHighlight: "LOG FIREWALL & BROWSER!",
      accentColor: C_RED,
      screenMode: "phishing_alert",
      overheatFactor: 0.55,
      serverAlert: true,
      characterAnimation: "troubleshooting",
      factCard: {
        title: "AUDIT TIKET: GAK NGAPA-NGAPAIN",
        statusTag: "TERBLOKIR",
        statusColor: C_RED,
        rows: [
          { label: "Klik Link Undian", detail: "hadiah-undian-resmi.xyz", color: C_RED },
          { label: "Notifikasi Browser", detail: "12 Pop-up Iklan Diizinkan", color: C_ORANGE },
          { label: "Lampiran Invoice", detail: "Firewall Auto-Karantina", color: C_BLUE },
        ],
      },
      cast: [
        {
          id: "sari-phish-ep03",
          role: "finance_staff",
          position: [-0.36, 0, 0.06],
          rotation: [0, 0.4, 0],
          animation: "panicking",
          cues: [
            { fromSec: 0, animation: "panicking" },
            { fromSec: 6.5, animation: "confused", blendSec: 0.35 },
          ],
          holdLaptop: false,
        },
        {
          id: "it-phish-ep03",
          role: "it_support",
          position: [0.34, 0, 0.32],
          rotation: [0, -0.26, 0],
          animation: "troubleshooting",
          cues: [
            { fromSec: 0, animation: "troubleshooting" },
            { fromSec: 7.5, animation: "pointing", blendSec: 0.35 },
          ],
          holdLaptop: true,
        },
      ],
      cameraKeyframes: [
        {
          timeSec: 0,
          position: [0.04, 1.56, 5.36],
          lookAt: [0, 1.38, 0.08],
        },
        {
          timeSec: 6.5,
          position: [0.12, 1.48, 5.05],
          lookAt: [0.04, 1.42, 0.14],
          ease: "power2.inOut",
        },
        {
          timeSec: 12.8,
          position: [-0.04, 1.48, 5.05],
          lookAt: [0, 1.4, 0.1],
          ease: "power1.out",
        },
      ],
      cameraShake: { amplitude: 0.025, startSec: 3.3, durationSec: 1.1 },
      subtitles: [
  {
    startMs: 220,
    endMs: 1930,
    words: [
      {
        text: "Begitu",
        startMs: 220,
        endMs: 720
      },
      {
        text: "dibuka",
        startMs: 720,
        endMs: 1220
      },
      {
        text: "log",
        startMs: 1220,
        endMs: 1400,
        highlightColor: C_BLUE
      },
      {
        text: "Firewall",
        startMs: 1400,
        endMs: 1930,
        highlightColor: C_BLUE
      }
    ]
  },
  {
    startMs: 1930,
    endMs: 3010,
    words: [
      {
        text: "dan",
        startMs: 1930,
        endMs: 2120
      },
      {
        text: "riwayat",
        startMs: 2120,
        endMs: 2630
      },
      {
        text: "browser,",
        startMs: 2630,
        endMs: 3010,
        highlightColor: C_ORANGE
      }
    ]
  },
  {
    startMs: 3360,
    endMs: 4340,
    words: [
      {
        text: "langsung",
        startMs: 3360,
        endMs: 3660
      },
      {
        text: "ketahuan",
        startMs: 3660,
        endMs: 4070,
        highlightColor: C_RED
      },
      {
        text: "semua!",
        startMs: 4070,
        endMs: 4340,
        highlightColor: C_RED
      }
    ]
  },
  {
    startMs: 4860,
    endMs: 5540,
    words: [
      {
        text: "Ternyata",
        startMs: 4860,
        endMs: 5540,
        highlightColor: C_YELLOW
      }
    ]
  },
  {
    startMs: 5750,
    endMs: 7090,
    words: [
      {
        text: "lima",
        startMs: 5750,
        endMs: 6020,
        highlightColor: C_ORANGE
      },
      {
        text: "menit",
        startMs: 6020,
        endMs: 6300,
        highlightColor: C_ORANGE
      },
      {
        text: "lalu",
        startMs: 6300,
        endMs: 6570
      },
      {
        text: "baru",
        startMs: 6570,
        endMs: 6830
      },
      {
        text: "aja",
        startMs: 6830,
        endMs: 7090
      }
    ]
  },
  {
    startMs: 7530,
    endMs: 8630,
    words: [
      {
        text: "klik",
        startMs: 7530,
        endMs: 7720,
        highlightColor: C_RED
      },
      {
        text: "link",
        startMs: 7720,
        endMs: 7920,
        highlightColor: C_RED
      },
      {
        text: "hadiah",
        startMs: 7920,
        endMs: 8270,
        highlightColor: C_YELLOW
      },
      {
        text: "undian,",
        startMs: 8270,
        endMs: 8630
      }
    ]
  },
  {
    startMs: 9080,
    endMs: 10420,
    words: [
      {
        text: "izinin",
        startMs: 9080,
        endMs: 9480
      },
      {
        text: "notifikasi",
        startMs: 9480,
        endMs: 10150,
        highlightColor: C_ORANGE
      },
      {
        text: "aneh,",
        startMs: 10150,
        endMs: 10420,
        highlightColor: C_RED
      }
    ]
  },
  {
    startMs: 10820,
    endMs: 12780,
    words: [
      {
        text: "sampai",
        startMs: 10820,
        endMs: 11160
      },
      {
        text: "buka",
        startMs: 11160,
        endMs: 11470
      },
      {
        text: "lampiran",
        startMs: 11470,
        endMs: 11970
      },
      {
        text: "invoice",
        startMs: 11970,
        endMs: 12450,
        highlightColor: C_RED
      },
      {
        text: "palsu!",
        startMs: 12450,
        endMs: 12780,
        highlightColor: C_RED
      }
    ]
  }
],
      sfx: [
        { file: "audio/sfx/glitch.wav", fromSec: 0.15, volume: 0.45 },
        { file: "audio/sfx/vine-boom.wav", fromSec: 3.35, volume: 0.46 },
        { file: "audio/sfx/mouse-click.wav", fromSec: 7.5, volume: 0.55 },
      ],
    },
    {
      id: "ep03-scene-3-kabel-lan",
      type: "fact",
      title: "Fakta 2: Dikira Server Down, Ternyata Kabel LAN",
      voiceoverFile: "audio/ep03/scene3.wav",
      voiceoverVolume: 1.0,
      durationSec: 12.0,
      subBadge: "FAKTA #2: KABEL KETENDANG",
      headline: "DIKIRA SERVER DOWN, TERNYATA...",
      headlineHighlight: "TERNYATA...",
      accentColor: C_ORANGE,
      screenMode: "network_down",
      overheatFactor: 0.6,
      serverAlert: true,
      looseLanCable: true,
      characterAnimation: "pointing",
      factCard: {
        title: "LAPORAN PANIK VS REALITA",
        statusTag: "KABEL LEPAS",
        statusColor: C_ORANGE,
        rows: [
          { label: "Laporan: Server Mati", detail: "Aslinya Kabel LAN Ketendang", color: C_RED },
          { label: "Laporan: Wi-Fi Rusak", detail: "Aslinya Mode Pesawat Aktif", color: C_ORANGE },
          { label: "Laporan: Monitor Gelap", detail: "Aslinya Lupa Colok Listrik", color: C_BLUE },
        ],
      },
      cast: [
        {
          id: "raka-lan-ep03",
          role: "office_worker",
          position: [-0.46, 0, 0.08],
          rotation: [0, 0.38, 0],
          animation: "panicking",
          cues: [
            { fromSec: 0, animation: "panicking" },
            { fromSec: 6.4, animation: "confused", blendSec: 0.35 },
          ],
          holdLaptop: false,
        },
        {
          id: "it-lan-ep03",
          role: "it_support",
          position: [0.34, 0, 0.3],
          rotation: [0, -0.28, 0],
          animation: "pointing",
          cues: [
            { fromSec: 0, animation: "thinking" },
            { fromSec: 5.4, animation: "pointing", blendSec: 0.35 },
            { fromSec: 8.5, animation: "explaining", blendSec: 0.35 },
          ],
          holdLaptop: true,
        },
      ],
      cameraKeyframes: [
        {
          timeSec: 0,
          position: [-0.05, 1.56, 5.2],
          lookAt: [0, 1.38, 0.08],
        },
        {
          timeSec: 6.0,
          position: [0.16, 1.46, 4.82],
          lookAt: [0.06, 1.42, 0.14],
          ease: "power2.inOut",
        },
        {
          timeSec: 11.8,
          position: [0.04, 1.48, 4.92],
          lookAt: [0, 1.4, 0.1],
          ease: "power1.out",
        },
      ],
      subtitles: [
  {
    startMs: 220,
    endMs: 2040,
    words: [
      {
        text: "Belum",
        startMs: 220,
        endMs: 610
      },
      {
        text: "kelar",
        startMs: 610,
        endMs: 1000
      },
      {
        text: "kasus",
        startMs: 1000,
        endMs: 1390
      },
      {
        text: "link",
        startMs: 1390,
        endMs: 1600,
        highlightColor: C_RED
      },
      {
        text: "phishing,",
        startMs: 1600,
        endMs: 2040,
        highlightColor: C_RED
      }
    ]
  },
  {
    startMs: 2290,
    endMs: 3150,
    words: [
      {
        text: "ada",
        startMs: 2290,
        endMs: 2520
      },
      {
        text: "lagi",
        startMs: 2520,
        endMs: 2750
      },
      {
        text: "yang",
        startMs: 2750,
        endMs: 2890
      },
      {
        text: "teriak",
        startMs: 2890,
        endMs: 3150,
        highlightColor: C_ORANGE
      }
    ]
  },
  {
    startMs: 3410,
    endMs: 5240,
    words: [
      {
        text: "satu",
        startMs: 3410,
        endMs: 3760
      },
      {
        text: "lantai",
        startMs: 3760,
        endMs: 4140
      },
      {
        text: "server",
        startMs: 4140,
        endMs: 4520,
        highlightColor: C_RED
      },
      {
        text: "mati",
        startMs: 4520,
        endMs: 4870,
        highlightColor: C_RED
      },
      {
        text: "total!",
        startMs: 4870,
        endMs: 5240,
        highlightColor: C_RED
      }
    ]
  },
  {
    startMs: 5390,
    endMs: 5920,
    words: [
      {
        text: "Eh",
        startMs: 5390,
        endMs: 5920,
        highlightColor: C_YELLOW
      }
    ]
  },
  {
    startMs: 6500,
    endMs: 8090,
    words: [
      {
        text: "pas",
        startMs: 6500,
        endMs: 6710
      },
      {
        text: "dicek",
        startMs: 6710,
        endMs: 7100
      },
      {
        text: "di",
        startMs: 7100,
        endMs: 7300
      },
      {
        text: "kolong",
        startMs: 7300,
        endMs: 7710,
        highlightColor: C_BLUE
      },
      {
        text: "meja,",
        startMs: 7710,
        endMs: 8090,
        highlightColor: C_BLUE
      }
    ]
  },
  {
    startMs: 8380,
    endMs: 9560,
    words: [
      {
        text: "ternyata",
        startMs: 8380,
        endMs: 8800
      },
      {
        text: "kabel",
        startMs: 8800,
        endMs: 9080,
        highlightColor: C_ORANGE
      },
      {
        text: "LAN",
        startMs: 9080,
        endMs: 9290,
        highlightColor: C_ORANGE
      },
      {
        text: "cuma",
        startMs: 9290,
        endMs: 9560
      }
    ]
  },
  {
    startMs: 9560,
    endMs: 10980,
    words: [
      {
        text: "ketendang",
        startMs: 9560,
        endMs: 9990,
        highlightColor: C_RED
      },
      {
        text: "kursi",
        startMs: 9990,
        endMs: 10270
      },
      {
        text: "atau",
        startMs: 10270,
        endMs: 10540
      },
      {
        text: "stopkontak",
        startMs: 10540,
        endMs: 10980,
        highlightColor: C_YELLOW
      }
    ]
  },
  {
    startMs: 10980,
    endMs: 11670,
    words: [
      {
        text: "belum",
        startMs: 10980,
        endMs: 11260
      },
      {
        text: "dicolok!",
        startMs: 11260,
        endMs: 11670,
        highlightColor: C_GREEN
      }
    ]
  }
],
      sfx: [
        { file: "audio/sfx/switch.wav", fromSec: 0.15, volume: 0.5 },
        { file: "audio/sfx/impact.wav", fromSec: 3.4, volume: 0.42 },
        { file: "audio/sfx/ding.wav", fromSec: 10.6, volume: 0.42 },
      ],
    },
    {
      id: "ep03-scene-4-meeting",
      type: "fact",
      title: "Fakta 3: Drama Proyektor & Caps Lock Rapat",
      voiceoverFile: "audio/ep03/scene4.wav",
      voiceoverVolume: 1.0,
      durationSec: 11.1,
      subBadge: "FAKTA #3: DRAMA MEETING & LOGIN",
      headline: "PROYEKTOR MATI & LUPA CAPS LOCK!",
      headlineHighlight: "CAPS LOCK!",
      accentColor: C_BLUE,
      screenMode: "ticket_queue",
      overheatFactor: 0.35,
      serverAlert: false,
      characterAnimation: "troubleshooting",
      factCard: {
        title: "ANTRIAN HELPDESK PAGI INI",
        statusTag: "14 TIKET",
        statusColor: C_BLUE,
        rows: [
          { label: "Proyektor R. Rapat Mati", detail: "Belum Pindah Input HDMI", color: C_ORANGE },
          { label: "Password Salah Terus", detail: "Tombol Caps Lock Nyala", color: C_RED },
          { label: "Dokumen Nyasar Print", detail: "Salah Pilih Printer Divisi", color: C_BLUE },
        ],
      },
      cast: [
        {
          id: "bos-meet-ep03",
          role: "manager",
          position: [-0.5, 0, 0.02],
          rotation: [0, 0.36, 0],
          animation: "panicking",
          cues: [
            { fromSec: 0, animation: "panicking" },
            { fromSec: 6.8, animation: "confused", blendSec: 0.35 },
          ],
          holdLaptop: false,
        },
        {
          id: "sari-meet-ep03",
          role: "finance_staff",
          position: [-0.04, 0, -0.08],
          rotation: [0, 0.12, 0],
          animation: "confused",
          cues: [
            { fromSec: 0, animation: "confused" },
            { fromSec: 7.0, animation: "surprised", blendSec: 0.35 },
          ],
          holdLaptop: false,
        },
        {
          id: "it-meet-ep03",
          role: "it_support",
          position: [0.46, 0, 0.24],
          rotation: [0, -0.32, 0],
          animation: "troubleshooting",
          cues: [
            { fromSec: 0, animation: "troubleshooting" },
            { fromSec: 4.5, animation: "explaining", blendSec: 0.35 },
          ],
          holdLaptop: true,
        },
      ],
      cameraKeyframes: [
        {
          timeSec: 0,
          position: [0.04, 1.56, 5.68],
          lookAt: [-0.02, 1.38, 0.04],
        },
        {
          timeSec: 5.5,
          position: [-0.04, 1.48, 5.42],
          lookAt: [0, 1.4, 0.06],
          ease: "power2.inOut",
        },
        {
          timeSec: 10.9,
          position: [0.06, 1.48, 5.35],
          lookAt: [0.04, 1.4, 0.08],
          ease: "power1.out",
        },
      ],
      subtitles: [
  {
    startMs: 220,
    endMs: 1460,
    words: [
      {
        text: "Pas",
        startMs: 220,
        endMs: 400
      },
      {
        text: "rapat",
        startMs: 400,
        endMs: 740,
        highlightColor: C_BLUE
      },
      {
        text: "penting",
        startMs: 740,
        endMs: 1120
      },
      {
        text: "makin",
        startMs: 1120,
        endMs: 1460
      }
    ]
  },
  {
    startMs: 1460,
    endMs: 2140,
    words: [
      {
        text: "drama",
        startMs: 1460,
        endMs: 1810,
        highlightColor: C_RED
      },
      {
        text: "lagi!",
        startMs: 1810,
        endMs: 2140
      }
    ]
  },
  {
    startMs: 2710,
    endMs: 4080,
    words: [
      {
        text: "Proyektor",
        startMs: 2710,
        endMs: 3140,
        highlightColor: C_ORANGE
      },
      {
        text: "dikira",
        startMs: 3140,
        endMs: 3530
      },
      {
        text: "rusak",
        startMs: 3530,
        endMs: 3810,
        highlightColor: C_RED
      },
      {
        text: "berat",
        startMs: 3810,
        endMs: 4080
      }
    ]
  },
  {
    startMs: 4360,
    endMs: 5900,
    words: [
      {
        text: "padahal",
        startMs: 4360,
        endMs: 4840
      },
      {
        text: "kabel",
        startMs: 4840,
        endMs: 5170
      },
      {
        text: "HDMI",
        startMs: 5170,
        endMs: 5580,
        highlightColor: C_BLUE
      },
      {
        text: "belum",
        startMs: 5580,
        endMs: 5900
      }
    ]
  },
  {
    startMs: 5900,
    endMs: 6570,
    words: [
      {
        text: "pindah",
        startMs: 5900,
        endMs: 6240,
        highlightColor: C_ORANGE
      },
      {
        text: "input,",
        startMs: 6240,
        endMs: 6570,
        highlightColor: C_ORANGE
      }
    ]
  },
  {
    startMs: 7110,
    endMs: 8770,
    words: [
      {
        text: "sampai",
        startMs: 7110,
        endMs: 7420
      },
      {
        text: "akun",
        startMs: 7420,
        endMs: 7710
      },
      {
        text: "ke-lock",
        startMs: 7710,
        endMs: 8030,
        highlightColor: C_RED
      },
      {
        text: "berkali-kali",
        startMs: 8030,
        endMs: 8770
      }
    ]
  },
  {
    startMs: 8770,
    endMs: 10000,
    words: [
      {
        text: "gara-gara",
        startMs: 8770,
        endMs: 9350
      },
      {
        text: "tombol",
        startMs: 9350,
        endMs: 9660
      },
      {
        text: "Caps",
        startMs: 9660,
        endMs: 9830,
        highlightColor: C_YELLOW
      },
      {
        text: "Lock",
        startMs: 9830,
        endMs: 10000,
        highlightColor: C_YELLOW
      }
    ]
  },
  {
    startMs: 10000,
    endMs: 10750,
    words: [
      {
        text: "lupa",
        startMs: 10000,
        endMs: 10290
      },
      {
        text: "dimatiin!",
        startMs: 10290,
        endMs: 10750
      }
    ]
  }
],
      sfx: [
        { file: "audio/sfx/switch.wav", fromSec: 0.15, volume: 0.45 },
        { file: "audio/sfx/keyboard-typing.wav", fromSec: 7.1, volume: 0.38, durationSec: 2.2 },
      ],
    },
    {
      id: "ep03-scene-5-twist",
      type: "twist",
      title: "Plot Twist: 90% Beres dalam 2 Menit!",
      voiceoverFile: "audio/ep03/scene5.wav",
      voiceoverVolume: 1.0,
      durationSec: 10.5,
      subBadge: "REALITA TIM IT SUPPORT",
      headline: "90% TIKET BERES DUA MENIT!",
      headlineHighlight: "DUA MENIT!",
      accentColor: C_ORANGE,
      screenMode: "healthy",
      overheatFactor: 0.1,
      serverAlert: false,
      characterAnimation: "celebrating",
      twistCallouts: {
        topLabel: "14 TIKET DARURAT HARI INI: SELESAI CEPAT!",
        bottomLabel: "SISANYA SABAR DENGERIN CERITA SAMBIL NGOPI HAHA!",
      },
      cast: [
        {
          id: "raka-twist-ep03",
          role: "office_worker",
          position: [-0.56, 0, -0.02],
          rotation: [0, 0.34, 0],
          animation: "celebrating",
          cues: [
            { fromSec: 0, animation: "confused" },
            { fromSec: 3.8, animation: "celebrating", blendSec: 0.35 },
          ],
          holdLaptop: false,
        },
        {
          id: "it-twist-ep03",
          role: "it_support",
          position: [-0.18, 0, 0.26],
          rotation: [0, 0.08, 0],
          animation: "explaining",
          cues: [
            { fromSec: 0, animation: "pointing" },
            { fromSec: 3.8, animation: "explaining", blendSec: 0.3 },
            { fromSec: 6.4, animation: "thinking", blendSec: 0.35 },
          ],
          holdLaptop: false,
        },
        {
          id: "sari-twist-ep03",
          role: "finance_staff",
          position: [0.2, 0, -0.08],
          rotation: [0, -0.22, 0],
          animation: "celebrating",
          cues: [
            { fromSec: 0, animation: "idle" },
            { fromSec: 3.8, animation: "celebrating", blendSec: 0.35 },
          ],
          holdLaptop: false,
        },
        {
          id: "bos-twist-ep03",
          role: "manager",
          position: [0.58, 0, 0.04],
          rotation: [0, -0.34, 0],
          animation: "idle",
          cues: [
            { fromSec: 0, animation: "explaining" },
            { fromSec: 6.4, animation: "celebrating", blendSec: 0.35 },
          ],
          holdLaptop: true,
        },
      ],
      cameraKeyframes: [
        {
          timeSec: 0,
          position: [0, 1.54, 5.98],
          lookAt: [0, 1.38, 0.05],
        },
        {
          timeSec: 5.5,
          position: [0.04, 1.5, 5.76],
          lookAt: [0, 1.4, 0.08],
          ease: "power2.inOut",
        },
        {
          timeSec: 10.3,
          position: [-0.04, 1.48, 5.72],
          lookAt: [0, 1.4, 0.08],
          ease: "power1.out",
        },
      ],
      subtitles: [
  {
    startMs: 220,
    endMs: 1250,
    words: [
      {
        text: "Plot",
        startMs: 220,
        endMs: 400,
        highlightColor: C_ORANGE
      },
      {
        text: "twist",
        startMs: 400,
        endMs: 590,
        highlightColor: C_ORANGE
      },
      {
        text: "paling",
        startMs: 590,
        endMs: 930
      },
      {
        text: "kocak?",
        startMs: 930,
        endMs: 1250,
        highlightColor: C_YELLOW
      }
    ]
  },
  {
    startMs: 1580,
    endMs: 2890,
    words: [
      {
        text: "Dari",
        startMs: 1580,
        endMs: 1900
      },
      {
        text: "empat",
        startMs: 1900,
        endMs: 2230
      },
      {
        text: "belas",
        startMs: 2230,
        endMs: 2560
      },
      {
        text: "tiket",
        startMs: 2560,
        endMs: 2890,
        highlightColor: C_RED
      }
    ]
  },
  {
    startMs: 2890,
    endMs: 3690,
    words: [
      {
        text: "darurat",
        startMs: 2890,
        endMs: 3390,
        highlightColor: C_RED
      },
      {
        text: "itu,",
        startMs: 3390,
        endMs: 3690
      }
    ]
  },
  {
    startMs: 3880,
    endMs: 5100,
    words: [
      {
        text: "sembilan",
        startMs: 3880,
        endMs: 4290,
        highlightColor: C_GREEN
      },
      {
        text: "puluh",
        startMs: 4290,
        endMs: 4560
      },
      {
        text: "persen",
        startMs: 4560,
        endMs: 4840,
        highlightColor: C_GREEN
      },
      {
        text: "beres",
        startMs: 4840,
        endMs: 5100,
        highlightColor: C_GREEN
      }
    ]
  },
  {
    startMs: 5100,
    endMs: 5770,
    words: [
      {
        text: "cuma",
        startMs: 5100,
        endMs: 5360
      },
      {
        text: "dua",
        startMs: 5360,
        endMs: 5500,
        highlightColor: C_YELLOW
      },
      {
        text: "menit!",
        startMs: 5500,
        endMs: 5770,
        highlightColor: C_YELLOW
      }
    ]
  },
  {
    startMs: 6380,
    endMs: 7850,
    words: [
      {
        text: "Sisanya",
        startMs: 6380,
        endMs: 6940
      },
      {
        text: "ya",
        startMs: 6940,
        endMs: 7120
      },
      {
        text: "IT",
        startMs: 7120,
        endMs: 7440,
        highlightColor: C_BLUE
      },
      {
        text: "Support",
        startMs: 7440,
        endMs: 7850,
        highlightColor: C_BLUE
      }
    ]
  },
  {
    startMs: 7850,
    endMs: 9590,
    words: [
      {
        text: "sabar",
        startMs: 7850,
        endMs: 8230
      },
      {
        text: "dengerin",
        startMs: 8230,
        endMs: 8800
      },
      {
        text: "sambil",
        startMs: 8800,
        endMs: 9200
      },
      {
        text: "senyum",
        startMs: 9200,
        endMs: 9590,
        highlightColor: C_YELLOW
      }
    ]
  },
  {
    startMs: 9590,
    endMs: 10170,
    words: [
      {
        text: "dan",
        startMs: 9590,
        endMs: 9790
      },
      {
        text: "ngopi!",
        startMs: 9790,
        endMs: 10170,
        highlightColor: C_ORANGE
      }
    ]
  }
],
      sfx: [
        { file: "audio/sfx/record-scratch.wav", fromSec: 0.15, volume: 0.45 },
        { file: "audio/sfx/yippee.wav", fromSec: 4.0, volume: 0.42 },
      ],
    },
    {
      id: "ep03-scene-6-closing",
      type: "fact",
      title: "Closing: Checklist Anti Panik Sebelum Chat IT",
      voiceoverFile: "audio/ep03/scene6.wav",
      voiceoverVolume: 1.0,
      durationSec: 10.9,
      subBadge: "CHECKLIST ANTI PANIK",
      headline: "JUJUR, PERNAH NGALAMIN MANA?",
      headlineHighlight: "NGALAMIN MANA?",
      accentColor: C_GREEN,
      screenMode: "healthy",
      overheatFactor: 0.05,
      serverAlert: false,
      characterRole: "it_support",
      characterPosition: [0.22, 0, 0.34],
      characterRotation: [0, -0.22, 0],
      characterAnimation: "explaining",
      characterCues: [
        { fromSec: 0, animation: "explaining" },
        { fromSec: 6.2, animation: "pointing", blendSec: 0.35 },
      ],
      factCard: {
        title: "3 CEK MANDIRI SEBELUM CHAT IT",
        statusTag: "TIPS IT",
        statusColor: C_GREEN,
        rows: [
          { label: "1. Cek Kabel & Listrik", detail: "Pastikan Colokan Tidak Kendor", color: C_BLUE },
          { label: "2. Cek Caps Lock & HDMI", detail: "Cek Input & Huruf Besar", color: C_ORANGE },
          { label: "3. Jangan Klik Link Aneh", detail: "Cerita Kronologi Secara Jujur", color: C_GREEN },
        ],
      },
      cameraKeyframes: [
        {
          timeSec: 0,
          position: [0.2, 1.46, 4.45],
          lookAt: [0.08, 1.42, 0.15],
        },
        {
          timeSec: 5.5,
          position: [-0.08, 1.48, 4.28],
          lookAt: [0.1, 1.42, 0.2],
          ease: "power2.inOut",
        },
        {
          timeSec: 10.7,
          position: [0.12, 1.46, 4.22],
          lookAt: [0.12, 1.42, 0.2],
          ease: "power1.out",
        },
      ],
      subtitles: [
  {
    startMs: 220,
    endMs: 2110,
    words: [
      {
        text: "Jadi",
        startMs: 220,
        endMs: 590
      },
      {
        text: "sebelum",
        startMs: 590,
        endMs: 1160
      },
      {
        text: "chat",
        startMs: 1160,
        endMs: 1370
      },
      {
        text: "IT",
        startMs: 1370,
        endMs: 1690,
        highlightColor: C_BLUE
      },
      {
        text: "Support,",
        startMs: 1690,
        endMs: 2110,
        highlightColor: C_BLUE
      }
    ]
  },
  {
    startMs: 2420,
    endMs: 3140,
    words: [
      {
        text: "cek",
        startMs: 2420,
        endMs: 2670
      },
      {
        text: "kabel,",
        startMs: 2670,
        endMs: 3140,
        highlightColor: C_ORANGE
      }
    ]
  },
  {
    startMs: 3430,
    endMs: 4070,
    words: [
      {
        text: "cek",
        startMs: 3430,
        endMs: 3630
      },
      {
        text: "Caps",
        startMs: 3630,
        endMs: 3850,
        highlightColor: C_YELLOW
      },
      {
        text: "Lock,",
        startMs: 3850,
        endMs: 4070,
        highlightColor: C_YELLOW
      }
    ]
  },
  {
    startMs: 4310,
    endMs: 5300,
    words: [
      {
        text: "dan",
        startMs: 4310,
        endMs: 4500
      },
      {
        text: "jangan",
        startMs: 4500,
        endMs: 4890
      },
      {
        text: "klik",
        startMs: 4890,
        endMs: 5090,
        highlightColor: C_RED
      },
      {
        text: "link",
        startMs: 5090,
        endMs: 5300,
        highlightColor: C_RED
      }
    ]
  },
  {
    startMs: 5300,
    endMs: 5830,
    words: [
      {
        text: "aneh",
        startMs: 5300,
        endMs: 5650,
        highlightColor: C_RED
      },
      {
        text: "ya!",
        startMs: 5650,
        endMs: 5830
      }
    ]
  },
  {
    startMs: 6360,
    endMs: 7320,
    words: [
      {
        text: "Di",
        startMs: 6360,
        endMs: 6470
      },
      {
        text: "kantormu",
        startMs: 6470,
        endMs: 6830
      },
      {
        text: "paling",
        startMs: 6830,
        endMs: 7080
      },
      {
        text: "sering",
        startMs: 7080,
        endMs: 7320
      }
    ]
  },
  {
    startMs: 7320,
    endMs: 8040,
    words: [
      {
        text: "kejadian",
        startMs: 7320,
        endMs: 7680
      },
      {
        text: "yang",
        startMs: 7680,
        endMs: 7810
      },
      {
        text: "mana?",
        startMs: 7810,
        endMs: 8040,
        highlightColor: C_YELLOW
      }
    ]
  },
  {
    startMs: 8540,
    endMs: 9640,
    words: [
      {
        text: "Tulis",
        startMs: 8540,
        endMs: 8850
      },
      {
        text: "di",
        startMs: 8850,
        endMs: 9000
      },
      {
        text: "komentar",
        startMs: 9000,
        endMs: 9480,
        highlightColor: C_YELLOW
      },
      {
        text: "dan",
        startMs: 9480,
        endMs: 9640
      }
    ]
  },
  {
    startMs: 9640,
    endMs: 10590,
    words: [
      {
        text: "follow",
        startMs: 9640,
        endMs: 9970,
        highlightColor: C_GREEN
      },
      {
        text: "Error",
        startMs: 9970,
        endMs: 10280,
        highlightColor: C_BLUE
      },
      {
        text: "Terus!",
        startMs: 10280,
        endMs: 10590,
        highlightColor: C_BLUE
      }
    ]
  }
],
      sfx: [
        { file: "audio/sfx/ding.wav", fromSec: 8.4, volume: 0.45 },
      ],
    },
  ],
  socialCaption: {
    instagramReels: [
      "Kalimat paling legendaris yang setiap hari didengar anak IT Support:",
      "'Mas, sumpah aku nggak klik apa-apa, tiba-tiba error sendiri!'",
      "",
      "Pas dicek di log & lapangan, realitanya:",
      "1. Baru klik link hadiah undian & izinin notifikasi pop-up aneh",
      "2. Server dikira down satu lantai, eh kabel LAN cuma ketendang kursi",
      "3. Proyektor belum pindah input HDMI & akun ke-lock gara-gara Caps Lock nyala",
      "",
      "Dari 14 tiket darurat, 90% beres 2 menit—sisanya dengerin curhat user sambil ngopi haha!",
      "Di kantor kamu paling sering kejadian nomor berapa? Tulis di komentar!",
      "",
      "#ITSupport #SatuHariSatuFakta #LogGakBohong #ErrorTerus #AnakIT #TechIndonesia #KerjaKantor #CyberSecurity",
    ].join("\n"),
    threads: [
      "Fakta IT Support #03: kalimat sakti user kantor selalu 'Sumpah gak klik apa-apa!'",
      "",
      "Eh pas dibuka log Firewall: barusan buka link hadiah-undian, ketendang kabel LAN kolong meja, sampai salah password gara-gara Caps Lock nyala haha.",
      "",
      "Ngaku di kantormu tim paling sering kejadian yang mana?",
      "",
      "#ITSupport #ErrorTerus #KerjaKantor #TechIndonesia",
    ].join("\n"),
    tiktok: [
      "User: 'Gak klik apa-apa tiba-tiba error!' Log Firewall: izinkan aku memperkenalkan diri hahaha.",
      "",
      "#ITSupport #SatuHariSatuFakta #ErrorTerus #AnakIT #RelateKantor",
    ].join("\n"),
    youtubeShorts: {
      title: "User Bilang Gak Klik Apa-Apa, Tapi Log Ketawa! (Fakta IT Support #03)",
      description: [
        "Satu hari, satu fakta kerja di bagian IT Support!",
        "Setiap ada tiket darurat di kantor, kalimat paling sering muncul selalu 'Aku gak klik apa-apa!'.",
        "Padahal di log Firewall ada klik link hadiah undian, di kolong meja ada kabel LAN ketendang kursi, sampai di ruang rapat lupa pindah input HDMI & Caps Lock nyala.",
        "",
        "Subscribe @error_terusya untuk episode berikutnya!",
        "#Shorts #ITSupport #ErrorTerus #KerjaKantor #AnakIT",
      ].join("\n"),
    },
    hashtags: [
      "#ITSupport",
      "#SatuHariSatuFakta",
      "#LogGakBohong",
      "#ErrorTerus",
      "#AnakIT",
      "#TechIndonesia",
      "#KerjaKantor",
      "#CyberSecurity",
    ],
    cta: "Di kantormu paling sering kejadian yang mana: link aneh, kabel ketendang, atau Caps Lock? Komen dan follow @error_terusya!",
    firstComment: "Ngaku, siapa di kantormu yang paling sering bilang 'sumpah gak ngapa-ngapain'?",
    videoFile: "out/SATU-HARI-SATU-FAKTA-IT-SUPPORT-EP03.mp4",
    coverFrameSec: 2.0,
  },
};
