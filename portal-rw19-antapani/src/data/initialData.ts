import type {
  UmkmItem,
  BeritaItem,
  CctvItem,
  AparatItem,
} from "../components/AdminPage";

export const INITIAL_PENGADUAN: any[] = [
  {
    id: "1",
    rt: "01",
    nama: "Deden Supriatna",
    pesan:
      "Usulan penambahan bibit cabai dan sayuran untuk kelompok tani RW 19.",
    tanggal: "3 Agustus 2026",
    status: "Diproses",
  },
  {
    id: "2",
    rt: "02",
    nama: "Ibu Nurhayati",
    pesan: "Jadwal gotong royong pembersihan media tanam hidroponik.",
    tanggal: "1 Agustus 2026",
    status: "Menunggu",
  },
];

export const INITIAL_UMKM: UmkmItem[] = [
  {
    id: 1,
    nama: "Kerajinan Daur Ulang Urban RW 19",
    kategori: "Kerajinan",
    harga: "Rp 50.000 / pcs",
    desc: "Pot tanaman kreatif dan dekorasi dari barang bekas hasil karya warga RW 19 Antapani.",
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    nama: "Olahan Herbal & Jamu Sehat Toga",
    kategori: "Kuliner",
    harga: "Rp 20.000 / botol",
    desc: "Produk minuman sehat dari tanaman obat keluarga (Toga) warga Antapani.",
    image:
      "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&q=80&w=800",
  },
];

export const INITIAL_BERITA: BeritaItem[] = [
  {
    id: 1,
    judul: "Panen Raya Sayuran Organik Bersama Warga RW 19",
    kategori: "Kegiatan",
    tanggal: "2 Agustus 2026",
    desc: "Warga Antapani kembali memanen puluhan kilogram bayam dan cabai segar dari pekarangan Buruan Sae.",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    judul: "Pelatihan Teknik Pengomposan Tanah Urban Farming",
    kategori: "Edukasi",
    tanggal: "28 Juli 2026",
    desc: "Edukasi pengolahan sampah organik rumah tangga menjadi pupuk kompos berkualitas tinggi di Antapani.",
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800",
  },
];

export const INITIAL_CCTV: CctvItem[] = [
  {
    id: 1,
    name: "Kamera 01 - Area Kebun Utama RT 01",
    loc: "Sektor Barat RW 19",
    img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    name: "Kamera 02 - Green House Pembibitan RT 02",
    loc: "Sektor Tengah Antapani",
    img: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "Kamera 03 - Area Hidroponik & Toga RT 03",
    loc: "Sektor Timur RW 19",
    img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    name: "Kamera 04 - Pos Ronda & Gate Utama RW 19",
    loc: "Jl. Antapani Raya",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    name: "Kamera 05 - Bank Sampah & Pengomposan RT 04",
    loc: "Sektor Selatan RW 19",
    img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
  },
];

export const INITIAL_APARAT: AparatItem[] = [
  {
    id: 1,
    nama: "Bapak H. Dadang M.",
    jabatan: "Ketua RW 19 Antapani",
    kontak: "0812-3456-7890",
  },
  {
    id: 2,
    nama: "Ibu Siti Aminah",
    jabatan: "Pengelola Program Buruan Sae",
    kontak: "0813-9876-5432",
  },
];
