
# Struktur Database Portofolio

Database disimpan di Supabase, project `portofolio-next` (region Southeast Asia, Singapore).

Alamat project dan publishable key disimpan di `.env.local`, yang tidak ikut di-commit karena tercantum di `.gitignore` (`.env*`).

## Tabel `projects`

Daftar proyek portofolio Reno Wahyu.

| Kolom | Tipe | Keterangan |
| --- | --- | --- |
| `id` | `int8` | Primary key, nomor otomatis |
| `created_at` | `timestamptz` | Waktu baris dibuat |
| `slug` | `text` | Penanda unik di alamat |
| `judul` | `text` | Judul proyek |
| `deskripsi` | `text` | Deskripsi proyek |
| `kategori` | `text` | Kategori proyek |
| `minggu` | `text` | Minggu proyek dibuat |
| `fitur` | `text[]` | Daftar fitur proyek |
| `gambar_url` | `text` | Alamat gambar proyek |

RLS aktif. Policy `Pengunjung boleh membaca proyek`: peran `anon` boleh `select` semua baris.

## Tabel `messages`

Pesan dari form kontak.

| Kolom | Tipe | Keterangan |
| --- | --- | --- |
| `id` | `int8` | Primary key, nomor otomatis |
| `created_at` | `timestamptz` | Waktu pesan dibuat |
| `nama` | `text` | Nama pengirim |
| `email` | `text` | Email pengirim |
| `pesan` | `text` | Isi pesan |

RLS aktif. Belum ada policy baca karena pesan kontak bersifat pribadi.

## Tabel `skills`

Daftar keahlian Reno Wahyu.

| Kolom | Tipe | Keterangan |
| --- | --- | --- |
| `id` | `int8` | Primary key, nomor otomatis |
| `created_at` | `timestamptz` | Waktu baris dibuat |
| `nama` | `text` | Nama keahlian |
| `level` | `text` | Dasar, Menengah, atau Mahir |

RLS aktif. Policy `Pengunjung boleh membaca keahlian`: peran `anon` boleh `select` semua baris.