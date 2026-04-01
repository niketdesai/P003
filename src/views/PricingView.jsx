import { useState, useEffect } from "react";
import { PRICING, SOW_FIELDS } from "../data/practice.js";

const ACCENT = "#D4A853";

function fmt(n) { return "$" + (n / 1000).toFixed(0) + "k"; }

function effectiveDay(rate, days) {
  return Math.round(rate / (days * 4.33) / 500) * 500;
}

export default function PricingView() {
  const [revealed, setRevealed] = useState(false);
  const [cell, setCell] = useState(null);
  const [showSOW, setShowSOW] = useState(false);
  useEffect(() => { setTimeout(() => setRevealed(true), 100); }, []);

  const selected = cell
    ? { rate: PRICING.rates[cell.di][cell.mi], days: PRICING.daysPerWeek[cell.di], months: PRICING.engagementMonths[cell.mi] }
    : null;

  const isAnchor = (mi) => [1, 2].includes(mi);

  // Kill fee calculation: 33% of remaining OR one month, whichever is higher
  const calcKillFee = (rate, months, exitMonth) => {
    const remaining = rate * (months - exitMonth);
    const thirtyThree = Math.round(remaining * 0.33 / 500) * 500;
    const oneMonth = rate;
    return Math.max(thirtyThree, oneMonth);
  };

  return (
    <div style={{
      padding: "20px 16px",
      opacity: revealed ? 1 : 0,
      transform: revealed ? "none" : "translateY(12px)",
      transition: "opacity 0.5s ease, transform 0.5s ease",
    }}>

      {/* U-curve explainer */}
      <div style={{
        background: "#0e0c08", border: `1px solid ${ACCENT}22`,
        borderRadius: 8, padding: "14px 16px", marginBottom: 20,
        fontFamily: "'DM Sans', sans-serif", fontSize: 12,
        color: "#888", lineHeight: 1.65,
      }}>
        List rate: <span style={{ color: ACCENT, fontWeight: 700 }}>${(PRICING.listRate/1000).toFixed(1)}k/day</span> single engagement.
        {" "}Retainer pricing follows a <span style={{ color: ACCENT }}>U-curve</span> — 6 and 9 months are the anchor rates.
        {" "}3 months carries a churn premium. 12 months carries a lock-in premium.
        {" "}Floor: <span style={{ color: "#f87171", fontWeight: 700 }}>${(PRICING.floorMonthly/1000).toFixed(1)}k/mo retainer</span> — non-negotiable.
        {" "}Maximum: <span style={{ color: "#888" }}>{PRICING.maxDays} days/week</span>, ever.
      </div>

      {/* Matrix */}
      <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch", marginBottom: 20 }}>
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
              {PRICING.engagementMonths.map((m, mi) => (
                <th key={m} style={{
                  padding: "10px 12px", textAlign: "right",
                  fontSize: 9, letterSpacing: "0.08em",
                  borderBottom: "1px solid #1e1c14", fontWeight: 700,
                  color: isAnchor(mi) ? ACCENT : "#555",
                }}>
                  {m} MO{isAnchor(mi) ? " ↓" : ""}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PRICING.daysPerWeek.map((days, di) => (
              <tr key={days}>
                <td style={{
                  padding: "12px", fontWeight: 700, fontSize: 11,
                  color: ACCENT, borderBottom: "1px solid #12100a",
                }}>
                  {days}d<span style={{ fontSize: 8, color: "#444", fontWeight: 400, marginLeft: 4 }}>/wk</span>
                </td>
                {PRICING.engagementMonths.map((months, mi) => {
                  const rate = PRICING.rates[di][mi];
                  const isHL = cell?.di === di && cell?.mi === mi;
                  return (
                    <td key={months}
                      onClick={() => setCell(isHL ? null : { di, mi })}
                      style={{
                        padding: "12px", textAlign: "right",
                        borderBottom: "1px solid #12100a",
                        cursor: "pointer",
                        background: isHL ? ACCENT + "18" : isAnchor(mi) ? ACCENT + "06" : "transparent",
                        borderLeft: isHL ? `1px solid ${ACCENT}44` : "1px solid transparent",
                        transition: "background 0.15s",
                      }}>
                      <div style={{
                        fontSize: 13, fontWeight: 700,
                        color: isHL ? ACCENT : "#f0ede5",
                      }}>{fmt(rate)}</div>
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
          borderRadius: 8, padding: "16px 18px", marginBottom: 20,
          animation: "fadeIn 0.2s ease",
        }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10, color: ACCENT, letterSpacing: "0.06em",
            marginBottom: 14, fontWeight: 700,
          }}>
            {selected.days}D/WK · {selected.months}MO
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 12 }}>
            {[
              { label: "MO RETAINER", value: fmt(selected.rate), sub: `floor ${fmt(PRICING.floorMonthly)}` },
              { label: "TOTAL CONTRACT", value: fmt(selected.rate * selected.months), sub: `${selected.months} months` },
              { label: "EFF/DAY", value: fmt(effectiveDay(selected.rate, selected.days)), sub: "blended" },
            ].map(({ label, value, sub }) => (
              <div key={label} style={{
                background: "#080806", borderRadius: 6,
                padding: "10px 12px", textAlign: "center",
              }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 8, color: "#555", marginBottom: 5 }}>{label}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 14, fontWeight: 700, color: "#f0ede5" }}>{value}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, color: "#444", marginTop: 3 }}>{sub}</div>
              </div>
            ))}
          </div>

          {/* Kill fee at this contract value */}
          <div style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#666", lineHeight: 1.6,
          }}>
            Kill fee if terminated early:{" "}
            <span style={{ color: "#fb923c", fontWeight: 700 }}>
              33% of remaining or one month — whichever is higher.
            </span>{" "}
            Example: exit at month {Math.ceil(selected.months / 2)} of {selected.months} ={" "}
            <span style={{ color: "#fb923c" }}>
              {fmt(calcKillFee(selected.rate, selected.months, Math.ceil(selected.months / 2)))}
            </span>
          </div>
        </div>
      )}

      {/* Kill fee model */}
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10, color: "#555", letterSpacing: "0.08em", marginBottom: 12,
      }}>KILL FEE</div>
      <div style={{
        background: "#0e0c08", border: "1px solid #1e1c14",
        borderRadius: 8, padding: "14px 16px", marginBottom: 24,
        fontFamily: "'DM Sans', sans-serif", fontSize: 12,
        color: "#888", lineHeight: 1.65,
      }}>
        <span style={{ color: "#fb923c", fontWeight: 700 }}>{PRICING.killFee.model}</span>
        {" "}{PRICING.killFee.terms}
      </div>

      {/* SOW field architecture */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        marginBottom: 12,
      }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10, color: "#555", letterSpacing: "0.08em",
        }}>SOW FIELD ARCHITECTURE</div>
        <button onClick={() => setShowSOW(!showSOW)} style={{
          background: "none", border: `1px solid ${ACCENT}33`,
          borderRadius: 4, color: ACCENT,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 9, padding: "4px 10px", cursor: "pointer",
        }}>{showSOW ? "HIDE" : "SHOW"}</button>
      </div>

      {showSOW && (
        <div style={{ animation: "fadeIn 0.2s ease" }}>
          <div style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 11,
            color: "#555", marginBottom: 12, lineHeight: 1.5,
          }}>
            P003 owns the schema. SOW generation happens inside each project's context, pulling these fields as inputs.
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {SOW_FIELDS.map((f, i) => (
              <div key={i} style={{
                display: "grid",
                gridTemplateColumns: "120px 140px 1fr",
                gap: 8, alignItems: "start",
                background: "#0e0c08",
                border: "1px solid #1a1814",
                borderRadius: 6, padding: "9px 12px",
              }}>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 9, color: f.required ? ACCENT : "#444",
                  fontWeight: f.required ? 700 : 400,
                }}>{f.field}</div>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 8, color: "#333",
                }}>{f.source}</div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 10, color: "#555",
                }}>{f.note}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
