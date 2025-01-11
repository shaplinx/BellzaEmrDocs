---
sidebar_position: 2
---

# Persyaratan Teknis

Aplikasi Rekam Medis Elektronik yang terkoneksi dengan Satu Sehat memerlukan lingkungan yang sesuai dengan spesifikasi teknis berikut:

## 1. Persyaratan Server Laravel 11

- **Versi PHP**: PHP 8.2 atau lebih tinggi.
- **Ekstensi PHP yang Dibutuhkan**:
  - BCMath
  - Ctype
  - Fileinfo
  - JSON
  - Mbstring
  - OpenSSL
  - PDO
  - Tokenizer
  - XML
  - Redis (opsional untuk caching).
- **Database**:
  - MySQL 8.0+ / MariaDB 10.3+
  - PostgreSQL 13+
  - SQLite 3.9+
- **Web Server**:
  - Apache (dengan mod_rewrite diaktifkan)
  - Nginx.
- **Composer**: Versi terbaru untuk mengelola dependensi.

## 2. Persyaratan Node.js

- **Versi Node.js**: Node.js 18.x atau lebih tinggi.
- **Package Manager**: NPM (minimal versi 8.x) atau Yarn untuk mengelola dependensi front-end.
- **Framework Front-End yang Direkomendasikan**: Vue.js (versi 3.x) untuk antarmuka pengguna.
- **Build Tools**:
  - Vite atau Webpack untuk pengelolaan modul front-end.

## 3. Infrastruktur Tambahan

- **Sistem Operasi Server**:
  - Linux (Debian 12 / Ubuntu 22.04 / CentOS 8 atau lebih baru).
- **RAM Minimum**: 2GB (4GB direkomendasikan untuk lingkungan produksi).
- **Penyimpanan**: SSD dengan minimal 50GB ruang kosong.
- **Jaringan**:
  - Koneksi internet stabil untuk integrasi dengan Satu Sehat.
  - Port yang dibuka: 80 (HTTP), 443 (HTTPS).
- **SSL**: Sertifikat SSL valid untuk enkripsi data.

Dengan memenuhi persyaratan di atas, aplikasi dapat berjalan secara optimal dan mendukung integrasi penuh dengan Satu Sehat.

