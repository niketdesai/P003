import { useState, useEffect } from "react";

const COLORS = [
  { name: "Teal", hex: "#3E6670", usage: "Primary accent · Technology vertical · Active states", var: "--teal" },
  { name: "Cream", hex: "#F4F1EA", usage: "Primary text on dark · Right field background", var: "--cream" },
  { name: "Vermilion", hex: "#C4462B", usage: "Hospitality vertical · Alerts · Signal events", var: "--vermilion" },
  { name: "Navy", hex: "#2B4A5C", usage: "Finance vertical", var: "--navy" },
  { name: "Near Black", hex: "#141210", usage: "Backgrounds · Left field base", var: "--near-black" },
  { name: "Dark Text", hex: "#5C574E", usage: "Body text on cream", var: "--dark-text" },
  { name: "Mid Text", hex: "#8A8478", usage: "Secondary text · Metadata", var: "--mid-text" },
  { name: "Light Text", hex: "#B0A898", usage: "Tertiary text · Timestamps", var: "--light-text" },
  { name: "Rule", hex: "#DDD8CF", usage: "Dividers on cream", var: "--rule" },
  { name: "Card BG", hex: "#1A1A18", usage: "Card backgrounds on dark", var: "--card-bg" },
];

const FONTS = [
  { family: "Archivo", weights: "400–900", role: "Structure", usage: "Headers, labels, nav, buttons, entity names. Weight 900 for marks, 800 for section labels, 700 for titles, 500 for nav." },
  { family: "Libre Baskerville", weights: "400, 400i, 700", role: "Body", usage: "Prose, descriptions, notes, card body text. Italic for essay titles in Thinking section." },
  { family: "Space Mono", weights: "400, 700", role: "Data", usage: "Project codes, version numbers, metadata, monospace data, timestamps." },
];

const PROPERTIES = [
  { name: "ennd.co", type: "Practice", accent: "#3E6670", desc: "ENND I advisory practice. F4 split layout, Signal B intercept graphic, project cards below fold." },
  { name: "niket.com", type: "Personal", accent: "#3E6670", desc: "Personal site. Essays, background, contact." },
  { name: "opavino.com", type: "Portfolio", accent: "#722F37", desc: "Opavino hospitality group. Needs rebuild. Merlot accent." },
  { name: "lilliecoits.com", type: "Venue", accent: "#C4462B", desc: "Lillie Coit's. Opavino property." },
  { name: "untildebtdowepart.com", type: "Product", accent: "#3E6670", desc: "Wedding prediction market. Champagne/teal luxury palette." },
  { name: "attending.niket.com", type: "Product", accent: "#3E6670", desc: "Private ticket concierge. Railway." },
  { name: "sth.niket.com", type: "Product", accent: "#3E6670", desc: "Season Ticket Holder. Railway." },
];

const COMPONENTS = [
  { name: "Section Label", spec: "Archivo 900 · 0.56rem · letter-spacing 0.18em · cream at 40% opacity · uppercase" },
  { name: "Card", spec: "Background: var(--card-bg) · border-radius 6px · border-left 3px solid [vertical color] · padding 1.25rem" },
  { name: "Card Meta", spec: "Space Mono · 0.46rem · vertical color · P### · CLIENT · VERTICAL" },
  { name: "Card Title", spec: "Archivo 800 · 0.75–0.95rem · cream" },
  { name: "Card Body", spec: "Libre Baskerville · 0.6–0.72rem · var(--mid-text) · line-height 1.7" },
  { name: "Filter Button", spec: "Archivo 700 · 0.45rem · letter-spacing 0.08em · 1px border · border-radius 2px · transparent bg" },
  { name: "Vertical Tag", spec: "Archivo 700 · 0.5rem · letter-spacing 0.08em · 1.5px border · vertical color" },
  { name: "Rule", spec: "1px solid var(--rule) on cream · 1.5px solid var(--teal) for header/footer lines" },
  { name: "~/nnd Mark", spec: "Archivo 900 · ~/ in cream, nnd in near-black (on teal) or reversed on dark" },
];

export default function BrandView() {
  const [revealed, setRevealed] = useState(false);
  useEffect(() => { setTimeout(() => setRevealed(true), 100); }, []);

  const Label = ({ children }) => (
    <div style={{
      fontFamily: "'Archivo', sans-serif",
      fontWeight: 900,
      fontSize: "0.56rem",
      letterSpacing: "0.18em",
      color: "var(--cream)",
      opacity: 0.4,
      marginBottom: 12,
    }}>{children}</div>
  );

  return (
    <div style={{
      padding: "24px 0",
      opacity: revealed ? 1 : 0,
      transform: revealed ? "none" : "translateY(12px)",
      transition: "all 0.5s ease",
    }}>

      {/* Design System Header */}
      <div style={{ marginBottom: 32, paddingBottom: 20, borderBottom: "1px solid rgba(244,241,234,0.06)" }}>
        <div style={{
          fontFamily: "'Archivo', sans-serif",
          fontWeight: 900, fontSize: "1.1rem",
          color: "var(--cream)", marginBottom: 6,
        }}>ENND CO Design System</div>
        <div style={{
          fontFamily: "'Libre Baskerville', serif",
          fontSize: "0.75rem", color: "var(--mid-text)",
          lineHeight: 1.7,
        }}>
          Brand kit and component reference for all ENND properties. Canonical source: ennd.co
        </div>
      </div>

      {/* Colors */}
      <Label>COLOR PALETTE</Label>
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: 8, marginBottom: 32,
      }}>
        {COLORS.map(c => (
          <div key={c.name} style={{
            background: "var(--card-bg)",
            border: "1px solid rgba(244,241,234,0.06)",
            borderRadius: 6, overflow: "hidden",
          }}>
            <div style={{ height: 32, background: c.hex }} />
            <div style={{ padding: "10px 12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                <span style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: 800, fontSize: "0.65rem",
                  color: "var(--cream)",
                }}>{c.name}</span>
                <span style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.5rem", color: "var(--mid-text)",
                }}>{c.hex}</span>
              </div>
              <div style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: "0.55rem", color: "var(--mid-text)",
                lineHeight: 1.5,
              }}>{c.usage}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Typography */}
      <Label>TYPOGRAPHY</Label>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 32 }}>
        {FONTS.map(f => (
          <div key={f.family} style={{
            background: "var(--card-bg)",
            border: "1px solid rgba(244,241,234,0.06)",
            borderRadius: 6, padding: "14px 16px",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
              <span style={{
                fontFamily: `'${f.family}', ${f.family === 'Space Mono' ? 'monospace' : f.family === 'Libre Baskerville' ? 'serif' : 'sans-serif'}`,
                fontWeight: 700, fontSize: "0.85rem",
                color: "var(--cream)",
              }}>{f.family}</span>
              <span style={{
                fontFamily: "'Archivo', sans-serif",
                fontWeight: 700, fontSize: "0.5rem",
                color: "var(--teal)",
                letterSpacing: "0.08em",
              }}>{f.role.toUpperCase()}</span>
            </div>
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.5rem", color: "var(--light-text)",
              marginBottom: 6,
            }}>Weights: {f.weights}</div>
            <div style={{
              fontFamily: "'Libre Baskerville', serif",
              fontSize: "0.6rem", color: "var(--mid-text)",
              lineHeight: 1.6,
            }}>{f.usage}</div>
          </div>
        ))}
      </div>

      {/* Components */}
      <Label>COMPONENT SPECS</Label>
      <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 32 }}>
        {COMPONENTS.map(c => (
          <div key={c.name} style={{
            display: "grid", gridTemplateColumns: "120px 1fr",
            background: "var(--card-bg)",
            border: "1px solid rgba(244,241,234,0.06)",
            borderRadius: 6, overflow: "hidden",
          }}>
            <div style={{
              fontFamily: "'Archivo', sans-serif",
              fontWeight: 800, fontSize: "0.55rem",
              color: "var(--cream)", opacity: 0.7,
              padding: "10px 12px",
              borderRight: "1px solid rgba(244,241,234,0.06)",
              display: "flex", alignItems: "flex-start",
              letterSpacing: "0.02em",
            }}>{c.name}</div>
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.5rem", color: "var(--mid-text)",
              padding: "10px 12px", lineHeight: 1.7,
            }}>{c.spec}</div>
          </div>
        ))}
      </div>

      {/* Properties */}
      <Label>WEB PROPERTIES</Label>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 32 }}>
        {PROPERTIES.map(p => (
          <div key={p.name} style={{
            background: "var(--card-bg)",
            borderLeft: `3px solid ${p.accent}`,
            border: "1px solid rgba(244,241,234,0.06)",
            borderLeftWidth: 3,
            borderLeftColor: p.accent,
            borderRadius: 6, padding: "12px 14px",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
              <span style={{
                fontFamily: "'Archivo', sans-serif",
                fontWeight: 800, fontSize: "0.7rem",
                color: "var(--cream)",
              }}>{p.name}</span>
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.46rem", color: p.accent,
              }}>{p.type.toUpperCase()}</span>
            </div>
            <div style={{
              fontFamily: "'Libre Baskerville', serif",
              fontSize: "0.6rem", color: "var(--mid-text)",
              lineHeight: 1.6,
            }}>{p.desc}</div>
          </div>
        ))}
      </div>

      {/* Design Principles */}
      <Label>DESIGN PRINCIPLES</Label>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {[
          { title: "Mid-century modernist", body: "Erik Nitsche, Vignelli, Sutnar. Weaponized science. Not brutalist — sophisticated. Not decorative — structural." },
          { title: "CIA paramilitary energy", body: "Understated but deadly. Approachable but superpowered. Not Delta Force. The person at the bar who you later find out runs things." },
          { title: "Practice-first, not personal", body: "ennd.co is the practice. niket.com is the person. The practice leads. The work sells." },
          { title: "Signal B intercept", body: "The left field is alive. SVG grain, CSS drift, Lorenz phase portrait accumulating over visit duration, vermilion signal events. Mathematics as atmosphere." },
          { title: "Density carries information", body: "Every sentence carries weight. No filler. Body at readable sizes. Tables for structured data. Monospace for data alignment." },
        ].map(p => (
          <div key={p.title} style={{
            background: "var(--card-bg)",
            border: "1px solid rgba(244,241,234,0.06)",
            borderRadius: 6, padding: "14px 16px",
          }}>
            <div style={{
              fontFamily: "'Archivo', sans-serif",
              fontWeight: 800, fontSize: "0.65rem",
              color: "var(--teal)", marginBottom: 6,
            }}>{p.title}</div>
            <div style={{
              fontFamily: "'Libre Baskerville', serif",
              fontSize: "0.6rem", color: "var(--mid-text)",
              lineHeight: 1.7,
            }}>{p.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
