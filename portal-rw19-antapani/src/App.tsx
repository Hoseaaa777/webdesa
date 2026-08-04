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
} from "lucide-react";
import { AdminPage } from "./components/AdminPage";
import type {
  Pengaduan,
  UmkmItem,
  BeritaItem,
  CctvItem,
  AparatItem,
} from "./components/AdminPage";
import "./App.css";

const INITIAL_PENGADUAN: Pengaduan[] = [
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
      "https://www.poultryindonesia.com/wp-content/uploads/2020/10/compost002tw_0.jpg",
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
  {
    id: 3,
    nama: "Bapak Rudi Hartono",
    jabatan: "Koordinator Lapangan Tani",
    kontak: "0815-1122-3344",
  },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<"public" | "admin">("public");

  const [pengaduanList, setPengaduanList] = useState<Pengaduan[]>(() => {
    try {
      const saved = localStorage.getItem("btn_pengaduan");
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
      const saved = localStorage.getItem("btn_umkm");
      const parsed = saved ? JSON.parse(saved) : null;
      return Array.isArray(parsed) && parsed.length > 0 ? parsed : INITIAL_UMKM;
    } catch {
      return INITIAL_UMKM;
    }
  });

  const [beritaList, setBeritaList] = useState<BeritaItem[]>(() => {
    try {
      const saved = localStorage.getItem("btn_berita_v2"); // Ganti jadi btn_berita_v2
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
      const saved = localStorage.getItem("btn_cctv");
      const parsed = saved ? JSON.parse(saved) : null;
      return Array.isArray(parsed) && parsed.length > 0 ? parsed : INITIAL_CCTV;
    } catch {
      return INITIAL_CCTV;
    }
  });

  const [aparatList, setAparatList] = useState<AparatItem[]>(() => {
    try {
      const saved = localStorage.getItem("btn_aparat");
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
      const saved = localStorage.getItem("btn_wargastats");
      return saved
        ? JSON.parse(saved)
        : { totalWarga: 4500, totalKK: 1250, usiaProduktif: 3100, lansia: 500 };
    } catch {
      return {
        totalWarga: 4500,
        totalKK: 1250,
        usiaProduktif: 3100,
        lansia: 500,
      };
    }
  });

  useEffect(() => {
    localStorage.setItem("btn_pengaduan", JSON.stringify(pengaduanList));
    localStorage.setItem("btn_umkm", JSON.stringify(umkmList));
    localStorage.setItem("btn_berita_v2", JSON.stringify(beritaList)); // Ganti jadi btn_berita_v2
    localStorage.setItem("btn_cctv", JSON.stringify(cctvList));
    localStorage.setItem("btn_aparat", JSON.stringify(aparatList));
    localStorage.setItem("btn_wargastats", JSON.stringify(wargaStats));
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

    const newReport: Pengaduan = {
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
    return (
      <AdminPage
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

  const totalPop = wargaStats?.totalWarga ?? 4500;

  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
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
          padding: "1.2rem 2.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          zIndex: 50,
          boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              backgroundColor: "#15803d",
              color: "#fff",
              padding: "10px",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Sprout size={26} />
          </div>
          <div>
            <h1
              style={{
                fontSize: "1.2rem",
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
                fontSize: "0.8rem",
                color: "#16a34a",
                margin: 0,
                fontWeight: 700,
              }}
            >
              RW 19 Antapani
            </p>
          </div>
        </div>

        <nav
          style={{
            display: "flex",
            gap: "2rem",
            fontSize: "0.95rem",
            fontWeight: 600,
            color: "#3f6212",
          }}
        >
          <a
            href="#beranda"
            style={{ color: "#15803d", textDecoration: "none" }}
          >
            Home
          </a>
          <a href="#about" style={{ textDecoration: "none", color: "inherit" }}>
            About
          </a>
          <a
            href="#locations"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Locations
          </a>
          <a
            href="#gallery"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Gallery
          </a>
          <a
            href="#contact"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Contact
          </a>
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button
            type="button"
            onClick={() => setCurrentPage("admin")}
            style={{
              backgroundColor: "#f0fdf4",
              color: "#15803d",
              border: "1px solid #bbf7d0",
              fontSize: "0.85rem",
              fontWeight: 700,
              padding: "9px 16px",
              borderRadius: "10px",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <Lock size={15} color="#15803d" /> Login Admin
          </button>
          <a
            href="#pengaduan"
            style={{
              backgroundColor: "#15803d",
              color: "#ffffff",
              textDecoration: "none",
              padding: "10px 20px",
              borderRadius: "25px",
              fontWeight: 700,
              fontSize: "0.9rem",
            }}
          >
            Join Movement
          </a>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section
        id="beranda"
        style={{
          scrollMarginTop: "150px",
          padding: "4rem 2.5rem",
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        <div>
          <span
            style={{
              backgroundColor: "#dcfce7",
              color: "#15803d",
              padding: "8px 16px",
              borderRadius: "20px",
              fontSize: "0.8rem",
              fontWeight: 700,
              border: "1px solid #bbf7d0",
              display: "inline-block",
              marginBottom: "1.2rem",
            }}
          >
            🌱 Nurturing the earth, feeding the community.
          </span>
          <h2
            style={{
              fontSize: "3.2rem",
              fontWeight: 900,
              margin: "0 0 1.5rem 0",
              lineHeight: 1.15,
              color: "#14532d",
              letterSpacing: "-1px",
            }}
          >
            Menumbuhkan Kehidupan di Tengah Kota
          </h2>
          <p
            style={{
              color: "#3f6212",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              margin: "0 0 2rem 0",
            }}
          >
            Bergabunglah dengan gerakan Buruan Sae RW 19 Antapani. Bersama kita
            mengubah lahan tidur menjadi kebun hijau produktif yang menutrisi
            komunitas dan menghidupkan kembali harmoni alam di lingkungan urban.
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <a
              href="#pengaduan"
              style={{
                backgroundColor: "#15803d",
                color: "#fff",
                padding: "14px 28px",
                borderRadius: "30px",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "0.95rem",
                boxShadow: "0 4px 14px rgba(21,128,61,0.3)",
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
                padding: "14px 28px",
                borderRadius: "30px",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "0.95rem",
              }}
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "28px",
            border: "1px solid #dcfce7",
            padding: "1.75rem",
            boxShadow: "0 20px 40px -15px rgba(21,128,61,0.12)",
          }}
        >
          <img
            src="https://gdb.voanews.com/09840000-0aff-0242-2bad-08da96739cdc_w1597_n_r1_s_s.jpg"
            alt="Kebun Buruan Sae RW 19"
            style={{
              width: "100%",
              height: "320px",
              objectFit: "cover",
              borderRadius: "20px",
              marginBottom: "1.25rem",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 0.5rem",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "#65a30d",
                  fontWeight: 800,
                  letterSpacing: "0.5px",
                }}
              >
                TOTAL WARGA TERLIBAT
              </div>
              <div
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 900,
                  color: "#14532d",
                }}
              >
                {totalPop} Jiwa
              </div>
            </div>
            <span
              style={{
                backgroundColor: "#f0fdf4",
                color: "#16a34a",
                padding: "8px 16px",
                borderRadius: "16px",
                fontWeight: 800,
                fontSize: "0.85rem",
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
          scrollMarginTop: "150px",
          padding: "5rem 2.5rem",
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
              margin: "0 auto 4rem auto",
            }}
          >
            <span
              style={{
                fontSize: "0.8rem",
                color: "#15803d",
                fontWeight: 800,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              MISI KAMI: MENGHIJAUKAN ANTAPANI
            </span>
            <h2
              style={{
                fontSize: "2.4rem",
                fontWeight: 900,
                margin: "12px 0 1.25rem 0",
                color: "#14532d",
                lineHeight: 1.2,
              }}
            >
              Buruan Sae RW 19 Antapani Bukan Sekadar Kebun
            </h2>
            <p
              style={{ color: "#4d7c0f", fontSize: "1.1rem", lineHeight: 1.7 }}
            >
              Kami mengubah ruang kosong perkotaan menjadi oasis produktif yang
              menyediakan pangan organik, udara bersih, dan ruang interaksi bagi
              warga. Setiap jengkal tanah berharga untuk bumi yang lebih baik.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2.5rem",
            }}
          >
            <div
              style={{
                backgroundColor: "#f0fdf4",
                border: "1px solid #bbf7d0",
                borderRadius: "20px",
                padding: "2rem",
              }}
            >
              <div
                style={{
                  backgroundColor: "#15803d",
                  color: "#fff",
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.25rem",
                }}
              >
                <Sprout size={24} />
              </div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 800,
                  color: "#14532d",
                  marginBottom: "0.75rem",
                }}
              >
                Berkelanjutan
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#3f6212",
                  lineHeight: 1.6,
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
                borderRadius: "20px",
                padding: "2rem",
              }}
            >
              <div
                style={{
                  backgroundColor: "#15803d",
                  color: "#fff",
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.25rem",
                }}
              >
                <Users size={24} />
              </div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 800,
                  color: "#14532d",
                  marginBottom: "0.75rem",
                }}
              >
                Pemberdayaan Warga
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#3f6212",
                  lineHeight: 1.6,
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
                borderRadius: "20px",
                padding: "2rem",
              }}
            >
              <div
                style={{
                  backgroundColor: "#15803d",
                  color: "#fff",
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.25rem",
                }}
              >
                <Store size={24} />
              </div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 800,
                  color: "#14532d",
                  marginBottom: "0.75rem",
                }}
              >
                Kemandirian Pangan
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#3f6212",
                  lineHeight: 1.6,
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

      {/* 4. LOCATIONS SECTION */}
      <section
        id="locations"
        style={{
          scrollMarginTop: "150px",
          padding: "4rem 2.5rem",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "2rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "0.8rem",
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
                fontSize: "2.2rem",
                fontWeight: 900,
                margin: "4px 0 0 0",
                color: "#14532d",
              }}
            >
              Titik Lokasi Buruan Sae RW 19
            </h2>
          </div>
          <div
            style={{
              backgroundColor: "#dcfce7",
              color: "#15803d",
              padding: "8px 16px",
              borderRadius: "12px",
              fontSize: "0.85rem",
              fontWeight: 700,
              border: "1px solid #bbf7d0",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <MapPin size={16} /> Area Antapani Kidul, Bandung
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "24px",
            border: "1px solid #dcfce7",
            padding: "1.5rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
          }}
        >
          <div
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid #e2e8f0",
            }}
          >
            <iframe
              title="Peta Antapani"
              src="https://maps.google.com/maps?q=Antapani%20Bandung&t=&z=15&ie=UTF8&iwloc=&output=embed"
              style={{
                width: "100%",
                height: "400px",
                border: "none",
                display: "block",
              }}
            />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
              marginTop: "1.5rem",
              padding: "0.5rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "14px",
                  height: "14px",
                  backgroundColor: "#15803d",
                  borderRadius: "50%",
                }}
              />
              <span
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: "#14532d",
                }}
              >
                Sektor 1: Kebun Utama RW 19
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "14px",
                  height: "14px",
                  backgroundColor: "#16a34a",
                  borderRadius: "50%",
                }}
              />
              <span
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: "#14532d",
                }}
              >
                Sektor 2: Green House Bibit
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "14px",
                  height: "14px",
                  backgroundColor: "#84cc16",
                  borderRadius: "50%",
                }}
              />
              <span
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: "#14532d",
                }}
              >
                Sektor 3 & 4: Pekarangan Warga
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STATS SECTION */}
      <section
        style={{ padding: "2rem 2.5rem", maxWidth: "1280px", margin: "0 auto" }}
      >
        <div
          style={{
            backgroundColor: "#15803d",
            color: "#ffffff",
            borderRadius: "24px",
            padding: "3rem 2rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2rem",
            textAlign: "center",
            boxShadow: "0 20px 40px rgba(21,128,61,0.2)",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "0.85rem",
                opacity: 0.9,
                fontWeight: 700,
                letterSpacing: "0.5px",
              }}
            >
              TOTAL WARGA RW 19
            </div>
            <div
              style={{
                fontSize: "2.5rem",
                fontWeight: 900,
                margin: "8px 0 0 0",
              }}
            >
              {totalPop} Jiwa
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "0.85rem",
                opacity: 0.9,
                fontWeight: 700,
                letterSpacing: "0.5px",
              }}
            >
              KEPALA KELUARGA
            </div>
            <div
              style={{
                fontSize: "2.5rem",
                fontWeight: 900,
                margin: "8px 0 0 0",
              }}
            >
              {wargaStats?.totalKK ?? 1250} KK
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "0.85rem",
                opacity: 0.9,
                fontWeight: 700,
                letterSpacing: "0.5px",
              }}
            >
              PRODUK UMKM TANI
            </div>
            <div
              style={{
                fontSize: "2.5rem",
                fontWeight: 900,
                margin: "8px 0 0 0",
              }}
            >
              {umkmList.length} Item
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "0.85rem",
                opacity: 0.9,
                fontWeight: 700,
                letterSpacing: "0.5px",
              }}
            >
              TITIK KEBUN AKTIF
            </div>
            <div
              style={{
                fontSize: "2.5rem",
                fontWeight: 900,
                margin: "8px 0 0 0",
              }}
            >
              4 Sektor
            </div>
          </div>
        </div>
      </section>

      {/* 6. GALLERY SECTION */}
      <section
        id="gallery"
        style={{
          scrollMarginTop: "150px",
          padding: "4rem 2.5rem",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            fontSize: "0.8rem",
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
            fontSize: "2.2rem",
            fontWeight: 900,
            margin: "4px 0 0.5rem 0",
            color: "#14532d",
          }}
        >
          Hasil Panen Kita
        </h2>
        <p
          style={{
            color: "#4d7c0f",
            fontSize: "1.05rem",
            marginBottom: "2.5rem",
          }}
        >
          Jelajahi keindahan dan kelimpahan hasil bumi dari kebun komunitas
          kami.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "2rem",
          }}
        >
          {beritaList.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #dcfce7",
                borderRadius: "20px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 8px 25px rgba(0,0,0,0.03)",
              }}
            >
              <img
                src={item.image}
                alt={item.judul}
                style={{ width: "100%", height: "220px", objectFit: "cover" }}
              />
              <div
                style={{
                  padding: "1.75rem",
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
                      padding: "4px 12px",
                      borderRadius: "12px",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                    }}
                  >
                    {item.kategori}
                  </span>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 800,
                      margin: "10px 0 6px 0",
                      color: "#14532d",
                    }}
                  >
                    {item.judul}
                  </h3>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "#65a30d",
                      marginBottom: "10px",
                      fontWeight: 600,
                    }}
                  >
                    📅 {item.tanggal}
                  </div>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "#3f6212",
                      margin: "0 0 1.25rem 0",
                      lineHeight: 1.6,
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
                    padding: "10px 18px",
                    borderRadius: "10px",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    alignSelf: "flex-start",
                  }}
                >
                  <Newspaper size={16} /> Lihat Detail Kegiatan
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
              borderRadius: "20px",
              maxWidth: "550px",
              width: "100%",
              overflow: "hidden",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedBerita.image}
              alt={selectedBerita.judul}
              style={{ width: "100%", height: "240px", objectFit: "cover" }}
            />
            <div style={{ padding: "2rem" }}>
              <span
                style={{
                  backgroundColor: "#dcfce7",
                  color: "#15803d",
                  padding: "4px 12px",
                  borderRadius: "12px",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                }}
              >
                {selectedBerita.kategori}
              </span>
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 900,
                  margin: "10px 0 6px 0",
                  color: "#14532d",
                }}
              >
                {selectedBerita.judul}
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#3f6212",
                  lineHeight: 1.7,
                  margin: "1rem 0",
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
                  padding: "12px 24px",
                  borderRadius: "10px",
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

      {/* 7. UMKM SECTION */}
      <section
        style={{ padding: "4rem 2.5rem", maxWidth: "1280px", margin: "0 auto" }}
      >
        <div
          style={{
            fontSize: "0.8rem",
            color: "#15803d",
            fontWeight: 800,
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          PRODUK LOKAL
        </div>
        <h2
          style={{
            fontSize: "2.2rem",
            fontWeight: 900,
            margin: "4px 0 1.5rem 0",
            color: "#14532d",
          }}
        >
          Etalase Hasil Tani & UMKM RW 19
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
          }}
        >
          {umkmList.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #dcfce7",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 8px 25px rgba(0,0,0,0.03)",
              }}
            >
              <img
                src={item.image}
                alt={item.nama}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <div style={{ padding: "1.75rem" }}>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "#16a34a",
                    fontWeight: 800,
                  }}
                >
                  {item.kategori}
                </span>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 800,
                    margin: "6px 0 6px 0",
                    color: "#14532d",
                  }}
                >
                  {item.nama}
                </h3>
                <div
                  style={{
                    fontSize: "1rem",
                    fontWeight: 800,
                    color: "#15803d",
                    marginBottom: "10px",
                  }}
                >
                  {item.harga}
                </div>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "#3f6212",
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CCTV SECTION */}
      <section
        style={{
          backgroundColor: "#14532d",
          color: "#ffffff",
          padding: "5rem 2.5rem",
          marginTop: "3rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              fontSize: "0.8rem",
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
              fontSize: "2.2rem",
              fontWeight: 900,
              margin: "4px 0 2rem 0",
            }}
          >
            CCTV Area Buruan Sae RW 19
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "2rem",
            }}
          >
            {cctvList.map((cam) => (
              <div
                key={cam.id}
                style={{
                  backgroundColor: "#166534",
                  border: "1px solid #1f763e",
                  borderRadius: "20px",
                  padding: "1.5rem",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: "200px",
                    backgroundColor: "#000000",
                    borderRadius: "14px",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    marginBottom: "1.25rem",
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
                      top: "12px",
                      left: "12px",
                      backgroundColor: "#ef4444",
                      color: "#fff",
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      padding: "4px 10px",
                      borderRadius: "12px",
                    }}
                  >
                    ● LIVE
                  </span>
                  <div
                    style={{
                      position: "absolute",
                      backgroundColor: "rgba(21,128,61,0.9)",
                      padding: "14px",
                      borderRadius: "50%",
                    }}
                  >
                    <Video size={30} color="#fff" />
                  </div>
                </div>
                <h4
                  style={{
                    margin: "0 0 6px 0",
                    fontSize: "1.15rem",
                    fontWeight: 800,
                  }}
                >
                  {cam.name}
                </h4>
                <p style={{ margin: 0, fontSize: "0.9rem", color: "#bbf7d0" }}>
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
              borderRadius: "20px",
              maxWidth: "650px",
              width: "100%",
              overflow: "hidden",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCctv.img}
              alt={selectedCctv.name}
              style={{ width: "100%", height: "320px", objectFit: "cover" }}
            />
            <div style={{ padding: "2rem" }}>
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 900,
                  margin: "0 0 6px 0",
                }}
              >
                {selectedCctv.name}
              </h3>
              <p
                style={{
                  color: "#86efac",
                  fontWeight: 700,
                  margin: "0 0 1.5rem 0",
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
                  padding: "12px 24px",
                  borderRadius: "10px",
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

      {/* 9. CONTACT / FORM PENGADUAN SECTION */}
      <section
        id="contact"
        style={{
          scrollMarginTop: "150px",
          padding: "5rem 2.5rem",
          maxWidth: "850px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "28px",
            border: "1px solid #dcfce7",
            padding: "3rem",
            boxShadow: "0 20px 40px rgba(21,128,61,0.06)",
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontSize: "0.8rem",
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
              fontSize: "2.2rem",
              fontWeight: 900,
              margin: "6px 0 1rem 0",
              color: "#14532d",
            }}
          >
            Jadilah Bagian dari Solusi Hijau di RW 19 Antapani
          </h2>
          <p
            style={{
              color: "#4d7c0f",
              fontSize: "1.05rem",
              margin: "0 auto 2.5rem auto",
              maxWidth: "650px",
              lineHeight: 1.6,
            }}
          >
            Tidak butuh pengalaman berkebun, cukup kemauan untuk merawat bumi.
            Kirimkan aspirasi, pertanyaan, atau pendaftaran bergabung melalui
            form di bawah ini:
          </p>

          {submitted ? (
            <div
              style={{
                backgroundColor: "#dcfce7",
                color: "#14532d",
                padding: "1.5rem",
                borderRadius: "16px",
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "1.05rem",
              }}
            >
              <CheckCircle2 size={24} /> Pendaftaran / Pesan Anda berhasil
              dikirim ke pengurus RW 19!
            </div>
          ) : (
            <form
              id="pengaduan"
              onSubmit={handleSubmitPengaduan}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                textAlign: "left",
              }}
            >
              <div>
                <label
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 800,
                    display: "block",
                    marginBottom: "8px",
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
                    padding: "14px 16px",
                    borderRadius: "12px",
                    border: "1px solid #bbf7d0",
                    boxSizing: "border-box",
                    backgroundColor: "#f0fdf4",
                    fontSize: "1rem",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 800,
                    display: "block",
                    marginBottom: "8px",
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
                    padding: "14px 16px",
                    borderRadius: "12px",
                    border: "1px solid #bbf7d0",
                    boxSizing: "border-box",
                    backgroundColor: "#f0fdf4",
                    fontSize: "1rem",
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
                    fontSize: "0.9rem",
                    fontWeight: 800,
                    display: "block",
                    marginBottom: "8px",
                    color: "#14532d",
                  }}
                >
                  Pesan / Keinginan Bergabung
                </label>
                <textarea
                  placeholder="Tuliskan pesan atau ketertarikan untuk bergabung..."
                  value={pesan}
                  onChange={(e) => setPesan(e.target.value)}
                  required
                  rows={4}
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    borderRadius: "12px",
                    border: "1px solid #bbf7d0",
                    boxSizing: "border-box",
                    backgroundColor: "#f0fdf4",
                    fontSize: "1rem",
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
                  padding: "16px",
                  borderRadius: "12px",
                  fontWeight: 800,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  fontSize: "1.05rem",
                  marginTop: "0.5rem",
                  boxShadow: "0 6px 20px rgba(21,128,61,0.25)",
                }}
              >
                <Send size={18} /> Gabung Gerakan Sekarang
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer
        style={{
          backgroundColor: "#14532d",
          color: "#dcfce7",
          padding: "4rem 2.5rem 2.5rem 2.5rem",
          marginTop: "5rem",
          fontSize: "0.9rem",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
            borderBottom: "1px solid #1f763e",
            paddingBottom: "3rem",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: 900,
                color: "#fff",
                marginBottom: "1rem",
              }}
            >
              Buruan Sae RW 19 Antapani
            </h3>
            <p
              style={{
                margin: 0,
                color: "#bbf7d0",
                lineHeight: 1.6,
                fontSize: "0.95rem",
              }}
            >
              Nurturing the earth, feeding the community. Gerakan urban farming
              mandiri untuk kesejahteraan warga perkotaan.
            </p>
          </div>
          <div>
            <h4
              style={{
                fontSize: "1rem",
                fontWeight: 900,
                color: "#fff",
                marginBottom: "1rem",
              }}
            >
              Tautan & Komunitas
            </h4>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <span
                style={{
                  color: "#bbf7d0",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                }}
              >
                <Globe size={16} /> Instagram RW 19
              </span>
              <span
                style={{
                  color: "#bbf7d0",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                }}
              >
                <Globe size={16} /> Kanal YouTube Resmi
              </span>
            </div>
          </div>
          <div>
            <h4
              style={{
                fontSize: "1rem",
                fontWeight: 900,
                color: "#fff",
                marginBottom: "1rem",
              }}
            >
              Kebijakan
            </h4>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
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
            gap: "1.5rem",
          }}
        >
          <p style={{ margin: 0, color: "#bbf7d0", fontSize: "0.85rem" }}>
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
              padding: "8px 16px",
              borderRadius: "8px",
              fontSize: "0.8rem",
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
