import { useState, useEffect } from "react";
import { PROJECTS, STAGES } from "../data/practice.js";

const ACCENT = "#D4A853";

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

export default function ProjectsView() {
  const [revealed, setRevealed] = useState(false);
  const [selected, setSelected] = useState(null);
  useEffect(() => { setTimeout(() => setRevealed(true), 100); }, []);

  // Pipeline stage counts
  const stageCounts = STAGES.map(s => ({
    ...s,
    count: PROJECTS.filter(p => p.stage === s.id).length,
  })).filter(s => s.count > 0);

  return (
    <div style={{
      padding: "20px 16px",
      opacity: revealed ? 1 : 0,
      transform: revealed ? "none" : "translateY(12px)",
      transition: "opacity 0.5s ease, transform 0.5s ease",
    }}>

      {/* Pipeline summary */}
      <div style={{
        display: "flex", gap: 6, flexWrap: "wrap",
        marginBottom: 20,
      }}>
        {stageCounts.map(s => (
          <div key={s.id} style={{
            display: "flex", alignItems: "center", gap: 6,
            background: "#0e0c08", border: "1px solid #1e1c14",
            borderRadius: 20, padding: "5px 10px",
          }}>
            <div style={{
              width: 6, height: 6, borderRadius: "50%",
              background: STAGE_COLORS[s.id],
            }} />
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 9, color: "#888",
            }}>{s.label}</span>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 9, color: STAGE_COLORS[s.id], fontWeight: 700,
            }}>{s.count}</span>
          </div>
        ))}
      </div>

      {/* Project list */}
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
                {/* Code */}
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 9, color: "#444", fontWeight: 700,
                }}>{p.code}</div>

                {/* Project + client */}
                <div>
                  <div style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13, fontWeight: 700, color: "#f0ede5",
                    marginBottom: 2,
                  }}>{p.project}</div>
                  <div style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 11, color: "#555",
                  }}>{p.client}</div>
                </div>

                {/* Stage + payment */}
                <div style={{ textAlign: "right" }}>
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 8, fontWeight: 700,
                    color: stageColor, marginBottom: 4,
                    letterSpacing: "0.06em",
                  }}>{p.stage.toUpperCase()}</div>
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 8, color: payColor,
                  }}>{p.payment}</div>
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
                      { label: "RATE", value: p.rate ? `$${(p.rate/1000).toFixed(1)}k/mo` : "—" },
                      { label: "IP ASSIGNED", value: p.ipAssigned === null ? "TBD" : p.ipAssigned ? "Yes" : "No" },
                      { label: "NDA", value: p.nda ? "Yes" : "No" },
                    ].map(({ label, value }) => (
                      <div key={label}>
                        <div style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 8, color: "#555", marginBottom: 3,
                        }}>{label}</div>
                        <div style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 11, color: "#888",
                        }}>{value}</div>
                      </div>
                    ))}
                  </div>
                  {p.paymentNote && (
                    <div style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 11, color: payColor,
                      marginBottom: p.notes ? 8 : 0,
                      lineHeight: 1.5,
                    }}>{p.paymentNote}</div>
                  )}
                  {p.notes && (
                    <div style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 11, color: "#555", lineHeight: 1.5,
                    }}>{p.notes}</div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Stage legend */}
      <div style={{ marginTop: 24 }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10, color: "#555", letterSpacing: "0.08em", marginBottom: 10,
        }}>PIPELINE STAGES</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {STAGES.map(s => (
            <div key={s.id} style={{
              display: "grid", gridTemplateColumns: "100px 1fr",
              gap: 10, alignItems: "center",
            }}>
              <div style={{
                display: "flex", alignItems: "center", gap: 6,
              }}>
                <div style={{
                  width: 5, height: 5, borderRadius: "50%",
                  background: STAGE_COLORS[s.id], flexShrink: 0,
                }} />
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 8, color: STAGE_COLORS[s.id], fontWeight: 700,
                }}>{s.label.toUpperCase()}</span>
              </div>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 10, color: "#444",
              }}>{s.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
