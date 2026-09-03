import React from "react";
import { Video } from "lucide-react";
import type { CctvItem } from "./AdminPage";

interface CctvSectionProps {
  cctvList: CctvItem[];
  selectedCctv: CctvItem | null;
  setSelectedCctv: (item: CctvItem | null) => void;
}

export const CctvSection: React.FC<CctvSectionProps> = ({
  cctvList,
  selectedCctv,
  setSelectedCctv,
}) => {
  return (
    <>
      <section
        id="cctv"
        style={{
          scrollMarginTop: "120px",
          backgroundColor: "#14532d",
          color: "#ffffff",
          padding: "3.5rem 1.25rem",
          marginTop: "2rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "1.5rem",
              flexWrap: "wrap",
              gap: "0.5rem",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "#86efac",
                  fontWeight: 800,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                LIVE MONITORING WILAYAH
              </div>
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
                  fontWeight: 900,
                  margin: "4px 0 0 0",
                }}
              >
                5 Titik CCTV Area RW 19
              </h2>
            </div>
            <span
              style={{
                fontSize: "0.8rem",
                color: "#86efac",
                fontWeight: 700,
              }}
            >
              👉 Geser ke kanan untuk melihat semua kamera
            </span>
          </div>

          {/* Container 1 Baris Scroll Horizontal */}
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              overflowX: "auto",
              paddingBottom: "1rem",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {cctvList.map((cam) => (
              <div
                key={cam.id}
                style={{
                  flex: "0 0 280px",
                  scrollSnapAlign: "start",
                  backgroundColor: "#166534",
                  border: "1px solid #1f763e",
                  borderRadius: "18px",
                  padding: "1.25rem",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: "170px",
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
                    fontSize: "1rem",
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
    </>
  );
};
