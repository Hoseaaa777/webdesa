import React, { useState } from "react";
import {
  X,
  Lock,
  User,
  LogOut,
  CheckCircle2,
  Clock,
  Trash2,
  Filter,
  AlertCircle,
} from "lucide-react";

export interface Pengaduan {
  id: string;
  nama: string;
  rt: string;
  pesan: string;
  tanggal: string;
  status: "Menunggu" | "Diproses" | "Selesai";
}

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  pengaduanList: Pengaduan[];
  onUpdateStatus: (
    id: string,
    newStatus: "Menunggu" | "Diproses" | "Selesai",
  ) => void;
  onDeletePengaduan: (id: string) => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
  pengaduanList,
  onUpdateStatus,
  onDeletePengaduan,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("Semua");

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Credential Admin Simple
    if (username === "admin" && password === "rw19antapani") {
      setIsLoggedIn(true);
      setErrorMsg("");
    } else {
      setErrorMsg("Username atau password salah! (Coba: admin / rw19antapani)");
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

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: isLoggedIn ? "850px" : "420px",
          width: "100%",
          transition: "all 0.3s ease",
        }}
      >
        <button type="button" className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        {!isLoggedIn ? (
          /* FORM LOGIN ADMIN */
          <div className="modal-body" style={{ padding: "2rem" }}>
            <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
              <div
                style={{
                  background: "#e1f2e5",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "0.5rem",
                }}
              >
                <Lock color="#00a86b" size={24} />
              </div>
              <h3 className="modal-title" style={{ fontSize: "1.4rem" }}>
                Login Admin RW 19
              </h3>
              <p style={{ fontSize: "0.85rem", color: "#64748b", margin: 0 }}>
                Akses khusus pengurus untuk memantau pengaduan warga
              </p>
            </div>

            {errorMsg && (
              <div
                style={{
                  background: "#fef2f2",
                  color: "#dc2626",
                  padding: "10px 12px",
                  borderRadius: "8px",
                  fontSize: "0.8rem",
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  border: "1px solid #fecaca",
                }}
              >
                <AlertCircle size={16} /> {errorMsg}
              </div>
            )}

            <form
              onSubmit={handleLogin}
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <div>
                <label
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    display: "block",
                    marginBottom: "6px",
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
                      padding: "10px 10px 10px 38px",
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
                      padding: "10px 10px 10px 38px",
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
                className="btn-modal-close"
                style={{ marginTop: "0.5rem" }}
              >
                Masuk Dashboard Admin
              </button>
            </form>
          </div>
        ) : (
          /* DASHBOARD ADMIN (DAFTAR LAPORAN PENGADUAN) */
          <div className="modal-body" style={{ padding: "1.75rem" }}>
            {/* Header Dashboard */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #e2e8f0",
                paddingBottom: "1rem",
                marginBottom: "1.25rem",
                flexWrap: "wrap",
                gap: "0.5rem",
              }}
            >
              <div>
                <span
                  style={{
                    backgroundColor: "#e1f2e5",
                    color: "#1b5e20",
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    padding: "3px 8px",
                    borderRadius: "4px",
                  }}
                >
                  PANEL KONTROL RW 19
                </span>
                <h3
                  className="modal-title"
                  style={{ margin: "4px 0 0 0", fontSize: "1.3rem" }}
                >
                  Daftar Laporan Pengaduan Warga
                </h3>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                style={{
                  backgroundColor: "#fef2f2",
                  color: "#dc2626",
                  border: "1px solid #fecaca",
                  padding: "7px 14px",
                  borderRadius: "8px",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <LogOut size={14} /> Keluar Admin
              </button>
            </div>

            {/* Filter Bar */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1rem",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <div style={{ fontSize: "0.85rem", color: "#64748b" }}>
                Total Laporan: <strong>{filteredList.length}</strong>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.85rem",
                }}
              >
                <Filter size={14} color="#64748b" />
                <span style={{ fontWeight: 600, color: "#475569" }}>
                  Filter Status:
                </span>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  style={{
                    padding: "5px 10px",
                    borderRadius: "6px",
                    border: "1px solid #cbd5e1",
                    fontSize: "0.8rem",
                  }}
                >
                  <option value="Semua">Semua Status</option>
                  <option value="Menunggu">Menunggu</option>
                  <option value="Diproses">Diproses</option>
                  <option value="Selesai">Selesai</option>
                </select>
              </div>
            </div>

            {/* Tabel / Cards Pengaduan */}
            {filteredList.length === 0 ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "2.5rem 1rem",
                  background: "#f8fafc",
                  borderRadius: "12px",
                  border: "1px dashed #cbd5e1",
                  color: "#64748b",
                }}
              >
                Belum ada laporan pengaduan warga yang sesuai filter.
              </div>
            ) : (
              <div
                style={{
                  maxHeight: "380px",
                  overflowY: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.85rem",
                  paddingRight: "4px",
                }}
              >
                {filteredList.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      background: "#ffffff",
                      border: "1px solid #e2e8f0",
                      borderRadius: "10px",
                      padding: "1rem 1.25rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.02)",
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
                          style={{ fontSize: "0.95rem", color: "#0f172a" }}
                        >
                          {item.nama}
                        </strong>
                        <span
                          style={{
                            marginLeft: "8px",
                            fontSize: "0.75rem",
                            background: "#f1f5f9",
                            padding: "2px 8px",
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
                          padding: "3px 10px",
                          borderRadius: "12px",
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
                        fontSize: "0.875rem",
                        color: "#334155",
                        lineHeight: 1.5,
                      }}
                    >
                      "{item.pesan}"
                    </p>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: "0.75rem",
                        color: "#94a3b8",
                        marginTop: "0.25rem",
                        borderTop: "1px solid #f1f5f9",
                        paddingTop: "0.5rem",
                      }}
                    >
                      <span>📅 {item.tanggal}</span>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <span style={{ fontWeight: 600, color: "#64748b" }}>
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
                            fontSize: "0.75rem",
                            padding: "3px 6px",
                            borderRadius: "4px",
                            border: "1px solid #cbd5e1",
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
                            background: "none",
                            border: "none",
                            color: "#ef4444",
                            cursor: "pointer",
                            padding: "2px",
                          }}
                          title="Hapus Laporan"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
