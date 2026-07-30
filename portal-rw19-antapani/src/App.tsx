import React, { useState } from "react";
import {
  MapPin,
  ShoppingBag,
  Video,
  MessageSquare,
  ShieldCheck,
  Leaf,
  Send,
  ExternalLink,
  X,
  Radio,
  CheckCircle2,
  Phone,
  Store,
  Tag,
  Newspaper,
  Users,
} from "lucide-react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

// Data Dummy Statistik (Recharts)
const dataDemografi = [
  { name: "Usia Produktif (18-59)", value: 650 },
  { name: "Anak-Anak / Remaja (0-17)", value: 320 },
  { name: "Lanjut Usia (60+)", value: 180 },
];
const COLORS = ["#10b981", "#3b82f6", "#f59e0b"];

// Data Dummy Berita & Mading Digital
const beritaList = [
  {
    id: 1,
    judul: "Panen Raya Kebun Hidroponik Buruan Sae RW 19 Antapani Tengah",
    tanggal: "22 Juli 2026",
    kategori: "Buruan Sae",
    gambar:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&auto=format&fit=crop&q=80",
    ringkasan:
      "Warga RW 19 berhasil memanen lebih dari 50 kg sayuran segar organik siap saji.",
    isi: "Kelompok Wanita Tani (KWT) RW 19 Antapani Tengah mengadakan panen raya hasil pemanfaatan pekarangan Buruan Sae. Hasil panen berupa kangkung, bayam merah, dan pakcoy didistribusikan kepada warga lokal serta dipasarkan melalui etalase UMKM portal digital RW 19.",
  },
  {
    id: 2,
    judul: "Kerja Bakti Penataan Saluran Air & Pemilahan Sampah Organik",
    tanggal: "19 Juli 2026",
    kategori: "Lingkungan",
    gambar:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&auto=format&fit=crop&q=80",
    ringkasan:
      "Aksi gotong royong warga RW 19 membersihkan drainase utama dan pembuatan kompos.",
    isi: "Dalam rangka menjaga kebersihan lingkungan dan mengolah limbah rumah tangga, pengurus RW 19 menggerakkan kerja bakti serentak. Selain membersihkan saluran air, warga diajarkan teknik biopori dan pemilahan sampah organik untuk pupuk kebun Buruan Sae.",
  },
  {
    id: 3,
    judul: "Pemasangan Titik CCTV Baru di Sektor Pertigaan Pos Ronda 2",
    tanggal: "14 Juli 2026",
    kategori: "Keamanan",
    gambar:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&auto=format&fit=crop&q=80",
    ringkasan:
      "Peningkatan fasilitas keamanan lingkungan terpantau 24 jam secara real-time.",
    isi: "Tim Keamanan RW 19 bersama warga meresmikan penambahan titik kamera CCTV publik di area rawan keramaian. Kamera ini terintegrasi langsung dengan portal web RW 19 sehingga memudahkan pemantauan wilayah secara daring.",
  },
];

// Data Dummy UMKM
const umkmList = [
  {
    id: 1,
    nama: "Hidroponik Buruan Sae 19",
    kategori: "Pertanian",
    harga: "Rp 10.000 / ikat",
    penjual: "Ibu Nurhayati (KWT RT 02)",
    kontak: "6281234567890",
    deskripsi:
      "Sayuran segar organik bebas pestisida dipetik langsung dari kebun Buruan Sae RW 19. Tersedia bayam, kangkung, pakcoy, dan selada.",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=500",
  },
  {
    id: 2,
    nama: "Olahan Sambal Buruan Sae",
    kategori: "Kuliner",
    harga: "Rp 25.000 / jar",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=500",
    penjual: "Dapur Ibu Rina (RT 04)",
    kontak: "6281298765432",
    deskripsi:
      "Sambal rumahan khas RW 19 buatan warga lokal menggunakan cabai pilihan hasil kebun sendiri. Tanpa bahan pengawet sintesis.",
  },
  {
    id: 3,
    nama: "Kerajinan Daur Ulang Kreatif",
    kategori: "Kreatif",
    harga: "Rp 50.000 / pcs",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500",
    penjual: "Komunitas Kreatif Ibu PKK",
    kontak: "6285712341234",
    deskripsi:
      "Aneka pot bunga hias, tempat tisu, dan tas cantik hasil pemanfaatan limbah plastik daur ulang ramah lingkungan warga Antapani.",
  },
];

// Data Dummy CCTV
const cctvList = [
  {
    id: 1,
    nama: "Kamera 01 - Pos Utama RW 19",
    lokasi: "Gapura Masuk Utama RT 01",
    status: "LIVE",
    pengawas: "Tim Ronda Pos 1",
    preview:
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    nama: "Kamera 02 - Kebun Buruan Sae",
    lokasi: "Area Green House & Tanaman",
    status: "LIVE",
    pengawas: "KWT Buruan Sae 19",
    preview:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    nama: "Kamera 03 - Lapangan Serbaguna",
    lokasi: "Taman Olahraga Warga",
    status: "LIVE",
    pengawas: "Karang Taruna RW 19",
    preview:
      "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    nama: "Kamera 04 - Pertigaan Gang 4",
    lokasi: "Jalur Utama Gang 4 / Pos 2",
    status: "LIVE",
    pengawas: "Tim Ronda Pos 2",
    preview:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    nama: "Kamera 05 - Pos Keamanan Barat",
    lokasi: "Sektor Barat RW 19",
    status: "OFFLINE",
    pengawas: "Seksi Keamanan RW",
    preview: "",
  },
];

// Data Dummy Aparat / Pengurus RW 19
const aparatList = [
  {
    id: 1,
    nama: "H. Bambang Sutrisno",
    jabatan: "Ketua RW 19",
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    peran: "Pimpinan Wilayah",
  },
  {
    id: 2,
    nama: "Drs. Eko Prasetyo",
    jabatan: "Sekretaris RW 19",
    foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    peran: "Administrasi & Data",
  },
  {
    id: 3,
    nama: "Hj. Ratna Pertiwi",
    jabatan: "Bendahara RW 19",
    foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    peran: "Keuangan & Kas",
  },
  {
    id: 4,
    nama: "Ahmad Suhendar",
    jabatan: "Ketua Seksi Buruan Sae",
    foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
    peran: "Pengembang Ketahanan Pangan",
  },
];

function App() {
  // State Modals
  const [selectedCctv, setSelectedCctv] = useState<(typeof cctvList)[0] | null>(
    null,
  );
  const [selectedUmkm, setSelectedUmkm] = useState<(typeof umkmList)[0] | null>(
    null,
  );
  const [selectedBerita, setSelectedBerita] = useState<
    (typeof beritaList)[0] | null
  >(null);
  const [showLaporSuccess, setShowLaporSuccess] = useState(false);

  // Form State
  const [formLapor, setFormLapor] = useState({ nama: "", pesan: "" });

  const handleSubmitLapor = (e: React.FormEvent) => {
    e.preventDefault();
    setShowLaporSuccess(true);
    setFormLapor({ nama: "", pesan: "" });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-emerald-500 selection:text-white scroll-smooth">
      {/* 1. NAVBAR DENGAN LOGO JABAR */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 px-6 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
          <img
            src="/logojabar.jpg"
            alt="Logo Jawa Barat"
            className="h-10 w-auto object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/logojabar.png";
            }}
          />
          <div>
            <span className="font-bold text-lg block text-emerald-800 leading-tight">
              RW 19 Antapani Tengah
            </span>
            <span className="text-xs text-emerald-600 font-medium">
              Program Buruan Sae
            </span>
          </div>
        </div>

        <div className="hidden lg:flex gap-6 font-medium text-slate-600 text-sm">
          <a href="#hero" className="hover:text-emerald-600 transition">
            Beranda
          </a>
          <a href="#profil" className="hover:text-emerald-600 transition">
            Profil
          </a>
          <a href="#statistik" className="hover:text-emerald-600 transition">
            Statistik
          </a>
          <a href="#umkm" className="hover:text-emerald-600 transition">
            UMKM
          </a>
          <a href="#berita" className="hover:text-emerald-600 transition">
            Berita
          </a>
          <a href="#cctv" className="hover:text-emerald-600 transition">
            CCTV
          </a>
          <a href="#aparat" className="hover:text-emerald-600 transition">
            Aparat
          </a>
        </div>

        <a
          href="#pengaduan"
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-sm transition flex items-center gap-2"
        >
          <MessageSquare className="w-4 h-4" />
          Pengaduan Warga
        </a>
      </nav>

      {/* 2. HERO SECTION */}
      <section
        id="hero"
        className="relative bg-cover bg-center py-28 px-6 text-center overflow-hidden"
        style={{
          backgroundImage:
            "url('/bg-hero.jpg'), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-emerald-950/80 to-slate-950/90 backdrop-blur-[2px]"></div>

        <div className="max-w-4xl mx-auto relative z-10 text-white">
          <span className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-200 text-xs font-semibold px-4 py-1.5 rounded-full border border-emerald-400/30 mb-4 backdrop-blur-md">
            <Leaf className="w-3.5 h-3.5 text-emerald-300" /> Portal Digital
            Wilayah RW 19
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Inovasi Mandiri Pangan & Digitalisasi <br />
            <span className="text-emerald-300">"Buruan Sae" RW 19</span>
          </h1>
          <p className="mt-4 text-emerald-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Mewujudkan lingkungan RW 19 Antapani Tengah yang hijau, transparan,
            aman, dan berdaya secara ekonomi melalui integrasi portal digital.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#umkm"
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-6 py-3 rounded-xl font-bold shadow-lg transition flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" /> Jelajahi UMKM
            </a>
            <a
              href="#cctv"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-xl font-bold transition flex items-center gap-2 backdrop-blur-md"
            >
              <Video className="w-4 h-4" /> Pantau CCTV
            </a>
          </div>
        </div>
      </section>

      {/* 3. PROFIL & GOOGLE MAPS EMBEDDED */}
      <section id="profil" className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-emerald-600 font-bold text-sm uppercase tracking-wider">
              Tentang Wilayah
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">
              Program Unggulan Buruan Sae
            </h2>
            <p className="text-slate-600 mt-4 leading-relaxed">
              RW 19 Antapani Tengah berfokus pada pemanfaatan pekarangan untuk
              ketahanan pangan keluarga (Buruan Sae). Melalui portal ini,
              informasi kegiatan warga, potensi ekonomi lokal, dan fasilitas
              keamanan terintegrasi secara digital.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-slate-700">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>Pemantauan Wilayah Lingkungan 24/7</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <Leaf className="w-5 h-5 text-emerald-600" />
                <span>Pemberdayaan Kebun Organik Warga</span>
              </div>
            </div>
          </div>

          <div className="relative h-80 rounded-3xl overflow-hidden border border-slate-200/80 shadow-md group">
            <iframe
              title="Peta Lokasi Antapani Tengah"
              src="https://maps.google.com/maps?q=-6.9142,107.6588&z=15&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <a
              href="https://maps.google.com/?q=Antapani+Tengah+Bandung"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-3 bg-white/90 hover:bg-emerald-600 hover:text-white text-slate-800 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-slate-200 text-xs font-bold shadow-lg transition flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Buka Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* 4. STATISTIK DEMOGRAFI (LENGKAP DENGAN DETIL PENJELASAN DATA) */}
      <section
        id="statistik"
        className="bg-white border-y border-slate-200 py-16 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-emerald-600 font-bold text-sm uppercase tracking-wider">
              Data Warga & Wilayah
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mt-1">
              Statistik Demografi Publik
            </h2>
            <p className="text-slate-500 text-xs mt-2">
              Transparansi data kependudukan dan sebaran kelompok usia warga RW
              19 Antapani Tengah
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 items-stretch">
            {/* Chart & Detail Breakdown Card */}
            <div className="lg:col-span-2 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 flex flex-col justify-between">
              <h3 className="font-bold text-slate-800 text-base mb-4 flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-600" />
                Distribusi Kelompok Usia Penduduk
              </h3>

              <div className="grid sm:grid-cols-2 gap-6 items-center">
                {/* Donut Chart dengan Centered Text */}
                <div className="h-60 relative flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={dataDemografi}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={85}
                        paddingAngle={4}
                        dataKey="value"
                      >
                        {dataDemografi.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(val: any) => [`${val} Jiwa`, "Jumlah"]}
                        contentStyle={{
                          borderRadius: "12px",
                          border: "1px solid #e2e8f0",
                          fontSize: "12px",
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>

                  {/* Label Total Jiwa di Tengah Donut */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-2xl font-black text-slate-900">
                      1,150
                    </span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                      Total Jiwa
                    </span>
                  </div>
                </div>

                {/* Rincian Kartu Penjelasan Usia */}
                <div className="space-y-3">
                  <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-sm hover:border-emerald-300 transition">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>{" "}
                        Usia Produktif
                      </span>
                      <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                        56.5%
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                      <strong className="text-slate-700">650 Jiwa</strong>{" "}
                      (18–59 thn) — Penggerak utama ekonomi UMKM & kegiatan
                      kebun Buruan Sae.
                    </p>
                  </div>

                  <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-sm hover:border-blue-300 transition">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>{" "}
                        Anak & Remaja
                      </span>
                      <span className="text-xs font-extrabold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                        27.8%
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                      <strong className="text-slate-700">320 Jiwa</strong> (0–17
                      thn) — Generasi muda pelajar & aktif dalam kegiatan Karang
                      Taruna.
                    </p>
                  </div>

                  <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-sm hover:border-amber-300 transition">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>{" "}
                        Lanjut Usia
                      </span>
                      <span className="text-xs font-extrabold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">
                        15.7%
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                      <strong className="text-slate-700">180 Jiwa</strong> (60+
                      thn) — Terdata dalam program pemantauan kesehatan Posyandu
                      Lansia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Panel Ringkasan Kependudukan Sisi Kanan */}
            <div className="flex flex-col justify-between gap-4">
              <div className="bg-emerald-600 text-white p-6 rounded-3xl shadow-sm flex flex-col justify-between flex-1">
                <div>
                  <span className="text-xs text-emerald-100 font-bold uppercase tracking-wider">
                    Total Populasi Terdaftar
                  </span>
                  <p className="text-4xl font-black text-white mt-1">
                    1,150{" "}
                    <span className="text-sm font-normal text-emerald-100">
                      Jiwa
                    </span>
                  </p>
                  <p className="text-xs text-emerald-100 mt-2 leading-relaxed">
                    Tersebar di 6 wilayah RT dengan tingkat kelengkapan data
                    digital warga mencapai{" "}
                    <strong className="text-white">98%</strong>.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-emerald-500 text-[11px] flex justify-between font-semibold text-emerald-100">
                  <span>Rasio Gender:</span>
                  <span className="text-white">51% Pria | 49% Wanita</span>
                </div>
              </div>

              <div className="bg-white border border-slate-200/80 p-6 rounded-3xl shadow-sm space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">
                    Kepala Keluarga (KK)
                  </span>
                  <p className="text-3xl font-extrabold text-slate-900 mt-1">
                    340{" "}
                    <span className="text-xs text-slate-500 font-normal">
                      KK Aktif
                    </span>
                  </p>
                </div>
                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-xs text-slate-600 space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span>KK Penerima Buruan Sae:</span>
                    <strong className="text-emerald-700 font-bold">
                      125 KK
                    </strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Pelaku UMKM Terdata:</span>
                    <strong className="text-emerald-700 font-bold">
                      45 Usaha
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. KATALOG UMKM */}
      <section id="umkm" className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
          <div>
            <span className="text-emerald-600 font-bold text-sm uppercase tracking-wider">
              Produk Lokal
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mt-1">
              Katalog UMKM Warga
            </h2>
            <p className="text-slate-500 text-xs mt-1">
              Klik pada produk untuk melihat detail dan kontak penjual
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {umkmList.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedUmkm(item)}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.nama}
                    className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-bold text-emerald-800 bg-emerald-100/90 backdrop-blur-sm px-2.5 py-1 rounded-md border border-emerald-200">
                    {item.kategori}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-slate-900 text-lg group-hover:text-emerald-600 transition line-clamp-1">
                    {item.nama}
                  </h3>
                  <p className="text-emerald-700 font-extrabold text-sm mt-1">
                    {item.harga}
                  </p>
                  <p className="text-slate-500 text-xs mt-2 line-clamp-2 leading-relaxed">
                    {item.deskripsi}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-0">
                <button className="w-full bg-emerald-50 hover:bg-emerald-600 hover:text-white text-emerald-700 font-bold text-xs py-2.5 rounded-xl border border-emerald-200 transition flex items-center justify-center gap-1.5">
                  <ShoppingBag className="w-3.5 h-3.5" /> Lihat Detail Produk
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- MODAL DETAIL UMKM --- */}
      {selectedUmkm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white text-slate-900 rounded-3xl max-w-xl w-full border border-emerald-100 overflow-hidden shadow-2xl relative">
            <div className="relative">
              <img
                src={selectedUmkm.image}
                alt={selectedUmkm.nama}
                className="w-full h-56 object-cover"
              />
              <button
                onClick={() => setSelectedUmkm(null)}
                className="absolute top-3 right-3 bg-slate-900/70 hover:bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition backdrop-blur-sm"
              >
                <X className="w-4 h-4" />
              </button>
              <span className="absolute bottom-3 left-3 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                {selectedUmkm.kategori}
              </span>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {selectedUmkm.nama}
                </h3>
                <p className="text-emerald-600 font-black text-xl mt-1">
                  {selectedUmkm.harga}
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-700 font-semibold">
                  <Store className="w-4 h-4 text-emerald-600" />
                  <span>Pemilik: {selectedUmkm.penjual}</span>
                </div>
                <div className="flex items-start gap-2 text-slate-600 pt-1">
                  <Tag className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">{selectedUmkm.deskripsi}</p>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${selectedUmkm.kontak}?text=Halo%20${encodeURIComponent(selectedUmkm.penjual)},%20saya%20tertarik%20membeli%20${encodeURIComponent(selectedUmkm.nama)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl text-xs transition shadow-md flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" /> Beli / Pesan via WhatsApp
                </a>
                <button
                  onClick={() => setSelectedUmkm(null)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-5 py-3 rounded-xl text-xs transition"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 6. BERITA & INFORMASI PUBLIK (PAPAN MADING DIGITAL) */}
      <section id="berita" className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-emerald-600 font-bold text-sm uppercase tracking-wider flex items-center gap-1.5">
              <Newspaper className="w-4 h-4" /> Mading Digital RW 19
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mt-1">
              Berita & Informasi Publik
            </h2>
            <p className="text-slate-500 text-xs mt-1">
              Kabar kegiatan warga, agenda Buruan Sae, dan pengumuman lingkungan
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {beritaList.map((berita) => (
            <div
              key={berita.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src={berita.gambar}
                    alt={berita.judul}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=500";
                    }}
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-bold text-emerald-800 bg-emerald-100/90 backdrop-blur-sm px-2.5 py-1 rounded-md border border-emerald-200">
                    {berita.kategori}
                  </span>
                </div>
                <div className="p-5">
                  <span className="text-[11px] font-semibold text-slate-400 block mb-1">
                    {berita.tanggal}
                  </span>
                  <h3 className="font-bold text-slate-900 text-base leading-snug line-clamp-2">
                    {berita.judul}
                  </h3>
                  <p className="text-slate-500 text-xs mt-2 leading-relaxed line-clamp-3">
                    {berita.ringkasan}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-0">
                <button
                  onClick={() => setSelectedBerita(berita)}
                  className="w-full bg-emerald-50 hover:bg-emerald-600 hover:text-white text-emerald-700 font-bold text-xs py-2.5 rounded-xl border border-emerald-200 transition flex items-center justify-center gap-1"
                >
                  Baca Selengkapnya →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- MODAL DETAIL BERITA --- */}
      {selectedBerita && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white text-slate-900 rounded-3xl max-w-2xl w-full border border-emerald-100 overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col">
            <div className="relative">
              <img
                src={selectedBerita.gambar}
                alt={selectedBerita.judul}
                className="w-full h-56 object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=500";
                }}
              />
              <button
                onClick={() => setSelectedBerita(null)}
                className="absolute top-3 right-3 bg-slate-900/70 hover:bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition backdrop-blur-sm"
              >
                <X className="w-4 h-4" />
              </button>
              <span className="absolute bottom-3 left-3 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                {selectedBerita.kategori}
              </span>
            </div>

            <div className="p-6 overflow-y-auto space-y-4">
              <span className="text-xs text-slate-400 font-semibold block">
                Dipublikasikan: {selectedBerita.tanggal}
              </span>

              <h3 className="text-xl font-bold text-slate-900 leading-snug">
                {selectedBerita.judul}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed pt-3 border-t border-slate-100">
                {selectedBerita.isi}
              </p>

              <div className="pt-4 text-right">
                <button
                  onClick={() => setSelectedBerita(null)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition"
                >
                  Tutup Berita
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 7. CCTV LIVE STREAM */}
      <section id="cctv" className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-between items-end mb-2">
            <div className="text-left">
              <span className="text-emerald-400 font-bold text-sm uppercase tracking-wider">
                Keamanan Lingkungan
              </span>
              <h2 className="text-3xl font-bold mt-1">CCTV Publik RW 19</h2>
            </div>
            <span className="text-xs text-slate-400 hidden sm:block">
              Klik kamera untuk membuka stream tayangan live →
            </span>
          </div>

          <div className="mt-6 flex gap-6 overflow-x-auto pb-6 scrollbar-thin snap-x text-left">
            {cctvList.map((cam) => (
              <div
                key={cam.id}
                onClick={() => setSelectedCctv(cam)}
                className="min-w-[300px] sm:min-w-[360px] bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden relative snap-start flex-shrink-0 cursor-pointer hover:border-emerald-400 hover:shadow-xl transition group"
              >
                <div className="aspect-video bg-black/60 flex flex-col items-center justify-center text-slate-400 relative">
                  <span
                    className={`absolute top-3 right-3 text-[10px] font-mono font-bold px-2 py-0.5 rounded ${cam.status === "LIVE" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 animate-pulse" : "bg-slate-700 text-slate-400"}`}
                  >
                    ● {cam.status}
                  </span>
                  <Video className="w-10 h-10 text-emerald-400 mb-2 group-hover:scale-110 transition duration-300" />
                  <span className="text-xs font-semibold text-emerald-300 group-hover:underline">
                    Klik Tampilkan Stream
                  </span>
                </div>
                <div className="p-4 bg-slate-800/90">
                  <h4 className="font-bold text-sm text-white group-hover:text-emerald-300 transition">
                    {cam.nama}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">{cam.lokasi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MODAL POP-UP CCTV RW 19 --- */}
      {selectedCctv && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-900 text-white rounded-3xl max-w-4xl w-full border border-slate-800 overflow-hidden shadow-2xl relative flex flex-col md:flex-row">
            <div className="md:w-7/12 bg-slate-950 p-4 sm:p-6 flex flex-col justify-between relative min-h-[280px]">
              <div className="flex justify-between items-center text-white z-10 mb-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold bg-emerald-600 px-3 py-1 rounded-full text-slate-950 shadow-md">
                  <Radio className="w-3.5 h-3.5 animate-pulse text-slate-950" />{" "}
                  STREAM RW 19
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  POS SECURITY MONITOR
                </span>
              </div>

              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center my-auto">
                {selectedCctv.status === "LIVE" ? (
                  <>
                    <img
                      src={selectedCctv.preview}
                      alt="CCTV Live Stream RW 19"
                      className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-sm text-emerald-400 text-[10px] font-mono px-2.5 py-1 rounded-md border border-emerald-500/30">
                      🔴 LIVE 1080p | 60 FPS
                    </div>
                  </>
                ) : (
                  <div className="text-center p-4 text-slate-400">
                    <Video className="w-10 h-10 mx-auto text-rose-500 mb-2" />
                    <p className="text-xs font-bold text-rose-400">
                      Kamera Tidak Aktif
                    </p>
                    <p className="text-[10px] text-slate-500 mt-1">
                      Sedang dalam perbaikan jaringan lokal
                    </p>
                  </div>
                )}
              </div>

              <div className="text-[10px] text-slate-400 font-mono mt-3 flex justify-between">
                <span>Latensi: ~12ms</span>
                <span>Koneksi: Terproteksi RW 19</span>
              </div>
            </div>

            <div className="md:w-5/12 p-6 flex flex-col justify-between bg-slate-900 border-t md:border-t-0 md:border-l border-slate-800/80">
              <div>
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Pemantauan Buruan Sae
                  </span>
                  <button
                    onClick={() => setSelectedCctv(null)}
                    className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800 transition"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <h3 className="font-bold text-white text-lg mt-3 leading-snug">
                  {selectedCctv.nama}
                </h3>

                <div className="mt-5 space-y-3 text-xs">
                  <div className="flex items-start gap-2.5 bg-slate-800/50 p-3 rounded-xl border border-slate-800">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-200">
                        Titik Lokasi:
                      </strong>
                      <span className="text-slate-400">
                        {selectedCctv.lokasi}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 bg-slate-800/50 p-3 rounded-xl border border-slate-800">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-200">
                        Penanggung Jawab:
                      </strong>
                      <span className="text-slate-400">
                        {selectedCctv.pengawas}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 bg-slate-800/50 p-3 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-200">
                        Status Sistem:
                      </strong>
                      <span
                        className={
                          selectedCctv.status === "LIVE"
                            ? "text-emerald-400 font-bold"
                            : "text-rose-400 font-bold"
                        }
                      >
                        {selectedCctv.status === "LIVE"
                          ? "🟢 Online (Normal)"
                          : "🔴 Offline"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-2">
                <a
                  href="#pengaduan"
                  onClick={() => setSelectedCctv(null)}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold py-2.5 rounded-xl text-xs shadow-md transition block text-center"
                >
                  Lapor Kendala CCTV
                </a>
                <button
                  onClick={() => setSelectedCctv(null)}
                  className="w-full bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold py-2 rounded-xl text-xs transition"
                >
                  Tutup Pop-up
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 8. APARAT / PENGURUS RW 19 */}
      <section id="aparat" className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <span className="text-emerald-600 font-bold text-sm uppercase tracking-wider">
            Struktur Pemerintahan
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mt-1">
            Aparat & Pengurus RW 19
          </h2>
          <p className="text-slate-500 text-sm mt-2">
            Jajaran perangkat pengurus yang siap melayani kebutuhan warga
            Antapani Tengah.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {aparatList.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition"
            >
              <img
                src={item.foto}
                alt={item.nama}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-emerald-500"
              />
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full inline-block mb-2">
                {item.peran}
              </span>
              <h3 className="font-bold text-slate-900 text-base">
                {item.nama}
              </h3>
              <p className="text-slate-500 text-xs mt-1">{item.jabatan}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. LAYANAN PENGADUAN */}
      <section id="pengaduan" className="max-w-3xl mx-auto px-6 py-16">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm text-center">
          <MessageSquare className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
          <h2 className="text-2xl font-bold text-slate-900">
            Layanan Pengaduan & Aspirasi
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Sampaikan masukan atau laporan fasilitas warga secara online.
          </p>

          <form
            className="mt-6 text-left space-y-4"
            onSubmit={handleSubmitLapor}
          >
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Nama Lengkap
              </label>
              <input
                type="text"
                required
                placeholder="Masukkan nama..."
                value={formLapor.nama}
                onChange={(e) =>
                  setFormLapor({ ...formLapor, nama: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Pesan / Laporan
              </label>
              <textarea
                rows={3}
                required
                placeholder="Tuliskan aspirasi atau laporan..."
                value={formLapor.pesan}
                onChange={(e) =>
                  setFormLapor({ ...formLapor, pesan: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl shadow-md transition flex justify-center items-center gap-2 text-sm"
            >
              <Send className="w-4 h-4" /> Kirim Laporan
            </button>
          </form>
        </div>
      </section>

      {/* --- MODAL POP-UP BERHASIL KIRIM PENGADUAN --- */}
      {showLaporSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white text-slate-900 rounded-3xl max-w-sm w-full border border-emerald-100 p-6 text-center shadow-2xl space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl shadow-inner">
              <CheckCircle2 className="w-10 h-10 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Laporan Terkirim!
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Terima kasih atas masukan kamu. Laporan telah masuk ke database
                pengurus RW 19 dan akan segera ditindaklanjuti.
              </p>
            </div>
            <button
              onClick={() => setShowLaporSuccess(false)}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl text-xs shadow-md transition"
            >
              Tutup & Kembali
            </button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 text-sm py-8 border-t border-slate-800 text-center">
        <p>© 2026 Portal Digital RW 19 Antapani Tengah — Program Buruan Sae.</p>
      </footer>
    </div>
  );
}

export default App;
