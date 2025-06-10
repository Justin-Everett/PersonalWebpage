import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import PDFViewer from "./components/PDFViewer.jsx";
import Sidebar from "./components/Sidebar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Sidebar />
  </StrictMode>
);
