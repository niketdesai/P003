import { useState, useEffect } from "react";
import { PROJECTS, STAGES, PRICING } from "../data/practice.js";

const ACCENT = "#D4A853";

const VERTICAL_COLORS = {
  "Technology":  "#3E6670",
  "Hospitality": "#C4462B",
  "Finance":     "#2B4A5C",
  "Travel":      "#8A8478",
};

const STAGE_COLORS = {
  identified: "#555",
  lead:        "#D4A853",
  proposed:    "#fb923c",
  negotiating: "#f87171",
  signed:      "#818CF8",
  active:      "#4ade80",
  paused:      "#555",
  closed:      "#333",
};

const PAYMENT_COLORS = {
  "None":                  "#555",
  "Retainer":              ACCENT,
  "15% equity assignment": "#c084fc",
};

function fmt(n) {
  if (n >= 1000) return "$" + (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1) + "k";
  return "$" + n;
}

export default function ProjectsView() {
  const [revealed, setRevealed] = useState(false);
  const [selected, setSelected] = useState(null);
  useEffect(() => { setTimeout(() => setRevealed(true), 100); }, []);

  // Analytics
  const totalMonthly = PROJECTS.reduce((s, p) => s + (p.monthlyValue || 0), 0);
  const cashProjects = PROJECTS.filter(p => p.monthlyValue > 0);
  const equityProjects = PROJECTS.filter(p => p.payment?.includes("equity"));

  // Group by stage for funnel
  const stageGroups = STAGES.map(s => {
    const projects = PROJECTS.filter(p => p.stage === s.id);
    const value = projects.reduce((sum, p) => sum + (p.monthlyValue || 0), 0);
    return { ...s, projects, value, count: projects.length };
  }).filter(s => s.count > 0);

  // For funnel bar widths
  const maxValue = Math.max(...stageGroups.map(s => s.value), 1);
  const maxCount = Math.max(...stageGroups.map(s => s.count), 1);

  return (
    <div style={{
      padding: "20px 16px",
      opacity: revealed ? 1 : 0,
      transform: revealed ? "none" : "translateY(12px)",
      transition: "opacity 0.5s ease, transform 0.5s ease",
    }}>

      {/* Summary cards */}
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
        gap: 8, marginBottom: 24,
      }}>
        {[
          { label: "PIPELINE", value: fmt(totalMonthly), sub: "/mo if all close", color: ACCENT },
          { label: "CASH", value: String(cashProjects.length), sub: `of ${PROJECTS.length} projects`, color: ACCENT },
          { label: "EQUITY", value: String(equityProjects.length), sub: "assignments", color: "#c084fc" },
        ].map(({ label, value, sub, color }) => (
          <div key={label} style={{
            background: "#0e0c08",
            border: "1px solid #1e1c14",
            borderRadius: 8, padding: "14px 12px",
            textAlign: "center",
          }}>
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 8, color: "#444", letterSpacing: "0.08em",
              marginBottom: 8,
            }}>{label}</div>
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 20, fontWeight: 700, color,
              marginBottom: 4,
            }}>{value}</div>
            <div style={{
              fontFamily: "'Archivo', sans-serif",
              fontSize: 9, color: "#444",
            }}>{sub}</div>
          </div>
        ))}
      </div>

      {/* Stage funnel */}
      <div style={{
        fontFamily: "'Archivo', sans-serif",
        fontSize: 10, fontWeight: 800, color: "#555", letterSpacing: "0.1em", marginBottom: 14,
      }}>PIPELINE BY STAGE</div>
      <div style={{
        display: "flex", flexDirection: "column", gap: 6,
        marginBottom: 28,
      }}>
        {stageGroups.map(s => {
          const barWidth = s.value > 0
            ? Math.max(8, (s.value / maxValue) * 100)
            : Math.max(8, (s.count / maxCount) * 30);
          const stageColor = STAGE_COLORS[s.id] || "#555";

          return (
            <div key={s.id} style={{
              background: "#0e0c08",
              border: "1px solid #1e1c14",
              borderRadius: 6, padding: "12px 14px",
            }}>
              <div style={{
                display: "flex", justifyContent: "space-between",
                alignItems: "center", marginBottom: 8,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{
                    width: 6, height: 6, borderRadius: "50%",
                    background: stageColor, flexShrink: 0,
                  }} />
                  <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 9, fontWeight: 700, color: stageColor,
                    letterSpacing: "0.04em",
                  }}>{s.label.toUpperCase()}</span>
                  <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 9, color: "#444",
                  }}>{s.count} project{s.count !== 1 ? "s" : ""}</span>
                </div>
                <span style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 11, fontWeight: 700,
                  color: s.value > 0 ? "#f0ede5" : "#333",
                }}>
                  {s.value > 0 ? fmt(s.value) + "/mo" : "\u2014"}
                </span>
              </div>
              {/* Bar */}
              <div style={{
                height: 4, background: "#151310",
                borderRadius: 2, overflow: "hidden",
              }}>
                <div style={{
                  height: "100%",
                  width: `${barWidth}%`,
                  background: `${stageColor}88`,
                  borderRadius: 2,
                  transition: "width 0.4s ease",
                }} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Project list */}
      <div style={{
        fontFamily: "'Archivo', sans-serif",
        fontSize: 10, fontWeight: 800, color: "#555", letterSpacing: "0.1em", marginBottom: 14,
      }}>ALL PROJECTS</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {PROJECTS.map((p) => {
          const isSelected = selected === p.code;
          const stageColor = STAGE_COLORS[p.stage] || "#555";
          const payColor = PAYMENT_COLORS[p.payment] || ACCENT;

          return (
            <div key={p.code}
              onClick={() => setSelected(isSelected ? null : p.code)}
              style={{
                background: "#0e0c08",
                border: `1px solid ${isSelected ? ACCENT + "44" : "#1e1c14"}`,
                borderLeft: `3px solid ${VERTICAL_COLORS[p.vertical] || "#333"}`,
                borderRadius: 8, overflow: "hidden",
                cursor: "pointer", transition: "border-color 0.15s",
              }}>

              {/* Row */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "44px 1fr auto",
                alignItems: "center",
                gap: 12, padding: "13px 14px",
              }}>
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 9, color: "#444", fontWeight: 700,
                }}>{p.code}</div>

                <div>
                  <div style={{
                    fontFamily: "'Archivo', sans-serif",
                    fontSize: 13, fontWeight: 700, color: "#f0ede5",
                    marginBottom: 2,
                  }}>{p.project}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{
                      fontFamily: "'Archivo', sans-serif",
                      fontSize: 11, color: "#555",
                    }}>{p.client}</span>
                    <span style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 7, fontWeight: 700,
                      color: VERTICAL_COLORS[p.vertical] || "#555",
                      letterSpacing: "0.06em",
                    }}>{(p.vertical || "").toUpperCase()}</span>
                  </div>
                </div>

                <div style={{ textAlign: "right" }}>
                  <div style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 8, fontWeight: 700,
                    color: stageColor, marginBottom: 4,
                    letterSpacing: "0.06em",
                  }}>{p.stage.toUpperCase()}</div>
                  <div style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 10, fontWeight: 700,
                    color: p.monthlyValue > 0 ? "#f0ede5" : payColor,
                  }}>
                    {p.monthlyValue > 0 ? fmt(p.monthlyValue) + "/mo" : p.payment}
                  </div>
                </div>
              </div>

              {/* Expanded detail */}
              {isSelected && (
                <div style={{
                  borderTop: "1px solid #1a1814",
                  padding: "14px 14px 16px",
                  animation: "fadeIn 0.2s ease",
                }}>
                  <div style={{
                    display: "grid", gridTemplateColumns: "1fr 1fr",
                    gap: 8, marginBottom: p.notes ? 12 : 0,
                  }}>
                    {[
                      { label: "VERTICAL", value: p.vertical },
                      { label: "MONTHLY", value: p.monthlyValue > 0 ? fmt(p.monthlyValue) : "\u2014" },
                      { label: "IP ASSIGNED", value: p.ipAssigned === null ? "TBD" : p.ipAssigned ? "Yes" : "No" },
                      { label: "NDA", value: p.nda ? "Yes" : "No" },
                    ].map(({ label, value }) => (
                      <div key={label}>
                        <div style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: 8, color: "#555", marginBottom: 3,
                        }}>{label}</div>
                        <div style={{
                          fontFamily: "'Archivo', sans-serif",
                          fontSize: 11, color: "#888",
                        }}>{value}</div>
                      </div>
                    ))}
                  </div>
                  {p.paymentNote && (
                    <div style={{
                      fontFamily: "'Archivo', sans-serif",
                      fontSize: 11, color: payColor,
                      marginBottom: p.notes ? 8 : 0,
                      lineHeight: 1.5,
                    }}>{p.paymentNote}</div>
                  )}
                  {p.notes && (
                    <div style={{
                      fontFamily: "'Archivo', sans-serif",
                      fontSize: 11, color: "#555", lineHeight: 1.5,
                    }}>{p.notes}</div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
