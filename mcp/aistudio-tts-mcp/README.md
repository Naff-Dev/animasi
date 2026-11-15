# aistudio-tts-mcp

MCP Server yang mengotomatiskan **Google AI Studio Speech Generator** (`gemini-3.8-flash-tts`) di:
`https://aistudio.google.com/generate-speech?model=gemini-3.8-flash-tts`

Menggunakan browser Google Chrome yang terhubung via **Chrome DevTools Protocol (CDP)** dengan profil akun Google Anda yang sudah login (Pro/Free), sehingga **bebas dari batas kuota rate limit (429) API Key biasa**.

---

## Alur Kerja Otomatisasi (Sesuai Permintaan)

1. Membuka / fokus ke tab `https://aistudio.google.com/generate-speech?model=gemini-3.8-flash-tts`.
2. Klik tombol **"Create new dialog"** (`[data-testid="create-new-dialog-card"]`).
3. Mengubah **Speaker / Karakter Suara** (Puck, Charon, Aoede, Kore, Fenrir, Bodi, dll.).
4. Menempelkan (paste) teks narasi voice-over ke dalam blok dialog (`Speech block text`).
5. Menjalankan proses dengan **`Ctrl + Enter`** (Run).
6. Menunggu audio selesai dibuat (tombol download muncul dan stream base64 lengkap).
7. Mengambil data audio WAV 24kHz mono dan menyimpannya langsung ke file tujuan (`S001.wav`, `S002.wav`, dst.).

---

## Tools MCP yang Disediakan

- **`aistudio_generate_speech`**:
  - `text` (string, wajib): Teks naskah yang ingin disuarakan.
  - `voice` (string, opsional): Nama karakter suara (default: `Puck`).
  - `outputPath` (string, opsional): Path file `.wav` tempat hasil audio disimpan.
  - `timeoutSeconds` (number, opsional): Batas waktu tunggu (default: 60 detik).
- **`aistudio_check_status`**: Memeriksa koneksi CDP Chrome dan sesi Google AI Studio.
- **`aistudio_launch_browser`**: Membuka browser Chrome dengan port remote debugging (9333).

---

## Konfigurasi MCP Config (`mcp_config.json`)

Telah didaftarkan di `C:\Users\IT WILAYAH 1\.gemini\config\mcp_config.json`:

```json
{
  "mcpServers": {
    "aistudio-tts": {
      "command": "node",
      "args": ["E:\\project\\ai\\aistudio-tts-mcp\\index.js"]
    }
  }
}
```

