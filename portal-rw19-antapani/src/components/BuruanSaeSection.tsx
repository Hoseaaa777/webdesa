import React, { useState } from "react";
import { MapPin, Calendar, Users, ShoppingBag, X } from "lucide-react";
import {
  KOMODITAS_LIST,
  TITIK_KEBUN,
  JADWAL_PANEN,
} from "../data/buruanSaeData";
import type { Komoditas, TitikKebun, JadwalPanen } from "../data/buruanSaeData";

export const BuruanSaeSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"komoditas" | "lokasi" | "jadwal">(
    "komoditas",
  );

  // State untuk Modal Pop-Up
  const [selectedKomoditas, setSelectedKomoditas] = useState<Komoditas | null>(
    null,
  );

  return (
    <section
      id="buruan-sae"
      className="section-wrapper"
      style={{ textAlign: "center" }}
    >
      {/* Header */}
      <div className="section-tag">PROGRAM UNGGULAN RW 19</div>
      <h2 className="section-header-title">Buruan Sae RW 19 Antapani Tengah</h2>
      <p
        className="section-header-sub"
        style={{ maxWidth: "750px", margin: "0 auto 2rem auto" }}
      >
        Gerakan pemanfaatan pekarangan untuk ketahanan pangan mandiri melalui
        urban farming, hidroponik, kolam gizi, dan pengelolaan sampah organik
        warga.
      </p>

      {/* Tab Navigation (Pill-Button Rapi) */}
      <div className="bs-tabs-container">
        <button
          type="button"
          className={`bs-tab-btn ${activeTab === "komoditas" ? "active" : ""}`}
          onClick={() => setActiveTab("komoditas")}
        >
          🌱 Komoditas & Hasil Tani
        </button>
        <button
          type="button"
          className={`bs-tab-btn ${activeTab === "lokasi" ? "active" : ""}`}
          onClick={() => setActiveTab("lokasi")}
        >
          📍 Lokasi Kebun & Kolam Gizi
        </button>
        <button
          type="button"
          className={`bs-tab-btn ${activeTab === "jadwal" ? "active" : ""}`}
          onClick={() => setActiveTab("jadwal")}
        >
          📅 Jadwal Panen & Edukasi
        </button>
      </div>

      {/* TAB 1: KOMODITAS */}
      {activeTab === "komoditas" && (
        <div className="cards-grid-3" style={{ textAlign: "left" }}>
          {KOMODITAS_LIST.map((item: Komoditas) => (
            <div key={item.id} className="umkm-card">
              <div className="umkm-img-wrapper">
                <img src={item.image} alt={item.nama} className="umkm-img" />
                <span className="umkm-badge">{item.kategori}</span>
              </div>
              <div className="umkm-content">
                <h3 className="umkm-title">{item.nama}</h3>
                <div
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "#00a86b",
                    marginBottom: "0.5rem",
                  }}
                >
                  ⏱ Siklus Panen: {item.siklusPanen}
                </div>
                <p className="umkm-desc">{item.deskripsi}</p>
                <button
                  type="button"
                  className="btn-detail-light"
                  onClick={() => setSelectedKomoditas(item)}
                >
                  <ShoppingBag size={16} /> Detail Komoditas
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 2: LOKASI KEBUN */}
      {activeTab === "lokasi" && (
        <div className="cards-grid-3" style={{ textAlign: "left" }}>
          {TITIK_KEBUN.map((kebun: TitikKebun, idx: number) => (
            <div key={idx} className="bs-kebun-card">
              <h3 className="umkm-title" style={{ margin: "0 0 0.5rem 0" }}>
                {kebun.nama}
              </h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#00a86b",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  marginBottom: "1rem",
                }}
              >
                <MapPin size={16} /> {kebun.lokasi}
              </div>
              <div
                style={{
                  fontSize: "0.85rem",
                  color: "#475569",
                  lineHeight: 1.6,
                }}
              >
                <p
                  style={{
                    margin: "0 0 0.4rem 0",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <Users size={15} color="#00a86b" />{" "}
                  <strong>Pengelola:</strong> {kebun.pengelola}
                </p>
                <p style={{ margin: 0 }}>
                  <strong>Fokus Activity:</strong> {kebun.fokus}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: JADWAL PANEN */}
      {activeTab === "jadwal" && (
        <div className="bs-schedule-wrapper">
          {JADWAL_PANEN.map((jadwal: JadwalPanen, idx: number) => (
            <div key={idx} className="bs-schedule-card">
              <div className="bs-schedule-badge">
                <Calendar size={16} /> {jadwal.tanggal}
              </div>
              <div style={{ textAlign: "left", flexGrow: 1 }}>
                <h4
                  style={{
                    margin: "0 0 4px 0",
                    fontSize: "1.05rem",
                    fontWeight: 800,
                    color: "#0f172a",
                  }}
                >
                  {jadwal.kegiatan}
                </h4>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.85rem",
                    color: "#64748b",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <MapPin size={14} color="#00a86b" /> {jadwal.lokasi}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* MODAL POP-UP CUSTOM */}
      {selectedKomoditas && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedKomoditas(null)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setSelectedKomoditas(null)}
            >
              <X size={20} />
            </button>
            <img
              src={selectedKomoditas.image}
              alt={selectedKomoditas.nama}
              className="modal-img"
            />
            <div className="modal-body">
              <span className="umkm-badge" style={{ position: "static" }}>
                {selectedKomoditas.kategori}
              </span>
              <h3 className="modal-title">{selectedKomoditas.nama}</h3>
              <div className="modal-harvest">
                ⏱ Estimasi Siklus Panen:{" "}
                <strong>{selectedKomoditas.siklusPanen}</strong>
              </div>
              <p className="modal-desc">{selectedKomoditas.deskripsi}</p>

              <div className="modal-info-box">
                <p>
                  📍 <strong>Lokasi Budidaya:</strong> Kebun Bibit & Pekarangan
                  Warga RW 19
                </p>
                <p>
                  📞 <strong>Informasi & Hasil Tani:</strong> Hubungi Pengurus
                  KWT / RT RW 19
                </p>
              </div>

              <button
                type="button"
                className="btn-modal-close"
                onClick={() => setSelectedKomoditas(null)}
              >
                Tutup Informasi
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
