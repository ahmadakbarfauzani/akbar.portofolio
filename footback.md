Berikut adalah *Product Requirements Document* (PRD) untuk sistem pengiriman email berdasarkan UI "Get in touch" yang ada di *Screenshot 2026-08-29 100622.png*. Desainnya sudah sangat rapi dan elegan, namun ada beberapa komponen interaktif yang perlu ditambahkan agar sistem fungsinya berjalan utuh.

## PRD: Sistem Form Kontak Portfolio

**Tujuan**
Menyediakan fungsionalitas bagi pengunjung website untuk mengirim pesan, penawaran kolaborasi, atau pertanyaan langsung ke email pemilik *portfolio* melalui *interface* form yang terintegrasi di halaman "Get in Touch".

---

## 1. Spesifikasi Input (Functional Requirements)

Berdasarkan tata letak di UI saat ini, form harus menangkap *data state* berikut sebelum dikirim ke sistem:

| Label di UI | Jenis Input | Status | Validasi |
| --- | --- | --- | --- |
| **SAY HELLO** | `input type="email"` | *Required* | Wajib format email valid (mengandung `@` dan domain). |
| **MESSAGE** | `textarea` | *Required* | Minimal 10 karakter untuk mencegah pesan *spam/blank*. |
| **ADDRESS** | `input type="text"` | *Optional* | Maksimal 100 karakter. |
| **PHONE** | `input type="tel"` | *Optional* | Hanya menerima angka dan karakter plus (`+`). |
| **SOCIAL** | `input type="text"` | *Optional* | Menerima *username* atau URL sosmed. |

---

## 2. Rekomendasi Sistem (*Tech Stack*)

Mengingat ekosistem *frontend* modern (seperti ekosistem React/Next.js) yang biasa digunakan untuk membangun *portfolio* interaktif dan *deployment* yang cepat (seperti di Vercel), berikut adalah dua opsi sistem terbaik yang bisa digunakan:

### Opsi A: EmailJS (Paling Direkomendasikan untuk *Client-Side*)

Sistem ini memproses form langsung dari browser pengunjung tanpa memerlukan *setup backend* sama sekali.

* **Cara Kerja:** Form menangkap input, lalu `emailjs.sendForm()` mengirimkan data langsung ke *server* EmailJS, yang kemudian meneruskannya ke Gmail (ahmadakbarfauzani08@gmail.com).
* **Kebutuhan Tech:** *Library* `@emailjs/browser`.
* **Kelebihan:** Sangat cepat diimplementasikan dan aman karena *template* email diatur di *dashboard* terpisah.

### Opsi B: Resend + API Route (Solusi Modern *Fullstack*)

Jika *portfolio* ini dibangun menggunakan Next.js, ini adalah cara paling profesional (sekelas *enterprise*).

* **Cara Kerja:** Form di-*submit* dengan memanggil fungsi *Server Action* atau API Route (`/api/send-email`). Di sisi *server*, *library* Resend digunakan untuk menyusun *template* (menggunakan React Email) dan mengirimkannya.
* **Kebutuhan Tech:** *Library* `resend`, `react-email`, dan konfigurasi *environment variables* (API Key rahasia).
* **Kelebihan:** *Deliverability* (peluang masuk *inbox* utama, bukan *spam*) sangat tinggi dan kontrol penuh pada keamanan.

---

## 3. Alur Pengguna (*User Flow*)

1. **Pengisian:** Pengunjung mengisi *field* yang tersedia. Jika *field* "SAY HELLO" atau "MESSAGE" kosong saat di-*submit*, muncul peringatan (validasi).
2. **Proses Pengiriman:** Saat tombol *submit* ditekan, tombol akan berubah status menjadi *disabled* dengan teks "Sending..." agar pengguna tidak melakukan *double-click*.
3. **Hasil Akhir:**
* **Sukses:** Muncul *Toast Notification* (notifikasi kecil di pojok layar) bertuliskan "Pesan berhasil terkirim!". Form otomatis dikosongkan (*reset state*).
* **Gagal:** Muncul *Toast Notification* merah bertuliskan "Gagal mengirim pesan. Silakan coba lagi." Form tidak dikosongkan agar pengguna tidak perlu mengetik ulang.



---

## 4. Evaluasi Desain UI & Item yang Harus Ditambahkan

Melihat "Screenshot 2026-08-29 100622.png", desain statis sudah terbentuk, namun ada beberapa elemen fungsional yang **belum ada di desain visual saat ini** dan wajib diimplementasikan di kodenya:

* **Tombol Submit (Krusial):** Saat ini tidak terlihat tombol untuk mengirim form (misalnya tombol bertuliskan "Send Message" atau icon *arrow*). Ini wajib ditambahkan di bawah kolom input atau di area kanan bawah.
* **Hover/Focus State:** *Underline* pada input (SAY HELLO, MESSAGE, dll) harus berubah warna (misalnya menjadi putih terang atau warna aksen) ketika pengguna sedang mengetik (`:focus`), untuk memberikan *feedback* visual.
* **Toast Component:** Siapkan komponen notifikasi untuk menampilkan status keberhasilan atau kegagalan (bisa menggunakan *library* seperti `react-hot-toast` atau `sonner`).