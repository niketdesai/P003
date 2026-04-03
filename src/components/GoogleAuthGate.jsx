import { useState, useEffect } from "react";
import { PROJECT } from "../config.js";

const GOOGLE_CLIENT_ID = PROJECT.googleClientId || "";
const ALLOWED_DOMAIN = "ennd.co";

export default function GoogleAuthGate({ onAuth }) {
  const [error, setError] = useState(null);
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // If no client ID configured, fall back immediately (dev mode)
    if (!GOOGLE_CLIENT_ID) {
      console.warn("No Google Client ID configured — auth bypassed");
      onAuth();
      return;
    }

    // Load Google Identity Services
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
        auto_select: true,
      });
      setLoading(false);
      setTimeout(() => setReady(true), 300);

      // Render the button
      setTimeout(() => {
        const el = document.getElementById("google-signin-btn");
        if (el) {
          window.google.accounts.id.renderButton(el, {
            theme: "filled_black",
            size: "large",
            width: 280,
            text: "signin_with",
            shape: "rectangular",
          });
        }
      }, 100);
    };
    document.head.appendChild(script);

    return () => script.remove();
  }, []);

  function handleCredentialResponse(response) {
    try {
      // Decode JWT payload (base64)
      const payload = JSON.parse(
        atob(response.credential.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"))
      );
      const email = payload.email || "";
      const domain = email.split("@")[1] || "";

      if (domain === ALLOWED_DOMAIN) {
        setError(null);
        onAuth();
      } else {
        setError(`Access restricted to ${ALLOWED_DOMAIN}`);
      }
    } catch (e) {
      setError("Authentication failed");
    }
  }

  const accent = PROJECT.accent;

  return (
    <div style={{
      fontFamily: "'Space Mono', monospace",
      background: "#080806",
      color: "#c8c4b0",
      minHeight: "100dvh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    }}>
      <style>{`
        @keyframes gateIn {
          from{opacity:0;transform:translateY(14px)}
          to{opacity:1;transform:translateY(0)}
        }
        @keyframes lineExpand {
          from{transform:scaleX(0)}
          to{transform:scaleX(1)}
        }
      `}</style>

      <div style={{
        width: "100%", maxWidth: 360, padding: "0 28px",
        opacity: ready ? 1 : 0,
        transform: ready ? "translateY(0)" : "translateY(14px)",
        transition: "all 0.5s ease",
      }}>

        {/* Wordmark */}
        <div style={{ marginBottom: 36, textAlign: "center" }}>
          <div style={{
            fontSize: 22, fontWeight: 700,
            letterSpacing: "0.22em",
            color: accent,
            marginBottom: 6,
          }}>
            ENND CO
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

        {/* Google Sign-In */}
        {!loading && (
          <div style={{
            display: "flex", flexDirection: "column",
            alignItems: "center", gap: 16,
          }}>
            <div id="google-signin-btn" />
            {error && (
              <div style={{
                fontSize: 9, color: "#b85c5c",
                letterSpacing: "0.08em", textAlign: "center",
              }}>
                {error.toUpperCase()}
              </div>
            )}
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
