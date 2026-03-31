import { useState, useEffect } from "react";
import { PRACTICE, MATRIX } from "../data/practice.js";

const ACCENT = "#D4A853";

function fmtK(n) {
  return "$" + (n / 1000).toFixed(0) + "k";
}

function effectiveDay(rate, days) {
  return Math.round(rate / (days * 4.33) / 500) * 500;
}

function discountPct(rate, days) {
  const listMonthly = MATRIX.listRate * 4.33 * days;
  return Math.round((1 - rate / listMonthly) * 100);
}

export default function OverviewView() {
  const [revealed, setRevealed] = useState(false);
  const [highlight, setHighlight] = useState(null);

  useEffect(() => { setTimeout(() => setRevealed(true), 100); }, []);

  const selected = highlight
    ? { rate: MATRIX.rates[highlight.di][highlight.mi], days: MATRIX.days[highlight.di], months: MATRIX.months[highlight.mi] }
    : null;

  return (
    <div style={{
      padding: "20px 16px",
      opacity: revealed ? 1 : 0,
      transform: revealed ? "none" : "translateY(12px)",
      transition: "opacity 0.5s ease, transform 0.5s ease",
    }}>

      {/* About */}
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10, color: "#555", letterSpacing: "0.08em", marginBottom: 12,
      }}>ABOUT</div>

      <div style={{
        background: "#0e0c08", border: "1px solid #1e1c14",
        borderRadius: 8, padding: "16px 18px", marginBottom: 28,
      }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 13, fontWeight: 700,
          color: ACCENT, letterSpacing: "0.08em",
          marginBottom: 10,
        }}>
          ENND I, LLC
        </div>
        {PRACTICE.overview.map((p, i) => (
          <p key={i} style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 12, color: "#c8c4b0", lineHeight: 1.65,
            marginBottom: i < PRACTICE.overview.length - 1 ? 10 : 0,
          }}>{p}</p>
        ))}
      </div>

      {/* Practice constants */}
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10, color: "#555", letterSpacing: "0.08em", marginBottom: 12,
      }}>PRACTICE CONSTANTS</div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 28 }}>
        {[
          { label: "ENTITY", value: "ENND I, LLC" },
          { label: "DBA", value: PRACTICE.dba },
          { label: "EIN", value: "Active" },
          { label: "DOMAIN", value: PRACTICE.domain },
          { label: "DOMAIN STATUS", value: PRACTICE.domainStatus },
          { label: "VERTICALS", value: PRACTICE.verticals.join(" · ") },
          { label: "LIST RATE", value: "$20k / day" },
          { label: "CASH FLOOR", value: "$7,500 / mo" },
          { label: "MAX DAYS / WK", value: `${PRACTICE.capacity.daysOfferable} of ${PRACTICE.capacity.daysAvailable}` },
          { label: "RESERVED", value: PRACTICE.capacity.reservedFor },
        ].map(({ label, value }) => (
          <div key={label} style={{
            background: "#0e0c08", border: "1px solid #1e1c14",
            borderRadius: 6, padding: "10px 12px",
          }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 8, color: "#555", letterSpacing: "0.08em", marginBottom: 5,
            }}>{label}</div>
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11, color: "#c8c4b0",
            }}>{value}</div>
          </div>
        ))}
      </div>

      {/* Pricing matrix */}
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10, color: "#555", letterSpacing: "0.08em", marginBottom: 10,
      }}>RETAINER RATE MATRIX · MONTHLY CASH · EXCL. T&E</div>

      <div style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 11, color: "#666", lineHeight: 1.5,
        marginBottom: 14,
      }}>
        List: <span style={{ color: ACCENT, fontWeight: 700 }}>$20k/day</span> single engagement.
        Duration is the only lever. Floor: <span style={{ color: "#f87171", fontWeight: 700 }}>$7,500/mo cash</span>.
      </div>

      <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch", marginBottom: 14 }}>
        <table style={{
          width: "100%", borderCollapse: "collapse",
          fontFamily: "'JetBrains Mono', monospace", minWidth: 340,
        }}>
          <thead>
            <tr>
              <th style={{
                padding: "10px 12px", textAlign: "left",
                fontSize: 9, color: "#555", letterSpacing: "0.08em",
                borderBottom: "1px solid #1e1c14", fontWeight: 700,
              }}>DAYS/WK</th>
              {MATRIX.months.map(m => (
                <th key={m} style={{
                  padding: "10px 12px", textAlign: "right",
                  fontSize: 9, color: "#555", letterSpacing: "0.08em",
                  borderBottom: "1px solid #1e1c14", fontWeight: 700,
                }}>{m} MO</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MATRIX.days.map((days, di) => (
              <tr key={days}>
                <td style={{
                  padding: "12px", fontWeight: 700, fontSize: 11,
                  color: ACCENT, borderBottom: "1px solid #12100a",
                }}>
                  {days}d<span style={{ fontSize: 8, color: "#444", fontWeight: 400, marginLeft: 4 }}>/wk</span>
                </td>
                {MATRIX.months.map((months, mi) => {
                  const rate = MATRIX.rates[di][mi];
                  const isHL = highlight?.di === di && highlight?.mi === mi;
                  const disc = discountPct(rate, days);
                  return (
                    <td key={months}
                      onClick={() => setHighlight(isHL ? null : { di, mi })}
                      style={{
                        padding: "12px", textAlign: "right",
                        borderBottom: "1px solid #12100a",
                        cursor: "pointer",
                        background: isHL ? ACCENT + "15" : "transparent",
                        borderLeft: isHL ? `1px solid ${ACCENT}33` : "1px solid transparent",
                        transition: "background 0.15s",
                      }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: isHL ? ACCENT : "#f0ede5" }}>
                        {fmtK(rate)}
                      </div>
                      <div style={{ fontSize: 8, color: "#3a3830", marginTop: 2 }}>-{disc}%</div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Selected cell detail */}
      {selected && (
        <div style={{
          background: "#0e0c08", border: `1px solid ${ACCENT}33`,
          borderRadius: 8, padding: "14px 16px", marginBottom: 14,
          animation: "fadeIn 0.2s ease",
        }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10, color: ACCENT, letterSpacing: "0.06em",
            marginBottom: 12, fontWeight: 700,
          }}>
            {selected.days}D/WK · {selected.months}MO ENGAGEMENT
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
            {[
              { label: "MO CASH", value: fmtK(selected.rate), sub: "floor $7.5k" },
              { label: "TOTAL", value: fmtK(selected.rate * selected.months), sub: `${selected.months} months` },
              { label: "EFF/DAY", value: fmtK(effectiveDay(selected.rate, selected.days)), sub: "blended" },
            ].map(({ label, value, sub }) => (
              <div key={label} style={{
                background: "#080806", borderRadius: 6, padding: "10px 12px", textAlign: "center",
              }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 8, color: "#555", marginBottom: 5 }}>{label}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 14, fontWeight: 700, color: "#f0ede5" }}>{value}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, color: "#444", marginTop: 3 }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Pricing notes */}
      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        {MATRIX.notes.map((note, i) => (
          <div key={i} style={{
            display: "flex", gap: 8, alignItems: "flex-start",
          }}>
            <span style={{ color: ACCENT, fontSize: 10, flexShrink: 0, marginTop: 2 }}>—</span>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11, color: "#555", lineHeight: 1.5,
            }}>{note}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
