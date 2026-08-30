## Frontend Product Requirements Document (PRD): Services Section

**Document Purpose:** Mendefinisikan arsitektur komponen, spesifikasi layout, dan kebutuhan UI/UX untuk bagian "My Services" pada portofolio desain mode gelap.

### 1. Arsitektur & Tech Stack

Melanjutkan arsitektur portofolio utama untuk memastikan performa yang konsisten dan *rendering* yang optimal.

* **Core Framework:** ReactJS terintegrasi dengan Next.js.
* **Styling:** Tailwind CSS sangat direkomendasikan di sini untuk mengelola sistem *grid* yang kompleks, gradien latar belakang yang spesifik untuk setiap kartu, dan *border-radius* yang konsisten (`rounded-2xl` atau `rounded-3xl`).
* **Media Handling:** `next/image` untuk gambar di dalam kartu layanan guna mencegah *layout shift*. Ikon pada bagian "Benefits" harus menggunakan format SVG (*inline* atau komponen fungsional) untuk ketajaman resolusi.

### 2. Struktur Layout Global (Desktop)

Bagian ini menggunakan arsitektur **CSS Grid** asimetris yang kompleks pada *viewport* desktop.

* **Grid Kontainer Utama:** Menggunakan setidaknya layout 3 hingga 4 kolom atau kombinasi Flexbox/Grid.
* **Blok Kiri (Kartu Layanan):** Grid internal 2x2 yang memuat 4 kartu layanan secara proporsional.
* **Blok Tengah (Kolaborasi/CTA):** Kartu vertikal tinggi yang membentang setara dengan tinggi 2 baris kartu layanan (`row-span-2`).
* **Blok Kanan (Manfaat):** Kolom vertikal standar yang memuat judul besar dan daftar item berbasis baris (*row-based list*).



### 3. Spesifikasi Komponen

#### 3.1 Kartu Layanan (Grid Kiri 2x2)

Semua kartu layanan memiliki radius sudut yang besar, teks di bagian atas, dan gambar representatif yang terpotong rapi (*overflow-hidden*) di bagian bawah kartu.

| Komponen | Spesifikasi UI/Tailwind | Detail Konten |
| --- | --- | --- |
| **Card: UI/UX Design** | Latar belakang gradien merah gelap. Teks putih. | Judul: "UI/UX DESIGN". Deskripsi: "Creating seamless, accessible...". Gambar: UI aplikasi *fitness*. |
| **Card: Brand Identity** | Latar belakang gradien biru dongker (*navy*). Teks putih. | Judul: "BRAND IDENTITY". Deskripsi: "Developing cohesive visual identities...". Gambar: Logo "starheal" dan *merchandise*. |
| **Card: Web Experience** | Latar belakang gradien abu-abu gelap/hitam. Teks putih. | Judul: "WEB EXPERIENCE". Deskripsi: "Building highly accessible and interactive...". Gambar: Laptop dan *wireframe dashboard*. |
| **Card: Product Design** | Latar belakang gradien hijau. Teks putih. | Judul: "PRODUCT DESIGN". Deskripsi: "Transforming complex business challenges...". Gambar: Kemasan kotak hijau dan cangkir putih. |

#### 3.2 Kartu Kolaborasi CTA (Tengah)

Kartu ini dirancang untuk menarik perhatian sebagai titik konversi utama di dalam seksi layanan.

| Komponen | Spesifikasi UI/Tailwind | Detail Konten |
| --- | --- | --- |
| **Container & Background** | Proporsi potret (tinggi vertikal). Gradien halus dari abu-abu terang di atas ke biru di bagian bawah (`bg-gradient-to-b from-gray-100 to-blue-500`). Teks hitam. | N/A |
| **Top Graphic** | Grafik vektor susunan *puzzle* berwarna biru di area atas kartu. | Grafik *Puzzle*. |
| **Typography** | Judul medium-bold, deskripsi berukuran lebih kecil dengan *line-height* standar. | Judul: "LET'S COLLABORATE". Deskripsi: "Have a project in mind?..." |
| **Action Button** | Tombol berbentuk *pill* (`rounded-full`), latar belakang hitam (`bg-black`), teks putih, dengan ikon panah diagonal ke kanan atas. Rata kiri. | "BOOK A CALL" |

#### 3.3 Daftar Manfaat (Kolom Kanan)

| Komponen | Spesifikasi UI/Tailwind | Detail Konten |
| --- | --- | --- |
| **Section Title** | Tipografi besar, *sans-serif*, rata kiri, teks putih murni. | "Benefits you will receive" |
| **List Items (x4)** | Layout *Flexbox row* (`flex flex-row items-center gap-4`). Jarak antar item cukup renggang (`space-y-6` atau `space-y-8`). Teks deskripsi putih dengan bobot reguler. | Teks deskripsi (Revisi tanpa batas, Waktu pengerjaan 24-48 jam, Harga tetap, Kepemilikan file penuh). |
| **Custom Icons** | Aset SVG multi-warna. Dimensi statis (contoh: `w-12 h-12`). | Ikon: Centang hijau, balon obrolan dengan petir, lingkaran tumpang tindih biru, folder kuning dengan gembok. |

### 4. Kebutuhan Responsif & Interaktif

* **Strategi Breakpoint Mobile (Max-width: 768px):**
* Grid asimetris harus runtuh menjadi satu kolom vertikal (`flex-col` atau `grid-cols-1`).
* **Urutan Render:**
1. Judul Bagian ("MY SERVICES")
2. 4 Kartu Layanan (ditumpuk vertikal berurutan, gambar mungkin perlu disesuaikan ketinggiannya agar tidak terlalu memakan layar).
3. Kartu "LET'S COLLABORATE" CTA.
4. Judul "Benefits you will receive" beserta daftar itemnya.




* **Hover States (Desktop):**
* **Kartu Layanan & CTA:** Tambahkan efek transisi *scaling* yang sangat halus (`transition-transform duration-300 hover:scale-[1.02]`) untuk memberikan indikasi bahwa elemen tersebut interaktif.
* **Tombol CTA:** Efek *hover* standar berupa sedikit penyesuaian opasitas atau pergeseran ikon panah (`group-hover:translate-x-1 group-hover:-translate-y-1`).