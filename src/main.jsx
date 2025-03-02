import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import SecondBoard from "./SecondBoard";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <SecondBoard />
  </StrictMode>
);