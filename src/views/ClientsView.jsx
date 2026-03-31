import { useState, useEffect } from "react";
import { CLIENTS, ANNUITIES, PRACTICE } from "../data/practice.js";

const ACCENT = "#D4A853";

const STATUS_COLOR = {
  active:    { dot: "#4ade80", label: "ACTIVE" },
  lead:      { dot: ACCENT,    label: "LEAD" },
  potential: { dot: "#818CF8", label: "POTENTIAL" },
};

const ANNUITY_COLOR = {
  "Pending":  "#fb923c",
  "Series D": "#c084fc",
};

export default function ClientsView() {
  const [revealed, setRevealed] = useState(false);
  useEffect(() => { setTimeout(() => setRevealed(true), 100); }, []);

  return (
    <div style={{
      padding: "20px 16px",
      opacity: revealed ? 1 : 0,
      transform: revealed ? "none" : "translateY(12px)",
      transition: "opacity 0.5s ease, transform 0.5s ease",
    }}>

      {/* Clients */}
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10, color: "#555", letterSpacing: "0.08em", marginBottom: 14,
      }}>CLIENTS & PIPELINE</div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 32 }}>
        {CLIENTS.map((c, i) => {
          const sc = STATUS_COLOR[c.status] || { dot: "#555", label: c.type };
          return (
            <div key={i} style={{
              background: "#0e0c08",
              border: "1px solid #1e1c14",
              borderRadius: 8, padding: "14px 16px",
              display: "grid",
              gridTemplateColumns: "8px 1fr auto",
              gap: "0 12px", alignItems: "start",
            }}>
              <div style={{
                width: 7, height: 7, borderRadius: "50%",
                background: sc.dot, marginTop: 4, flexShrink: 0,
              }} />
              <div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13, fontWeight: 700, color: "#f0ede5", marginBottom: 3,
                }}>{c.name}</div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 11, color: "#555",
                }}>{c.vertical} · {c.structure}</div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 11, color: "#444", marginTop: 4,
                }}>{c.note}</div>
              </div>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 8, fontWeight: 700, color: sc.dot,
                letterSpacing: "0.06em", whiteSpace: "nowrap",
              }}>{sc.label}</div>
            </div>
          );
        })}
      </div>

      {/* Annuities */}
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10, color: "#555", letterSpacing: "0.08em", marginBottom: 14,
      }}>ANNUITY TARGETS · D4 WORK</div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 32 }}>
        {ANNUITIES.map((a, i) => {
          const col = ANNUITY_COLOR[a.status] || "#555";
          return (
            <div key={i} style={{
              background: "#0e0c08", border: "1px solid #1e1c14",
              borderRadius: 8, padding: "14px 16px",
            }}>
              <div style={{
                display: "flex", justifyContent: "space-between",
                alignItems: "flex-start", marginBottom: 6,
              }}>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13, fontWeight: 700, color: "#f0ede5",
                }}>{a.name}</div>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 8, fontWeight: 700,
                  color: col, letterSpacing: "0.06em",
                }}>{a.status.toUpperCase()}</div>
              </div>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 9, color: col, marginBottom: 6,
              }}>{a.target}</div>
              <div style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11, color: "#555",
              }}>{a.note}</div>
            </div>
          );
        })}
      </div>

      {/* Practice constants */}
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10, color: "#555", letterSpacing: "0.08em", marginBottom: 14,
      }}>PRACTICE CONSTANTS</div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        {[
          { label: "VERTICALS", value: PRACTICE.verticals.join(" · ") },
          { label: "DBA", value: PRACTICE.dba },
          { label: "DOMAIN", value: `${PRACTICE.domain} (${PRACTICE.domainStatus})` },
          { label: "CAPACITY", value: `${PRACTICE.capacity.daysOfferable} days max / ${PRACTICE.capacity.daysAvailable} available` },
          { label: "LIST RATE", value: "$20k / day" },
          { label: "CASH FLOOR", value: "$7,500 / mo" },
        ].map(({ label, value }) => (
          <div key={label} style={{
            background: "#0e0c08", border: "1px solid #1e1c14",
            borderRadius: 6, padding: "10px 12px",
          }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 8, color: "#555", letterSpacing: "0.08em", marginBottom: 5,
            }}>{label}</div>
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11, color: "#c8c4b0",
            }}>{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
