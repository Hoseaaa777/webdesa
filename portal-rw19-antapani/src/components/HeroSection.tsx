import React from "react";

export const HeroSection: React.FC = () => {
  return (
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
  );
};
