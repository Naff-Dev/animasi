# PROJECT: SATU HARI SATU FAKTA KERJA DI BAGIAN IT SUPPORT
## PROFESSIONAL 3D ANIMATED INSTAGRAM REELS SERIES

Bertindaklah sebagai Senior Creative Director, Professional Motion Designer, 3D Character Animator, Video Editor, dan Software Engineer yang ahli menggunakan Remotion, GSAP, dan Three.js.

Saya ingin membuat sebuah serial video edukasi teknologi dengan identitas:

**"SATU HARI SATU FAKTA KERJA DI BAGIAN IT SUPPORT"**

Serial ini akan dipublikasikan setiap hari di Instagram Reels.

Tema konten membahas fakta, pengalaman, realita, troubleshooting, tips, dan pekerjaan sehari-hari seorang IT Support di lingkungan perusahaan atau perkantoran.

Tugasmu bukan hanya membuat konsep atau memberikan tutorial. Kamu harus mengaudit project, membaca skills yang tersedia, merancang sistem animasi, membuat karakter 3D original, mengimplementasikan seluruh komponen, dan menghasilkan video MP4 yang siap dipublikasikan.

---

# 1. WAJIB AUDIT SKILL TERLEBIH DAHULU

Sebelum mengerjakan apa pun:

1. Periksa seluruh skills yang tersedia.
2. Identifikasi skill Remotion.
3. Identifikasi skill GSAP.
4. Identifikasi skill Three.js.
5. Identifikasi skill `threejs-animation` jika tersedia.
6. Baca dokumentasi dan contoh implementasi dari setiap skill.
7. Gunakan dokumentasi resmi sebagai referensi apabila diperlukan.

Jangan mengarang API, properti, atau cara penggunaan library.

Gunakan masing-masing teknologi sesuai tanggung jawabnya:

| Teknologi | Tanggung jawab |
|---|---|
| Remotion | Video composition, scene sequencing, timeline, audio, subtitle, rendering |
| GSAP | Motion graphics, kinetic typography, transition, animation timeline |
| Three.js | Karakter 3D, environment, lighting, camera, objek dan animasi |
| threejs-animation | Workflow pembuatan dan animasi karakter 3D jika skill tersedia |

Jangan mengganti teknologi utama tersebut dengan animasi CSS sederhana.

---

# 2. KONSEP UTAMA SERIAL

Nama serial:

SATU HARI SATU FAKTA KERJA DI BAGIAN IT SUPPORT

Karakteristik konten:

- Edukatif.
- Menghibur.
- Informatif.
- Relatable dengan kehidupan pekerja IT Support.
- Memiliki unsur humor.
- Menggunakan bahasa Indonesia sehari-hari.
- Mudah dipahami orang awam.
- Memiliki storytelling yang kuat.

Target audiens:

- IT Support.
- IT Helpdesk.
- Network Engineer.
- Teknisi komputer.
- Staff IT perusahaan.
- Mahasiswa IT.
- Orang yang tertarik dengan dunia teknologi.

Setiap episode membahas satu fakta utama. Jangan memasukkan terlalu banyak materi dalam satu video.

---

# 3. FORMAT VIDEO INSTAGRAM REELS

Gunakan spesifikasi berikut:

- Platform: Instagram Reels.
- Resolution: 1080 × 1920.
- Aspect Ratio: 9:16.
- Frame Rate: 30 FPS.
- Durasi target: 30–45 detik.
- Format video: MP4.
- Video Codec: H.264.
- Audio Codec: AAC.
- Bahasa: Indonesia.
- Subtitle: Bahasa Indonesia.
- Orientasi: Portrait.

Komposisi visual harus dioptimalkan untuk smartphone.

Perhatikan safe zone Instagram:
- Jangan meletakkan teks penting terlalu dekat bagian atas.
- Hindari bagian bawah yang tertutup caption dan tombol navigasi.
- Hindari sisi kanan yang tertutup tombol interaksi.
- Pastikan karakter dan subtitle tetap terlihat jelas.

Jangan membuat video horizontal yang sekadar dipotong menjadi vertikal.

Seluruh komposisi, kamera, karakter, dan typography harus dirancang khusus untuk format portrait.

---

# 4. BUAT KARAKTER STICKMAN 3D ORIGINAL DARI NOL

INI ADALAH BAGIAN YANG SANGAT PENTING.

Saya tidak ingin menggunakan karakter random dari internet atau mengambil karakter siap pakai dari asset marketplace.

Buat sendiri satu karakter stickman 3D original menggunakan Three.js dan skill `threejs-animation`.

Karakter ini akan menjadi maskot permanen seluruh episode.

AI memiliki kebebasan menentukan desain visual terbaik, tetapi harus mengikuti identitas berikut:

### Identitas karakter

- Kepala berbentuk bola.
- Tubuh stickman dengan proporsi yang menarik.
- Kepala sedikit lebih besar agar ekspresif.
- Badan, tangan, dan kaki memiliki struktur yang jelas.
- Warna dominan hitam atau dark navy.
- Aksen biru elektrik.
- Material 3D dengan pencahayaan profesional.
- Desain minimalis dan modern.
- Terlihat seperti karakter animasi profesional, bukan gambar stickman 2D.

Karakter harus terlihat menarik baik dalam adegan close-up maupun full body.

### Karakter harus mempunyai:

1. Sistem rig atau joint.
2. Kepala yang dapat bergerak.
3. Tangan dan kaki yang dapat dianimasikan.
4. Sistem pose.
5. Sistem gesture.
6. Sistem animasi yang reusable.
7. Material dan warna yang konsisten.
8. Sistem ekspresi melalui gerakan tubuh.

Jangan membuat karakter baru setiap episode.

Jangan mengubah proporsi, bentuk kepala, warna, material, atau identitas karakter pada episode berikutnya.

### Buat karakter permanen

Simpan seluruh aset karakter ke dalam folder khusus bernama `character`.

Struktur direktori yang diharapkan:

```text
public/
└── character/
    └── it-support-stickman/
        ├── model/
        │   └── character.glb
        ├── textures/
        ├── previews/
        │   └── character-preview.png
        └── metadata.json

src/
└── components/
    └── character/
        ├── StickmanCharacter.tsx
        ├── CharacterController.ts
        ├── CharacterAnimations.ts
        ├── CharacterMaterials.ts
        ├── CharacterRig.ts
        └── index.ts
```

Sesuaikan struktur dengan arsitektur project apabila diperlukan.

Ketentuan:
- File GLB harus benar-benar dihasilkan dan dapat dimuat.
- Jangan membuat file GLB kosong atau placeholder.
- Simpan model karakter hasil pembuatan sendiri.
- Simpan source code pembentuk karakter.
- Simpan preview karakter.
- Simpan metadata identitas karakter.
- Pastikan seluruh aset dapat digunakan kembali.
- Jangan mengandalkan file sementara yang hilang setelah proses rendering.

Jika proses ekspor GLB tidak memungkinkan, buat geometri dan rig Three.js secara procedural dalam komponen reusable dan dokumentasikan keterbatasannya. Jangan mengklaim GLB sudah tersedia jika belum dibuat.

---

# 5. BUAT SISTEM ANIMASI KARAKTER

Karakter harus memiliki animation controller reusable.

Buat minimal animasi berikut:

| Animation | Deskripsi |
|---|---|
| idle | Berdiri santai |
| walking | Berjalan |
| running | Berlari |
| sitting | Duduk |
| typing | Mengetik keyboard |
| thinking | Berpikir |
| pointing | Menunjuk sesuatu |
| explaining | Menjelaskan |
| surprised | Terkejut |
| confused | Kebingungan |
| panicking | Panik |
| troubleshooting | Memperbaiki komputer |
| celebrating | Merayakan keberhasilan |
| facepalm | Menepuk wajah karena frustrasi |
| looking_at_screen | Memperhatikan monitor |

Gunakan Three.js untuk animasi 3D dan GSAP untuk transisi gerakan yang sesuai.

Buat sistem pemanggilan animasi yang sederhana dan konsisten.

Contoh penggunaan:

```tsx
<StickmanCharacter
  animation="typing"
  position={[0, 0, 0]}
  scale={1}
/>
```

Contoh lainnya:

```tsx
<StickmanCharacter animation="panicking" />
<StickmanCharacter animation="explaining" />
<StickmanCharacter animation="troubleshooting" />
```

Sesuaikan implementasi dengan kebutuhan arsitektur.

Pastikan seluruh animasi deterministik berdasarkan frame Remotion.

Jangan menggunakan animasi real-time yang menyebabkan hasil render berbeda-beda pada setiap proses rendering.

---

# 6. IDENTITAS VISUAL DAN ART DIRECTION

Gunakan gaya visual:

- Modern 3D Motion Graphics.
- Minimalist 3D Cartoon.
- Cinematic Explainer Animation.
- Premium Corporate Animation.
- Dynamic Typography.
- Clean Technology Visual.

### Palet warna

| Warna | Penggunaan |
|---|---|
| Dark Navy | Background utama |
| Electric Blue | Aksen teknologi |
| White | Teks utama |
| Cyan | Highlight informasi |
| Orange | Warning |
| Red | Error dan masalah |

### Environment

Buat environment 3D yang dapat digunakan berulang:

- Ruang kerja IT Support.
- Meja komputer.
- Monitor.
- Keyboard.
- Mouse.
- Printer.
- Server rack.
- Switch jaringan.
- Router.
- Kabel LAN.
- Ruang kantor.

Gunakan model 3D procedural atau aset buatan sendiri jika memungkinkan.

Environment harus modular sehingga dapat digunakan pada episode yang berbeda.

Jangan membuat setiap scene terlihat sama. Gunakan perubahan angle kamera, komposisi, pencahayaan, dan environment untuk mempertahankan perhatian penonton.

---

# 7. STRUKTUR VIDEO DAN STORYTELLING

Setiap episode wajib mempunyai lima bagian berikut.

## SCENE 1 — HOOK (0–5 DETIK)

WAJIB menampilkan dan mengucapkan frasa:

"SATU HARI SATU FAKTA KERJA DI BAGIAN IT SUPPORT!"

Frasa tersebut harus menjadi bagian dari hook, bukan hanya logo, watermark, atau teks pembuka.

Contoh hook:

"SATU HARI SATU FAKTA KERJA DI BAGIAN IT SUPPORT! Tahu nggak, kadang komputer lemot bukan karena spesifikasinya rendah, tapi karena satu proses yang berjalan di background!"

Visual:
- Kamera melakukan cinematic zoom.
- Stickman muncul dengan gesture ekspresif.
- Typography muncul dengan GSAP.
- Kata penting mendapatkan highlight.
- Tambahkan sound effect impact.
- Jangan menggunakan intro logo yang terlalu panjang.

Hook harus membuat penonton penasaran untuk menonton sampai selesai.

## SCENE 2 — PERMASALAHAN (5–12 DETIK)

Perlihatkan situasi nyata di dunia IT Support.

Contoh:
- User mengeluh komputer lambat.
- Printer tidak bisa mencetak.
- Internet kantor mati.
- Aplikasi perusahaan error.
- User tidak dapat membuka lampiran.
- Komputer tiba-tiba restart.
- Server mengalami gangguan.

Karakter stickman harus berinteraksi langsung dengan objek.

Jangan hanya memperlihatkan karakter berdiri dan berbicara.

## SCENE 3 — FAKTA UTAMA (12–25 DETIK)

Berikan edukasi teknis dengan bahasa sederhana.

Contoh:

"Ketika komputer lambat, IT Support biasanya memeriksa penggunaan CPU, RAM, disk, dan proses yang berjalan melalui Task Manager sebelum menentukan penyebabnya."

Visual:
- Perlihatkan monitor komputer.
- Tampilkan visualisasi Task Manager.
- Grafik CPU dan RAM bergerak.
- Stickman menunjuk informasi.
- Gunakan typography untuk menekankan fakta penting.

Informasi harus akurat secara teknis.

## SCENE 4 — TWIST / REALITA IT SUPPORT (25–35 DETIK)

Tambahkan humor atau kejutan yang relatable.

Contoh:

"Dan setelah diperiksa cukup lama... ternyata kabel LAN-nya belum terpasang!"

Visual:
- Stickman terkejut.
- Kamera melakukan quick zoom.
- Kabel LAN terlihat terlepas.
- Tambahkan sound effect komedi.
- Tampilkan teks singkat yang lucu.

Humor tidak boleh mengorbankan akurasi informasi.

## SCENE 5 — CLOSING (35–45 DETIK)

Berikan kesimpulan singkat.

Contoh:

"Itulah satu fakta kecil dari dunia IT Support. Follow untuk satu fakta IT Support setiap hari!"

Tampilkan identitas:

SATU HARI SATU FAKTA
KERJA DI BAGIAN IT SUPPORT

Buat outro yang konsisten untuk seluruh episode.

---

# 8. PENGGUNAAN REMOTION

Gunakan Remotion sebagai fondasi utama video.

Buat sistem composition modular.

Contoh struktur:

```text
src/
├── Root.tsx
├── compositions/
│   ├── Episode01.tsx
│   └── EpisodeTemplate.tsx
├── scenes/
│   ├── HookScene.tsx
│   ├── ProblemScene.tsx
│   ├── FactScene.tsx
│   ├── TwistScene.tsx
│   └── ClosingScene.tsx
├── components/
│   ├── character/
│   ├── typography/
│   ├── subtitles/
│   ├── transitions/
│   └── environment/
├── data/
│   └── episodes/
│       └── episode01.ts
└── utils/
    ├── timing.ts
    └── audio.ts
```

Gunakan:
- `useCurrentFrame`.
- `useVideoConfig`.
- `interpolate`.
- `spring`.
- `Sequence`.
- `AbsoluteFill`.
- Audio synchronization.
- Frame-based scene sequencing.

Gunakan pendekatan modular agar episode baru bisa dibuat tanpa menulis ulang seluruh sistem.

Pastikan Three.js terintegrasi dengan Remotion secara benar.

Gunakan pendekatan rendering yang kompatibel dengan Remotion. Hindari ketergantungan pada simulasi yang tidak deterministik.

---

# 9. PENGGUNAAN GSAP

GSAP bertanggung jawab untuk motion graphics.

Implementasikan:

- Kinetic typography.
- Text reveal.
- Stagger animation.
- Scale animation.
- Position animation.
- Rotation animation.
- Dynamic transition.
- Animated infographic.
- Highlight text.
- Icon animation.
- Motion emphasis.

Gunakan easing yang profesional.

Jangan menggunakan animasi berlebihan pada setiap elemen.

Pastikan sinkronisasi GSAP dengan frame Remotion dilakukan secara deterministik. Hindari konflik antara timeline GSAP dan render frame-based.

---

# 10. PENGGUNAAN THREE.JS

Three.js digunakan untuk seluruh kebutuhan visual 3D.

Implementasikan:

- Karakter stickman original.
- Character rig.
- Character animation.
- 3D office environment.
- Computer workstation.
- Monitor.
- Keyboard dan mouse.
- Network equipment.
- Server rack.
- Camera animation.
- Lighting.
- Shadow.
- Object interaction.

Gunakan pencahayaan cinematic dan material yang konsisten.

Perhatikan performa rendering karena video akan dibuat dalam resolusi 1080 × 1920.

Optimalkan geometri, material, tekstur, dan jumlah objek.

Jangan membuat scene terlalu berat.

---

# 11. VOICE OVER DAN SOUND DESIGN

Gunakan voice over Bahasa Indonesia.

Karakter suara:
- Natural.
- Energik.
- Komunikatif.
- Tidak terlalu formal.
- Seperti content creator teknologi.
- Artikulasi jelas.
- Tempo bicara dinamis.

Voice over harus sesuai dengan durasi scene.

Tambahkan sound effect:

- Keyboard typing.
- Mouse click.
- Computer notification.
- Error sound.
- Whoosh.
- Impact.
- Pop.
- Digital glitch.
- Comedic sound effect.

Background music:
- Modern technology.
- Energetic.
- Corporate electronic.
- Tidak mengganggu voice over.

Gunakan aset audio yang legal dan memiliki izin penggunaan.

Jangan membuat klaim bahwa voice over sudah tersedia jika belum ada file audio yang benar-benar dihasilkan.

---

# 12. SUBTITLE DAN TYPOGRAPHY

Semua video wajib memiliki subtitle Bahasa Indonesia.

Ketentuan:
- Subtitle maksimal dua baris.
- Ukuran besar dan nyaman dibaca di smartphone.
- Highlight kata penting menggunakan warna berbeda.
- Sinkron dengan voice over.
- Gunakan font modern seperti Inter, Poppins, atau Manrope.
- Hindari teks terlalu panjang.
- Tidak menutupi karakter.
- Tidak keluar dari safe zone.

Gunakan animasi subtitle yang dinamis tetapi tidak mengganggu.

---

# 13. DAFTAR IDE EPISODE

Buat sistem episode yang bisa dikembangkan menjadi serial harian.

Topik awal:

1. Kenapa IT Support selalu menyuruh restart komputer?
2. Kenapa CPU komputer bisa 100%?
3. Kenapa printer kantor sering bermasalah?
4. Apa sebenarnya pekerjaan IT Support?
5. Kenapa internet kantor tiba-tiba lambat?
6. Apa fungsi DHCP dalam jaringan?
7. Kenapa kabel LAN bisa membuat jaringan terputus?
8. Apa perbedaan modem, router, switch, dan access point?
9. Kenapa user sering lupa password?
10. Kenapa komputer perlu update?
11. Apa yang terjadi saat server perusahaan down?
12. Kenapa IT Support sering diminta memperbaiki masalah di luar IT?
13. Kenapa WiFi tersambung tetapi tidak ada internet?
14. Apa fungsi DNS?
15. Kenapa backup data sangat penting?
16. Apa itu IP Address?
17. Kenapa komputer tidak bisa mendapatkan IP?
18. Kenapa HTB atau media converter sering mati?
19. Apa penyebab komputer mengalami blue screen?
20. Kenapa jaringan kantor menggunakan VLAN?

Setiap episode wajib:
- Memiliki satu fakta utama.
- Memiliki hook yang menarik.
- Memiliki penjelasan teknis yang benar.
- Memiliki visual yang relevan.
- Memiliki humor atau storytelling.
- Memiliki closing yang konsisten.

---

# 14. SISTEM TEMPLATE EPISODE

Buat sistem konfigurasi episode agar produksi konten selanjutnya lebih mudah.

Contoh:

```ts
export const episode01 = {
  id: "episode-01",
  title: "Kenapa Komputer Kantor Sering Lemot?",
  topic: "Troubleshooting Komputer",
  duration: 40,

  hook: {
    text: "SATU HARI SATU FAKTA KERJA DI BAGIAN IT SUPPORT!",
    narration: "SATU HARI SATU FAKTA KERJA DI BAGIAN IT SUPPORT!"
  },

  scenes: [
    {
      type: "hook",
      characterAnimation: "explaining"
    },
    {
      type: "problem",
      characterAnimation: "confused"
    },
    {
      type: "fact",
      characterAnimation: "pointing"
    },
    {
      type: "twist",
      characterAnimation: "surprised"
    },
    {
      type: "closing",
      characterAnimation: "celebrating"
    }
  ]
};
```

Contoh tersebut hanya gambaran konfigurasi. Sesuaikan implementasi dengan arsitektur sebenarnya.

Targetnya adalah episode berikutnya cukup mengganti:
- Judul.
- Topik.
- Script.
- Voice over.
- Fakta.
- Objek pendukung.
- Animasi yang digunakan.

Karakter, environment, typography, transisi, dan identitas visual tetap menggunakan sistem yang sama.

---

# 15. WORKFLOW IMPLEMENTASI

Kerjakan dengan tahapan berikut.

### PHASE 1 — PROJECT AUDIT
- Periksa struktur project.
- Periksa package.json.
- Periksa dependencies.
- Periksa skill yang tersedia.
- Jangan merusak implementasi yang sudah ada.

### PHASE 2 — CHARACTER DEVELOPMENT
- Buat desain stickman original.
- Implementasikan geometri 3D.
- Buat rig dan joint.
- Buat animation controller.
- Simpan aset karakter di folder `character`.
- Ekspor GLB jika memungkinkan.
- Buat preview karakter.
- Uji semua animasi.

### PHASE 3 — ENVIRONMENT DEVELOPMENT
- Buat environment IT office.
- Buat objek komputer dan jaringan.
- Siapkan lighting dan camera.
- Buat komponen environment reusable.

### PHASE 4 — MOTION SYSTEM
- Implementasikan Remotion.
- Implementasikan GSAP.
- Implementasikan Three.js.
- Integrasikan subtitle.
- Integrasikan audio.

### PHASE 5 — EPISODE PRODUCTION
Buat episode pertama dengan judul:

"KENAPA KOMPUTER KANTOR SERING LEMOT?"

Gunakan kelima scene storytelling yang sudah ditentukan.

### PHASE 6 — RENDERING
- Render dengan resolusi 1080 × 1920.
- Frame rate 30 FPS.
- Durasi sekitar 35–40 detik.
- Format MP4 H.264.
- Audio AAC.

### PHASE 7 — QUALITY CONTROL
Periksa hasil render secara visual.

Pastikan:
- Tidak ada frame hitam.
- Tidak ada flickering.
- Tidak ada karakter yang berubah bentuk.
- Tidak ada animasi yang patah.
- Tidak ada teks terpotong.
- Subtitle sinkron.
- Voice over terdengar jelas.
- Tidak ada objek yang keluar dari komposisi.
- Tidak ada kesalahan teknis pada fakta.
- Opening langsung menarik perhatian.

Jika ditemukan kesalahan, perbaiki dan render ulang.

---

# 16. OUTPUT FINAL

Hasil akhir wajib berupa:

1. Source code lengkap.
2. Karakter stickman 3D original.
3. Folder aset karakter permanen `character`.
4. File model GLB jika berhasil diekspor.
5. Sistem animasi karakter reusable.
6. Environment 3D IT Support.
7. Template Remotion.
8. Sistem motion graphics GSAP.
9. Sistem subtitle.
10. Opening dan closing reusable.
11. Konfigurasi episode.
12. Satu video Instagram Reels episode pertama.
13. File MP4 hasil render.
14. Dokumentasi cara membuat episode berikutnya.

Contoh nama file hasil render:

`SATU-HARI-SATU-FAKTA-IT-SUPPORT-EP01.mp4`

---

# 17. DEFINITION OF DONE

Project dinyatakan selesai apabila:

- Karakter original sudah dibuat.
- Karakter tersimpan secara permanen di folder `character`.
- Karakter dapat digunakan kembali tanpa dibuat ulang.
- Animation controller berfungsi.
- Remotion berhasil merender video.
- GSAP berhasil menjalankan motion graphics.
- Three.js berhasil menampilkan karakter dan environment.
- Video memiliki hook yang mengucapkan frasa utama.
- Video berformat vertikal 9:16.
- Subtitle dan audio sinkron.
- Episode pertama berhasil dirender menjadi MP4.
- Video dapat diputar dan diperiksa.
- Episode kedua dapat dibuat menggunakan template yang sama.

## INSTRUKSI PENUTUP

Jangan berhenti setelah memberikan rancangan.

Jangan hanya membuat satu scene contoh tanpa menyelesaikan episode.

Jangan menggunakan gambar statis untuk menggantikan karakter 3D.

Jangan membuat karakter baru setiap episode.

Jangan mengklaim proses rendering berhasil sebelum file MP4 benar-benar tersedia dan dapat diputar.

**Prioritas tertinggi adalah membangun satu karakter stickman 3D original yang menjadi maskot permanen serial, lalu membangun sistem produksi video yang reusable.**

Buat hasil akhir sekelas konten edukasi teknologi profesional yang siap dipublikasikan di Instagram Reels setiap hari.