import { useState, useEffect } from "react";
import { PROJECTS } from "../data/practice.js";

const ACCENT = "#D4A853";

const STATUS = {
  "Active":       { color: "#4ade80", bg: "#4ade8012", label: "ACTIVE" },
  "Lead":         { color: ACCENT,    bg: ACCENT+"12", label: "LEAD" },
  "Negotiating":  { color: "#fb923c", bg: "#fb923c12", label: "NEGOTIATING" },
  "Signed":       { color: "#818CF8", bg: "#818CF812", label: "SIGNED" },
};

const STATUS_ORDER = ["Active", "Negotiating", "Lead", "Signed"];

// Group projects by status
function groupByStatus(projects) {
  const groups = {};
  STATUS_ORDER.forEach(s => {
    const items = projects.filter(p => p.status === s);
    if (items.length) groups[s] = items;
  });
  return groups;
}

export default function ProjectsView() {
  const [revealed, setRevealed] = useState(false);
  const [open, setOpen] = useState(null);

  useEffect(() => { setTimeout(() => setRevealed(true), 100); }, []);

  const groups = groupByStatus(PROJECTS);

  return (
    <div style={{
      padding: "20px 16px",
      opacity: revealed ? 1 : 0,
      transform: revealed ? "none" : "translateY(12px)",
      transition: "opacity 0.5s ease, transform 0.5s ease",
    }}>

      {/* Status legend */}
      <div style={{
        display: "flex", gap: 16, flexWrap: "wrap",
        marginBottom: 20,
      }}>
        {Object.entries(STATUS).map(([key, val]) => (
          <div key={key} style={{
            display: "flex", alignItems: "center", gap: 6,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 9, color: val.color, letterSpacing: "0.06em",
          }}>
            <div style={{
              width: 6, height: 6, borderRadius: "50%",
              background: val.color, flexShrink: 0,
            }} />
            {val.label}
          </div>
        ))}
      </div>

      {Object.entries(groups).map(([status, projects]) => {
        const sc = STATUS[status] || STATUS["Lead"];
        return (
          <div key={status} style={{ marginBottom: 28 }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 9, fontWeight: 700,
              color: sc.color, letterSpacing: "0.1em",
              marginBottom: 10,
              paddingBottom: 6,
              borderBottom: `1px solid ${sc.color}22`,
            }}>
              {sc.label}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {projects.map((proj) => {
                const isOpen = open === proj.code;
                return (
                  <div key={proj.code} style={{
                    background: "#0e0c08",
                    border: `1px solid ${isOpen ? sc.color + "44" : "#1e1c14"}`,
                    borderRadius: 8, overflow: "hidden",
                    transition: "border-color 0.2s",
                  }}>
                    <button
                      onClick={() => setOpen(isOpen ? null : proj.code)}
                      style={{
                        width: "100%", background: "none", border: "none",
                        padding: "14px 16px", cursor: "pointer",
                        display: "flex", alignItems: "center",
                        justifyContent: "space-between", textAlign: "left",
                        gap: 12,
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
                        <div style={{
                          width: 6, height: 6, borderRadius: "50%",
                          background: sc.color, flexShrink: 0,
                        }} />
                        <div style={{ minWidth: 0 }}>
                          <div style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: 13, fontWeight: 700,
                            color: "#f0ede5",
                            marginBottom: 2,
                          }}>{proj.name}</div>
                          <div style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 9, color: "#444",
                            letterSpacing: "0.04em",
                          }}>{proj.code} · {proj.vertical}</div>
                        </div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                        <div style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 8, fontWeight: 700,
                          color: sc.color,
                          background: sc.bg,
                          padding: "3px 8px", borderRadius: 3,
                          letterSpacing: "0.06em",
                        }}>{sc.label}</div>
                        <span style={{ color: "#333", fontSize: 12 }}>{isOpen ? "−" : "+"}</span>
                      </div>
                    </button>

                    {isOpen && (
                      <div style={{
                        padding: "0 16px 16px",
                        animation: "fadeIn 0.2s ease",
                        borderTop: `1px solid ${sc.color}22`,
                      }}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 14 }}>
                          {[
                            { label: "CLIENT", value: proj.client },
                            { label: "STRUCTURE", value: proj.structure },
                            { label: "PAYMENT", value: proj.payment },
                            { label: "VERTICAL", value: proj.vertical },
                          ].map(({ label, value }) => (
                            <div key={label} style={{
                              background: "#080806", borderRadius: 5,
                              padding: "8px 10px",
                            }}>
                              <div style={{
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: 8, color: "#555",
                                letterSpacing: "0.06em", marginBottom: 4,
                              }}>{label}</div>
                              <div style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: 11, color: "#c8c4b0",
                              }}>{value}</div>
                            </div>
                          ))}
                        </div>
                        <div style={{
                          marginTop: 12,
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 11, color: "#666", lineHeight: 1.6,
                          borderLeft: `2px solid ${sc.color}33`,
                          paddingLeft: 10,
                        }}>
                          {proj.note}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 9, color: "#252520",
        textAlign: "center", marginTop: 8,
      }}>
        STATUS FLOW: LEAD → NEGOTIATING → SIGNED → ACTIVE
      </div>
    </div>
  );
}
