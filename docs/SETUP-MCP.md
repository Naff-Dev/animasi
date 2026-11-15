# Panduan Konfigurasi & Integrasi MCP (Model Context Protocol)
## Untuk AI Coding Agent & Developer

Dokumentasi ini menjelaskan setup otomatis MCP server di repository ini agar AI agent (Antigravity, Claude Code, Cursor, Windsurf) dapat langsung membaca, menjalankan, dan memanfaatkan tools MCP tanpa perlu setup manual berulang kali.

---

## 1. Lokasi & Struktur MCP Server

Di dalam repository ini, folder `mcp/` berisi server MCP mandiri yang siap pakai:

```text
dracin/
├── mcp/
│   ├── flow-mcp/               # Flow MCP (AI Video/Image/Storyboard Generator)
│   │   ├── dist/index.js       # Pre-built entrypoint (siap dieksekusi tanpa compile)
│   │   ├── src/                # Source code TypeScript
│   │   ├── package.json
│   │   └── README.md
│   │
│   └── aistudio-tts-mcp/       # Google AI Studio Playground TTS MCP (gemini-3.8-flash-tts)
│       ├── index.js            # Entrypoint server TTS
│       ├── package.json
│       └── README.md
│
├── mcp_config.json             # Konfigurasi standar Antigravity & AI Agent
└── .mcp.json                   # Konfigurasi standar Claude Code & Cursor
```

---

## 2. File Konfigurasi MCP (`mcp_config.json` & `.mcp.json`)

Kedua file konfigurasi di-root project telah dikonfigurasi menggunakan relative path:

```json
{
  "mcpServers": {
    "flow": {
      "command": "node",
      "args": ["mcp/flow-mcp/dist/index.js"]
    },
    "aistudio-tts": {
      "command": "node",
      "args": ["mcp/aistudio-tts-mcp/index.js"]
    }
  }
}
```

### Cara AI Agent Menggunakan Konfigurasi Ini:
1. **Antigravity / Gemini CLI**:
   Jika menjalankan agent secara global, pastikan `C:\Users\<User>\.gemini\config\mcp_config.json` mengarah ke folder lokal project ini atau server yang sama.
2. **Claude Code / Cursor**:
   Otomatis mendeteksi `.mcp.json` di root workspace dan langsung mengaktifkan server `flow` dan `aistudio-tts`.

---

## 3. Daftar Tools yang Tersedia

### A. Server `aistudio-tts`
Digunakan untuk memproduksi audio voiceover Bahasa Indonesia berkualitas tinggi per-scene untuk serial video:
- `aistudio_generate_speech`: Menghasilkan ucapan realistis berbasis model Google `gemini-3.8-flash-tts` via browser automation.
  - Parameter: `text` (naskah narasi), `outputPath` (path file `.wav` target), `voice` (pilihan: `Puck`, `Charon`, `Aoede`, `Kore`, `Fenrir`, dll.), `timeoutSeconds`.
- `aistudio_check_status`: Memeriksa apakah Chrome CDP aktif dan siap digunakan.
- `aistudio_launch_browser`: Membuka browser Chrome dengan sesi login Google user.

### B. Server `flow`
Digunakan untuk pembuatan aset visual AI, thumbnail, karakter, dan storyboard:
- `flow_status`: Cek status server flow.
- `flow_generate`: Generate prompt gambar/video.
- `flow_wait`: Menunggu tugas AI selesai.
- `flow_character`: Kelola karakter visual konsisten.
- `flow_transcribe`: Transkripsi audio menjadi teks dan caption.
- `flow_captions`: Pembuatan format subtitle.

---

## 4. Instalasi & Rebuild (Jika Diperlukan)

Karena folder `mcp/flow-mcp/dist/` sudah ter-bundle dan disertakan di Git, pengguna baru **tidak perlu build ulang**.

Namun jika ingin memperbarui dependensi MCP secara lokal:
```bash
# Install dependency kedua MCP server
npm run install:mcp

# Build ulang TypeScript flow-mcp
npm run build:mcp
```

---

## 5. Hubungan dengan Alur Produksi Episode Remotion
Saat memproduksi episode baru (`Episode05`, dst.):
1. AI membaca naskah narasi dari topik yang ditentukan.
2. AI memanggil tool `aistudio_generate_speech` untuk membuat `scene1.wav` sampai `scene6.wav` ke folder `public/audio/epXX/`.
3. AI memeriksa durasi audio secara deterministik.
4. AI menyusun `src/data/episodes/episodeXX.ts` dan mendaftarkan episode ke Remotion.
5. Render video final dengan `npm run render:epXX`.
