import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./theme/responsive.css";
import App from "./App.jsx";
import GoogleAuthGate from "./components/GoogleAuthGate.jsx";
import { PROJECT } from "./config.js";

function Root() {
  const sessionKey = `p003_gauth`;
  const [authed, setAuthed] = useState(() => {
    try { return sessionStorage.getItem(sessionKey) === "1"; } catch { return false; }
  });

  const handleAuth = () => {
    try { sessionStorage.setItem(sessionKey, "1"); } catch {}
    setAuthed(true);
  };

  if (!authed) {
    return <GoogleAuthGate onAuth={handleAuth} />;
  }

  return <App arriving={true} />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
