import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  Leaf,
  ShoppingBag,
  Newspaper,
  Video,
  ExternalLink,
  MessageSquare,
  Users,
  Send,
  CheckCircle2,
  Phone,
  X,
  AlertTriangle,
  Lock,
} from "lucide-react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import { BuruanSaeSection } from "./components/BuruanSaeSection";
import { AdminPage } from "./components/AdminPage";
import type { Pengaduan } from "./components/AdminPage";
import "./App.css";

// Interface Data
interface BeritaItem {
  id: number;
  judul: string;
  kategori: string;
  tanggal: string;
  desc: string;
  image: string;
}

interface CctvItem {
  id: number;
  name: string;
  loc: string;
  img: string;
}

// Data Dummy Awal Pengaduan Warga
const DUMMY_PENGADUAN: Pengaduan[] = [
  {
    id: "1",
    nama: "Budi Santoso",
    rt: "02",
    pesan:
      "Lampu penerangan jalan utama dekat kebun hidroponik redup, mohon dicek pengurus.",
    tanggal: "29 Juli 2026",
    status: "Diproses",
  },
  {
    id: "2",
    nama: "Ibu Ratna",
    rt: "01",
    pesan:
      "Jadwal pengambilan sampah organik RT 01 apakah bisa dipercepat setiap pagi?",
    tanggal: "27 Juli 2026",
    status: "Menunggu",
  },
];

// Data Demografi
const DEMOGRAFI_PIE = [
  {
    name: "Usia Produktif",
    value: 650,
    percent: "56.5%",
    color: "#00a86b",
    desc: "18–59 thn — Penggerak utama ekonomi UMKM & kebun Buruan Sae.",
  },
  {
    name: "Anak & Remaja",
    value: 320,
    percent: "27.8%",
    color: "#2563eb",
    desc: "0–17 thn — Generasi muda pelajar & aktif Karang Taruna.",
  },
  {
    name: "Lanjut Usia",
    value: 180,
    percent: "15.7%",
    color: "#f59e0b",
    desc: "60+ thn — Terdata dalam program kesehatan Posyandu Lansia.",
  },
];

// Data UMKM
const UMKM_DATA = [
  {
    id: 1,
    nama: "Hidroponik Buruan Sae 19",
    kategori: "Pertanian",
    harga: "Rp 10.000 / ikat",
    desc: "Sayuran segar organik bebas pestisida dipetik langsung dari kebun Buruan Sae RW 19.",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    nama: "Olahan Sambal Buruan Sae",
    kategori: "Kuliner",
    harga: "Rp 25.000 / jar",
    desc: "Sambal rumahan khas RW 19 buatan warga lokal menggunakan cabai pilihan hasil kebun sendiri.",
    image:
      "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    nama: "Kerajinan Daur Ulang Kreatif",
    kategori: "Kreatif",
    harga: "Rp 50.000 / pcs",
    desc: "Aneka pot bunga hias, tempat tisu, dan tas cantik hasil pemanfaatan limbah plastik daur ulang.",
    image:
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600",
  },
];

// Data Berita
const BERITA_DATA: BeritaItem[] = [
  {
    id: 1,
    judul: "Gotong Royong Kebun Buruan Sae RT 02",
    kategori: "Kegiatan Warga",
    tanggal: "28 Juli 2026",
    desc: "Seluruh pengurus KWT dan warga RT 02 bahu-membahu merawat kebun bibit, pembersihan gulma, serta penambahan media tanam hidroponik NFT untuk persiapan panen raya minggu depan.",
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    judul: "Pelatihan Kompos Organik Dapur",
    kategori: "Edukasi",
    tanggal: "20 Juli 2026",
    desc: "Pelatihan pemanfaatan limbah sisa sayur dan buah dapur menjadi pupuk kompos cair organik. Diikuti oleh ibu-ibu PKK RW 19 guna mendukung konsep Zero Waste di pemukiman.",
    image:
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    judul: "Panen Parsial Kolam Gizi Lele Bioflok",
    kategori: "Panen Raya",
    tanggal: "12 Juli 2026",
    desc: "Hasil panen parsial ikan lele bioflok RT 04 didistribusikan secara gratis bagi para lansia dan balita sebagai bentuk pemenuhan gizi keluarga dan pencegahan stunting wilayah.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=600",
  },
];

// Data CCTV Publik
const CCTV_DATA: CctvItem[] = [
  {
    id: 1,
    name: "Kamera 01 - Pos Utama RW 19",
    loc: "Gapura Masuk Utama RT 01",
    img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    name: "Kamera 02 - Kebun Buruan Sae",
    loc: "Area Green House & Tanaman RT 02",
    img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    name: "Kamera 03 - Lapangan Serbaguna",
    loc: "Taman Olahraga Warga RT 04",
    img: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&q=80&w=600",
  },
];

// Data Aparat / Pengurus
const APARAT_DATA = [
  { nama: "H. Ahmad Fauzi", jabatan: "Ketua RW 19", kontak: "0811-2233-4455" },
  {
    nama: "Ibu Sri Wahyuni",
    jabatan: "Ketua KWT Anggrek 19",
    kontak: "0812-5566-7788",
  },
  { nama: "Bpk. Bambang S.", jabatan: "Ketua RT 02", kontak: "0813-8899-0011" },
];

export default function App() {
  // State Switching Halaman Utama vs Halaman Admin
  const [currentPage, setCurrentPage] = useState<"public" | "admin">("public");

  // State Pop-Up Modals Publik
  const [selectedBerita, setSelectedBerita] = useState<BeritaItem | null>(null);
  const [selectedCctv, setSelectedCctv] = useState<CctvItem | null>(null);

  // State Daftar Pengaduan Warga (Localstorage Sync)
  const [pengaduanList, setPengaduanList] = useState<Pengaduan[]>(() => {
    const saved = localStorage.getItem("rw19_pengaduan_list");
    return saved ? JSON.parse(saved) : DUMMY_PENGADUAN;
  });

  useEffect(() => {
    localStorage.setItem("rw19_pengaduan_list", JSON.stringify(pengaduanList));
  }, [pengaduanList]);

  // State Form Pengaduan Publik
  const [nama, setNama] = useState("");
  const [rt, setRt] = useState("01");
  const [pesan, setPesan] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitPengaduan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nama || !pesan) return;

    const newReport: Pengaduan = {
      id: Date.now().toString(),
      nama,
      rt,
      pesan,
      tanggal: new Date().toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      status: "Menunggu",
    };

    setPengaduanList([newReport, ...pengaduanList]);
    setSubmitted(true);

    setTimeout(() => {
      setNama("");
      setPesan("");
      setSubmitted(false);
    }, 4000);
  };

  const handleUpdateStatus = (
    id: string,
    newStatus: "Menunggu" | "Diproses" | "Selesai",
  ) => {
    setPengaduanList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item,
      ),
    );
  };

  const handleDeletePengaduan = (id: string) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus laporan ini?")) {
      setPengaduanList((prev) => prev.filter((item) => item.id !== id));
    }
  };

  // JIKA SEDANG DI HALAMAN ADMIN
  if (currentPage === "admin") {
    return (
      <AdminPage
        pengaduanList={pengaduanList}
        onUpdateStatus={handleUpdateStatus}
        onDeletePengaduan={handleDeletePengaduan}
        onBackToPublic={() => setCurrentPage("public")}
      />
    );
  }

  // TAMPILAN HALAMAN PUBLIK PORTAL WARGA
  return (
    <div>
      {/* 1. NAVBAR */}
      <nav className="navbar">
        <div className="nav-brand">
          <div className="nav-logo-icon">
            <Leaf color="#00a86b" size={24} />
          </div>
          <div>
            <h1 className="nav-title">RW 19 Antapani Tengah</h1>
            <p className="nav-subtitle">Program Buruan Sae</p>
          </div>
        </div>

        <div className="nav-menu">
          <a href="#beranda">Beranda</a>
          <a href="#profil">Profil</a>
          <a href="#buruan-sae" style={{ color: "#00a86b", fontWeight: 800 }}>
            Buruan Sae
          </a>
          <a href="#statistik">Statistik</a>
          <a href="#umkm">UMKM</a>
          <a href="#berita">Berita</a>
          <a href="#cctv">CCTV</a>
          <a href="#aparat">Aparat</a>
        </div>

        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <button
            type="button"
            onClick={() => setCurrentPage("admin")}
            style={{
              backgroundColor: "#f1f5f9",
              color: "#334155",
              border: "1px solid #cbd5e1",
              fontSize: "0.825rem",
              fontWeight: 700,
              padding: "7px 14px",
              borderRadius: "8px",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <Lock size={14} color="#00a86b" /> Admin
          </button>

          <a href="#pengaduan" className="btn-pengaduan-nav">
            <MessageSquare size={16} /> Pengaduan Warga
          </a>
        </div>
      </nav>

      {/* 2. SECTION BERANDA */}
      <header id="beranda" className="hero-urban">
        <div className="hero-content">
          <span className="hero-badge">
            <Leaf size={14} /> Portal Resmi RW 19 Antapani Tengah
          </span>
          <h1 className="hero-title">
            Mewujudkan Pemukiman Mandiri, Asri & Sehat Lewat{" "}
            <span style={{ color: "#81c784" }}>Buruan Sae</span>
          </h1>
          <p className="hero-sub">
            Gerakan terintegrasi pemanfaatan pekarangan rumah, kebun gizi
            hidroponik, dan kolam ikan bioflok untuk mendukung ketahanan pangan
            keluarga warga RW 19.
          </p>
          <div className="hero-actions">
            <a href="#buruan-sae" className="btn-hero-primary">
              🌱 Jelajahi Program Buruan Sae
            </a>
            <a href="#pengaduan" className="btn-hero-secondary">
              💬 Layanan Pengaduan Warga
            </a>
          </div>
        </div>
      </header>

      {/* 3. PROFIL */}
      <section id="profil" className="section-wrapper">
        <div className="profil-container">
          <div>
            <div className="section-tag">TENTANG WILAYAH</div>
            <h2 className="section-header-title">
              Program Unggulan Buruan Sae
            </h2>
            <p
              style={{ color: "#64748b", lineHeight: 1.6, fontSize: "0.95rem" }}
            >
              RW 19 Antapani Tengah berfokus pada pemanfaatan pekarangan untuk
              ketahanan pangan keluarga (Buruan Sae). Melalui portal ini,
              informasi kegiatan warga, potensi ekonomi lokal, dan fasilitas
              keamanan terintegrasi secara digital.
            </p>
            <div className="profil-bullet">
              <ShieldCheck color="#00a86b" size={20} /> Pemantauan Wilayah
              Lingkungan 24/7
            </div>
            <div className="profil-bullet">
              <Leaf color="#00a86b" size={20} /> Pemberdayaan Kebun Organik
              Warga
            </div>
          </div>

          <div className="map-card-wrapper">
            <iframe
              title="Peta RW 19 Antapani Tengah"
              className="map-iframe"
              src="https://maps.google.com/maps?q=Antapani%20Tengah%20Bandung&t=&z=15&ie=UTF8&iwloc=&output=embed"
            />
            <div
              style={{
                padding: "10px",
                textAlign: "right",
                background: "#fff",
              }}
            >
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#00a86b",
                  textDecoration: "none",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <ExternalLink size={14} /> Buka Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MODUL BURUAN SAE */}
      <div id="buruan-sae">
        <BuruanSaeSection />
      </div>

      {/* 5. STATISTIK DEMOGRAFI */}
      <section
        id="statistik"
        className="section-wrapper"
        style={{ textAlign: "center" }}
      >
        <div className="section-tag">DATA WARGA & WILAYAH</div>
        <h2 className="section-header-title">Statistik Demografi Publik</h2>
        <p className="section-header-sub">
          Transparansi data kependudukan dan sebaran kelompok usia warga RW 19
          Antapani Tengah
        </p>

        <div className="statistik-grid" style={{ textAlign: "left" }}>
          <div className="stat-left-card">
            <h3
              style={{
                fontSize: "1.05rem",
                fontWeight: 700,
                margin: "0 0 1.5rem 0",
                color: "#1e293b",
              }}
            >
              👥 Distribusi Kelompok Usia Penduduk
            </h3>
            <div className="donut-chart-container">
              <div
                style={{
                  width: "200px",
                  height: "180px",
                  position: "relative",
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={DEMOGRAFI_PIE}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={75}
                    >
                      {DEMOGRAFI_PIE.map((entry, idx) => (
                        <Cell key={`cell-${idx}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 800,
                      color: "#0f172a",
                      display: "block",
                    }}
                  >
                    1,150
                  </span>
                  <span
                    style={{
                      fontSize: "0.65rem",
                      color: "#64748b",
                      fontWeight: 700,
                    }}
                  >
                    TOTAL JIWA
                  </span>
                </div>
              </div>

              <div
                style={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {DEMOGRAFI_PIE.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "#fff",
                      padding: "8px 12px",
                      borderRadius: "8px",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "0.85rem",
                        fontWeight: 700,
                      }}
                    >
                      <span style={{ color: item.color }}>● {item.name}</span>
                      <span>{item.percent}</span>
                    </div>
                    <p
                      style={{
                        margin: "2px 0 0 0",
                        fontSize: "0.75rem",
                        color: "#64748b",
                      }}
                    >
                      {item.value} Jiwa — {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="stat-right-column">
            <div className="stat-card-green">
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  letterSpacing: "0.05em",
                  opacity: 0.9,
                }}
              >
                TOTAL POPULASI TERDAFTAR
              </span>
              <div
                style={{
                  fontSize: "2.2rem",
                  fontWeight: 800,
                  margin: "0.25rem 0",
                }}
              >
                1,150{" "}
                <span style={{ fontSize: "1rem", fontWeight: 500 }}>Jiwa</span>
              </div>
              <p
                style={{
                  fontSize: "0.8rem",
                  opacity: 0.9,
                  margin: "0 0 1rem 0",
                }}
              >
                Tersebar di 6 wilayah RT dengan tingkat kelengkapan data digital
                warga mencapai <strong>98%</strong>.
              </p>
              <div
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.2)",
                  paddingTop: "0.75rem",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                }}
              >
                Rasio Gender:{" "}
                <span style={{ fontWeight: 400 }}>51% Pria | 49% Wanita</span>
              </div>
            </div>

            <div className="stat-card-white">
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  color: "#64748b",
                  letterSpacing: "0.05em",
                }}
              >
                KEPALA KELUARGA (KK)
              </span>
              <div
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 800,
                  color: "#0f172a",
                  margin: "0.25rem 0",
                }}
              >
                340{" "}
                <span
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "#64748b",
                  }}
                >
                  KK Aktif
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "0.8rem",
                  marginTop: "0.75rem",
                  color: "#475569",
                }}
              >
                <span>KK Penerima Buruan Sae:</span>
                <strong style={{ color: "#00a86b" }}>125 KK</strong>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "0.8rem",
                  marginTop: "0.4rem",
                  color: "#475569",
                }}
              >
                <span>Pelaku UMKM Terdata:</span>
                <strong style={{ color: "#00a86b" }}>45 Usaha</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. KATALOG UMKM */}
      <section
        id="umkm"
        className="section-wrapper"
        style={{ textAlign: "center" }}
      >
        <div className="section-tag">PRODUK LOKAL</div>
        <h2 className="section-header-title">Katalog UMKM Warga</h2>
        <p className="section-header-sub">
          Klik pada produk untuk melihat detail dan kontak penjual
        </p>

        <div className="cards-grid-3" style={{ textAlign: "left" }}>
          {UMKM_DATA.map((item) => (
            <div key={item.id} className="umkm-card">
              <div className="umkm-img-wrapper">
                <img src={item.image} alt={item.nama} className="umkm-img" />
                <span className="umkm-badge">{item.kategori}</span>
              </div>
              <div className="umkm-content">
                <h3 className="umkm-title">{item.nama}</h3>
                <div className="umkm-price">{item.harga}</div>
                <p className="umkm-desc">{item.desc}</p>
                <button
                  type="button"
                  className="btn-detail-light"
                  onClick={() =>
                    alert(
                      `Detail produk ${item.nama} dapat dihubungi via RT/RW 19.`,
                    )
                  }
                >
                  <ShoppingBag size={16} /> Lihat Detail Produk
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. BERITA */}
      <section
        id="berita"
        className="section-wrapper"
        style={{ textAlign: "center" }}
      >
        <div className="section-tag">KABAR WILAYAH</div>
        <h2 className="section-header-title">Mading & Berita Warga</h2>
        <p className="section-header-sub">
          Informasi kegiatan dan dokumentasi terkini dari RW 19
        </p>

        <div className="cards-grid-3" style={{ textAlign: "left" }}>
          {BERITA_DATA.map((item) => (
            <div key={item.id} className="umkm-card">
              <div className="umkm-img-wrapper">
                <img src={item.image} alt={item.judul} className="umkm-img" />
                <span className="umkm-badge">{item.kategori}</span>
              </div>
              <div className="umkm-content">
                <h3 className="umkm-title">{item.judul}</h3>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "#94a3b8",
                    marginBottom: "0.5rem",
                  }}
                >
                  📅 {item.tanggal}
                </div>
                <p className="umkm-desc">{item.desc}</p>
                <button
                  type="button"
                  className="btn-detail-light"
                  onClick={() => setSelectedBerita(item)}
                >
                  <Newspaper size={16} /> Lihat Detail Berita
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL POP-UP BERITA */}
      {selectedBerita && (
        <div className="modal-overlay" onClick={() => setSelectedBerita(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setSelectedBerita(null)}
            >
              <X size={20} />
            </button>
            <img
              src={selectedBerita.image}
              alt={selectedBerita.judul}
              className="modal-img"
            />
            <div className="modal-body">
              <span className="umkm-badge" style={{ position: "static" }}>
                {selectedBerita.kategori}
              </span>
              <h3 className="modal-title">{selectedBerita.judul}</h3>
              <div
                style={{
                  fontSize: "0.85rem",
                  color: "#00a86b",
                  fontWeight: 700,
                  marginBottom: "0.75rem",
                }}
              >
                📅 Terbit: {selectedBerita.tanggal}
              </div>
              <p className="modal-desc">{selectedBerita.desc}</p>

              <div className="modal-info-box">
                <p>
                  📰 <strong>Sumber Berita:</strong> Tim Informasi &
                  Digitalisasi RW 19
                </p>
                <p>
                  📍 <strong>Lokasi Kegiatan:</strong> Wilayah RW 19 Antapani
                  Tengah
                </p>
              </div>

              <button
                type="button"
                className="btn-modal-close"
                onClick={() => setSelectedBerita(null)}
              >
                Tutup Berita
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 8. CCTV PUBLIK */}
      <section
        id="cctv"
        className="cctv-dark-section"
        style={{ textAlign: "center" }}
      >
        <div
          style={{
            color: "#00a86b",
            fontSize: "0.8rem",
            fontWeight: 800,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          KEAMANAN LINGKUNGAN
        </div>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 800,
            margin: "0.25rem 0 0.5rem 0",
          }}
        >
          CCTV Publik RW 19
        </h2>
        <p
          style={{
            color: "#94a3b8",
            fontSize: "0.85rem",
            marginBottom: "2.5rem",
          }}
        >
          Klik kamera untuk membuka stream tayangan live →
        </p>

        <div className="cards-grid-3" style={{ textAlign: "left" }}>
          {CCTV_DATA.map((cam) => (
            <div key={cam.id} className="cctv-card">
              <span className="cctv-live-badge">● LIVE</span>
              <div
                className="cctv-screen-box"
                onClick={() => setSelectedCctv(cam)}
              >
                <Video size={36} color="#00a86b" />
                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "#00a86b",
                    marginTop: "8px",
                  }}
                >
                  Klik Tampilkan Stream
                </span>
              </div>
              <h4
                style={{
                  margin: "0 0 4px 0",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: "#f8fafc",
                }}
              >
                {cam.name}
              </h4>
              <p style={{ margin: 0, fontSize: "0.75rem", color: "#64748b" }}>
                {cam.loc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL POP-UP CCTV */}
      {selectedCctv && (
        <div className="modal-overlay" onClick={() => setSelectedCctv(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#0f172a",
              border: "1px solid #334155",
              color: "#ffffff",
            }}
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setSelectedCctv(null)}
              style={{ background: "rgba(15, 23, 42, 0.8)", color: "#ffffff" }}
            >
              <X size={20} />
            </button>
            <div style={{ position: "relative" }}>
              <img
                src={selectedCctv.img}
                alt={selectedCctv.name}
                className="modal-img"
              />
              <span
                className="cctv-live-badge"
                style={{ position: "absolute", top: "12px", right: "12px" }}
              >
                ● LIVE STREAM 24/7
              </span>
            </div>
            <div className="modal-body">
              <h3 className="modal-title" style={{ color: "#ffffff" }}>
                {selectedCctv.name}
              </h3>
              <p
                style={{
                  color: "#00a86b",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  margin: "0 0 1rem 0",
                }}
              >
                📍 {selectedCctv.loc}
              </p>
              <div
                style={{
                  background: "#1e293b",
                  padding: "0.85rem",
                  borderRadius: "8px",
                  fontSize: "0.8rem",
                  color: "#94a3b8",
                  marginBottom: "1.25rem",
                }}
              >
                Status Koneksi:{" "}
                <strong style={{ color: "#22c55e" }}>
                  Tergabung & Aktif (Realtime Feed)
                </strong>
              </div>

              <div style={{ display: "flex", gap: "0.75rem" }}>
                <a
                  href="#pengaduan"
                  className="btn-modal-close"
                  style={{
                    backgroundColor: "#ef4444",
                    color: "#ffffff",
                    textDecoration: "none",
                    textAlign: "center",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    flexGrow: 1,
                  }}
                  onClick={() => setSelectedCctv(null)}
                >
                  <AlertTriangle size={16} /> Laporkan Kejadian / Pengaduan
                </a>
                <button
                  type="button"
                  className="btn-modal-close"
                  style={{
                    backgroundColor: "#334155",
                    width: "auto",
                    padding: "0 18px",
                  }}
                  onClick={() => setSelectedCctv(null)}
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 9. APARAT & PENGURUS */}
      <section
        id="aparat"
        className="section-wrapper"
        style={{ textAlign: "center" }}
      >
        <div className="section-tag">STRUKTUR PEMERINTAHAN</div>
        <h2 className="section-header-title">Aparat & Pengurus RW 19</h2>
        <p className="section-header-sub">
          Pengurus pengelola wilayah RW 19 Antapani Tengah
        </p>

        <div className="cards-grid-3" style={{ textAlign: "left" }}>
          {APARAT_DATA.map((item, idx) => (
            <div key={idx} className="umkm-card" style={{ padding: "1.25rem" }}>
              <h3 className="umkm-title" style={{ marginBottom: "2px" }}>
                {item.nama}
              </h3>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "#00a86b",
                  fontWeight: 700,
                  margin: "0 0 0.75rem 0",
                }}
              >
                {item.jabatan}
              </p>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "#64748b",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <Phone size={14} /> Kontak: {item.kontak}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. FORM PENGADUAN */}
      <section
        id="pengaduan"
        className="section-wrapper"
        style={{
          background: "#f8fafc",
          borderRadius: "16px",
          textAlign: "center",
        }}
      >
        <div className="section-tag">LAYANAN PUBLIK</div>
        <h2 className="section-header-title">Form Pengaduan Warga</h2>
        <p className="section-header-sub">
          Sampaikan aspirasi atau laporan kendala lingkungan RW 19
        </p>

        {submitted ? (
          <div
            style={{
              backgroundColor: "#e1f2e5",
              color: "#1b5e20",
              padding: "1.25rem",
              borderRadius: "12px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              fontWeight: 700,
              maxWidth: "550px",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <CheckCircle2 size={20} /> Pengaduan Anda telah terkirim. Terima
            kasih!
          </div>
        ) : (
          <form
            onSubmit={handleSubmitPengaduan}
            style={{
              maxWidth: "520px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
              textAlign: "left",
              backgroundColor: "#ffffff",
              padding: "2rem",
              borderRadius: "16px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.03)",
            }}
          >
            <div>
              <label
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  display: "block",
                  marginBottom: "6px",
                  color: "#1e293b",
                }}
              >
                Nama Lengkap:
              </label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Masukkan nama Anda"
                required
                style={{
                  width: "100%",
                  padding: "11px 14px",
                  borderRadius: "8px",
                  border: "1px solid #cbd5e1",
                  boxSizing: "border-box",
                  fontSize: "0.9rem",
                }}
              />
            </div>

            <div>
              <label
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  display: "block",
                  marginBottom: "6px",
                  color: "#1e293b",
                }}
              >
                RT:
              </label>
              <select
                value={rt}
                onChange={(e) => setRt(e.target.value)}
                style={{
                  width: "100%",
                  padding: "11px 14px",
                  borderRadius: "8px",
                  border: "1px solid #cbd5e1",
                  boxSizing: "border-box",
                  fontSize: "0.9rem",
                }}
              >
                <option value="01">RT 01</option>
                <option value="02">RT 02</option>
                <option value="03">RT 03</option>
                <option value="04">RT 04</option>
              </select>
            </div>

            <div>
              <label
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  display: "block",
                  marginBottom: "6px",
                  color: "#1e293b",
                }}
              >
                Isi Pengaduan:
              </label>
              <textarea
                rows={4}
                value={pesan}
                onChange={(e) => setPesan(e.target.value)}
                placeholder="Tulis pesan atau laporan Anda..."
                required
                style={{
                  width: "100%",
                  padding: "11px 14px",
                  borderRadius: "8px",
                  border: "1px solid #cbd5e1",
                  boxSizing: "border-box",
                  fontSize: "0.9rem",
                  resize: "vertical",
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                backgroundColor: "#00a86b",
                color: "#fff",
                border: "none",
                padding: "12px 24px",
                borderRadius: "8px",
                fontWeight: 700,
                fontSize: "0.95rem",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                width: "100%",
                marginTop: "0.5rem",
                transition: "background-color 0.2s",
              }}
            >
              <Send size={16} /> Kirim Pengaduan
            </button>
          </form>
        )}
      </section>

      {/* FOOTER */}
      <footer
        style={{
          backgroundColor: "#1b5e20",
          color: "#ffffff",
          padding: "2.5rem 1rem",
          textAlign: "center",
          marginTop: "4rem",
        }}
      >
        <p
          style={{
            margin: "0 0 0.5rem 0",
            fontWeight: 800,
            fontSize: "1.1rem",
          }}
        >
          RW 19 Antapani Tengah - Buruan Sae
        </p>
        <p style={{ margin: "0 0 1rem 0", fontSize: "0.85rem", opacity: 0.8 }}>
          © 2026 Portal Resmi Komunitas RW 19. All Rights Reserved.
        </p>
        <button
          type="button"
          onClick={() => setCurrentPage("admin")}
          style={{
            background: "transparent",
            color: "#81c784",
            border: "1px solid rgba(129, 199, 132, 0.4)",
            padding: "6px 14px",
            borderRadius: "6px",
            fontSize: "0.75rem",
            cursor: "pointer",
          }}
        >
          🔒 Halaman Admin RW 19
        </button>
      </footer>
    </div>
  );
}
