import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  Leaf,
  ShoppingBag,
  Newspaper,
  Video,
  ExternalLink,
  MessageSquare,
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
import type {
  Pengaduan,
  UmkmItem,
  BeritaItem,
  CctvItem,
  AparatItem,
  WargaStats,
} from "./components/AdminPage";
import "./App.css";

// Data Awal (Fallback)
const INITIAL_PENGADUAN: Pengaduan[] = [
  {
    id: "1",
    nama: "Budi Santoso",
    rt: "02",
    pesan: "Lampu penerangan jalan utama dekat kebun hidroponik redup.",
    tanggal: "29 Juli 2026",
    status: "Diproses",
  },
  {
    id: "2",
    nama: "Ibu Ratna",
    rt: "01",
    pesan: "Jadwal pengambilan sampah organik RT 01 apakah bisa dipercepat?",
    tanggal: "27 Juli 2026",
    status: "Menunggu",
  },
];

const INITIAL_UMKM: UmkmItem[] = [
  {
    id: 1,
    nama: "Hidroponik Buruan Sae 19",
    kategori: "Pertanian",
    harga: "Rp 10.000 / ikat",
    desc: "Sayuran segar organik bebas pestisida dipetik langsung dari kebun.",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    nama: "Olahan Sambal Buruan Sae",
    kategori: "Kuliner",
    harga: "Rp 25.000 / jar",
    desc: "Sambal rumahan khas RW 19 buatan warga lokal cabai segar.",
    image:
      "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&q=80&w=600",
  },
];

const INITIAL_BERITA: BeritaItem[] = [
  {
    id: 1,
    judul: "Gotong Royong Kebun Buruan Sae RT 02",
    kategori: "Kegiatan Warga",
    tanggal: "28 Juli 2026",
    desc: "Pengurus KWT dan warga merawat kebun bibit hidroponik.",
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    judul: "Pelatihan Kompos Organik Dapur",
    kategori: "Edukasi",
    tanggal: "20 Juli 2026",
    desc: "Pelatihan pemanfaatan sisa sayur menjadi pupuk organik cair.",
    image:
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600",
  },
];

const INITIAL_CCTV: CctvItem[] = [
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
];

const INITIAL_APARAT: AparatItem[] = [
  {
    id: 1,
    nama: "H. Ahmad Fauzi",
    jabatan: "Ketua RW 19",
    kontak: "0811-2233-4455",
  },
  {
    id: 2,
    nama: "Ibu Sri Wahyuni",
    jabatan: "Ketua KWT Anggrek 19",
    kontak: "0812-5566-7788",
  },
];

const INITIAL_WARGA_STATS: WargaStats = {
  totalPopulasi: 1150,
  usiaProduktif: 650, // 18 - 59 thn
  anakRemaja: 320, // 0 - 17 thn
  lansia: 180, // 60+ thn
  totalKK: 340,
  kkBuruanSae: 125,
  umkmTerdata: 45,
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<"public" | "admin">("public");

  // Load / Save LocalStorage State
  const [pengaduanList, setPengaduanList] = useState<Pengaduan[]>(() => {
    const saved = localStorage.getItem("rw19_pengaduan");
    return saved ? JSON.parse(saved) : INITIAL_PENGADUAN;
  });

  const [umkmList, setUmkmList] = useState<UmkmItem[]>(() => {
    const saved = localStorage.getItem("rw19_umkm");
    return saved ? JSON.parse(saved) : INITIAL_UMKM;
  });

  const [beritaList, setBeritaList] = useState<BeritaItem[]>(() => {
    const saved = localStorage.getItem("rw19_berita");
    return saved ? JSON.parse(saved) : INITIAL_BERITA;
  });

  const [cctvList, setCctvList] = useState<CctvItem[]>(() => {
    const saved = localStorage.getItem("rw19_cctv");
    return saved ? JSON.parse(saved) : INITIAL_CCTV;
  });

  const [aparatList, setAparatList] = useState<AparatItem[]>(() => {
    const saved = localStorage.getItem("rw19_aparat");
    return saved ? JSON.parse(saved) : INITIAL_APARAT;
  });

  const [wargaStats, setWargaStats] = useState<WargaStats>(() => {
    const saved = localStorage.getItem("rw19_warga_stats");
    return saved ? JSON.parse(saved) : INITIAL_WARGA_STATS;
  });

  useEffect(() => {
    localStorage.setItem("rw19_pengaduan", JSON.stringify(pengaduanList));
    localStorage.setItem("rw19_umkm", JSON.stringify(umkmList));
    localStorage.setItem("rw19_berita", JSON.stringify(beritaList));
    localStorage.setItem("rw19_cctv", JSON.stringify(cctvList));
    localStorage.setItem("rw19_aparat", JSON.stringify(aparatList));
    localStorage.setItem("rw19_warga_stats", JSON.stringify(wargaStats));
  }, [pengaduanList, umkmList, beritaList, cctvList, aparatList, wargaStats]);

  // Modal States
  const [selectedBerita, setSelectedBerita] = useState<BeritaItem | null>(null);
  const [selectedCctv, setSelectedCctv] = useState<CctvItem | null>(null);

  // Form Pengaduan Public
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

  // CRUD Handlers for Admin
  const handleUpdatePengaduanStatus = (
    id: string,
    status: "Menunggu" | "Diproses" | "Selesai",
  ) => {
    setPengaduanList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status } : item)),
    );
  };
  const handleDeletePengaduan = (id: string) => {
    setPengaduanList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddUmkm = (item: Omit<UmkmItem, "id">) => {
    setUmkmList([{ ...item, id: Date.now() }, ...umkmList]);
  };
  const handleDeleteUmkm = (id: number) => {
    setUmkmList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddBerita = (item: Omit<BeritaItem, "id">) => {
    setBeritaList([{ ...item, id: Date.now() }, ...beritaList]);
  };
  const handleDeleteBerita = (id: number) => {
    setBeritaList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddCctv = (item: Omit<CctvItem, "id">) => {
    setCctvList([{ ...item, id: Date.now() }, ...cctvList]);
  };
  const handleDeleteCctv = (id: number) => {
    setCctvList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddAparat = (item: Omit<AparatItem, "id">) => {
    setAparatList([{ ...item, id: Date.now() }, ...aparatList]);
  };
  const handleDeleteAparat = (id: number) => {
    setAparatList((prev) => prev.filter((item) => item.id !== id));
  };

  // Switch View Admin
  if (currentPage === "admin") {
    return (
      <AdminPage
        pengaduanList={pengaduanList}
        onUpdatePengaduanStatus={handleUpdatePengaduanStatus}
        onDeletePengaduan={handleDeletePengaduan}
        umkmList={umkmList}
        onAddUmkm={handleAddUmkm}
        onDeleteUmkm={handleDeleteUmkm}
        beritaList={beritaList}
        onAddBerita={handleAddBerita}
        onDeleteBerita={handleDeleteBerita}
        cctvList={cctvList}
        onAddCctv={handleAddCctv}
        onDeleteCctv={handleDeleteCctv}
        aparatList={aparatList}
        onAddAparat={handleAddAparat}
        onDeleteAparat={handleDeleteAparat}
        wargaStats={wargaStats}
        onUpdateWargaStats={setWargaStats}
        onBackToPublic={() => setCurrentPage("public")}
      />
    );
  }

  // Demografi Chart Data for Public
  // Demografi Chart Data for Public
  const demografiPie = [
    {
      name: "Usia Produktif (18-59 thn)",
      value: wargaStats.usiaProduktif,
      color: "#00a86b",
    },
    {
      name: "Anak & Remaja (0-17 thn)",
      value: wargaStats.anakRemaja,
      color: "#2563eb",
    },
    {
      name: "Lanjut Usia (60+ thn)",
      value: wargaStats.lansia,
      color: "#f59e0b",
    },
  ];
  return (
    <div>
      {/* NAVBAR */}
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

      {/* BERANDA */}
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
            keluarga.
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

      {/* PROFIL */}
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
              ketahanan pangan keluarga (Buruan Sae).
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
              title="Peta RW 19"
              className="map-iframe"
              src="https://maps.google.com/maps?q=Antapani%20Tengah%20Bandung&t=&z=15&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>
      </section>

      {/* BURUAN SAE */}
      <div id="buruan-sae">
        <BuruanSaeSection />
      </div>

      {/* STATISTIK */}
      <section
        id="statistik"
        className="section-wrapper"
        style={{ textAlign: "center" }}
      >
        <div className="section-tag">DATA WARGA & WILAYAH</div>
        <h2 className="section-header-title">Statistik Demografi Warga</h2>
        <div className="statistik-grid" style={{ textAlign: "left" }}>
          <div className="stat-left-card">
            <h3
              style={{
                fontSize: "1.05rem",
                fontWeight: 700,
                marginBottom: "1.5rem",
              }}
            >
              👥 Distribusi Kelompok Usia
            </h3>
            <div style={{ width: "200px", height: "180px", margin: "0 auto" }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={demografiPie}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={75}
                  >
                    {demografiPie.map((entry, idx) => (
                      <Cell key={idx} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="stat-right-column">
            <div className="stat-card-green">
              <span>TOTAL POPULASI</span>
              <div style={{ fontSize: "2.2rem", fontWeight: 800 }}>
                {wargaStats.totalPopulasi} Jiwa
              </div>
              <p style={{ fontSize: "0.85rem" }}>
                Produktif: {wargaStats.usiaProduktif} Jiwa | Anak:{" "}
                {wargaStats.anakRemaja} Jiwa | Lansia: {wargaStats.lansia} Jiwa
              </p>
            </div>
            <div className="stat-card-white">
              <span>KEPALA KELUARGA (KK)</span>
              <div style={{ fontSize: "1.8rem", fontWeight: 800 }}>
                {wargaStats.totalKK} KK
              </div>
              <div>
                Penerima Buruan Sae:{" "}
                <strong style={{ color: "#00a86b" }}>
                  {wargaStats.kkBuruanSae} KK
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UMKM */}
      <section
        id="umkm"
        className="section-wrapper"
        style={{ textAlign: "center" }}
      >
        <div className="section-tag">PRODUK LOKAL</div>
        <h2 className="section-header-title">Katalog UMKM Warga</h2>
        <div className="cards-grid-3" style={{ textAlign: "left" }}>
          {umkmList.map((item) => (
            <div key={item.id} className="umkm-card">
              <div className="umkm-img-wrapper">
                <img src={item.image} alt={item.nama} className="umkm-img" />
                <span className="umkm-badge">{item.kategori}</span>
              </div>
              <div className="umkm-content">
                <h3 className="umkm-title">{item.nama}</h3>
                <div className="umkm-price">{item.harga}</div>
                <p className="umkm-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BERITA */}
      <section
        id="berita"
        className="section-wrapper"
        style={{ textAlign: "center" }}
      >
        <div className="section-tag">KABAR WILAYAH</div>
        <h2 className="section-header-title">Mading & Berita Warga</h2>
        <div className="cards-grid-3" style={{ textAlign: "left" }}>
          {beritaList.map((item) => (
            <div key={item.id} className="umkm-card">
              <div className="umkm-img-wrapper">
                <img src={item.image} alt={item.judul} className="umkm-img" />
                <span className="umkm-badge">{item.kategori}</span>
              </div>
              <div className="umkm-content">
                <h3 className="umkm-title">{item.judul}</h3>
                <div style={{ fontSize: "0.75rem", color: "#94a3b8" }}>
                  📅 {item.tanggal}
                </div>
                <p className="umkm-desc">{item.desc}</p>
                <button
                  type="button"
                  className="btn-detail-light"
                  onClick={() => setSelectedBerita(item)}
                >
                  <Newspaper size={16} /> Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL BERITA */}
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
              <h3 className="modal-title">{selectedBerita.judul}</h3>
              <p className="modal-desc">{selectedBerita.desc}</p>
              <button
                type="button"
                className="btn-modal-close"
                onClick={() => setSelectedBerita(null)}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CCTV */}
      <section
        id="cctv"
        className="cctv-dark-section"
        style={{ textAlign: "center" }}
      >
        <h2>CCTV Publik RW 19</h2>
        <div className="cards-grid-3" style={{ textAlign: "left" }}>
          {cctvList.map((cam) => (
            <div key={cam.id} className="cctv-card">
              <span className="cctv-live-badge">● LIVE</span>
              <div
                className="cctv-screen-box"
                onClick={() => setSelectedCctv(cam)}
              >
                <Video size={36} color="#00a86b" />
              </div>
              <h4 style={{ color: "#fff", margin: "4px 0" }}>{cam.name}</h4>
              <p style={{ color: "#94a3b8", fontSize: "0.8rem", margin: 0 }}>
                📍 {cam.loc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL CCTV */}
      {selectedCctv && (
        <div className="modal-overlay" onClick={() => setSelectedCctv(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: "#0f172a", color: "#fff" }}
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setSelectedCctv(null)}
              style={{ background: "rgba(15,23,42,0.8)", color: "#fff" }}
            >
              <X size={20} />
            </button>
            <img
              src={selectedCctv.img}
              alt={selectedCctv.name}
              className="modal-img"
            />
            <div className="modal-body">
              <h3 className="modal-title" style={{ color: "#fff" }}>
                {selectedCctv.name}
              </h3>
              <p style={{ color: "#00a86b", fontWeight: 700 }}>
                📍 {selectedCctv.loc}
              </p>
              <button
                type="button"
                className="btn-modal-close"
                style={{ backgroundColor: "#334155" }}
                onClick={() => setSelectedCctv(null)}
              >
                Tutup Stream
              </button>
            </div>
          </div>
        </div>
      )}

      {/* APARAT */}
      <section
        id="aparat"
        className="section-wrapper"
        style={{ textAlign: "center" }}
      >
        <div className="section-tag">STRUKTUR PEMERINTAHAN</div>
        <h2 className="section-header-title">Aparat & Pengurus RW 19</h2>
        <div className="cards-grid-3" style={{ textAlign: "left" }}>
          {aparatList.map((item) => (
            <div
              key={item.id}
              className="umkm-card"
              style={{ padding: "1.25rem" }}
            >
              <h3 className="umkm-title">{item.nama}</h3>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "#00a86b",
                  fontWeight: 700,
                }}
              >
                {item.jabatan}
              </p>
              <div style={{ fontSize: "0.8rem", color: "#64748b" }}>
                <Phone size={14} /> Kontak: {item.kontak}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PENGADUAN FORM */}
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
        {submitted ? (
          <div
            style={{
              backgroundColor: "#e1f2e5",
              color: "#1b5e20",
              padding: "1rem",
              borderRadius: "8px",
              fontWeight: 700,
            }}
          >
            <CheckCircle2 size={18} /> Pengaduan Anda berhasil dikirim!
          </div>
        ) : (
          <form
            onSubmit={handleSubmitPengaduan}
            style={{
              maxWidth: "500px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              textAlign: "left",
            }}
          >
            <input
              type="text"
              placeholder="Nama Lengkap"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              required
              style={{
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #cbd5e1",
              }}
            />
            <select
              value={rt}
              onChange={(e) => setRt(e.target.value)}
              style={{
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #cbd5e1",
              }}
            >
              <option value="01">RT 01</option>
              <option value="02">RT 02</option>
              <option value="03">RT 03</option>
              <option value="04">RT 04</option>
            </select>
            <textarea
              placeholder="Isi Pengaduan..."
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
              required
              rows={4}
              style={{
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #cbd5e1",
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "#00a86b",
                color: "#fff",
                border: "none",
                padding: "12px",
                borderRadius: "8px",
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
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
        <p style={{ margin: "0 0 0.5rem 0", fontWeight: 800 }}>
          RW 19 Antapani Tengah - Buruan Sae
        </p>
        <button
          type="button"
          onClick={() => setCurrentPage("admin")}
          style={{
            background: "transparent",
            color: "#81c784",
            border: "1px solid rgba(129,199,132,0.4)",
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
