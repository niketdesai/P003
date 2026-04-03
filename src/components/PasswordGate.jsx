import { useState, useEffect, useRef } from "react";
import { PROJECT } from "../config.js";

export default function PasswordGate({ onAuth }) {
  const [pw, setPw] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const [launching, setLaunching] = useState(false);
  const [phase, setPhase] = useState(0);
  const [ready, setReady] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setReady(true), 300);
    setTimeout(() => inputRef.current?.focus(), 500);
  }, []);

  const check = () => {
    if (pw.toLowerCase().trim() === PROJECT.passcode.toLowerCase()) {
      setError(false);
      setLaunching(true);
      setPhase(1);
      setTimeout(() => setPhase(2), 700);
      setTimeout(() => setPhase(3), 1500);
      setTimeout(() => setPhase(4), 2300);
      setTimeout(() => onAuth(), 2900);
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter") check();
    if (error) setError(false);
  };

  const accent = PROJECT.accent;

  return (
    <div style={{
      fontFamily: "'Space Mono', monospace",
      background: "var(--near-black)",
      color: "var(--cream)",
      minHeight: "100dvh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      position: "relative",
    }}>
      <style>{`
        @keyframes shakeX {
          0%,100%{transform:translateX(0)}
          20%,60%{transform:translateX(-8px)}
          40%,80%{transform:translateX(8px)}
        }
        @keyframes gateIn {
          from{opacity:0;transform:translateY(14px)}
          to{opacity:1;transform:translateY(0)}
        }
        @keyframes openOut {
          0%{opacity:1;transform:scale(1) translateY(0)}
          60%{opacity:0.6;transform:scale(1.04) translateY(-10px)}
          100%{opacity:0;transform:scale(1.1) translateY(-20px)}
        }
        @keyframes goldFlood {
          0%{opacity:0}
          50%{opacity:0.12}
          100%{opacity:1}
        }
        @keyframes lineExpand {
          from{transform:scaleX(0)}
          to{transform:scaleX(1)}
        }
        .gate-wrap {
          animation: gateIn 0.5s ease forwards;
        }
        .gate-close {
          animation: openOut 0.8s ease forwards;
        }
      `}</style>

      {/* Gold flood overlay on success */}
      {launching && phase >= 3 && (
        <div style={{
          position: "fixed", inset: 0,
          background: `radial-gradient(ellipse at center, ${accent}22 0%, #080806 70%)`,
          zIndex: 50,
          animation: "goldFlood 0.8s ease forwards",
        }} />
      )}
      {launching && phase >= 4 && (
        <div style={{
          position: "fixed", inset: 0,
          background: "var(--near-black)",
          zIndex: 100,
          animation: "goldFlood 0.5s ease forwards",
        }} />
      )}

      <div className={launching ? "gate-close" : "gate-wrap"} style={{
        width: "100%", maxWidth: 360, padding: "0 28px",
        animation: shake ? "shakeX 0.4s ease" : undefined,
      }}>

        {/* Wordmark */}
        <div style={{
          marginBottom: 36,
          textAlign: "center",
        }}>
          <div style={{
            fontSize: 22, fontWeight: 700,
            letterSpacing: "0.22em",
            color: accent,
            marginBottom: 6,
          }}>
            ENND I
          </div>
          <div style={{
            height: 1,
            background: `linear-gradient(to right, transparent, ${accent}66, transparent)`,
            marginBottom: 6,
            transformOrigin: "center",
            animation: "lineExpand 0.6s ease 0.3s both",
          }} />
          <div style={{
            fontSize: 9, letterSpacing: "0.18em",
            color: "#3a3830",
          }}>
            TECHNOLOGY · HOSPITALITY · FINANCE
          </div>
        </div>

        {/* Input */}
        {!launching && (
          <div style={{ animation: ready ? "gateIn 0.4s ease" : "none", opacity: ready ? 1 : 0 }}>
            <div style={{ marginBottom: 12 }}>
              <input
                ref={inputRef}
                type="password"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Access code"
                autoComplete="off"
                autoCapitalize="off"
                style={{
                  width: "100%",
                  padding: "13px 16px",
                  background: "#0e0e0a",
                  border: `1px solid ${error ? "#b85c5c" : "#2a2820"}`,
                  borderRadius: 4,
                  color: "var(--cream)",
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 16,
                  letterSpacing: "0.12em",
                  outline: "none",
                  transition: "border-color 0.2s",
                  textAlign: "center",
                  WebkitAppearance: "none",
                }}
              />
              {error && (
                <div style={{
                  marginTop: 7, fontSize: 9,
                  color: "#b85c5c", letterSpacing: "0.08em",
                  textAlign: "center",
                }}>
                  ACCESS DENIED
                </div>
              )}
            </div>
            <button onClick={check} style={{
              width: "100%", padding: "13px 0",
              background: accent + "14",
              border: `1px solid ${accent}30`,
              borderRadius: 4,
              color: accent,
              fontFamily: "'Archivo', sans-serif",
              fontSize: 13, fontWeight: 600,
              cursor: "pointer",
              letterSpacing: "0.1em",
              transition: "background 0.2s, border-color 0.2s",
            }}>
              ENTER
            </button>
          </div>
        )}

        <div style={{
          marginTop: 32, fontSize: 8,
          color: "#1e1c14", letterSpacing: "0.1em",
          textAlign: "center",
        }}>
          PRIVILEGED · {PROJECT.entity}
        </div>
      </div>
    </div>
  );
}
