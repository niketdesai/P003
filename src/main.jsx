import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./theme/responsive.css";
import App from "./App.jsx";
import PasswordGate from "./components/PasswordGate.jsx";

function Root() {
  const [authed, setAuthed] = useState(false);
  const [arriving, setArriving] = useState(false);

  const handleAuth = () => {
    // Brief delay for the "arrival" animation to start
    setArriving(true);
    // Content appears after gate exit animation completes
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
