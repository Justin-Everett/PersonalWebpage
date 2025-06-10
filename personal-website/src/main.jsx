import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import PDFViewer from "./components/PDFViewer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PDFViewer />
  </StrictMode>
);
