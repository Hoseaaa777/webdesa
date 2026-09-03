import React from "react";
import { Sprout, Users, Store } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
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
              Menyediakan pasokan sayuran segar, sehat, dan bergizi tinggi yang
              dipanen langsung dari pekarangan sendiri untuk keluarga.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
