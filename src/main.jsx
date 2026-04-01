import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./theme/responsive.css";
import App from "./App.jsx";
import PasswordGate from "./components/PasswordGate.jsx";
import { PROJECT } from "./config.js";

function Root() {
  const sessionKey = `p003_auth_${PROJECT.passcode}`;
  const [authed, setAuthed] = useState(() => {
    try { return sessionStorage.getItem(sessionKey) === "1"; } catch { return false; }
  });
  const [arriving, setArriving] = useState(authed);

  const handleAuth = () => {
    try { sessionStorage.setItem(sessionKey, "1"); } catch {}
    setArriving(true);
    setTimeout(() => setAuthed(true), 200);
  };

  if (!authed) {
    return <PasswordGate onAuth={handleAuth} />;
  }

  return <App arriving={arriving} />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
