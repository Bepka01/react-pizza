import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import "./styles/reset.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
