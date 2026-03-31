import { useState, useEffect } from "react";
import { PROJECT } from "../config.js";

/**
 * NND Project Shell
 *
 * Provides: top bar, horizontal-scroll nav, footer, and the "arrival" animation
 * sequence that plays after the PasswordGate hands off.
 *
 * The arrival sequence:
 * 1. Header slides down from top (0.4s)
 * 2. Nav fades in (0.3s, delayed 0.2s)
 * 3. Content fades up (0.4s, delayed 0.4s)
 * 4. Footer fades in last (0.3s, delayed 0.6s)
 */

export default function Shell({ tabs, activeTab, onTabChange, arriving, children }) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    // Trigger arrival animation after mount
    const t = setTimeout(() => setRevealed(true), 100);
    return () => clearTimeout(t);
  }, []);

  const accent = PROJECT.accent;

  return (
    <div
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        background: "#0a0a0a",
      }}
    >
      {/* Top Bar */}
      <header
        style={{
          padding: "16px 20px 12px",
          borderBottom: "1px solid #1a1a1a",
          opacity: revealed ? 1 : 0,
          transform: revealed ? "translateY(0)" : "translateY(-20px)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
        }}
      >
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.08em",
            color: "#f0ede5",
          }}
        >
          {PROJECT.name.toUpperCase()}
        </div>
      </header>

      {/* Nav — horizontal scroll, no hamburger */}
      {tabs.length > 1 && (
        <nav
          style={{
            display: "flex",
            gap: 0,
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            borderBottom: "1px solid #151515",
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translateY(0)" : "translateY(-10px)",
            transition: "opacity 0.3s ease 0.2s, transform 0.3s ease 0.2s",
          }}
        >
          {tabs.map((tab) => {
            const active = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                style={{
                  flex: "0 0 auto",
                  padding: "12px 20px",
                  background: "transparent",
                  border: "none",
                  borderBottom: active ? `2px solid ${accent}` : "2px solid transparent",
                  color: active ? "#f0ede5" : "#666",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  fontWeight: active ? 600 : 400,
                  cursor: "pointer",
                  transition: "color 0.2s, border-color 0.2s",
                  whiteSpace: "nowrap",
                  minHeight: 44, // Touch target
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>
      )}

      {/* Content */}
      <main
        className="anim-stagger"
        style={{
          flex: 1,
          padding: "0 0 20px",
          opacity: revealed ? 1 : 0,
          transform: revealed ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.4s ease 0.4s, transform 0.4s ease 0.4s",
        }}
      >
        {children}
      </main>

      {/* Footer */}
      <footer
        style={{
          padding: "20px",
          textAlign: "center",
          borderTop: "1px solid #151515",
          opacity: revealed ? 1 : 0,
          transition: "opacity 0.3s ease 0.6s",
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 9,
            color: "#2a2a2a",
            letterSpacing: "0.05em",
          }}
        >
          {PROJECT.entity} · {PROJECT.name} · {PROJECT.version}
        </span>
      </footer>
    </div>
  );
}
