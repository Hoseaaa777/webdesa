import React, { useState, useEffect } from "react";
import {
  Sprout,
  Users,
  Store,
  Newspaper,
  Video,
  Send,
  CheckCircle2,
  Lock,
  Globe,
  MapPin,
  Compass,
  ArrowRight,
  Menu,
  X,
  Home,
  Landmark,
  UserCheck,
} from "lucide-react";
import { AdminPage } from "./components/AdminPage";
import type {
  UmkmItem,
  BeritaItem,
  CctvItem,
  AparatItem,
} from "./components/AdminPage";
import "./App.css";

const INITIAL_PENGADUAN: any[] = [
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

const INITIAL_UMKM: UmkmItem[] = [
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

const INITIAL_BERITA: BeritaItem[] = [
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

const INITIAL_CCTV: CctvItem[] = [
  {
    id: 1,
    name: "Kamera 01 - Area Kebun Utama RW 19",
    loc: "Jl. Antapani Raya, Bandung",
    img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    name: "Kamera 02 - Green House Pembibitan",
    loc: "Sektor Timur Antapani",
    img: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=800",
  },
];

const INITIAL_APARAT: AparatItem[] = [
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

export default function App() {
  const [currentPage, setCurrentPage] = useState<"public" | "admin">("public");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [pengaduanList, setPengaduanList] = useState<any[]>(() => {
    try {
      const saved = localStorage.getItem("ant_pengaduan");
      const parsed = saved ? JSON.parse(saved) : null;
      return Array.isArray(parsed) && parsed.length > 0
        ? parsed
        : INITIAL_PENGADUAN;
    } catch {
      return INITIAL_PENGADUAN;
    }
  });

  const [umkmList, setUmkmList] = useState<UmkmItem[]>(() => {
    try {
      const saved = localStorage.getItem("ant_umkm");
      const parsed = saved ? JSON.parse(saved) : null;
      return Array.isArray(parsed) && parsed.length > 0 ? parsed : INITIAL_UMKM;
    } catch {
      return INITIAL_UMKM;
    }
  });

  const [beritaList, setBeritaList] = useState<BeritaItem[]>(() => {
    try {
      const saved = localStorage.getItem("ant_berita_v15");
      const parsed = saved ? JSON.parse(saved) : null;
      return Array.isArray(parsed) && parsed.length > 0
        ? parsed
        : INITIAL_BERITA;
    } catch {
      return INITIAL_BERITA;
    }
  });

  const [cctvList, setCctvList] = useState<CctvItem[]>(() => {
    try {
      const saved = localStorage.getItem("ant_cctv");
      const parsed = saved ? JSON.parse(saved) : null;
      return Array.isArray(parsed) && parsed.length > 0 ? parsed : INITIAL_CCTV;
    } catch {
      return INITIAL_CCTV;
    }
  });

  const [aparatList, setAparatList] = useState<AparatItem[]>(() => {
    try {
      const saved = localStorage.getItem("ant_aparat");
      const parsed = saved ? JSON.parse(saved) : null;
      return Array.isArray(parsed) && parsed.length > 0
        ? parsed
        : INITIAL_APARAT;
    } catch {
      return INITIAL_APARAT;
    }
  });

  const [wargaStats, setWargaStats] = useState<any>(() => {
    try {
      const saved = localStorage.getItem("ant_wargastats");
      return saved
        ? JSON.parse(saved)
        : {
            totalWarga: 4500,
            totalKK: 1250,
            jumlahMasjid: 3,
            lakiLaki: 2200,
            perempuan: 2300,
          };
    } catch {
      return {
        totalWarga: 4500,
        totalKK: 1250,
        jumlahMasjid: 3,
        lakiLaki: 2200,
        perempuan: 2300,
      };
    }
  });

  useEffect(() => {
    localStorage.setItem("ant_pengaduan", JSON.stringify(pengaduanList));
    localStorage.setItem("ant_umkm", JSON.stringify(umkmList));
    localStorage.setItem("ant_berita_v15", JSON.stringify(beritaList));
    localStorage.setItem("ant_cctv", JSON.stringify(cctvList));
    localStorage.setItem("ant_aparat", JSON.stringify(aparatList));
    localStorage.setItem("ant_wargastats", JSON.stringify(wargaStats));
  }, [pengaduanList, umkmList, beritaList, cctvList, aparatList, wargaStats]);

  const [selectedBerita, setSelectedBerita] = useState<BeritaItem | null>(null);
  const [selectedCctv, setSelectedCctv] = useState<CctvItem | null>(null);

  const [nama, setNama] = useState("");
  const [rt, setRt] = useState("01");
  const [pesan, setPesan] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitPengaduan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nama || !pesan) return;

    const newReport = {
      id: Date.now().toString(),
      rt,
      nama,
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

  if (currentPage === "admin") {
    const AdminComp = AdminPage as any;
    return (
      <AdminComp
        pengaduanList={pengaduanList}
        onUpdatePengaduanStatus={(id: string, status: any) =>
          setPengaduanList((prev: any) =>
            prev.map((i: any) => (i.id === id ? { ...i, status } : i)),
          )
        }
        onDeletePengaduan={(id: string) =>
          setPengaduanList((prev: any) => prev.filter((i: any) => i.id !== id))
        }
        umkmList={umkmList}
        onAddUmkm={(item: any) =>
          setUmkmList((prev: any) => [{ ...item, id: Date.now() }, ...prev])
        }
        onDeleteUmkm={(id: string | number) =>
          setUmkmList((prev: any) => prev.filter((i: any) => i.id !== id))
        }
        beritaList={beritaList}
        onAddBerita={(item: any) =>
          setBeritaList((prev: any) => [{ ...item, id: Date.now() }, ...prev])
        }
        onDeleteBerita={(id: string | number) =>
          setBeritaList((prev: any) => prev.filter((i: any) => i.id !== id))
        }
        cctvList={cctvList}
        onAddCctv={(item: any) =>
          setCctvList((prev: any) => [{ ...item, id: Date.now() }, ...prev])
        }
        onDeleteCctv={(id: string | number) =>
          setCctvList((prev: any) => prev.filter((i: any) => i.id !== id))
        }
        aparatList={aparatList}
        onAddAparat={(item: any) =>
          setAparatList((prev: any) => [{ ...item, id: Date.now() }, ...prev])
        }
        onDeleteAparat={(id: string | number) =>
          setAparatList((prev: any) => prev.filter((i: any) => i.id !== id))
        }
        wargaStats={wargaStats}
        onUpdateWargaStats={setWargaStats}
        onBackToPublic={() => setCurrentPage("public")}
      />
    );
  }

  return (
    <div
      style={{
        fontFamily: "system-ui, -apple-system, sans-serif",
        backgroundColor: "#f0fdf4",
        color: "#14532d",
        minHeight: "100vh",
      }}
    >
      {/* 1. NAVBAR */}
      <header
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #dcfce7",
          padding: "1rem 1.25rem",
          position: "sticky",
          top: 0,
          zIndex: 50,
          boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                backgroundColor: "#15803d",
                color: "#fff",
                padding: "8px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Sprout size={22} />
            </div>
            <div>
              <h1
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 800,
                  margin: 0,
                  color: "#14532d",
                  letterSpacing: "-0.5px",
                }}
              >
                BURUAN SAE
              </h1>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "#16a34a",
                  margin: 0,
                  fontWeight: 700,
                }}
              >
                RW 19 Antapani
              </p>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <button
              type="button"
              onClick={() => setCurrentPage("admin")}
              style={{
                backgroundColor: "#f0fdf4",
                color: "#15803d",
                border: "1px solid #bbf7d0",
                fontSize: "0.8rem",
                fontWeight: 700,
                padding: "8px 12px",
                borderRadius: "8px",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <Lock size={14} color="#15803d" /> Admin
            </button>

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                backgroundColor: "#15803d",
                color: "#ffffff",
                border: "none",
                padding: "8px",
                borderRadius: "8px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginTop: "1rem",
              paddingTop: "1rem",
              borderTop: "1px solid #e2e8f0",
              fontSize: "0.95rem",
              fontWeight: 700,
            }}
          >
            <a
              href="#beranda"
              onClick={() => setIsMenuOpen(false)}
              style={{ color: "#15803d", textDecoration: "none" }}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              style={{ color: "#3f6212", textDecoration: "none" }}
            >
              About
            </a>
            <a
              href="#statistik"
              onClick={() => setIsMenuOpen(false)}
              style={{ color: "#3f6212", textDecoration: "none" }}
            >
              Statistik
            </a>
            <a
              href="#locations"
              onClick={() => setIsMenuOpen(false)}
              style={{ color: "#3f6212", textDecoration: "none" }}
            >
              Locations
            </a>
            <a
              href="#gallery"
              onClick={() => setIsMenuOpen(false)}
              style={{ color: "#3f6212", textDecoration: "none" }}
            >
              Gallery
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              style={{ color: "#3f6212", textDecoration: "none" }}
            >
              Contact
            </a>
          </nav>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section
        id="beranda"
        style={{
          scrollMarginTop: "120px",
          padding: "2.5rem 1.25rem",
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        <div>
          <span
            style={{
              backgroundColor: "#dcfce7",
              color: "#15803d",
              padding: "6px 14px",
              borderRadius: "20px",
              fontSize: "0.75rem",
              fontWeight: 700,
              border: "1px solid #bbf7d0",
              display: "inline-block",
              marginBottom: "1rem",
            }}
          >
            🌱 Nurturing the earth, feeding the community.
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 6vw, 3.2rem)",
              fontWeight: 900,
              margin: "0 0 1rem 0",
              lineHeight: 1.15,
              color: "#14532d",
              letterSpacing: "-0.5px",
            }}
          >
            Menumbuhkan Kehidupan di Tengah Kota
          </h2>
          <p
            style={{
              color: "#3f6212",
              fontSize: "1rem",
              lineHeight: 1.6,
              margin: "0 0 1.5rem 0",
            }}
          >
            Bergabunglah dengan gerakan Buruan Sae RW 19 Antapani. Bersama kita
            mengubah lahan tidur menjadi kebun hijau produktif yang menutrisi
            komunitas dan menghidupkan kembali harmoni alam di lingkungan urban.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a
              href="#contact"
              style={{
                backgroundColor: "#15803d",
                color: "#fff",
                padding: "12px 24px",
                borderRadius: "30px",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "0.9rem",
                boxShadow: "0 4px 14px rgba(21,128,61,0.25)",
                textAlign: "center",
                flexGrow: 1,
              }}
            >
              Mulai Menanam
            </a>
            <a
              href="#about"
              style={{
                backgroundColor: "#ffffff",
                color: "#15803d",
                border: "2px solid #bbf7d0",
                padding: "12px 24px",
                borderRadius: "30px",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "0.9rem",
                textAlign: "center",
                flexGrow: 1,
              }}
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "24px",
            border: "1px solid #dcfce7",
            padding: "1.25rem",
            boxShadow: "0 15px 35px -15px rgba(21,128,61,0.12)",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800"
            alt="Kebun Buruan Sae RW 19"
            style={{
              width: "100%",
              height: "220px",
              objectFit: "cover",
              borderRadius: "16px",
              marginBottom: "1rem",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 0.25rem",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "0.7rem",
                  color: "#65a30d",
                  fontWeight: 800,
                  letterSpacing: "0.5px",
                }}
              >
                PROGRAM UTAMA
              </div>
              <div
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 900,
                  color: "#14532d",
                }}
              >
                Buruan Sae RW 19
              </div>
            </div>
            <span
              style={{
                backgroundColor: "#f0fdf4",
                color: "#16a34a",
                padding: "6px 12px",
                borderRadius: "12px",
                fontWeight: 800,
                fontSize: "0.75rem",
                border: "1px solid #bbf7d0",
              }}
            >
              ● RW 19 Aktif
            </span>
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section
        id="about"
        style={{
          scrollMarginTop: "120px",
          padding: "3.5rem 1.25rem",
          backgroundColor: "#ffffff",
          borderTop: "1px solid #dcfce7",
          borderBottom: "1px solid #dcfce7",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              textAlign: "center",
              maxWidth: "850px",
              margin: "0 auto 2.5rem auto",
            }}
          >
            <span
              style={{
                fontSize: "0.75rem",
                color: "#15803d",
                fontWeight: 800,
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              MISI KAMI: MENGHIJAUKAN ANTAPANI
            </span>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
                fontWeight: 900,
                margin: "8px 0 1rem 0",
                color: "#14532d",
                lineHeight: 1.2,
              }}
            >
              Buruan Sae RW 19 Antapani Bukan Sekadar Kebun
            </h2>
            <p style={{ color: "#4d7c0f", fontSize: "1rem", lineHeight: 1.6 }}>
              Kami mengubah ruang kosong perkotaan menjadi oasis produktif yang
              menyediakan pangan organik, udara bersih, dan ruang interaksi bagi
              warga. Setiap jengkal tanah berharga untuk bumi yang lebih baik.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            <div
              style={{
                backgroundColor: "#f0fdf4",
                border: "1px solid #bbf7d0",
                borderRadius: "18px",
                padding: "1.5rem",
              }}
            >
              <div
                style={{
                  backgroundColor: "#15803d",
                  color: "#fff",
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                <Sprout size={22} />
              </div>
              <h3
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 800,
                  color: "#14532d",
                  marginBottom: "0.5rem",
                }}
              >
                Berkelanjutan
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#3f6212",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                Praktik berkebun ramah lingkungan tanpa pestisida kimia untuk
                menjaga keseimbangan tanah serta kesehatan ekosistem kota.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#f0fdf4",
                border: "1px solid #bbf7d0",
                borderRadius: "18px",
                padding: "1.5rem",
              }}
            >
              <div
                style={{
                  backgroundColor: "#15803d",
                  color: "#fff",
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                <Users size={22} />
              </div>
              <h3
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 800,
                  color: "#14532d",
                  marginBottom: "0.5rem",
                }}
              >
                Pemberdayaan Warga
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#3f6212",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                Membangun solidaritas dan kebersamaan antar tetangga melalui
                gotong royong aktif merawat tanaman pangan lokal.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#f0fdf4",
                border: "1px solid #bbf7d0",
                borderRadius: "18px",
                padding: "1.5rem",
              }}
            >
              <div
                style={{
                  backgroundColor: "#15803d",
                  color: "#fff",
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                <Store size={22} />
              </div>
              <h3
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 800,
                  color: "#14532d",
                  marginBottom: "0.5rem",
                }}
              >
                Kemandirian Pangan
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#3f6212",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                Menyediakan pasokan sayuran segar, sehat, dan bergizi tinggi
                yang dipanen langsung dari pekarangan sendiri untuk keluarga.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION DATA STATISTIK (BERSIH TANPA EMOJI) */}
      <section
        id="statistik"
        style={{
          scrollMarginTop: "120px",
          padding: "3.5rem 1.25rem",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            maxWidth: "850px",
            margin: "0 auto 2.5rem auto",
          }}
        >
          <span
            style={{
              fontSize: "0.75rem",
              color: "#15803d",
              fontWeight: 800,
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            DEMOGRAFI & FASILITAS
          </span>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
              fontWeight: 900,
              margin: "8px 0 1rem 0",
              color: "#14532d",
            }}
          >
            Data Statistik Wilayah RW 19
          </h2>
          <p style={{ color: "#4d7c0f", fontSize: "1rem", lineHeight: 1.6 }}>
            Informasi ringkas kependudukan, demografi warga, dan fasilitas
            ibadah di lingkungan RW 19 Antapani.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {/* Card 1: Jumlah Warga */}
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #bbf7d0",
              borderRadius: "18px",
              padding: "1.5rem",
              boxShadow: "0 10px 25px rgba(21,128,61,0.04)",
            }}
          >
            <div
              style={{
                backgroundColor: "#f0fdf4",
                color: "#15803d",
                width: "46px",
                height: "46px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1rem",
                border: "1px solid #bbf7d0",
              }}
            >
              <Users size={24} />
            </div>
            <div
              style={{
                fontSize: "0.8rem",
                color: "#65a30d",
                fontWeight: 800,
                textTransform: "uppercase",
              }}
            >
              JUMLAH WARGA
            </div>
            <div
              style={{
                fontSize: "2rem",
                fontWeight: 900,
                color: "#14532d",
                margin: "4px 0",
              }}
            >
              {wargaStats?.totalWarga ?? 4500}
            </div>
            <div
              style={{ fontSize: "0.85rem", color: "#3f6212", fontWeight: 600 }}
            >
              Jiwa Terdaftar
            </div>
          </div>

          {/* Card 2: Kepala Keluarga */}
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #bbf7d0",
              borderRadius: "18px",
              padding: "1.5rem",
              boxShadow: "0 10px 25px rgba(21,128,61,0.04)",
            }}
          >
            <div
              style={{
                backgroundColor: "#f0fdf4",
                color: "#15803d",
                width: "46px",
                height: "46px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1rem",
                border: "1px solid #bbf7d0",
              }}
            >
              <Home size={24} />
            </div>
            <div
              style={{
                fontSize: "0.8rem",
                color: "#65a30d",
                fontWeight: 800,
                textTransform: "uppercase",
              }}
            >
              KEPALA KELUARGA
            </div>
            <div
              style={{
                fontSize: "2rem",
                fontWeight: 900,
                color: "#14532d",
                margin: "4px 0",
              }}
            >
              {wargaStats?.totalKK ?? 1250}
            </div>
            <div
              style={{ fontSize: "0.85rem", color: "#3f6212", fontWeight: 600 }}
            >
              KK Terdata
            </div>
          </div>

          {/* Card 3: Jumlah Masjid */}
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #bbf7d0",
              borderRadius: "18px",
              padding: "1.5rem",
              boxShadow: "0 10px 25px rgba(21,128,61,0.04)",
            }}
          >
            <div
              style={{
                backgroundColor: "#f0fdf4",
                color: "#15803d",
                width: "46px",
                height: "46px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1rem",
                border: "1px solid #bbf7d0",
              }}
            >
              <Landmark size={24} />
            </div>
            <div
              style={{
                fontSize: "0.8rem",
                color: "#65a30d",
                fontWeight: 800,
                textTransform: "uppercase",
              }}
            >
              JUMLAH MASJID
            </div>
            <div
              style={{
                fontSize: "2rem",
                fontWeight: 900,
                color: "#14532d",
                margin: "4px 0",
              }}
            >
              {wargaStats?.jumlahMasjid ?? 3}
            </div>
            <div
              style={{ fontSize: "0.85rem", color: "#3f6212", fontWeight: 600 }}
            >
              Fasilitas Ibadah
            </div>
          </div>

          {/* Card 4: Demografi Gender (BERSIH TANPA EMOJI) */}
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #bbf7d0",
              borderRadius: "18px",
              padding: "1.5rem",
              boxShadow: "0 10px 25px rgba(21,128,61,0.04)",
            }}
          >
            <div
              style={{
                backgroundColor: "#f0fdf4",
                color: "#15803d",
                width: "46px",
                height: "46px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1rem",
                border: "1px solid #bbf7d0",
              }}
            >
              <UserCheck size={24} />
            </div>
            <div
              style={{
                fontSize: "0.8rem",
                color: "#65a30d",
                fontWeight: 800,
                textTransform: "uppercase",
              }}
            >
              PRIA & WANITA
            </div>
            <div
              style={{
                fontSize: "1.2rem",
                fontWeight: 900,
                color: "#14532d",
                margin: "8px 0",
              }}
            >
              Pria: {wargaStats?.lakiLaki ?? 2200} | Wanita:{" "}
              {wargaStats?.perempuan ?? 2300}
            </div>
            <div
              style={{ fontSize: "0.85rem", color: "#3f6212", fontWeight: 600 }}
            >
              Demografi Gender
            </div>
          </div>
        </div>
      </section>

      {/* 5. LOCATIONS SECTION */}
      <section
        id="locations"
        style={{
          scrollMarginTop: "120px",
          padding: "3.5rem 1.25rem",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "1.5rem",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "0.75rem",
                color: "#15803d",
                fontWeight: 800,
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              PEMETAAN WILAYAH
            </div>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
                fontWeight: 900,
                margin: "4px 0 0 0",
                color: "#14532d",
              }}
            >
              Peta Statik Titik Kebun Antapani RW 19
            </h2>
          </div>
          <div
            style={{
              backgroundColor: "#dcfce7",
              color: "#15803d",
              padding: "6px 12px",
              borderRadius: "10px",
              fontSize: "0.8rem",
              fontWeight: 700,
              border: "1px solid #bbf7d0",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <MapPin size={14} /> Area Antapani Kidul
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "20px",
            border: "1px solid #dcfce7",
            padding: "1rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              paddingTop: "56.25%",
              borderRadius: "14px",
              overflow: "hidden",
              border: "1px solid #bbf7d0",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200"
              alt="Peta Statik Wilayah RW 19 Antapani"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                backgroundColor: "rgba(20,83,45,0.9)",
                color: "#ffffff",
                padding: "6px 12px",
                borderRadius: "10px",
                fontSize: "0.75rem",
                fontWeight: 800,
                backdropFilter: "blur(4px)",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <Compass size={14} /> PETA STATIK RESMI RW 19
            </div>
          </div>

          <div
            style={{
              marginTop: "1.25rem",
              padding: "1rem",
              backgroundColor: "#f0fdf4",
              borderRadius: "14px",
              border: "1px solid #bbf7d0",
            }}
          >
            <div
              style={{
                fontSize: "0.85rem",
                fontWeight: 800,
                color: "#15803d",
                marginBottom: "0.75rem",
              }}
            >
              📍 LEGENDA SEKTOR KEBUN & BATAS WILAYAH RW 19
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: "0.75rem",
              }}
            >
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "10px 12px",
                  borderRadius: "10px",
                  border: "1px solid #bbf7d0",
                }}
              >
                <span
                  style={{
                    fontSize: "0.7rem",
                    color: "#65a30d",
                    fontWeight: 800,
                  }}
                >
                  SEKTOR 1
                </span>
                <div
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 800,
                    color: "#14532d",
                  }}
                >
                  Kebun Utama RW 19
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "10px 12px",
                  borderRadius: "10px",
                  border: "1px solid #bbf7d0",
                }}
              >
                <span
                  style={{
                    fontSize: "0.7rem",
                    color: "#65a30d",
                    fontWeight: 800,
                  }}
                >
                  SEKTOR 2
                </span>
                <div
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 800,
                    color: "#14532d",
                  }}
                >
                  Green House Pembibitan
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "10px 12px",
                  borderRadius: "10px",
                  border: "1px solid #bbf7d0",
                }}
              >
                <span
                  style={{
                    fontSize: "0.7rem",
                    color: "#65a30d",
                    fontWeight: 800,
                  }}
                >
                  SEKTOR 3
                </span>
                <div
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 800,
                    color: "#14532d",
                  }}
                >
                  Area Toga & Hidroponik
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "10px 12px",
                  borderRadius: "10px",
                  border: "1px solid #bbf7d0",
                }}
              >
                <span
                  style={{
                    fontSize: "0.7rem",
                    color: "#65a30d",
                    fontWeight: 800,
                  }}
                >
                  BATAS UTARA
                </span>
                <div
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 800,
                    color: "#14532d",
                  }}
                >
                  Jl. Antapani Raya
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. GALLERY SECTION */}
      <section
        id="gallery"
        style={{
          scrollMarginTop: "120px",
          padding: "3.5rem 1.25rem",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            fontSize: "0.75rem",
            color: "#15803d",
            fontWeight: 800,
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          DOKUMENTASI KEBUN
        </div>
        <h2
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
            fontWeight: 900,
            margin: "4px 0 0.25rem 0",
            color: "#14532d",
          }}
        >
          Hasil Panen Kita
        </h2>
        <p
          style={{
            color: "#4d7c0f",
            fontSize: "0.95rem",
            marginBottom: "2rem",
          }}
        >
          Jelajahi keindahan dan kelimpahan hasil bumi dari kebun komunitas
          kami.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {beritaList.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #dcfce7",
                borderRadius: "18px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 8px 25px rgba(0,0,0,0.03)",
              }}
            >
              <img
                src={item.image}
                alt={item.judul}
                style={{ width: "100%", height: "180px", objectFit: "cover" }}
              />
              <div
                style={{
                  padding: "1.25rem",
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <span
                    style={{
                      backgroundColor: "#dcfce7",
                      color: "#15803d",
                      padding: "4px 10px",
                      borderRadius: "10px",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                    }}
                  >
                    {item.kategori}
                  </span>
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 800,
                      margin: "8px 0 4px 0",
                      color: "#14532d",
                    }}
                  >
                    {item.judul}
                  </h3>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "#65a30d",
                      marginBottom: "8px",
                      fontWeight: 600,
                    }}
                  >
                    📅 {item.tanggal}
                  </div>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "#3f6212",
                      margin: "0 0 1rem 0",
                      lineHeight: 1.5,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedBerita(item)}
                  style={{
                    backgroundColor: "#f0fdf4",
                    color: "#15803d",
                    border: "1px solid #bbf7d0",
                    padding: "8px 14px",
                    borderRadius: "8px",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    alignSelf: "flex-start",
                  }}
                >
                  <Newspaper size={15} /> Lihat Detail <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedBerita && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(4px)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
          onClick={() => setSelectedBerita(null)}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "18px",
              maxWidth: "500px",
              width: "100%",
              overflow: "hidden",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedBerita.image}
              alt={selectedBerita.judul}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "1.5rem" }}>
              <span
                style={{
                  backgroundColor: "#dcfce7",
                  color: "#15803d",
                  padding: "4px 10px",
                  borderRadius: "10px",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                }}
              >
                {selectedBerita.kategori}
              </span>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 900,
                  margin: "8px 0 4px 0",
                  color: "#14532d",
                }}
              >
                {selectedBerita.judul}
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#3f6212",
                  lineHeight: 1.6,
                  margin: "0.75rem 0",
                }}
              >
                {selectedBerita.desc}
              </p>
              <button
                type="button"
                onClick={() => setSelectedBerita(null)}
                style={{
                  backgroundColor: "#15803d",
                  color: "#fff",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  fontWeight: 700,
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 7. CCTV MONITORING SECTION */}
      <section
        style={{
          backgroundColor: "#14532d",
          color: "#ffffff",
          padding: "3.5rem 1.25rem",
          marginTop: "2rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              fontSize: "0.75rem",
              color: "#86efac",
              fontWeight: 800,
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            LIVE MONITORING KEBUN
          </div>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
              fontWeight: 900,
              margin: "4px 0 1.5rem 0",
            }}
          >
            CCTV Area Buruan Sae RW 19
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {cctvList.map((cam) => (
              <div
                key={cam.id}
                style={{
                  backgroundColor: "#166534",
                  border: "1px solid #1f763e",
                  borderRadius: "18px",
                  padding: "1.25rem",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: "180px",
                    backgroundColor: "#000000",
                    borderRadius: "12px",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    marginBottom: "1rem",
                  }}
                  onClick={() => setSelectedCctv(cam)}
                >
                  <img
                    src={cam.img}
                    alt={cam.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      opacity: 0.65,
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      backgroundColor: "#ef4444",
                      color: "#fff",
                      fontSize: "0.7rem",
                      fontWeight: 800,
                      padding: "3px 8px",
                      borderRadius: "10px",
                    }}
                  >
                    ● LIVE
                  </span>
                  <div
                    style={{
                      position: "absolute",
                      backgroundColor: "rgba(21,128,61,0.9)",
                      padding: "12px",
                      borderRadius: "50%",
                    }}
                  >
                    <Video size={24} color="#fff" />
                  </div>
                </div>
                <h4
                  style={{
                    margin: "0 0 4px 0",
                    fontSize: "1.05rem",
                    fontWeight: 800,
                  }}
                >
                  {cam.name}
                </h4>
                <p style={{ margin: 0, fontSize: "0.85rem", color: "#bbf7d0" }}>
                  📍 {cam.loc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedCctv && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(6px)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
          onClick={() => setSelectedCctv(null)}
        >
          <div
            style={{
              backgroundColor: "#14532d",
              border: "1px solid #1f763e",
              color: "#fff",
              borderRadius: "18px",
              maxWidth: "550px",
              width: "100%",
              overflow: "hidden",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCctv.img}
              alt={selectedCctv.name}
              style={{ width: "100%", height: "250px", objectFit: "cover" }}
            />
            <div style={{ padding: "1.5rem" }}>
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 900,
                  margin: "0 0 4px 0",
                }}
              >
                {selectedCctv.name}
              </h3>
              <p
                style={{
                  color: "#86efac",
                  fontWeight: 700,
                  margin: "0 0 1.25rem 0",
                  fontSize: "0.9rem",
                }}
              >
                📍 {selectedCctv.loc}
              </p>
              <button
                type="button"
                onClick={() => setSelectedCctv(null)}
                style={{
                  backgroundColor: "#166534",
                  color: "#fff",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  fontWeight: 700,
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                Tutup Stream
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 8. CONTACT / FORM PENGADUAN SECTION */}
      <section
        id="contact"
        style={{
          scrollMarginTop: "120px",
          padding: "3.5rem 1.25rem",
          maxWidth: "850px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "24px",
            border: "1px solid #dcfce7",
            padding: "2rem 1.25rem",
            boxShadow: "0 20px 40px rgba(21,128,61,0.06)",
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontSize: "0.75rem",
              color: "#15803d",
              fontWeight: 800,
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            MARI MENANAM KEBAIKAN BERSAMA
          </span>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
              fontWeight: 900,
              margin: "6px 0 0.75rem 0",
              color: "#14532d",
            }}
          >
            Jadilah Bagian dari Solusi Hijau di RW 19 Antapani
          </h2>
          <p
            style={{
              color: "#4d7c0f",
              fontSize: "0.95rem",
              margin: "0 auto 2rem auto",
              maxWidth: "650px",
              lineHeight: 1.5,
            }}
          >
            Kirimkan aspirasi, pertanyaan, atau pendaftaran bergabung melalui
            form di bawah ini:
          </p>

          {submitted ? (
            <div
              style={{
                backgroundColor: "#dcfce7",
                color: "#14532d",
                padding: "1.25rem",
                borderRadius: "14px",
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.95rem",
              }}
            >
              <CheckCircle2 size={20} /> Pendaftaran / Pesan Anda berhasil
              dikirim ke pengurus RW 19!
            </div>
          ) : (
            <form
              onSubmit={handleSubmitPengaduan}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                textAlign: "left",
              }}
            >
              <div>
                <label
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 800,
                    display: "block",
                    marginBottom: "6px",
                    color: "#14532d",
                  }}
                >
                  Nama Lengkap Warga
                </label>
                <input
                  type="text"
                  placeholder="Masukkan nama Anda"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: "10px",
                    border: "1px solid #bbf7d0",
                    boxSizing: "border-box",
                    backgroundColor: "#f0fdf4",
                    fontSize: "0.95rem",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 800,
                    display: "block",
                    marginBottom: "6px",
                    color: "#14532d",
                  }}
                >
                  RT / Sektor
                </label>
                <select
                  value={rt}
                  onChange={(e) => setRt(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: "10px",
                    border: "1px solid #bbf7d0",
                    boxSizing: "border-box",
                    backgroundColor: "#f0fdf4",
                    fontSize: "0.95rem",
                    outline: "none",
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
                    fontSize: "0.85rem",
                    fontWeight: 800,
                    display: "block",
                    marginBottom: "6px",
                    color: "#14532d",
                  }}
                >
                  Pesan / Keinginan Bergabung
                </label>
                <textarea
                  placeholder="Tuliskan pesan Anda..."
                  value={pesan}
                  onChange={(e) => setPesan(e.target.value)}
                  required
                  rows={4}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: "10px",
                    border: "1px solid #bbf7d0",
                    boxSizing: "border-box",
                    backgroundColor: "#f0fdf4",
                    fontSize: "0.95rem",
                    outline: "none",
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  backgroundColor: "#15803d",
                  color: "#fff",
                  border: "none",
                  padding: "14px",
                  borderRadius: "10px",
                  fontWeight: 800,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  fontSize: "1rem",
                  marginTop: "0.25rem",
                  boxShadow: "0 6px 20px rgba(21,128,61,0.25)",
                }}
              >
                <Send size={16} /> Gabung Gerakan Sekarang
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer
        style={{
          backgroundColor: "#14532d",
          color: "#dcfce7",
          padding: "3rem 1.25rem 2rem 1.25rem",
          marginTop: "3rem",
          fontSize: "0.85rem",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "2rem",
            marginBottom: "2rem",
            borderBottom: "1px solid #1f763e",
            paddingBottom: "2rem",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 900,
                color: "#fff",
                marginBottom: "0.75rem",
              }}
            >
              Buruan Sae RW 19 Antapani
            </h3>
            <p
              style={{
                margin: 0,
                color: "#bbf7d0",
                lineHeight: 1.5,
                fontSize: "0.85rem",
              }}
            >
              Nurturing the earth, feeding the community. Gerakan urban farming
              mandiri untuk kesejahteraan warga perkotaan.
            </p>
          </div>
          <div>
            <h4
              style={{
                fontSize: "0.95rem",
                fontWeight: 900,
                color: "#fff",
                marginBottom: "0.75rem",
              }}
            >
              Tautan & Komunitas
            </h4>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <span
                style={{
                  color: "#bbf7d0",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  cursor: "pointer",
                }}
              >
                <Globe size={15} /> Instagram RW 19
              </span>
              <span
                style={{
                  color: "#bbf7d0",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  cursor: "pointer",
                }}
              >
                <Globe size={15} /> Kanal YouTube Resmi
              </span>
            </div>
          </div>
          <div>
            <h4
              style={{
                fontSize: "0.95rem",
                fontWeight: 900,
                color: "#fff",
                marginBottom: "0.75rem",
              }}
            >
              Kebijakan
            </h4>{" "}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <span style={{ color: "#bbf7d0", cursor: "pointer" }}>
                Community Guidelines
              </span>
              <span style={{ color: "#bbf7d0", cursor: "pointer" }}>
                Privacy Policy
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ margin: 0, color: "#bbf7d0", fontSize: "0.8rem" }}>
            © 2026 Buruan Sae RW 19 Antapani. Nurturing the earth, feeding the
            community.
          </p>
          <button
            type="button"
            onClick={() => setCurrentPage("admin")}
            style={{
              background: "transparent",
              color: "#86efac",
              border: "1px solid rgba(134,239,172,0.4)",
              padding: "6px 12px",
              borderRadius: "6px",
              fontSize: "0.75rem",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            🔒 Login Admin Dashboard
          </button>
        </div>
      </footer>
    </div>
  );
}
