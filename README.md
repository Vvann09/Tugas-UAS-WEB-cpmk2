# Sistem Web Input & Tabel Data Layanan

Tugas SUB-CPMK-07-2-8 — Website sederhana untuk input data melalui form dan menampilkannya di tabel, menggunakan HTML, CSS, dan JavaScript.

## Struktur File

```
project/
├── index.html      # Halaman form input data
├── tabel.html       # Halaman tabel data
├── css/
│   └── style.css    # Styling (responsif)
├── js/
│   └── script.js     # Logika JavaScript (simpan & tampilkan data)
└── README.md
```

## Fitur

- Form input dengan field: **Nama, NIM, Jenis Layanan, Keterangan**
- Data diproses dengan JavaScript dan disimpan di `localStorage` browser
- Halaman tabel menampilkan seluruh data yang sudah diinput
- Bisa hapus data per baris atau hapus semua sekaligus
- Layout responsif (mobile & desktop)

## Cara Menjalankan

1. Download / clone folder ini.
2. Buka file `index.html` langsung di browser (double click, atau gunakan Live Server di VS Code).
3. Isi form, klik **Simpan Data**.
4. Klik menu **Tabel Data** di navbar untuk melihat data yang sudah diinput.

## Cara Upload ke GitHub (poin 5: Project dikelola dengan Git & GitHub)

Jalankan perintah berikut di terminal, di dalam folder project ini:

```bash
git init
git add .
git commit -m "Initial commit: sistem input dan tabel data layanan"
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA-REPO.git
git push -u origin main
```

Setelah itu, cantumkan link repository GitHub pada laporan/tugas sebagai bagian dari **Output**.

## Catatan

- Data tersimpan di `localStorage`, artinya data hanya tersimpan di browser yang sama (tidak ada database/server).
- Jika ingin reset semua data, gunakan tombol **Hapus Semua Data** di halaman tabel, atau clear localStorage lewat DevTools browser.
