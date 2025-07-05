# 🎮 Game Kuis Cepat (Web-based Quiz App)

**Game Kuis Cepat** adalah aplikasi kuis interaktif berbasis web yang memungkinkan pengguna menjawab pertanyaan dengan waktu terbatas. Cocok untuk edukasi, hiburan, atau latihan soal. Soal dapat diacak, diunggah dari file `.json`, dan dilengkapi timer serta skor akhir.

## 🚀 Fitur Utama

- ✅ 20 soal default campuran (sejarah, sains, umum, dll)
- 🔀 Pertanyaan & opsi jawaban diacak setiap kali main
- ⏱️ Timer per soal (10 detik) dengan progress bar
- 📝 Dukungan upload soal dari file `.json`
- 📊 Skor akhir ditampilkan secara real-time
- 🎨 Desain modern dengan tema profesional

---

## 📂 Struktur Proyek

kuis-cepat/
├── index.html # Struktur tampilan utama
├── style.css # Desain dan tampilan aplikasi
├── script.js # Logika kuis dan interaksi
└── soal.json # (Opsional) Contoh soal eksternal


---

## 📥 Cara Menjalankan

1. **Clone atau unduh** repositori ini
2. Buka file `index.html` langsung di browser (offline atau online)
3. Klik tombol **"Mulai Kuis"** untuk memulai kuis
4. (Opsional) Klik **"Upload Soal (.json)"** untuk mengganti soal bawaan

---

## 📁 Format File Soal (.json)

Untuk mengunggah soal sendiri, gunakan format berikut:

```json
[
  {
    "question": "Apa warna bendera Jepang?",
    "options": ["Putih & Merah", "Merah & Putih", "Putih & Biru", "Merah & Hitam"],
    "answer": "Putih & Merah"
  },
  {
    "question": "Berapa hasil dari 10 + 5?",
    "options": ["10", "15", "20", "25"],
    "answer": "15"
  }
]
