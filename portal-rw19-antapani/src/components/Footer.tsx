import React from "react";
import { Globe } from "lucide-react";

interface FooterProps {
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin }) => {
  return (
    <footer
      style={{
        backgroundColor: "#14532d",
        color: "#dcfce7",
        padding: "3rem 1.25rem 2rem 1.25rem",
        marginTop: "3rem",
        fontSize: "0.85rem",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "2rem",
          marginBottom: "2rem",
          borderBottom: "1px solid #1f763e",
          paddingBottom: "2rem",
        }}
      >
        <div>
          <h3
            style={{
              fontSize: "1.1rem",
              fontWeight: 900,
              color: "#fff",
              marginBottom: "0.75rem",
            }}
          >
            Buruan Sae RW 19 Antapani
          </h3>
          <p
            style={{
              margin: 0,
              color: "#bbf7d0",
              lineHeight: 1.5,
              fontSize: "0.85rem",
            }}
          >
            Nurturing the earth, feeding the community. Gerakan urban farming
            mandiri untuk kesejahteraan warga perkotaan.
          </p>
        </div>
        <div>
          <h4
            style={{
              fontSize: "0.95rem",
              fontWeight: 900,
              color: "#fff",
              marginBottom: "0.75rem",
            }}
          >
            Tautan & Komunitas
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <span
              style={{
                color: "#bbf7d0",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                cursor: "pointer",
              }}
            >
              <Globe size={15} /> Instagram RW 19
            </span>
            <span
              style={{
                color: "#bbf7d0",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                cursor: "pointer",
              }}
            >
              <Globe size={15} /> Kanal YouTube Resmi
            </span>
          </div>
        </div>
        <div>
          <h4
            style={{
              fontSize: "0.95rem",
              fontWeight: 900,
              color: "#fff",
              marginBottom: "0.75rem",
            }}
          >
            Kebijakan
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
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
          gap: "1rem",
        }}
      >
        <p style={{ margin: 0, color: "#bbf7d0", fontSize: "0.8rem" }}>
          © 2026 Buruan Sae RW 19 Antapani. Nurturing the earth, feeding the
          community.
        </p>
        <button
          type="button"
          onClick={onOpenAdmin}
          style={{
            background: "transparent",
            color: "#86efac",
            border: "1px solid rgba(134,239,172,0.4)",
            padding: "6px 12px",
            borderRadius: "6px",
            fontSize: "0.75rem",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          🔒 Login Admin Dashboard
        </button>
      </div>
    </footer>
  );
};
