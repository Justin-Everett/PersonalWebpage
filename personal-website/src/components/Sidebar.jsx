import { useState } from "react";
import PDFViewer from "./PDFViewer";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarWidth = isOpen ? 200 : 80;

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: sidebarWidth,
          height: "100vh",
          background: "#333",
          color: "#fff",
          transition: "width 0.3s",
          overflow: "hidden",
          padding: "10px",
          position: "fixed",
          boxSizing: "border-box",
          zIndex: 1000,
          display: "flex",
          alignItems: "baseline",
          justifyContent: "center",
        }}
      >
        <button
          onClick={toggleSidebar}
          style={{
            marginBottom: "10px",
            background: "none",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            fontSize: "18px",
            justifyContent: "center",
            width: isOpen ? "180px" : "40px",
            transition: "width 0.3s",
            whiteSpace: "nowrap",
            overflow: "hidden",
            paddingRight: "35px",
          }}
        >
          {isOpen ? "←" : "→"}
        </button>
        {isOpen && <div></div>}
      </div>
      <div
        style={{
          padding: "20px",
          marginLeft: sidebarWidth,
          transition: "margin-left 0.3s",
          display: "flex",
          flexGrow: 1,
          justifyContent: "center",
          height: "100vh",
          boxSizing: "border-box",
          scrollPaddingBottom: "20px",
        }}
      >
        <div>
          <PDFViewer />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
