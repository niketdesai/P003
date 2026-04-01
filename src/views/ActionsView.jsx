import { useState, useEffect } from "react";
import { ACTIONS, ACTION_STATUSES, ACTION_CATEGORIES } from "../data/actions.js";

const ACCENT = "#D4A853";

const STATUS_COLORS = {};
ACTION_STATUSES.forEach(s => { STATUS_COLORS[s.id] = s.color; });

export default function ActionsView() {
  const [revealed, setRevealed] = useState(false);
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);
  useEffect(() => { setTimeout(() => setRevealed(true), 100); }, []);

  // Counts by status
  const statusCounts = ACTION_STATUSES.map(s => ({
    ...s,
    count: ACTIONS.filter(a => a.status === s.id).length,
  }));

  const totalOpen = ACTIONS.filter(a => a.status !== "done").length;
  const totalBlocked = ACTIONS.filter(a => a.status === "blocked").length;

  // Filter
  const filtered = filter === "all"
    ? ACTIONS.filter(a => a.status !== "done")
    : ACTIONS.filter(a => a.category === filter && a.status !== "done");

  // Group by category
  const grouped = ACTION_CATEGORIES
    .map(cat => ({
      ...cat,
      actions: filtered.filter(a => a.category === cat.id),
    }))
    .filter(g => g.actions.length > 0);

  return (
    <div style={{
      padding: "20px 16px",
      opacity: revealed ? 1 : 0,
      transform: revealed ? "none" : "translateY(12px)",
      transition: "opacity 0.5s ease, transform 0.5s ease",
    }}>

      {/* Summary */}
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: 8, marginBottom: 20,
      }}>
        <div style={{
          background: "#0e0c08", border: "1px solid #1e1c14",
          borderRadius: 8, padding: "14px 12px", textAlign: "center",
        }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 8, color: "#444", letterSpacing: "0.08em", marginBottom: 8,
          }}>OPEN</div>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 24, fontWeight: 700, color: ACCENT,
          }}>{totalOpen}</div>
        </div>
        <div style={{
          background: "#0e0c08", border: "1px solid #1e1c14",
          borderRadius: 8, padding: "14px 12px", textAlign: "center",
        }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 8, color: "#444", letterSpacing: "0.08em", marginBottom: 8,
          }}>BLOCKED</div>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 24, fontWeight: 700,
            color: totalBlocked > 0 ? "#f87171" : "#333",
          }}>{totalBlocked}</div>
        </div>
      </div>

      {/* Status bar */}
      <div style={{
        display: "flex", height: 6, borderRadius: 3,
        overflow: "hidden", marginBottom: 20,
        background: "#151310",
      }}>
        {statusCounts.filter(s => s.count > 0).map(s => (
          <div key={s.id} style={{
            flex: s.count,
            background: s.color + "88",
            transition: "flex 0.3s ease",
          }} />
        ))}
      </div>

      {/* Category filter */}
      <div style={{
        display: "flex", gap: 6, flexWrap: "wrap",
        marginBottom: 20,
      }}>
        <button
          onClick={() => setFilter("all")}
          style={{
            background: filter === "all" ? ACCENT + "18" : "#0e0c08",
            border: `1px solid ${filter === "all" ? ACCENT + "44" : "#1e1c14"}`,
            borderRadius: 20, padding: "5px 12px",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 9, color: filter === "all" ? ACCENT : "#555",
            cursor: "pointer", fontWeight: filter === "all" ? 700 : 400,
          }}
        >ALL</button>
        {ACTION_CATEGORIES.map(cat => {
          const count = ACTIONS.filter(a => a.category === cat.id && a.status !== "done").length;
          if (count === 0) return null;
          return (
            <button key={cat.id}
              onClick={() => setFilter(cat.id)}
              style={{
                background: filter === cat.id ? ACCENT + "18" : "#0e0c08",
                border: `1px solid ${filter === cat.id ? ACCENT + "44" : "#1e1c14"}`,
                borderRadius: 20, padding: "5px 12px",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 9, color: filter === cat.id ? ACCENT : "#555",
                cursor: "pointer", fontWeight: filter === cat.id ? 700 : 400,
              }}
            >{cat.label.toUpperCase()} <span style={{ color: "#444", marginLeft: 4 }}>{count}</span></button>
          );
        })}
      </div>

      {/* Grouped actions */}
      {grouped.map(group => (
        <div key={group.id} style={{ marginBottom: 24 }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10, color: "#555", letterSpacing: "0.08em",
            marginBottom: 10,
          }}>{group.label.toUpperCase()}</div>

          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {group.actions.map(action => {
              const isSelected = selected === action.id;
              const statusColor = STATUS_COLORS[action.status] || "#555";
              const statusLabel = ACTION_STATUSES.find(s => s.id === action.status)?.label || action.status;

              return (
                <div key={action.id}
                  onClick={() => setSelected(isSelected ? null : action.id)}
                  style={{
                    background: "#0e0c08",
                    border: `1px solid ${isSelected ? ACCENT + "44" : "#1e1c14"}`,
                    borderRadius: 8, overflow: "hidden",
                    cursor: "pointer", transition: "border-color 0.15s",
                  }}>
                  {/* Row */}
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "40px 1fr auto",
                    alignItems: "center",
                    gap: 10, padding: "12px 14px",
                  }}>
                    <div style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 8, color: "#333", fontWeight: 700,
                    }}>{action.id}</div>

                    <div style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 12, fontWeight: 600,
                      color: "#f0ede5", lineHeight: 1.4,
                    }}>{action.title}</div>

                    <div style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 8, fontWeight: 700,
                      color: statusColor,
                      letterSpacing: "0.04em",
                      whiteSpace: "nowrap",
                    }}>{statusLabel.toUpperCase()}</div>
                  </div>

                  {/* Expanded */}
                  {isSelected && (
                    <div style={{
                      borderTop: "1px solid #1a1814",
                      padding: "12px 14px 14px",
                      animation: "fadeIn 0.2s ease",
                    }}>
                      {action.dependency && (
                        <div style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 9, color: "#f8717188",
                          marginBottom: 8,
                        }}>
                          DEPENDS ON: {action.dependency}
                        </div>
                      )}
                      {action.notes && (
                        <div style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 11, color: "#666", lineHeight: 1.6,
                          marginBottom: action.projects?.length ? 10 : 0,
                        }}>{action.notes}</div>
                      )}
                      {action.projects?.length > 0 && (
                        <div style={{ display: "flex", gap: 6 }}>
                          {action.projects.map(p => (
                            <span key={p} style={{
                              fontFamily: "'JetBrains Mono', monospace",
                              fontSize: 8, fontWeight: 700,
                              color: ACCENT, background: ACCENT + "12",
                              border: `1px solid ${ACCENT}22`,
                              borderRadius: 3, padding: "2px 6px",
                            }}>{p}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
