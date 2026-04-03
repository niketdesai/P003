import { useState, useEffect } from "react";
import { BRAND, PRINCIPLES, TERMS, TRAVEL } from "../data/practice.js";

const ACCENT = "#3E6670";
const VERTICAL_COLORS = {
  "Travel": "#8A8478",
  "Technology": "#3E6670",
  "Finance": "#2B4A5C",
  "Hospitality": "#C4462B",
};

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

      {/* Identity */}
      <div style={{
        marginBottom: 28,
        paddingBottom: 24,
        borderBottom: `1px solid ${ACCENT}22`,
      }}>
        <div style={{
          display: "flex", alignItems: "baseline", gap: 12,
          marginBottom: 8,
        }}>
          <span style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 22, fontWeight: 700,
            color: "var(--cream)", letterSpacing: "-0.02em",
          }}>{BRAND.name}</span>
          <span style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 14, fontWeight: 700,
            color: ACCENT,
          }}>{BRAND.mark}</span>
        </div>
        <div style={{
          fontFamily: "'Libre Baskerville', serif",
          fontSize: 12, color: "#888", lineHeight: 1.7,
          marginBottom: 14,
        }}>
          Advisory and consulting. Billed through {BRAND.entity}.
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {BRAND.verticals.map(v => (
            <span key={v} style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 9, fontWeight: 700,
              letterSpacing: "0.08em",
              color: VERTICAL_COLORS[v] || ACCENT,
              background: (VERTICAL_COLORS[v] || ACCENT) + "12",
              border: `1px solid ${(VERTICAL_COLORS[v] || ACCENT)}22`,
              borderRadius: 4, padding: "4px 10px",
            }}>{v.toUpperCase()}</span>
          ))}
        </div>
      </div>

      {/* Principles */}
      <div style={{
        fontFamily: "'Archivo', sans-serif",
        fontSize: 10, fontWeight: 800, color: "#555", letterSpacing: "0.1em", marginBottom: 14,
      }}>PRINCIPLES</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 28 }}>
        {PRINCIPLES.map((p, i) => (
          <div key={i} style={{
            background: "var(--card-bg)",
            border: "1px solid rgba(244,241,234,0.06)",
            borderRadius: 8, padding: "14px 16px",
          }}>
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 11, fontWeight: 700,
              color: ACCENT, marginBottom: 6, letterSpacing: "0.01em",
            }}>{p.title}</div>
            <div style={{
              fontFamily: "'Libre Baskerville', serif",
              fontSize: 11, color: "#777", lineHeight: 1.7,
            }}>{p.body}</div>
          </div>
        ))}
      </div>

      {/* Standard Terms */}
      <div style={{
        fontFamily: "'Archivo', sans-serif",
        fontSize: 10, fontWeight: 800, color: "#555", letterSpacing: "0.1em", marginBottom: 14,
      }}>STANDARD TERMS</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 28 }}>
        {[
          { label: "COLLABORATION", value: `${TERMS.collaborationWindow} — ${TERMS.collaborationNote}` },
          { label: "IP", value: TERMS.ipRule },
          { label: "NDA", value: TERMS.nda },
          { label: "T&E", value: TERMS.tePolicy },
          { label: "EXCLUSIVITY", value: TERMS.exclusivity },
          { label: "PAYMENT", value: TERMS.paymentTerms },
          { label: "PREPAY", value: TERMS.upfrontDiscount },
        ].map(({ label, value }) => (
          <div key={label} style={{
            display: "grid", gridTemplateColumns: "110px 1fr",
            background: "var(--card-bg)",
            border: "1px solid rgba(244,241,234,0.06)",
            borderRadius: 6, overflow: "hidden",
          }}>
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 8, color: "#555", letterSpacing: "0.06em",
              padding: "10px 12px",
              borderRight: "1px solid rgba(244,241,234,0.06)",
              display: "flex", alignItems: "flex-start",
              paddingTop: 11,
            }}>{label}</div>
            <div style={{
              fontFamily: "'Archivo', sans-serif",
              fontSize: 11, color: "var(--cream)",
              padding: "10px 12px", lineHeight: 1.5,
            }}>{value}</div>
          </div>
        ))}
      </div>

      {/* Travel */}
      <div style={{
        fontFamily: "'Archivo', sans-serif",
        fontSize: 10, fontWeight: 800, color: "#555", letterSpacing: "0.1em", marginBottom: 14,
      }}>TRAVEL</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {[
          { label: "LONG HAUL", value: `${TRAVEL.longHaul.threshold} — ${TRAVEL.longHaul.class}` },
          ...TRAVEL.shortHaul.map(s => ({ label: `SHORT · ${s.window.toUpperCase()}`, value: s.class })),
          { label: "HOTEL", value: TRAVEL.hotel },
        ].map(({ label, value }) => (
          <div key={label} style={{
            display: "grid", gridTemplateColumns: "140px 1fr",
            background: "var(--card-bg)",
            border: "1px solid rgba(244,241,234,0.06)",
            borderRadius: 6, overflow: "hidden",
          }}>
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 8, color: "#555", letterSpacing: "0.06em",
              padding: "10px 12px",
              borderRight: "1px solid rgba(244,241,234,0.06)",
              display: "flex", alignItems: "center",
            }}>{label}</div>
            <div style={{
              fontFamily: "'Archivo', sans-serif",
              fontSize: 11, color: "var(--cream)",
              padding: "10px 12px",
              display: "flex", alignItems: "center",
            }}>{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
