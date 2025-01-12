---
sidebar_position: 4
---

# Panduan Instalasi


Panduan ini memberikan langkah-langkah untuk menginstal dan menyiapkan proyek dari awal.


## 1. Langkah-Langkah Instalasi

### 1.1 Clone Repository
Link dan hak akses repository akan diberikan ketika anda sudah membeli lisensi produk kami.

Lakukan clone repository:
```bash
git clone <repository-url>
cd <project-folder>
```

### 1.2 Instalasi Dependensi PHP
Gunakan Composer untuk menginstal semua dependensi proyek Laravel:
```bash
composer install
```

### 1.3 Konfigurasi File `.env`
1. Salin file `.env.example` menjadi `.env`:
   ```bash
   cp .env.example .env
   ```
2. Buka file `.env` dan sesuaikan konfigurasi berikut:
   - **Database**: Sesuaikan nama database, username, dan password.
   - **APP_URL**: Pastikan URL aplikasi Anda benar.

### 1.4 Generate Application Key
Jalankan perintah berikut untuk menghasilkan application key:
```bash
php artisan key:generate
```

### 1.5 Migrasi dan Seeding Database
Untuk membuat dan mengisi tabel database, jalankan:
```bash
php artisan migrate:fresh --seed
```

### 1.6 Instalasi Dependensi Front-End
Instal semua dependensi front-end dengan Node.js:
```bash
npm install
```

### 1.7 Build Assets Front-End
Build aset front-end untuk produksi:
```bash
npm run build
```

## 2. Menjalankan Aplikasi

### 2.1 Menjalankan Server Lokal
Gunakan perintah berikut untuk menjalankan server pengembangan Laravel:
```bash
php artisan serve
```
Aplikasi akan tersedia di `http://127.0.0.1:8000`.

### 2.2 Menjalankan Server Production
Untuk menjalankan Laravel di lingkungan produksi, ikuti sesuai dengan hosting provider Anda.

## 3. Troubleshooting
Jika terjadi masalah, pastikan:
- File `.env` sudah dikonfigurasi dengan benar.
- Database telah dibuat sesuai konfigurasi di `.env`.
- Semua dependensi PHP dan Node.js telah diinstal.

Selamat! Proyek Bellza EMR Anda siap digunakan. 🚀

