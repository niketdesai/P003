import { useState, useEffect } from "react";
import { TALK_TRACK } from "../data/practice.js";

const ACCENT = "#D4A853";

export default function TalkTrackView() {
  const [revealed, setRevealed] = useState(false);
  const [open, setOpen] = useState(null);

  useEffect(() => { setTimeout(() => setRevealed(true), 100); }, []);

  return (
    <div style={{
      padding: "20px 16px",
      opacity: revealed ? 1 : 0,
      transform: revealed ? "none" : "translateY(12px)",
      transition: "opacity 0.5s ease, transform 0.5s ease",
    }}>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10, color: "#555", letterSpacing: "0.08em", marginBottom: 16,
      }}>
        TALK TRACK · ORGANIZED BY CONVERSATIONAL MOMENT · INTERNAL
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {TALK_TRACK.map((item) => {
          const isOpen = open === item.id;
          return (
            <div key={item.id} style={{
              background: "#0e0c08",
              border: `1px solid ${isOpen ? ACCENT + "44" : "#1e1c14"}`,
              borderRadius: 8,
              overflow: "hidden",
              transition: "border-color 0.2s",
            }}>
              <button
                onClick={() => setOpen(isOpen ? null : item.id)}
                style={{
                  width: "100%", background: "none", border: "none",
                  padding: "14px 16px", cursor: "pointer",
                  display: "flex", justifyContent: "space-between", alignItems: "flex-start",
                  textAlign: "left", gap: 12,
                }}
              >
                <div>
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10, fontWeight: 700,
                    color: isOpen ? ACCENT : "#f0ede5",
                    letterSpacing: "0.04em", marginBottom: 4,
                    transition: "color 0.2s",
                  }}>{item.moment}</div>
                  {!isOpen && (
                    <div style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 11, color: "#555",
                    }}>{item.context}</div>
                  )}
                </div>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12, color: "#333", flexShrink: 0, marginTop: 1,
                }}>{isOpen ? "−" : "+"}</span>
              </button>

              {isOpen && (
                <div style={{ padding: "0 16px 16px", animation: "fadeIn 0.2s ease" }}>
                  <div style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 11, color: "#555",
                    marginBottom: 14, fontStyle: "italic",
                  }}>{item.context}</div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {item.lines.map((line, i) => (
                      <div key={i} style={{
                        background: "#080806",
                        borderLeft: `2px solid ${ACCENT}44`,
                        borderRadius: "0 6px 6px 0",
                        padding: "12px 14px",
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 12, color: "#c8c4b0", lineHeight: 1.65,
                      }}>
                        "{line}"
                      </div>
                    ))}
                  </div>

                  {item.rule && (
                    <div style={{
                      marginTop: 12,
                      display: "flex", gap: 8, alignItems: "flex-start",
                    }}>
                      <span style={{ color: "#f87171", fontSize: 10, flexShrink: 0, marginTop: 1 }}>▲</span>
                      <span style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 9, color: "#f87171", lineHeight: 1.5,
                      }}>{item.rule}</span>
                    </div>
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
