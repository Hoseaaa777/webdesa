import React, { useState } from "react";
import {
  Lock,
  User,
  LogOut,
  Clock,
  Trash2,
  Filter,
  AlertCircle,
  ArrowLeft,
  MessageSquare,
  LayoutDashboard,
  Leaf,
  Store,
  Settings,
  CheckCircle2,
} from "lucide-react";

export interface Pengaduan {
  id: string;
  nama: string;
  rt: string;
  pesan: string;
  tanggal: string;
  status: "Menunggu" | "Diproses" | "Selesai";
}

interface AdminPageProps {
  pengaduanList: Pengaduan[];
  onUpdateStatus: (
    id: string,
    newStatus: "Menunggu" | "Diproses" | "Selesai",
  ) => void;
  onDeletePengaduan: (id: string) => void;
  onBackToPublic: () => void;
}

export const AdminPage: React.FC<AdminPageProps> = ({
  pengaduanList,
  onUpdateStatus,
  onDeletePengaduan,
  onBackToPublic,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Tab Admin (Disiapkan untuk fitur mendatang)
  const [activeAdminTab, setActiveAdminTab] = useState<
    "pengaduan" | "buruanSae" | "umkm"
  >("pengaduan");
  const [filterStatus, setFilterStatus] = useState<string>("Semua");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "rw19antapani") {
      setIsLoggedIn(true);
      setErrorMsg("");
    } else {
      setErrorMsg(
        "Username atau password salah! (Gunakan: admin / rw19antapani)",
      );
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  const filteredList = pengaduanList.filter((item) => {
    if (filterStatus === "Semua") return true;
    return item.status === filterStatus;
  });

  // Hitung Summary Statistik Laporan
  const countTotal = pengaduanList.length;
  const countMenunggu = pengaduanList.filter(
    (i) => i.status === "Menunggu",
  ).length;
  const countDiproses = pengaduanList.filter(
    (i) => i.status === "Diproses",
  ).length;
  const countSelesai = pengaduanList.filter(
    (i) => i.status === "Selesai",
  ).length;

  // TAMPILAN 1: HALAMAN LOGIN ADMIN (FULLSCREEN)
  if (!isLoggedIn) {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#f1f5f9",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.5rem",
        }}
      >
        <button
          type="button"
          onClick={onBackToPublic}
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            backgroundColor: "#ffffff",
            color: "#334155",
            border: "1px solid #cbd5e1",
            padding: "8px 16px",
            borderRadius: "8px",
            fontWeight: 700,
            fontSize: "0.85rem",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <ArrowLeft size={16} /> Kembali ke Portal Warga
        </button>

        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            border: "1px solid #e2e8f0",
            boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
            maxWidth: "400px",
            width: "100%",
            padding: "2rem",
            boxSizing: "border-box",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <div
              style={{
                backgroundColor: "#e1f2e5",
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "0.75rem",
              }}
            >
              <Lock color="#00a86b" size={26} />
            </div>
            <h2
              style={{
                margin: "0 0 4px 0",
                fontSize: "1.4rem",
                fontWeight: 800,
                color: "#0f172a",
              }}
            >
              Login Panel Admin
            </h2>
            <p style={{ margin: 0, fontSize: "0.85rem", color: "#64748b" }}>
              Portal Informasi RW 19 Antapani Tengah
            </p>
          </div>

          {errorMsg && (
            <div
              style={{
                backgroundColor: "#fef2f2",
                color: "#dc2626",
                padding: "10px 12px",
                borderRadius: "8px",
                fontSize: "0.8rem",
                marginBottom: "1rem",
                border: "1px solid #fecaca",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <AlertCircle size={16} /> {errorMsg}
            </div>
          )}

          <form
            onSubmit={handleLogin}
            style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}
          >
            <div>
              <label
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  display: "block",
                  marginBottom: "6px",
                  color: "#1e293b",
                }}
              >
                Username
              </label>
              <div style={{ position: "relative" }}>
                <User
                  size={16}
                  color="#94a3b8"
                  style={{
                    position: "absolute",
                    left: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Masukkan username"
                  required
                  style={{
                    width: "100%",
                    padding: "11px 11px 11px 38px",
                    borderRadius: "8px",
                    border: "1px solid #cbd5e1",
                    boxSizing: "border-box",
                    fontSize: "0.9rem",
                  }}
                />
              </div>
            </div>

            <div>
              <label
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  display: "block",
                  marginBottom: "6px",
                  color: "#1e293b",
                }}
              >
                Password
              </label>
              <div style={{ position: "relative" }}>
                <Lock
                  size={16}
                  color="#94a3b8"
                  style={{
                    position: "absolute",
                    left: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan password"
                  required
                  style={{
                    width: "100%",
                    padding: "11px 11px 11px 38px",
                    borderRadius: "8px",
                    border: "1px solid #cbd5e1",
                    boxSizing: "border-box",
                    fontSize: "0.9rem",
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              style={{
                backgroundColor: "#00a86b",
                color: "#ffffff",
                border: "none",
                padding: "12px",
                borderRadius: "8px",
                fontWeight: 700,
                fontSize: "0.95rem",
                cursor: "pointer",
                marginTop: "0.5rem",
              }}
            >
              Masuk Dashboard Admin
            </button>
          </form>
        </div>
      </div>
    );
  }

  // TAMPILAN 2: HALAMAN UTAMA DASHBOARD ADMIN (FULLPAGE WORKSPACE)
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8fafc",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Admin Top Header */}
      <header
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e2e8f0",
          padding: "0.85rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              backgroundColor: "#00a86b",
              color: "#ffffff",
              padding: "6px 10px",
              borderRadius: "8px",
              fontWeight: 800,
              fontSize: "0.85rem",
            }}
          >
            ADMIN
          </div>
          <div>
            <h1
              style={{
                fontSize: "1.1rem",
                fontWeight: 800,
                margin: 0,
                color: "#0f172a",
              }}
            >
              Dashboard Pengurus RW 19
            </h1>
            <p style={{ fontSize: "0.75rem", margin: 0, color: "#64748b" }}>
              Sistem Kelola Informasi & Pengaduan Warga
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <button
            type="button"
            onClick={onBackToPublic}
            style={{
              backgroundColor: "#f1f5f9",
              color: "#334155",
              border: "1px solid #cbd5e1",
              padding: "8px 16px",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "0.85rem",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <ArrowLeft size={16} /> Ke Portal Warga
          </button>

          <button
            type="button"
            onClick={handleLogout}
            style={{
              backgroundColor: "#fef2f2",
              color: "#dc2626",
              border: "1px solid #fecaca",
              padding: "8px 16px",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "0.85rem",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      </header>

      {/* Admin Main Layout */}
      <div
        style={{
          display: "flex",
          flexGrow: 1,
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          padding: "2rem 1.5rem",
          gap: "2rem",
          boxSizing: "border-box",
        }}
      >
        {/* Sidebar Navigasi Menu Admin */}
        <aside
          style={{
            width: "240px",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <div
            style={{
              fontSize: "0.75rem",
              fontWeight: 800,
              color: "#94a3b8",
              letterSpacing: "0.05em",
              marginBottom: "0.5rem",
              paddingLeft: "8px",
            }}
          >
            MENU KELOLA
          </div>

          <button
            type="button"
            onClick={() => setActiveAdminTab("pengaduan")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px 16px",
              borderRadius: "10px",
              border: "none",
              fontWeight: 700,
              fontSize: "0.9rem",
              cursor: "pointer",
              textAlign: "left",
              backgroundColor:
                activeAdminTab === "pengaduan" ? "#00a86b" : "#ffffff",
              color: activeAdminTab === "pengaduan" ? "#ffffff" : "#475569",
              boxShadow:
                activeAdminTab === "pengaduan"
                  ? "0 4px 12px rgba(0,168,107,0.25)"
                  : "none",
            }}
          >
            <MessageSquare size={18} /> Pengaduan Warga
          </button>

          <button
            type="button"
            onClick={() => setActiveAdminTab("buruanSae")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px 16px",
              borderRadius: "10px",
              border: "none",
              fontWeight: 700,
              fontSize: "0.9rem",
              cursor: "pointer",
              textAlign: "left",
              backgroundColor:
                activeAdminTab === "buruanSae" ? "#00a86b" : "#ffffff",
              color: activeAdminTab === "buruanSae" ? "#ffffff" : "#475569",
            }}
          >
            <Leaf size={18} /> Data Buruan Sae
          </button>

          <button
            type="button"
            onClick={() => setActiveAdminTab("umkm")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px 16px",
              borderRadius: "10px",
              border: "none",
              fontWeight: 700,
              fontSize: "0.9rem",
              cursor: "pointer",
              textAlign: "left",
              backgroundColor:
                activeAdminTab === "umkm" ? "#00a86b" : "#ffffff",
              color: activeAdminTab === "umkm" ? "#ffffff" : "#475569",
            }}
          >
            <Store size={18} /> Produk UMKM
          </button>
        </aside>

        {/* Workspace Konten Utama */}
        <main style={{ flexGrow: 1 }}>
          {/* TAB 1: KELOLA PENGADUAN WARGA */}
          {activeAdminTab === "pengaduan" && (
            <div>
              {/* Summary Cards Top */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "12px",
                    padding: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "#64748b",
                      fontWeight: 700,
                    }}
                  >
                    TOTAL PENGADUAN
                  </div>
                  <div
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: 800,
                      color: "#0f172a",
                      marginTop: "4px",
                    }}
                  >
                    {countTotal}
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderLeft: "4px solid #f59e0b",
                    borderRadius: "12px",
                    padding: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "#b45309",
                      fontWeight: 700,
                    }}
                  >
                    MENUNGGU
                  </div>
                  <div
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: 800,
                      color: "#b45309",
                      marginTop: "4px",
                    }}
                  >
                    {countMenunggu}
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderLeft: "4px solid #2563eb",
                    borderRadius: "12px",
                    padding: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "#1d4ed8",
                      fontWeight: 700,
                    }}
                  >
                    DIPROSES
                  </div>
                  <div
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: 800,
                      color: "#1d4ed8",
                      marginTop: "4px",
                    }}
                  >
                    {countDiproses}
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderLeft: "4px solid #00a86b",
                    borderRadius: "12px",
                    padding: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "#15803d",
                      fontWeight: 700,
                    }}
                  >
                    SELESAI
                  </div>
                  <div
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: 800,
                      color: "#15803d",
                      marginTop: "4px",
                    }}
                  >
                    {countSelesai}
                  </div>
                </div>
              </div>

              {/* Main List Box */}
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                  border: "1px solid #e2e8f0",
                  padding: "1.5rem",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "1.5rem",
                    flexWrap: "wrap",
                    gap: "1rem",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        margin: 0,
                        fontSize: "1.2rem",
                        fontWeight: 800,
                        color: "#0f172a",
                      }}
                    >
                      Laporan Pengaduan Masuk
                    </h3>
                    <p
                      style={{
                        margin: "2px 0 0 0",
                        fontSize: "0.85rem",
                        color: "#64748b",
                      }}
                    >
                      Pantau dan perbarui status tindakan laporan warga
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <Filter size={16} color="#64748b" />
                    <span
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        color: "#475569",
                      }}
                    >
                      Status:
                    </span>
                    <select
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value)}
                      style={{
                        padding: "6px 12px",
                        borderRadius: "8px",
                        border: "1px solid #cbd5e1",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                      }}
                    >
                      <option value="Semua">Semua Status</option>
                      <option value="Menunggu">Menunggu</option>
                      <option value="Diproses">Diproses</option>
                      <option value="Selesai">Selesai</option>
                    </select>
                  </div>
                </div>

                {filteredList.length === 0 ? (
                  <div
                    style={{
                      textAlign: "center",
                      padding: "3rem 1rem",
                      background: "#f8fafc",
                      borderRadius: "12px",
                      border: "1px dashed #cbd5e1",
                      color: "#64748b",
                    }}
                  >
                    Belum ada pengaduan warga yang sesuai dengan filter ini.
                  </div>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    {filteredList.map((item) => (
                      <div
                        key={item.id}
                        style={{
                          backgroundColor: "#ffffff",
                          border: "1px solid #e2e8f0",
                          borderRadius: "12px",
                          padding: "1.25rem",
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.75rem",
                          boxShadow: "0 2px 6px rgba(0,0,0,0.01)",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                          }}
                        >
                          <div>
                            <strong
                              style={{ fontSize: "1rem", color: "#0f172a" }}
                            >
                              {item.nama}
                            </strong>
                            <span
                              style={{
                                marginLeft: "10px",
                                fontSize: "0.75rem",
                                background: "#f1f5f9",
                                padding: "3px 8px",
                                borderRadius: "4px",
                                color: "#475569",
                                fontWeight: 700,
                              }}
                            >
                              RT {item.rt}
                            </span>
                          </div>

                          <span
                            style={{
                              fontSize: "0.75rem",
                              fontWeight: 800,
                              padding: "4px 12px",
                              borderRadius: "20px",
                              backgroundColor:
                                item.status === "Selesai"
                                  ? "#dcfce7"
                                  : item.status === "Diproses"
                                    ? "#fef3c7"
                                    : "#fee2e2",
                              color:
                                item.status === "Selesai"
                                  ? "#15803d"
                                  : item.status === "Diproses"
                                    ? "#b45309"
                                    : "#b91c1c",
                            }}
                          >
                            {item.status}
                          </span>
                        </div>

                        <p
                          style={{
                            margin: 0,
                            fontSize: "0.9rem",
                            color: "#334155",
                            lineHeight: 1.6,
                            backgroundColor: "#f8fafc",
                            padding: "0.85rem",
                            borderRadius: "8px",
                          }}
                        >
                          "{item.pesan}"
                        </p>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            fontSize: "0.8rem",
                            color: "#94a3b8",
                            paddingTop: "0.25rem",
                          }}
                        >
                          <span>📅 Tanggal Laporan: {item.tanggal}</span>

                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                            }}
                          >
                            <span style={{ fontWeight: 600, color: "#475569" }}>
                              Ubah Status:
                            </span>
                            <select
                              value={item.status}
                              onChange={(e) =>
                                onUpdateStatus(
                                  item.id,
                                  e.target.value as
                                    | "Menunggu"
                                    | "Diproses"
                                    | "Selesai",
                                )
                              }
                              style={{
                                fontSize: "0.8rem",
                                padding: "4px 8px",
                                borderRadius: "6px",
                                border: "1px solid #cbd5e1",
                                fontWeight: 600,
                              }}
                            >
                              <option value="Menunggu">Menunggu</option>
                              <option value="Diproses">Diproses</option>
                              <option value="Selesai">Selesai</option>
                            </select>

                            <button
                              type="button"
                              onClick={() => onDeletePengaduan(item.id)}
                              style={{
                                backgroundColor: "#fef2f2",
                                color: "#ef4444",
                                border: "1px solid #fecaca",
                                padding: "5px 10px",
                                borderRadius: "6px",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                gap: "4px",
                                fontSize: "0.75rem",
                                fontWeight: 700,
                              }}
                            >
                              <Trash2 size={14} /> Hapus
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 2 & 3: PLACEHOLDER UNTUK FITUR PENGEMBANGAN KAMU */}
          {activeAdminTab !== "pengaduan" && (
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                border: "1px solid #e2e8f0",
                padding: "3rem 2rem",
                textAlign: "center",
              }}
            >
              <Settings
                size={40}
                color="#00a86b"
                style={{ marginBottom: "1rem" }}
              />
              <h3
                style={{
                  margin: "0 0 0.5rem 0",
                  fontSize: "1.25rem",
                  color: "#0f172a",
                }}
              >
                Fitur Kelola{" "}
                {activeAdminTab === "buruanSae" ? "Buruan Sae" : "UMKM"} (Segera
                Hadir)
              </h3>
              <p
                style={{
                  color: "#64748b",
                  fontSize: "0.9rem",
                  maxWidth: "480px",
                  margin: "0 auto",
                }}
              >
                Halaman workspace admin ini sudah siap digunakan jika kelak kamu
                ingin menambah fitur CRUD data{" "}
                {activeAdminTab === "buruanSae"
                  ? "tanaman & hasil tani"
                  : "katalog UMKM warga"}
                .
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
