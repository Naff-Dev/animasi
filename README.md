# SATU HARI SATU FAKTA KERJA DI BAGIAN IT SUPPORT

Sistem produksi video animasi 3D edukatif Instagram Reels (`1080x1920`, `9:16`, `30 FPS`) berbasis **Remotion + Three.js (`@remotion/three`) + GSAP**.

## Fitur Utama
- **Karakter 3D IT Support Specialist (`ITSupportCharacter`)**: Karakter stylized cartoon modern dengan hoodie navy + aksen cyan, logo `"IT SUPPORT"` di dada, celana cargo hitam, sneakers futuristik, kacamata modern, headset bermikrofon, kedipan mata alami, laptop diagnostik, tas teknisi, obeng presisi, dan USB flashdisk dalam modul terstruktur (`src/components/character/parts/`) plus ekspor permanen GLB (`public/character/it-support-specialist/model/character.glb` & alias kompatibilitas `it-support-stickman`) lengkap dengan **15 animasi deterministik**.
- **Environment Studio & Ruangan Server Modern**: Lantai cleanroom terang dengan pencahayaan studio PBR, aksen cyan futuristik, rak server LED modern, meja workstation dengan monitor berlayar kanvas dinamis (`idle_desktop`, `freezing`, `task_manager`, `chrome_chaos`, `healthy`), dan printer kantor.
- **Interactive 360° Three.js Viewer (`OrbitControls`)**: Viewer browser standalone (`http://localhost:4173/`) untuk memutar karakter 360 derajat, memilih animasi, memicu kedipan mata, dan beralih pencahayaan ruangan server.
- **Template Multi-Episode Siap Pakai**: Gunakan `EpisodeTemplate` + file konfigurasi `EpisodeConfig` untuk memproduksi episode baru secara cepat dengan narasi suara Bahasa Indonesia, subtitle tersinkronisasi per kata di Instagram Reels safe-zone, efek suara, dan BGM corporate loop.

- **Outro Permanen ERROR TERUS**: Setiap episode yang dirender via [`EpisodeTemplate`](src/compositions/EpisodeTemplate.tsx) otomatis menyertakan penutup standar (`ErrorTerusOutroScene`) lengkap dengan ajakan Like, Komen, Share, Follow untuk akun **ERROR TERUS (`@error_terusya`)**.
- **Halaman Posting Sosmed (Tebar API v1) & Auto-Caption**: Studio web terpadu di `http://127.0.0.1:4174/` (`npm run social`) yang membaca caption otomatis setiap episode (`socialCaption` / `buildEpisodeSocialCaption`), memuat akun dari `GET /v1/accounts`, mengupload MP4 episode, dan mengirim/menjadwalkan post via `POST /v1/posts` tanpa membocorkan `TEBAR_API_KEY` ke browser.

## Script NPM
- `npm run dev` — Jalankan Remotion Studio untuk preview interaktif.
- `npm run lint` — Cek ESLint dan TypeScript typechecking.
- `npm run build:character` — Bangun ulang aset `character.glb`, tekstur, dan `metadata.json`.
- `npm run build:viewer` — Bundle viewer interaktif Three.js (`OrbitControls`) ke `public/it-support-specialist-viewer/`.
- `npm run viewer` — Jalankan server HTTP lokal viewer 360° di `http://localhost:4173/`.
- `npm run build:social` — Bundle Halaman Posting Sosmed ke `public/social-poster/app.js`.
- `npm run social` — Jalankan server lokal Halaman Posting Sosmed (Tebar API v1) di `http://127.0.0.1:4174/`.
- `npm run render:preview` — Render still preview karakter (`StickmanPreview`).
- `npm run render:ep01` — Render final Episode 01 (`out/SATU-HARI-SATU-FAKTA-IT-SUPPORT-EP01.mp4`).
- `npm run render:ep02` — Render final Episode 02 (`out/SATU-HARI-SATU-FAKTA-IT-SUPPORT-EP02.mp4`).
- `npm run render:ep03` — Render final Episode 03 (`out/SATU-HARI-SATU-FAKTA-IT-SUPPORT-EP03.mp4`).
- `npm run render:ep04` — Render final Episode 04 (`out/SATU-HARI-SATU-FAKTA-IT-SUPPORT-EP04.mp4`).
- `npm run install:mcp` — Install dependensi lokal MCP servers (`flow-mcp` & `aistudio-tts-mcp`).
- `npm run build:mcp` — Build ulang bundle TypeScript `flow-mcp`.

Panduan Dokumentasi:
- Alur produksi episode baru: [docs/PANDUAN-EPISODE-BARU.md](docs/PANDUAN-EPISODE-BARU.md).
- Konfigurasi & Integrasi MCP otomatis AI: [docs/SETUP-MCP.md](docs/SETUP-MCP.md).
