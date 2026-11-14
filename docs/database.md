# Struktur Database Porotofolio

Database disimpan di Supabase, project `portofolio-yogi` (region
Southeast Asia, Singapore). Alamat project dan
publishable key disimpan di `.env.local`, yang tidak ikut di-commit
karena tercantum di `.gitignore` (`.env*`).

## Tabel `projects`

Daftar proyek portofolio Yogi El Safani.

| Kolom | Tipe | Keterangan |
| --- | --- | --- |
| `id` | `int8` | Primary key, nomor otomatis 1, 2, 3, ... |
| `created_at` | `timestamptz` | Waktu baris dibuat, terisi otomatis
dengan `now()` |
| `slug` | `text` | Penanda unik  di alamat, misalnya `halaman-profil` (unik) |
| `judul` | `text` | Judul Proyek |
| `deskripsi` | `text` | Kalimat singkat tentang proyek |
| `kategori` | `text` | HTML, CSS, atau JavaScript |
| `minggu` | `text` | Minggu proyek di buat, misalnya `Minggu 01` |
| `fitur` | `text[]` | Daftar hal yang di pelajari (array teks) |
| `gambar_url` | `text` | Alamat gambar di folder `public`, misalnya
`/proyek/proyek-profil.png` |

RLS aktif. Policy `Pengunjung boleh membaca projek`: peran `anon`
boleh `select` semua baris.

## Tabel `messages`

Pesan dari form kontak.

| Kolom | Tipe | Keterangan |
| --- | --- | --- |
| `id` | `int8` | Primary key, nomor otomatis 1, 2, 3, ... |
| `created_at` | `timestamptz` | Waktu baris dibuat, terisi otomatis
dengan `now()` |
| `nama` | `text` | Nama pengirim |
| `email` | `text` | Email pengirim |
| `pesan` | `text` | Isi Pesan |

RLS aktif tanpa policy, sehingga pengunjung tidak bisa membaca
pesan. Policy `insert` dibuat di Minggu 15.