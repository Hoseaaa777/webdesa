import React from "react";
import { CheckCircle2, Send } from "lucide-react";

interface ContactSectionProps {
  nama: string;
  setNama: (val: string) => void;
  rt: string;
  setRt: (val: string) => void;
  pesan: string;
  setPesan: (val: string) => void;
  submitted: boolean;
  handleSubmitPengaduan: (e: React.FormEvent) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  nama,
  setNama,
  rt,
  setRt,
  pesan,
  setPesan,
  submitted,
  handleSubmitPengaduan,
}) => {
  return (
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
          Kirimkan aspirasi, pertanyaan, atau pendaftaran bergabung melalui form
          di bawah ini:
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
            <CheckCircle2 size={20} /> Pendaftaran / Pesan Anda berhasil dikirim
            ke pengurus RW 19!
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
  );
};
