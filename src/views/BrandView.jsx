import { useState, useEffect } from "react";
import { BRAND } from "../data/practice.js";

const ACCENT = "#D4A853";

const OPEN_QUESTIONS = [
  {
    q: "What does ennd.co point to?",
    options: ["Redirect to niket.com", "Standalone entity page", "Client-facing portal", "Internal tools dashboard"],
    notes: "niket.com is the brand front door. ennd.co is the entity. Different audiences?",
  },
  {
    q: "Who visits ennd.co?",
    options: ["Nobody — it's just a domain", "Clients verifying the billing entity", "Potential clients doing diligence", "Partners / co-investors"],
    notes: "If only clients see it post-signing, it needs almost nothing. If prospects see it pre-signing, it needs credibility.",
  },
  {
    q: "What does ennd.co need to say?",
    options: ["Just the entity name + verticals", "Entity + team (you) + select projects", "Full practice overview mirroring P003", "Nothing — redirect to niket.com"],
    notes: "The less it says, the more exclusive it feels. The more it says, the more it sells.",
  },
  {
    q: "What is the visual identity for ENND?",
    options: ["Same as /N (gold, dark, mono)", "Distinct from niket.com (different palette)", "Minimal — white, clean, corporate", "Match the project sites aesthetic"],
    notes: "niket.com = personal brand. ennd.co = entity brand. Should they look the same or different?",
  },
];

export default function BrandView() {
  const [revealed, setRevealed] = useState(false);
  useEffect(() => { setTimeout(() => setRevealed(true), 100); }, []);

  return (
    <div style={{
      padding: "20px 16px",
      opacity: revealed ? 1 : 0,
      transform: revealed ? "none" : "translateY(12px)",
      transition: "opacity 0.5s ease, transform 0.5s ease",
    }}>

      {/* Current state */}
      <div style={{
        fontFamily: "'Archivo', sans-serif",
        fontSize: 10, fontWeight: 800, color: "#555", letterSpacing: "0.1em", marginBottom: 14,
      }}>CURRENT STATE</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 28 }}>
        {[
          { label: "NIKET.COM", value: "Live. Rebuilt.", status: "done", url: "niket.com" },
          { label: "ENND.CO", value: "Domain owned. Inactive.", status: "open", url: "ennd.co" },
          { label: "NIKET.COM/AI", value: "Essay shipped.", status: "done", url: "niket.com/ai" },
          { label: "X + LINKEDIN", value: "Reactivated.", status: "done", url: null },
        ].map(item => (
          <div key={item.label} style={{
            background: "#0e0c08",
            border: `1px solid ${item.status === "done" ? "#4ade8022" : ACCENT + "22"}`,
            borderRadius: 8, padding: "12px 14px",
          }}>
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              marginBottom: 6,
            }}>
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 9, fontWeight: 700, color: "#888",
              }}>{item.label}</span>
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 7, fontWeight: 700,
                color: item.status === "done" ? "#4ade80" : ACCENT,
              }}>{item.status === "done" ? "LIVE" : "TODO"}</span>
            </div>
            <div style={{
              fontFamily: "'Archivo', sans-serif",
              fontSize: 11, color: "#666",
            }}>{item.value}</div>
          </div>
        ))}
      </div>

      {/* Brand architecture */}
      <div style={{
        fontFamily: "'Archivo', sans-serif",
        fontSize: 10, fontWeight: 800, color: "#555", letterSpacing: "0.1em", marginBottom: 14,
      }}>BRAND ARCHITECTURE</div>
      <div style={{
        background: "#0e0c08", border: "1px solid #1e1c14",
        borderRadius: 8, padding: "16px", marginBottom: 28,
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { layer: "PERSONAL", asset: "niket.com", role: "Front door. The brand is the person.", mark: "/N" },
            { layer: "ENTITY", asset: "ennd.co", role: "Billing entity. Lives on invoices and contracts.", mark: "ENND I" },
            { layer: "PROJECTS", asset: "niketdesai.github.io/P###", role: "Client deliverables. Password-gated.", mark: "P###" },
            { layer: "SHORT URLS", asset: "niket.is/building/p###", role: "Shareable links to project sites.", mark: null },
          ].map(item => (
            <div key={item.layer} style={{
              display: "grid", gridTemplateColumns: "70px 1fr",
              gap: 12, alignItems: "start",
            }}>
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 8, fontWeight: 700, color: ACCENT,
                letterSpacing: "0.06em", paddingTop: 2,
              }}>{item.layer}</div>
              <div>
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 10, color: "#f0ede5", marginBottom: 3,
                }}>
                  {item.asset}
                  {item.mark && <span style={{ color: "#444", marginLeft: 8 }}>{item.mark}</span>}
                </div>
                <div style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontSize: 11, color: "#555", lineHeight: 1.5,
                }}>{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Open questions for ennd.co */}
      <div style={{
        fontFamily: "'Archivo', sans-serif",
        fontSize: 10, fontWeight: 800, color: "#555", letterSpacing: "0.1em", marginBottom: 14,
      }}>ENND.CO — OPEN QUESTIONS</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {OPEN_QUESTIONS.map((item, i) => (
          <div key={i} style={{
            background: "#0e0c08",
            border: "1px solid #1e1c14",
            borderRadius: 8, padding: "14px 16px",
          }}>
            <div style={{
              fontFamily: "'Archivo', sans-serif",
              fontSize: 12, fontWeight: 600, color: "#f0ede5",
              marginBottom: 10,
            }}>{item.q}</div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 8 }}>
              {item.options.map(opt => (
                <span key={opt} style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 8, color: "#888",
                  background: "#151310",
                  border: "1px solid #1e1c14",
                  borderRadius: 4, padding: "4px 8px",
                }}>{opt}</span>
              ))}
            </div>
            <div style={{
              fontFamily: "'Archivo', sans-serif",
              fontSize: 10, color: "#444", fontStyle: "italic",
            }}>{item.notes}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
