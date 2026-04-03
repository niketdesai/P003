import { useState, useEffect } from "react";
import { PROJECT } from "../config.js";

export default function Shell({ tabs, activeTab, onTabChange, arriving, children }) {
  const [revealed, setRevealed] = useState(false);
  useEffect(() => { setTimeout(() => setRevealed(true), 100); }, []);

  const accent = PROJECT.accent;

  return (
    <div style={{
      minHeight: "100dvh",
      display: "flex",
      flexDirection: "column",
      background: "#080806",
    }}>
      {/* Header */}
      <header style={{
        padding: "18px 24px 14px",
        borderBottom: `1px solid ${accent}15`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        opacity: revealed ? 1 : 0,
        transform: revealed ? "translateY(0)" : "translateY(-20px)",
        transition: "all 0.5s ease",
      }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
          <span style={{
            fontFamily: "'Archivo', sans-serif",
            fontSize: 18, fontWeight: 900,
            letterSpacing: "-0.02em",
            color: "#f0ede5",
          }}>ENND I</span>
          <span style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 9, fontWeight: 400,
            color: accent, opacity: 0.6,
            letterSpacing: "0.04em",
          }}>P003</span>
        </div>
        <div style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 8, color: "#2a2820",
          letterSpacing: "0.06em",
        }}>{PROJECT.version}</div>
      </header>

      {/* Nav */}
      {tabs.length > 1 && (
        <nav style={{
          display: "flex",
          gap: 0,
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          borderBottom: "1px solid #151310",
          opacity: revealed ? 1 : 0,
          transform: revealed ? "translateY(0)" : "translateY(-10px)",
          transition: "all 0.4s ease 0.15s",
        }}>
          {tabs.map(tab => {
            const active = tab.id === activeTab;
            return (
              <button key={tab.id}
                onClick={() => onTabChange(tab.id)}
                style={{
                  flex: "0 0 auto",
                  padding: "13px 22px",
                  background: "transparent",
                  border: "none",
                  borderBottom: active ? `2px solid ${accent}` : "2px solid transparent",
                  color: active ? "#f0ede5" : "#555",
                  fontFamily: "'Archivo', sans-serif",
                  fontSize: 12, fontWeight: active ? 700 : 500,
                  cursor: "pointer",
                  letterSpacing: "0.04em",
                  transition: "all 0.2s",
                  whiteSpace: "nowrap",
                  minHeight: 44,
                }}
              >{tab.label}</button>
            );
          })}
        </nav>
      )}

      {/* Content */}
      <main style={{
        flex: 1,
        opacity: revealed ? 1 : 0,
        transform: revealed ? "translateY(0)" : "translateY(16px)",
        transition: "all 0.5s ease 0.3s",
      }}>
        {children}
      </main>

      {/* Footer */}
      <footer style={{
        padding: "20px 24px",
        borderTop: "1px solid #111",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        opacity: revealed ? 1 : 0,
        transition: "opacity 0.4s ease 0.5s",
      }}>
        <span style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 8, color: "#1e1c14",
          letterSpacing: "0.05em",
        }}>{PROJECT.entity}</span>
        <span style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 8, color: "#1e1c14",
          letterSpacing: "0.05em",
        }}>PRIVILEGED</span>
      </footer>
    </div>
  );
}
