import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import PDFViewer from "./components/PDFViewer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PDFViewer />
  </StrictMode>
);
