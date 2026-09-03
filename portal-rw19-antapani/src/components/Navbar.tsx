import React from "react";
import { Sprout, Menu, X } from "lucide-react";

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  onOpenAdmin?: () => void; // Dibuat opsional agar App.tsx tidak error jika masih mengoper prop ini
}

export const Navbar: React.FC<NavbarProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  return (
    <header
      style={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #dcfce7",
        padding: "0.85rem 1.5rem",
        position: "sticky",
        top: 0,
        zIndex: 50,
        boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              backgroundColor: "#15803d",
              color: "#fff",
              padding: "8px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Sprout size={22} />
          </div>
          <div>
            <h1
              style={{
                fontSize: "1.1rem",
                fontWeight: 800,
                margin: 0,
                color: "#14532d",
                letterSpacing: "-0.5px",
              }}
            >
              BURUAN SAE
            </h1>
            <p
              style={{
                fontSize: "0.75rem",
                color: "#16a34a",
                margin: 0,
                fontWeight: 700,
              }}
            >
              RW 19 Antapani
            </p>
          </div>
        </div>

        {/* Menu Desktop (Muncul di Laptop/PC) */}
        <nav className="desktop-nav">
          <a href="#beranda">Home</a>
          <a href="#about">About</a>
          <a href="#statistik">Statistik</a>
          <a href="#locations">Locations</a>
          <a href="#gallery">Gallery</a>
          <a href="#cctv">CCTV</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Hamburger Button Mobile */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              backgroundColor: "#15803d",
              color: "#ffffff",
              border: "none",
              padding: "8px",
              borderRadius: "8px",
              cursor: "pointer",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Toggle Navigation Menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Dropdown Menu Mobile */}
      {isMenuOpen && (
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginTop: "1rem",
            paddingTop: "1rem",
            borderTop: "1px solid #e2e8f0",
            fontSize: "0.95rem",
            fontWeight: 700,
          }}
        >
          <a
            href="#beranda"
            onClick={() => setIsMenuOpen(false)}
            style={{ color: "#15803d", textDecoration: "none" }}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setIsMenuOpen(false)}
            style={{ color: "#3f6212", textDecoration: "none" }}
          >
            About
          </a>
          <a
            href="#statistik"
            onClick={() => setIsMenuOpen(false)}
            style={{ color: "#3f6212", textDecoration: "none" }}
          >
            Statistik
          </a>
          <a
            href="#locations"
            onClick={() => setIsMenuOpen(false)}
            style={{ color: "#3f6212", textDecoration: "none" }}
          >
            Locations
          </a>
          <a
            href="#gallery"
            onClick={() => setIsMenuOpen(false)}
            style={{ color: "#3f6212", textDecoration: "none" }}
          >
            Gallery
          </a>
          <a
            href="#cctv"
            onClick={() => setIsMenuOpen(false)}
            style={{ color: "#3f6212", textDecoration: "none" }}
          >
            CCTV
          </a>
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            style={{ color: "#3f6212", textDecoration: "none" }}
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};
