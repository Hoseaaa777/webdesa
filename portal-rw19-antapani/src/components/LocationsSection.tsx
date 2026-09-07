import React from "react";
import {
  MapPin,
  Layers,
  Sprout,
  Eye,
  EyeOff,
  Landmark,
  GraduationCap,
  Compass,
} from "lucide-react";
import petaImg from "../assets/peta.jpeg";

interface LocationsSectionProps {
  showKebun: boolean;
  setShowKebun: (val: boolean) => void;
  showMasjid: boolean;
  setShowMasjid: (val: boolean) => void;
  showSekolah: boolean;
  setShowSekolah: (val: boolean) => void;
  showAreaRt: boolean;
  setShowAreaRt: (val: boolean) => void;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({
  showKebun,
  setShowKebun,
  showMasjid,
  setShowMasjid,
  showSekolah,
  setShowSekolah,
  showAreaRt,
  setShowAreaRt,
}) => {
  return (
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
            PEMETAAN INTERAKTIF
          </div>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
              fontWeight: 900,
              margin: "4px 0 0 0",
              color: "#14532d",
            }}
          >
            Peta Sektor RW 19 Antapani Kidul
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
          <MapPin size={14} /> Antapani Kidul, Bandung
        </div>
      </div>

      {/* Panel Tombol Filter Layer Peta */}
      <div
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid #dcfce7",
          borderRadius: "16px",
          padding: "1rem",
          marginBottom: "1.25rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "0.75rem",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontSize: "0.8rem",
            fontWeight: 800,
            color: "#14532d",
            marginRight: "0.5rem",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <Layers size={16} color="#15803d" /> FILTER PENANDA:
        </span>

        <button
          type="button"
          onClick={() => setShowKebun(!showKebun)}
          style={{
            backgroundColor: showKebun ? "#15803d" : "#f0fdf4",
            color: showKebun ? "#ffffff" : "#15803d",
            border: "1px solid #bbf7d0",
            padding: "8px 14px",
            borderRadius: "20px",
            fontSize: "0.8rem",
            fontWeight: 700,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <Sprout size={15} /> Kebun Buruan Sae{" "}
          {showKebun ? <Eye size={13} /> : <EyeOff size={13} />}
        </button>

        <button
          type="button"
          onClick={() => setShowMasjid(!showMasjid)}
          style={{
            backgroundColor: showMasjid ? "#0284c7" : "#f0f9ff",
            color: showMasjid ? "#ffffff" : "#0284c7",
            border: "1px solid #bae6fd",
            padding: "8px 14px",
            borderRadius: "20px",
            fontSize: "0.8rem",
            fontWeight: 700,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <Landmark size={15} /> Masjid{" "}
          {showMasjid ? <Eye size={13} /> : <EyeOff size={13} />}
        </button>

        <button
          type="button"
          onClick={() => setShowSekolah(!showSekolah)}
          style={{
            backgroundColor: showSekolah ? "#eab308" : "#fefce8",
            color: showSekolah ? "#ffffff" : "#ca8a04",
            border: "1px solid #fef08a",
            padding: "8px 14px",
            borderRadius: "20px",
            fontSize: "0.8rem",
            fontWeight: 700,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <GraduationCap size={15} /> Sekolah{" "}
          {showSekolah ? <Eye size={13} /> : <EyeOff size={13} />}
        </button>

        <button
          type="button"
          onClick={() => setShowAreaRt(!showAreaRt)}
          style={{
            backgroundColor: showAreaRt ? "#a855f7" : "#faf5ff",
            color: showAreaRt ? "#ffffff" : "#9333ea",
            border: "1px solid #e9d5ff",
            padding: "8px 14px",
            borderRadius: "20px",
            fontSize: "0.8rem",
            fontWeight: 700,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <Layers size={15} /> Area RT (Transparan){" "}
          {showAreaRt ? <Eye size={13} /> : <EyeOff size={13} />}
        </button>
      </div>

      {/* Container Peta */}
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "20px",
          border: "1px solid #dcfce7",
          padding: "1rem",
          boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
        }}
      >
        {/* Rasio 1408/1494 sesuai potongan Claude */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "1408 / 1494",
            maxHeight: "800px",
            maxWidth: "1000px",
            margin: "0 auto",
            borderRadius: "14px",
            overflow: "hidden",
            border: "1px solid #bbf7d0",
            backgroundColor: "#ffffff",
          }}
        >
          {/* Peta otomatis terpotong presisi via CSS tanpa menyentuh file asli */}
          <img
            src={petaImg}
            alt="Peta Wilayah RW 19 Antapani"
            style={{
              position: "absolute",
              top: "-2.677%",
              left: "-8.239%",
              width: "113.636%",
              height: "107.095%",
              maxWidth: "none",
              display: "block",
            }}
          />

          {/* LAYER OVERLAY AREA RT (HASIL HITUNGAN CLAUDE) */}
          {showAreaRt && (
            <>
              {/* Area RT 01 */}
              <div
                style={{
                  position: "absolute",
                  top: "0.54%",
                  left: "1%",
                  width: "48%",
                  height: "25.7%",
                  backgroundColor: "rgba(34, 197, 94, 0.22)",
                  clipPath:
                    "polygon(0 1%, 100% 17%, 100% 100%, 50% 100%, 1% 30%)",
                  borderRadius: "0px",
                  display: "flex",
                  alignItems: "flex-start",
                  padding: "4px 8px",
                  boxSizing: "border-box",
                  pointerEvents: "none",
                }}
              >
                <span
                  style={{
                    backgroundColor: "#15803d",
                    color: "#fff",
                    fontSize: "0.65rem",
                    fontWeight: 800,
                    padding: "2px 6px",
                    borderRadius: "4px",
                  }}
                >
                  RT 01
                </span>
              </div>

              {/* Area RT 02 */}
              <div
                style={{
                  position: "absolute",
                  top: "8.03%",
                  left: "48.58%",
                  width: "40%",
                  height: "38.55%",
                  backgroundColor: "rgba(59, 130, 246, 0.22)",
                  clipPath: "polygon(0 1%, 100% 15%, 100% 57%, 0 47%)",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "flex-start",
                  padding: "4px 8px",
                  boxSizing: "border-box",
                  pointerEvents: "none",
                }}
              >
                <span
                  style={{
                    backgroundColor: "#0284c7",
                    color: "#fff",
                    fontSize: "0.65rem",
                    fontWeight: 800,
                    padding: "2px 6px",
                    borderRadius: "4px",
                  }}
                >
                  RT 02
                </span>
              </div>

              {/* Area RT 03 */}
              <div
                style={{
                  position: "absolute",
                  top: "29.45%",
                  left: "67%",
                  width: "28.59%",
                  height: "61.04%",
                  backgroundColor: "rgba(130, 97, 0, 0.22)",
                  clipPath:
                    "polygon(0 1%, 63% 0, 77% 13%, 67% 26%, 100% 44%, 75% 69%, 43% 70%, 9% 32%)",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "flex-start",
                  padding: "4px 8px",
                  boxSizing: "border-box",
                  pointerEvents: "none",
                }}
              >
                <span
                  style={{
                    backgroundColor: "#ca8a04",
                    color: "#fff",
                    fontSize: "0.65rem",
                    fontWeight: 800,
                    padding: "2px 6px",
                    borderRadius: "4px",
                  }}
                >
                  RT 03
                </span>
              </div>

              {/* Area RT 04 */}
              <div
                style={{
                  position: "absolute",
                  top: "72.29%",
                  left: "77.76%",
                  width: "17.36%",
                  height: "25.7%",
                  backgroundColor: "rgba(168, 85, 247, 0.22)",
                  borderRadius: "0px",
                  display: "flex",
                  alignItems: "flex-start",
                  padding: "4px 8px",
                  boxSizing: "border-box",
                  pointerEvents: "none",
                }}
              >
                <span
                  style={{
                    backgroundColor: "#9333ea",
                    color: "#fff",
                    fontSize: "0.65rem",
                    fontWeight: 800,
                    padding: "2px 6px",
                    borderRadius: "4px",
                  }}
                >
                  RT 04
                </span>
              </div>
            </>
          )}

          {/* 1. LAYER PIN KEBUN (HASIL HITUNGAN CLAUDE) */}
          {showKebun && (
            <>
              {/* Kebun Utama RT 01 */}
              <div
                style={{
                  position: "absolute",
                  top: "12.32%",
                  left: "23.58%",
                  transform: "translate(-50%, -100%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  zIndex: 15,
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    backgroundColor: "#15803d",
                    color: "#fff",
                    fontSize: "0.65rem",
                    fontWeight: 800,
                    padding: "2px 6px",
                    borderRadius: "6px",
                    whiteSpace: "nowrap",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                    marginBottom: "2px",
                  }}
                >
                  Kebun Utama RT 01
                </span>
                <div
                  style={{
                    backgroundColor: "#15803d",
                    color: "#fff",
                    width: "26px",
                    height: "26px",
                    borderRadius: "50% 50% 50% 0",
                    transform: "rotate(-45deg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid #ffffff",
                    boxShadow: "0 3px 8px rgba(0,0,0,0.3)",
                  }}
                >
                  <Sprout size={14} style={{ transform: "rotate(45deg)" }} />
                </div>
              </div>

              {/* Green House RT 02 */}
              <div
                style={{
                  position: "absolute",
                  top: "23.03%",
                  left: "62.22%",
                  transform: "translate(-50%, -100%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  zIndex: 15,
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    backgroundColor: "#15803d",
                    color: "#fff",
                    fontSize: "0.65rem",
                    fontWeight: 800,
                    padding: "2px 6px",
                    borderRadius: "6px",
                    whiteSpace: "nowrap",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                    marginBottom: "2px",
                  }}
                >
                  Green House RT 02
                </span>
                <div
                  style={{
                    backgroundColor: "#15803d",
                    color: "#fff",
                    width: "26px",
                    height: "26px",
                    borderRadius: "50% 50% 50% 0",
                    transform: "rotate(-45deg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid #ffffff",
                    boxShadow: "0 3px 8px rgba(0,0,0,0.3)",
                  }}
                >
                  <Sprout size={14} style={{ transform: "rotate(45deg)" }} />
                </div>
              </div>

              {/* Hydroponic RT 03 */}
              <div
                style={{
                  position: "absolute",
                  top: "59.44%",
                  left: "77.31%",
                  transform: "translate(-50%, -100%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  zIndex: 15,
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    backgroundColor: "#15803d",
                    color: "#fff",
                    fontSize: "0.65rem",
                    fontWeight: 800,
                    padding: "2px 6px",
                    borderRadius: "6px",
                    whiteSpace: "nowrap",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                    marginBottom: "2px",
                  }}
                >
                  Hydroponic RT 03
                </span>
                <div
                  style={{
                    backgroundColor: "#15803d",
                    color: "#fff",
                    width: "26px",
                    height: "26px",
                    borderRadius: "50% 50% 50% 0",
                    transform: "rotate(-45deg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid #ffffff",
                    boxShadow: "0 3px 8px rgba(0,0,0,0.3)",
                  }}
                >
                  <Sprout size={14} style={{ transform: "rotate(45deg)" }} />
                </div>
              </div>
            </>
          )}

          {/* 2. LAYER PIN MASJID (HASIL HITUNGAN CLAUDE) */}
          {showMasjid && (
            <>
              {/* Masjid Al-Ikhlas */}
              <div
                style={{
                  position: "absolute",
                  top: "10.17%",
                  left: "46.31%",
                  transform: "translate(-50%, -100%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  zIndex: 15,
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    backgroundColor: "#0284c7",
                    color: "#fff",
                    fontSize: "0.65rem",
                    fontWeight: 800,
                    padding: "2px 6px",
                    borderRadius: "6px",
                    whiteSpace: "nowrap",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                    marginBottom: "2px",
                  }}
                >
                  Masjid Al-Ikhlas
                </span>
                <div
                  style={{
                    backgroundColor: "#0284c7",
                    color: "#fff",
                    width: "26px",
                    height: "26px",
                    borderRadius: "50% 50% 50% 0",
                    transform: "rotate(-45deg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid #ffffff",
                    boxShadow: "0 3px 8px rgba(0,0,0,0.3)",
                  }}
                >
                  <Landmark size={14} style={{ transform: "rotate(45deg)" }} />
                </div>
              </div>

              {/* Masjid Nurul Huda */}
              <div
                style={{
                  position: "absolute",
                  top: "57.3%",
                  left: "79.72%",
                  transform: "translate(-50%, -100%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  zIndex: 15,
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    backgroundColor: "#0284c7",
                    color: "#fff",
                    fontSize: "0.65rem",
                    fontWeight: 800,
                    padding: "2px 6px",
                    borderRadius: "6px",
                    whiteSpace: "nowrap",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                    marginBottom: "2px",
                  }}
                >
                  Masjid Nurul Huda
                </span>
                <div
                  style={{
                    backgroundColor: "#0284c7",
                    color: "#fff",
                    width: "26px",
                    height: "26px",
                    borderRadius: "50% 50% 50% 0",
                    transform: "rotate(-45deg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid #ffffff",
                    boxShadow: "0 3px 8px rgba(0,0,0,0.3)",
                  }}
                >
                  <Landmark size={14} style={{ transform: "rotate(45deg)" }} />
                </div>
              </div>

              {/* Masjid Ar-Rahman */}
              <div
                style={{
                  position: "absolute",
                  top: "80.86%",
                  left: "89.31%",
                  transform: "translate(-50%, -100%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  zIndex: 15,
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    backgroundColor: "#0284c7",
                    color: "#fff",
                    fontSize: "0.65rem",
                    fontWeight: 800,
                    padding: "2px 6px",
                    borderRadius: "6px",
                    whiteSpace: "nowrap",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                    marginBottom: "2px",
                  }}
                >
                  Masjid Ar-Rahman
                </span>
                <div
                  style={{
                    backgroundColor: "#0284c7",
                    color: "#fff",
                    width: "26px",
                    height: "26px",
                    borderRadius: "50% 50% 50% 0",
                    transform: "rotate(-45deg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid #ffffff",
                    boxShadow: "0 3px 8px rgba(0,0,0,0.3)",
                  }}
                >
                  <Landmark size={14} style={{ transform: "rotate(45deg)" }} />
                </div>
              </div>
            </>
          )}

          {/* 3. LAYER PIN SEKOLAH (HASIL HITUNGAN CLAUDE) */}
          {showSekolah && (
            <>
              {/* PAUD / TK Antapani */}
              <div
                style={{
                  position: "absolute",
                  top: "20.88%",
                  left: "69.03%",
                  transform: "translate(-50%, -100%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  zIndex: 15,
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    backgroundColor: "#ca8a04",
                    color: "#fff",
                    fontSize: "0.65rem",
                    fontWeight: 800,
                    padding: "2px 6px",
                    borderRadius: "6px",
                    whiteSpace: "nowrap",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                    marginBottom: "2px",
                  }}
                >
                  PAUD / TK Antapani
                </span>
                <div
                  style={{
                    backgroundColor: "#ca8a04",
                    color: "#fff",
                    width: "26px",
                    height: "26px",
                    borderRadius: "50% 50% 50% 0",
                    transform: "rotate(-45deg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid #ffffff",
                    boxShadow: "0 3px 8px rgba(0,0,0,0.3)",
                  }}
                >
                  <GraduationCap
                    size={14}
                    style={{ transform: "rotate(45deg)" }}
                  />
                </div>
              </div>

              {/* SD Negeri Antapani */}
              <div
                style={{
                  position: "absolute",
                  top: "89.42%",
                  left: "79.58%",
                  transform: "translate(-50%, -100%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  zIndex: 15,
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    backgroundColor: "#ca8a04",
                    color: "#fff",
                    fontSize: "0.65rem",
                    fontWeight: 800,
                    padding: "2px 6px",
                    borderRadius: "6px",
                    whiteSpace: "nowrap",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                    marginBottom: "2px",
                  }}
                >
                  SD Negeri Antapani
                </span>
                <div
                  style={{
                    backgroundColor: "#ca8a04",
                    color: "#fff",
                    width: "26px",
                    height: "26px",
                    borderRadius: "50% 50% 50% 0",
                    transform: "rotate(-45deg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid #ffffff",
                    boxShadow: "0 3px 8px rgba(0,0,0,0.3)",
                  }}
                >
                  <GraduationCap
                    size={14}
                    style={{ transform: "rotate(45deg)" }}
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Legenda Keterangan */}
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
            📍 LEGENDA KETERANGAN SEKTOR & LOKASI
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
                  color: "#15803d",
                  fontWeight: 800,
                }}
              >
                🌱 BURUAN SAE
              </span>
              <div
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 800,
                  color: "#14532d",
                }}
              >
                3 Titik Kebun
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
                  color: "#0284c7",
                  fontWeight: 800,
                }}
              >
                🕌 IBADAH
              </span>
              <div
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 800,
                  color: "#14532d",
                }}
              >
                3 Masjid RW 19
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
                  color: "#ca8a04",
                  fontWeight: 800,
                }}
              >
                🎓 PENDIDIKAN
              </span>
              <div
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 800,
                  color: "#14532d",
                }}
              >
                2 Unit Sekolah
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
                  color: "#9333ea",
                  fontWeight: 800,
                }}
              >
                🔲 CAKUPAN RT
              </span>
              <div
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 800,
                  color: "#14532d",
                }}
              >
                RT 01 s/d RT 04
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
