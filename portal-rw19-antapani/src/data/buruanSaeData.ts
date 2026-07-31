export interface Komoditas {
  id: string;
  nama: string;
  kategori: "Hidroponik" | "Pekarangan" | "Kolam Gizi" | "Tanaman Obat";
  deskripsi: string;
  siklusPanen: string;
  image: string;
}

export interface TitikKebun {
  nama: string;
  lokasi: string;
  pengelola: string;
  fokus: string;
}

export interface JadwalPanen {
  tanggal: string;
  kegiatan: string;
  lokasi: string;
}

export const KOMODITAS_LIST: Komoditas[] = [
  {
    id: "1",
    nama: "Pakcoy & Caisim Hidroponik",
    kategori: "Hidroponik",
    deskripsi:
      "Budidaya sayuran segar instalasi NFT hidroponik warga tanpa pestisida kimia.",
    siklusPanen: "30 - 35 Hari",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "2",
    nama: "Cabai Rawit & Terung Polybag",
    kategori: "Pekarangan",
    deskripsi:
      "Pemanfaatan pekarangan rumah warga untuk tanaman pangan harian keluarga.",
    siklusPanen: "2 - 3 Bulan",
    image:
      "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "3",
    nama: "Kolam Gizi Lele & Nila",
    kategori: "Kolam Gizi",
    deskripsi:
      "Budidaya ikan air tawar sistem bioflok untuk konsumsi gizi warga RW 19.",
    siklusPanen: "3 Bulan",
    image:
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "4",
    nama: "Tanaman Obat Keluarga (TOGA)",
    kategori: "Tanaman Obat",
    deskripsi:
      "Koleksi jahe merah, kunyit, dan temulawak yang dikelola Kelompok Wanita Tani.",
    siklusPanen: "Berkala",
    image:
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600",
  },
];

export const TITIK_KEBUN: TitikKebun[] = [
  {
    nama: "Kebun Bibit Utama RW 19",
    lokasi: "Samping Lapangan RT 02",
    pengelola: "KWT (Kelompok Wanita Tani) Anggrek 19",
    fokus: "Penyemaian bibit, rumah kompos, & greenhouse hidroponik.",
  },
  {
    nama: "Kolam Gizi Bioflok",
    lokasi: "Area Komunitas RT 04",
    pengelola: "Tim Ketahanan Pangan RW 19",
    fokus: "Budidaya lele & nila untuk pencegahan stunting warga.",
  },
  {
    nama: "Sudut Herbal & TOGA",
    lokasi: "Pekarangan Posyandu RW 19",
    pengelola: "Kader PKK & Ibu Warga",
    fokus: "Tanaman obat tradisional & edukasi herbal.",
  },
];

export const JADWAL_PANEN: JadwalPanen[] = [
  {
    tanggal: "15 Agustus 2026",
    kegiatan: "Panen Raya Pakcoy Hidroponik & Pembagian ke Lansia",
    lokasi: "Greenhouse RT 02",
  },
  {
    tanggal: "28 Agustus 2026",
    kegiatan: "Pelatihan Pembuatan Kompos Organik Mandiri",
    lokasi: "Balai RW 19",
  },
  {
    tanggal: "10 September 2026",
    kegiatan: "Panen Parsial Kolam Gizi Bioflok Lele",
    lokasi: "Area Kolam RT 04",
  },
];
