import React, { useState, useEffect } from "react";
import { AdminPage } from "./components/AdminPage";
import type {
  UmkmItem,
  BeritaItem,
  CctvItem,
  AparatItem,
} from "./components/AdminPage";
import "./App.css";

import {
  INITIAL_PENGADUAN,
  INITIAL_UMKM,
  INITIAL_BERITA,
  INITIAL_CCTV,
  INITIAL_APARAT,
} from "./data/initialData";

import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { StatistikSection } from "./components/StatistikSection";
import { LocationsSection } from "./components/LocationsSection";
import { GallerySection } from "./components/GallerySection";
import { CctvSection } from "./components/CctvSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"public" | "admin">("public");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /* Filter Layer Peta Interaktif */
  const [showKebun, setShowKebun] = useState(true);
  const [showMasjid, setShowMasjid] = useState(true);
  const [showSekolah, setShowSekolah] = useState(true);
  const [showAreaRt, setShowAreaRt] = useState(true);

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
      const saved = localStorage.getItem("ant_berita_v18");
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
      const saved = localStorage.getItem("ant_cctv_v5");
      const parsed = saved ? JSON.parse(saved) : null;
      return Array.isArray(parsed) && parsed.length >= 5
        ? parsed
        : INITIAL_CCTV;
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
            totalRT: 4,
            jumlahMasjid: 3,
            jumlahSekolah: 2,
            lakiLaki: 2200,
            perempuan: 2300,
          };
    } catch {
      return {
        totalWarga: 4500,
        totalKK: 1250,
        totalRT: 4,
        jumlahMasjid: 3,
        jumlahSekolah: 2,
        lakiLaki: 2200,
        perempuan: 2300,
      };
    }
  });

  useEffect(() => {
    localStorage.setItem("ant_pengaduan", JSON.stringify(pengaduanList));
    localStorage.setItem("ant_umkm", JSON.stringify(umkmList));
    localStorage.setItem("ant_berita_v18", JSON.stringify(beritaList));
    localStorage.setItem("ant_cctv_v5", JSON.stringify(cctvList));
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
      {/* 1. NAVBAR RESPONSIF */}
      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        onOpenAdmin={() => setCurrentPage("admin")}
      />

      {/* 2. HERO SECTION */}
      <HeroSection />

      {/* 3. ABOUT SECTION */}
      <AboutSection />

      {/* 4. SECTION DATA STATISTIK */}
      <StatistikSection wargaStats={wargaStats} />

      {/* 5. LOCATIONS SECTION - PETA DENGAN OVERLAY TERPRESISI */}
      <LocationsSection
        showKebun={showKebun}
        setShowKebun={setShowKebun}
        showMasjid={showMasjid}
        setShowMasjid={setShowMasjid}
        showSekolah={showSekolah}
        setShowSekolah={setShowSekolah}
        showAreaRt={showAreaRt}
        setShowAreaRt={setShowAreaRt}
      />

      {/* 6. GALLERY SECTION */}
      <GallerySection
        beritaList={beritaList}
        selectedBerita={selectedBerita}
        setSelectedBerita={setSelectedBerita}
      />

      {/* 7. CCTV MONITORING SECTION */}
      <CctvSection
        cctvList={cctvList}
        selectedCctv={selectedCctv}
        setSelectedCctv={setSelectedCctv}
      />

      {/* 8. CONTACT / FORM PENGADUAN SECTION */}
      <ContactSection
        nama={nama}
        setNama={setNama}
        rt={rt}
        setRt={setRt}
        pesan={pesan}
        setPesan={setPesan}
        submitted={submitted}
        handleSubmitPengaduan={handleSubmitPengaduan}
      />

      {/* 9. FOOTER */}
      <Footer onOpenAdmin={() => setCurrentPage("admin")} />
    </div>
  );
}
