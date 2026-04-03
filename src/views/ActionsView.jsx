import { useState, useEffect } from "react";
import { ACTIONS, ACTION_STATUSES, ACTION_CATEGORIES } from "../data/actions.js";

const ACCENT = "#3E6670";
const STATUS_COLORS = {};
ACTION_STATUSES.forEach(s => { STATUS_COLORS[s.id] = s.color; });

const PRIORITY_LABELS = {
  1: "NOW",
  2: "THIS WEEK",
  3: "THIS MONTH",
  4: "SOMEDAY",
  9: "COMPLETE",
};

const PRIORITY_COLORS = {
  1: "#C4462B",
  2: ACCENT,
  3: "#818CF8",
  4: "#555",
  9: "#4ade80",
};

export default function ActionsView() {
  const [revealed, setRevealed] = useState(false);
  const [statusFilter, setStatusFilter] = useState("active"); // active | all | blocked | open | complete
  const [selected, setSelected] = useState(null);
  useEffect(() => { setTimeout(() => setRevealed(true), 100); }, []);

  // Counts
  const activeCount = ACTIONS.filter(a => a.status !== "complete").length;
  const blockedCount = ACTIONS.filter(a => a.status === "blocked").length;
  const completeCount = ACTIONS.filter(a => a.status === "complete").length;

  // Filter
  let filtered;
  if (statusFilter === "active") {
    filtered = ACTIONS.filter(a => a.status !== "complete");
  } else if (statusFilter === "all") {
    filtered = [...ACTIONS];
  } else if (statusFilter === "complete") {
    filtered = ACTIONS.filter(a => a.status === "complete");
  } else {
    filtered = ACTIONS.filter(a => a.status === statusFilter);
  }

  // Sort by priority
  filtered.sort((a, b) => (a.priority || 99) - (b.priority || 99));

  // Group by priority tier
  const tiers = [];
  let currentPriority = null;
  filtered.forEach(action => {
    if (action.priority !== currentPriority) {
      currentPriority = action.priority;
      tiers.push({ priority: currentPriority, actions: [] });
    }
    tiers[tiers.length - 1].actions.push(action);
  });

  const FilterBtn = ({ id, label, count, color }) => (
    <button
      onClick={() => setStatusFilter(id)}
      style={{
        background: statusFilter === id ? (color || ACCENT) + "18" : "#0e0c08",
        border: `1px solid ${statusFilter === id ? (color || ACCENT) + "44" : "#1e1c14"}`,
        borderRadius: 20, padding: "5px 12px",
        fontFamily: "'Space Mono', monospace",
        fontSize: 9, color: statusFilter === id ? (color || ACCENT) : "#555",
        cursor: "pointer", fontWeight: statusFilter === id ? 700 : 400,
        transition: "all 0.15s",
      }}
    >{label} <span style={{ color: "#444", marginLeft: 4 }}>{count}</span></button>
  );

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
        gap: 8, marginBottom: 20,
      }}>
        {[
          { label: "ACTIVE", value: activeCount, color: ACCENT },
          { label: "BLOCKED", value: blockedCount, color: blockedCount > 0 ? "#C4462B" : "#333" },
          { label: "DONE", value: completeCount, color: "#4ade80" },
        ].map(card => (
          <div key={card.label} style={{
            background: "#0e0c08", border: "1px solid #1e1c14",
            borderRadius: 8, padding: "12px 10px", textAlign: "center",
          }}>
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 7, color: "#444", letterSpacing: "0.08em", marginBottom: 6,
            }}>{card.label}</div>
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 22, fontWeight: 700, color: card.color,
            }}>{card.value}</div>
          </div>
        ))}
      </div>

      {/* Status filters */}
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
        <FilterBtn id="active" label="ACTIVE" count={activeCount} />
        <FilterBtn id="blocked" label="BLOCKED" count={blockedCount} color="#C4462B" />
        <FilterBtn id="open" label="OPEN" count={ACTIONS.filter(a => a.status === "open").length} />
        <FilterBtn id="complete" label="DONE" count={completeCount} color="#4ade80" />
        <FilterBtn id="all" label="ALL" count={ACTIONS.length} color="#888" />
      </div>

      {/* Priority-grouped list */}
      {tiers.map(tier => (
        <div key={tier.priority} style={{ marginBottom: 24 }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 8,
            marginBottom: 10,
          }}>
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 10, fontWeight: 700,
              color: PRIORITY_COLORS[tier.priority] || "#555",
              letterSpacing: "0.08em",
            }}>{PRIORITY_LABELS[tier.priority] || `P${tier.priority}`}</div>
            <div style={{
              flex: 1, height: 1,
              background: (PRIORITY_COLORS[tier.priority] || "#555") + "22",
            }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {tier.actions.map(action => {
              const isSelected = selected === action.id;
              const statusColor = STATUS_COLORS[action.status] || "#555";
              const statusLabel = ACTION_STATUSES.find(s => s.id === action.status)?.label || action.status;
              const catLabel = ACTION_CATEGORIES.find(c => c.id === action.category)?.label || "";

              return (
                <div key={action.id}
                  onClick={() => setSelected(isSelected ? null : action.id)}
                  style={{
                    background: "#0e0c08",
                    border: `1px solid ${isSelected ? ACCENT + "44" : "#1e1c14"}`,
                    borderRadius: 8, overflow: "hidden",
                    cursor: "pointer", transition: "border-color 0.15s",
                  }}>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "40px 1fr auto",
                    alignItems: "center",
                    gap: 10, padding: "12px 14px",
                  }}>
                    <div style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 8, color: "#333", fontWeight: 700,
                    }}>{action.id}</div>

                    <div>
                      <div style={{
                        fontFamily: "'Archivo', sans-serif",
                        fontSize: 12, fontWeight: 600,
                        color: action.status === "complete" ? "#555" : "#f0ede5",
                        lineHeight: 1.4,
                        textDecoration: action.status === "complete" ? "line-through" : "none",
                      }}>{action.title}</div>
                      <div style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: 7, color: "#333", marginTop: 2,
                      }}>{catLabel.toUpperCase()}</div>
                    </div>

                    <div style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 8, fontWeight: 700,
                      color: statusColor,
                      letterSpacing: "0.04em",
                      whiteSpace: "nowrap",
                    }}>{statusLabel.toUpperCase()}</div>
                  </div>

                  {isSelected && (
                    <div style={{
                      borderTop: "1px solid #1a1814",
                      padding: "12px 14px 14px",
                    }}>
                      {action.dependency && (
                        <div style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: 9, color: "#C4462B88",
                          marginBottom: 8,
                        }}>
                          BLOCKED BY: {action.dependency}
                        </div>
                      )}
                      {action.notes && (
                        <div style={{
                          fontFamily: "'Libre Baskerville', serif",
                          fontSize: 10, color: "#666", lineHeight: 1.7,
                          marginBottom: action.projects?.length ? 10 : 0,
                        }}>{action.notes}</div>
                      )}
                      {action.projects?.length > 0 && (
                        <div style={{ display: "flex", gap: 6 }}>
                          {action.projects.map(p => (
                            <span key={p} style={{
                              fontFamily: "'Space Mono', monospace",
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
