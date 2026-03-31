import { useState, useEffect } from "react";
import { ENTITY, TRAVEL, PRINCIPLES } from "../data/practice.js";

const ACCENT = "#D4A853";

export default function OverviewView() {
  const [revealed, setRevealed] = useState(false);
  useEffect(() => { setTimeout(() => setRevealed(true), 100); }, []);

  return (
    <div style={{
      padding: "20px 16px",
      opacity: revealed ? 1 : 0,
      transform: revealed ? "none" : "translateY(12px)",
      transition: "opacity 0.5s ease, transform 0.5s ease",
    }}>

      {/* Ethos */}
      <div style={{
        background: "#0e0c08",
        border: `1px solid ${ACCENT}33`,
        borderRadius: 8,
        padding: "18px 20px",
        marginBottom: 24,
      }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 18, fontWeight: 700,
          color: ACCENT, letterSpacing: "0.04em",
          marginBottom: 10,
        }}>
          {ENTITY.ethos}
        </div>
        <div style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 12, color: "#888", lineHeight: 1.65,
        }}>
          {ENTITY.ethosNote}
        </div>
      </div>

      {/* Entity constants */}
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10, color: "#555", letterSpacing: "0.08em", marginBottom: 12,
      }}>ENTITY</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 24 }}>
        {[
          { label: "ENTITY", value: ENTITY.name },
          { label: "DBA", value: ENTITY.dba },
          { label: "VERTICALS", value: ENTITY.verticals.join(" · ") },
          { label: "DOMAIN", value: `${ENTITY.domain} (${ENTITY.domainStatus})` },
          { label: "HOURS", value: ENTITY.collaborationHours },
          { label: "NDA", value: ENTITY.nda },
          { label: "EXCLUSIVITY", value: ENTITY.exclusivity },
          { label: "IP RULE", value: ENTITY.ipRule },
        ].map(({ label, value }) => (
          <div key={label} style={{
            background: "#0e0c08",
            border: "1px solid #1e1c14",
            borderRadius: 6, padding: "10px 12px",
          }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 8, color: "#555", letterSpacing: "0.08em", marginBottom: 5,
            }}>{label}</div>
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11, color: "#c8c4b0", lineHeight: 1.4,
            }}>{value}</div>
          </div>
        ))}
      </div>

      {/* Travel policy */}
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10, color: "#555", letterSpacing: "0.08em", marginBottom: 12,
      }}>TRAVEL & EXPENSES</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 24 }}>
        {[
          { label: "LONG HAUL (2K+ MI)", value: TRAVEL.longHaul.class },
          { label: "SHORT HAUL · AM/NIGHT", value: "Business" },
          { label: "SHORT HAUL · MIDDAY", value: "Economy (travel day)" },
          { label: "HOTEL", value: TRAVEL.hotel },
          { label: "T&E", value: TRAVEL.teNote },
        ].map(({ label, value }) => (
          <div key={label} style={{
            display: "grid", gridTemplateColumns: "140px 1fr",
            background: "#0e0c08",
            border: "1px solid #1e1c14",
            borderRadius: 6, overflow: "hidden",
          }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 8, color: "#555", letterSpacing: "0.06em",
              padding: "10px 12px",
              borderRight: "1px solid #1e1c14",
              display: "flex", alignItems: "center",
            }}>{label}</div>
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11, color: "#c8c4b0",
              padding: "10px 12px",
              display: "flex", alignItems: "center",
            }}>{value}</div>
          </div>
        ))}
      </div>

      {/* Principles */}
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10, color: "#555", letterSpacing: "0.08em", marginBottom: 12,
      }}>PRINCIPLES</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {PRINCIPLES.map((p, i) => (
          <div key={i} style={{
            background: "#0e0c08",
            border: "1px solid #1e1c14",
            borderRadius: 8, padding: "14px 16px",
          }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10, fontWeight: 700,
              color: ACCENT, marginBottom: 6, letterSpacing: "0.02em",
            }}>{p.title}</div>
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12, color: "#888", lineHeight: 1.6,
            }}>{p.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
