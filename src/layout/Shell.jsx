import { useState, useEffect } from "react";
import { PROJECT } from "../config.js";

export default function Shell({ tabs, activeTab, onTabChange, arriving, children }) {
  const [revealed, setRevealed] = useState(false);
  useEffect(() => { setTimeout(() => setRevealed(true), 100); }, []);

  return (
    <div style={{
      minHeight: "100dvh",
      display: "flex",
      flexDirection: "column",
      background: "var(--near-black)",
    }}>
      {/* Header — matches ennd.co header line pattern */}
      <header style={{
        padding: "0 2.25rem",
        borderBottom: "1.5px solid var(--teal)",
        opacity: revealed ? 1 : 0,
        transform: revealed ? "translateY(0)" : "translateY(-12px)",
        transition: "all 0.5s ease",
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "14px 0",
        }}>
          {/* Left: mark */}
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <span style={{
              fontFamily: "'Archivo', sans-serif",
              fontWeight: 900,
              fontSize: "1.1rem",
              letterSpacing: "-0.02em",
            }}>
              <span style={{ color: "var(--cream)" }}>~/</span>
              <span style={{ color: "var(--cream)", opacity: 0.5 }}>nnd</span>
            </span>
            <span style={{
              fontFamily: "'Archivo', sans-serif",
              fontWeight: 900,
              fontSize: "0.56rem",
              letterSpacing: "0.18em",
              color: "var(--vermilion)",
            }}>ENND I</span>
          </div>

          {/* Right: code + version */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.5rem",
              color: "var(--mid-text)",
            }}>{PROJECT.code}</span>
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.5rem",
              color: "var(--light-text)",
              opacity: 0.4,
            }}>{PROJECT.version}</span>
          </div>
        </div>
      </header>

      {/* Nav */}
      {tabs.length > 1 && (
        <nav style={{
          display: "flex",
          gap: 0,
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          padding: "0 2.25rem",
          borderBottom: "1px solid rgba(244,241,234,0.06)",
          opacity: revealed ? 1 : 0,
          transform: revealed ? "translateY(0)" : "translateY(-8px)",
          transition: "all 0.4s ease 0.15s",
        }}>
          {tabs.map(tab => {
            const active = tab.id === activeTab;
            return (
              <button key={tab.id}
                onClick={() => onTabChange(tab.id)}
                style={{
                  flex: "0 0 auto",
                  padding: "12px 0",
                  marginRight: 24,
                  background: "transparent",
                  border: "none",
                  borderBottom: active
                    ? "2px solid var(--teal)"
                    : "2px solid transparent",
                  color: active ? "var(--cream)" : "rgba(244,241,234,0.3)",
                  fontFamily: "'Archivo', sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: active ? 800 : 500,
                  letterSpacing: "0.08em",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  whiteSpace: "nowrap",
                  minHeight: 44,
                  textTransform: "uppercase",
                }}
              >{tab.label}</button>
            );
          })}
        </nav>
      )}

      {/* Content */}
      <main style={{
        flex: 1,
        padding: "0 2.25rem 2rem",
        opacity: revealed ? 1 : 0,
        transform: revealed ? "translateY(0)" : "translateY(12px)",
        transition: "all 0.5s ease 0.3s",
      }}>
        {children}
      </main>

      {/* Footer — matches ennd.co footer line pattern */}
      <footer style={{
        padding: "0 2.25rem",
        borderTop: "1.5px solid var(--teal)",
        opacity: revealed ? 1 : 0,
        transition: "opacity 0.4s ease 0.5s",
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 0",
        }}>
          <span style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.46rem",
            color: "var(--mid-text)",
            opacity: 0.4,
          }}>{PROJECT.entity} · SAN FRANCISCO</span>
          <span style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.46rem",
            color: "var(--mid-text)",
            opacity: 0.4,
          }}>PRIVILEGED · NOT FOR DISTRIBUTION</span>
        </div>
      </footer>
    </div>
  );
}
