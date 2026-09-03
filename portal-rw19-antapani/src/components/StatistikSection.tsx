import React from "react";
import {
  Users,
  Home,
  Layers,
  Landmark,
  GraduationCap,
  UserCheck,
} from "lucide-react";

interface StatistikSectionProps {
  wargaStats: any;
}

export const StatistikSection: React.FC<StatistikSectionProps> = ({
  wargaStats,
}) => {
  return (
    <section
      id="statistik"
      style={{
        scrollMarginTop: "120px",
        padding: "3.5rem 1.25rem",
        maxWidth: "1100px",
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
          DEMOGRAFI & FASILITAS WILAYAH
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
          Informasi ringkas kependudukan, demografi warga, jumlah unit RT, serta
          fasilitas umum di lingkungan RW 19 Antapani.
        </p>
      </div>

      {/* Grid Kolom Responsif */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.25rem",
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
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "0.85rem",
              border: "1px solid #bbf7d0",
            }}
          >
            <Users size={22} />
          </div>
          <div
            style={{
              fontSize: "0.75rem",
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
              margin: "2px 0",
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
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "0.85rem",
              border: "1px solid #bbf7d0",
            }}
          >
            <Home size={22} />
          </div>
          <div
            style={{
              fontSize: "0.75rem",
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
              margin: "2px 0",
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

        {/* Card 3: Jumlah RT */}
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
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "0.85rem",
              border: "1px solid #bbf7d0",
            }}
          >
            <Layers size={22} />
          </div>
          <div
            style={{
              fontSize: "0.75rem",
              color: "#65a30d",
              fontWeight: 800,
              textTransform: "uppercase",
            }}
          >
            JUMLAH RT
          </div>
          <div
            style={{
              fontSize: "2rem",
              fontWeight: 900,
              color: "#14532d",
              margin: "2px 0",
            }}
          >
            {wargaStats?.totalRT ?? 4} RT
          </div>
          <div
            style={{ fontSize: "0.85rem", color: "#3f6212", fontWeight: 600 }}
          >
            Wilayah Sektor
          </div>
        </div>

        {/* Card 4: Jumlah Masjid */}
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
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "0.85rem",
              border: "1px solid #bbf7d0",
            }}
          >
            <Landmark size={22} />
          </div>
          <div
            style={{
              fontSize: "0.75rem",
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
              margin: "2px 0",
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

        {/* Card 5: Jumlah Sekolah */}
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
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "0.85rem",
              border: "1px solid #bbf7d0",
            }}
          >
            <GraduationCap size={22} />
          </div>
          <div
            style={{
              fontSize: "0.75rem",
              color: "#65a30d",
              fontWeight: 800,
              textTransform: "uppercase",
            }}
          >
            JUMLAH SEKOLAH
          </div>
          <div
            style={{
              fontSize: "2rem",
              fontWeight: 900,
              color: "#14532d",
              margin: "2px 0",
            }}
          >
            {wargaStats?.jumlahSekolah ?? 2}
          </div>
          <div
            style={{ fontSize: "0.85rem", color: "#3f6212", fontWeight: 600 }}
          >
            Sarana Pendidikan
          </div>
        </div>

        {/* Card 6: Demografi Gender */}
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
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "0.85rem",
              border: "1px solid #bbf7d0",
            }}
          >
            <UserCheck size={22} />
          </div>
          <div
            style={{
              fontSize: "0.75rem",
              color: "#65a30d",
              fontWeight: 800,
              textTransform: "uppercase",
            }}
          >
            PRIA & WANITA
          </div>
          <div
            style={{
              fontSize: "1.15rem",
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
            Demografi Kependudukan
          </div>
        </div>
      </div>
    </section>
  );
};
