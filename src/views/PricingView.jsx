import { useState, useEffect } from "react";
import { PRICING, SOW_FIELDS } from "../data/practice.js";

const ACCENT = "#D4A853";

function fmt(n) { return "$" + (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1) + "k"; }

function effectiveDay(rate, days) {
  return Math.round(rate / (days * 4.33) / 500) * 500;
}

export default function PricingView() {
  const [revealed, setRevealed] = useState(false);
  const [cell, setCell] = useState(null);
  const [showSOW, setShowSOW] = useState(false);
  useEffect(() => { setTimeout(() => setRevealed(true), 100); }, []);

  const selected = cell
    ? {
        rate: PRICING.rates[cell.di][cell.ti],
        days: PRICING.daysPerWeek[cell.di],
        tier: PRICING.engagementTiers[cell.ti],
        discount: PRICING.discounts[cell.di][cell.ti],
      }
    : null;

  const isSweetSpot = (di, ti) =>
    di === PRICING.sweetSpot.di && ti === PRICING.sweetSpot.ti;

  const isAnchorCol = (ti) => ti === 2; // 6mo column

  // Kill fee: 33% of remaining OR one month, whichever is higher
  const calcKillFee = (rate, months, exitMonth) => {
    const remaining = rate * (months - exitMonth);
    const thirtyThree = Math.round(remaining * 0.33 / 500) * 500;
    return Math.max(thirtyThree, rate);
  };

  // Map tier label to approximate months for kill fee example
  const tierMonths = { "<3 mo": 2, "3 mo": 3, "6 mo": 6, "9 mo": 9, "12 mo": 12 };

  return (
    <div style={{
      padding: "20px 16px",
      opacity: revealed ? 1 : 0,
      transform: revealed ? "none" : "translateY(12px)",
      transition: "opacity 0.5s ease, transform 0.5s ease",
    }}>

      {/* Key numbers */}
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
        gap: 8, marginBottom: 24,
      }}>
        {[
          { label: "LIST RATE", value: `${fmt(PRICING.listRate)}`, sub: "/day/month" },
          { label: "FLOOR", value: `${fmt(PRICING.floorMonthly)}`, sub: "/mo minimum", color: "#f87171" },
          { label: "MAX DENSITY", value: `${PRICING.maxDays}d`, sub: "/week, ever" },
        ].map(({ label, value, sub, color }) => (
          <div key={label} style={{
            background: "#0e0c08",
            border: "1px solid #1e1c14",
            borderRadius: 8, padding: "14px 12px",
            textAlign: "center",
          }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 8, color: "#444", letterSpacing: "0.08em",
              marginBottom: 8,
            }}>{label}</div>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 20, fontWeight: 700, color: color || ACCENT,
            }}>{value}</div>
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 9, color: "#444", marginTop: 4,
            }}>{sub}</div>
          </div>
        ))}
      </div>

      {/* U-curve explanation */}
      <div style={{
        background: "#0e0c08", border: `1px solid ${ACCENT}15`,
        borderRadius: 8, padding: "12px 16px", marginBottom: 20,
        fontFamily: "'DM Sans', sans-serif", fontSize: 11,
        color: "#666", lineHeight: 1.6,
      }}>
        Pricing follows a U-curve on both axes. <span style={{ color: ACCENT }}>6 months</span> and <span style={{ color: ACCENT }}>2 days/week</span> are
        the sweet spot — lowest rate per day for both sides. Shorter commitments carry a churn premium.
        Longer ones carry a lock-in premium. Four days a week costs more per day because it consumes optionality.
      </div>

      {/* Matrix */}
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10, color: "#555", letterSpacing: "0.08em", marginBottom: 12,
      }}>RETAINER MATRIX</div>

      <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch", marginBottom: 20 }}>
        <table style={{
          width: "100%", borderCollapse: "collapse",
          fontFamily: "'JetBrains Mono', monospace", minWidth: 420,
        }}>
          <thead>
            <tr>
              <th style={{
                padding: "10px 8px", textAlign: "left",
                fontSize: 8, color: "#555", letterSpacing: "0.08em",
                borderBottom: "1px solid #1e1c14", fontWeight: 700,
              }}></th>
              {PRICING.engagementTiers.map((t, ti) => (
                <th key={t} style={{
                  padding: "10px 6px", textAlign: "right",
                  fontSize: 8, letterSpacing: "0.06em",
                  borderBottom: `1px solid ${isAnchorCol(ti) ? ACCENT + "44" : "#1e1c14"}`,
                  fontWeight: 700,
                  color: isAnchorCol(ti) ? ACCENT : "#555",
                }}>
                  {t.toUpperCase()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PRICING.daysPerWeek.map((days, di) => (
              <tr key={days}>
                <td style={{
                  padding: "10px 8px", fontWeight: 700, fontSize: 10,
                  color: di === 1 ? ACCENT : "#888",
                  borderBottom: "1px solid #12100a",
                  whiteSpace: "nowrap",
                }}>
                  {days}d<span style={{ fontSize: 7, color: "#444", fontWeight: 400 }}>/wk</span>
                </td>
                {PRICING.engagementTiers.map((tier, ti) => {
                  const rate = PRICING.rates[di][ti];
                  const discount = PRICING.discounts[di][ti];
                  const isHL = cell?.di === di && cell?.ti === ti;
                  const isSweet = isSweetSpot(di, ti);

                  return (
                    <td key={tier}
                      onClick={() => setCell(isHL ? null : { di, ti })}
                      style={{
                        padding: "8px 6px", textAlign: "right",
                        borderBottom: "1px solid #12100a",
                        cursor: "pointer",
                        background: isHL
                          ? ACCENT + "18"
                          : isSweet
                            ? ACCENT + "0C"
                            : isAnchorCol(ti)
                              ? ACCENT + "04"
                              : "transparent",
                        borderLeft: isHL ? `1px solid ${ACCENT}44` : "1px solid transparent",
                        transition: "background 0.15s",
                        position: "relative",
                      }}>
                      <div style={{
                        fontSize: 12, fontWeight: 700,
                        color: isHL ? ACCENT : isSweet ? ACCENT : "#f0ede5",
                      }}>{fmt(rate)}</div>
                      <div style={{
                        fontSize: 8, marginTop: 2,
                        color: discount > 0 ? "#4ade8088" : discount < 0 ? "#f8717188" : "#333",
                      }}>
                        {discount > 0 ? `−${discount}%` : discount < 0 ? `+${Math.abs(discount)}%` : "LIST"}
                      </div>
                      {isSweet && !isHL && (
                        <div style={{
                          position: "absolute", top: 2, right: 4,
                          fontSize: 7, color: ACCENT, opacity: 0.6,
                        }}>★</div>
                      )}
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
            {selected.days}D/WK · {selected.tier.toUpperCase()}
            {selected.discount !== 0 && (
              <span style={{
                color: selected.discount > 0 ? "#4ade80" : "#f87171",
                marginLeft: 8,
              }}>
                {selected.discount > 0 ? `${selected.discount}% OFF` : `${Math.abs(selected.discount)}% PREMIUM`}
              </span>
            )}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 12 }}>
            {[
              { label: "MO RETAINER", value: fmt(selected.rate), sub: `floor ${fmt(PRICING.floorMonthly)}` },
              {
                label: "TOTAL CONTRACT",
                value: fmt(selected.rate * (tierMonths[selected.tier] || 1)),
                sub: selected.tier
              },
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

          {/* Kill fee */}
          {tierMonths[selected.tier] >= 3 && (
            <div style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#666", lineHeight: 1.6,
            }}>
              Kill fee:{" "}
              <span style={{ color: "#fb923c", fontWeight: 700 }}>
                33% of remaining or one month — whichever is higher.
              </span>{" "}
              Exit at month {Math.ceil(tierMonths[selected.tier] / 2)} ={" "}
              <span style={{ color: "#fb923c" }}>
                {fmt(calcKillFee(selected.rate, tierMonths[selected.tier], Math.ceil(tierMonths[selected.tier] / 2)))}
              </span>
            </div>
          )}
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
            P003 owns the schema. SOW generation happens inside each project's context, pulling these fields.
            The recommended cell from the matrix is highlighted — client sees options around it.
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {SOW_FIELDS.map((f, i) => (
              <div key={i} style={{
                display: "grid",
                gridTemplateColumns: "110px 150px 1fr",
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
