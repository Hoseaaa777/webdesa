import React from "react";
import { Newspaper, ArrowRight } from "lucide-react";
import type { BeritaItem } from "./AdminPage";

interface GallerySectionProps {
  beritaList: BeritaItem[];
  selectedBerita: BeritaItem | null;
  setSelectedBerita: (item: BeritaItem | null) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  beritaList,
  selectedBerita,
  setSelectedBerita,
}) => {
  return (
    <>
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
    </>
  );
};
