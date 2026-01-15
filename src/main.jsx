import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { WindowSizeProvider } from "./context/WindowSizeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WindowSizeProvider>
      <App />
    </WindowSizeProvider>
  </StrictMode>
);
