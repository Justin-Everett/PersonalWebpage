import { useState } from "react";
import { FaHome, FaUser } from "react-icons/fa";
import PDFViewer from "./PDFViewer";
import App from "../App";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarWidth = isOpen ? 250 : 60;

  const toggleSidebar = () => setIsOpen(!isOpen);

  const [project, setProject] = useState(0);

  const changeProject = (newProject) => setProject(newProject);

  const navButtonStyle = {
    marginBottom: "10px",
    background: "none",
    border: "none",
    color: "#ccc",
    cursor: "pointer",
    fontSize: "18px",
    justifyContent: "center",
    transition: "width 0.3s",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textAlign: "center",
    paddingBottom: "5px",
    paddingTop: "5px",
  };

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: sidebarWidth,
          height: "100%",
          background: "#382240",
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
        <ul
          style={{
            listStyleType: "none",
            margin: 0,
            paddingLeft: 0,
            paddingRight: 0,
          }}
        >
          <li>
            <button
              onClick={toggleSidebar}
              style={{
                ...navButtonStyle,
                marginBottom: "40px",
                width: isOpen ? "180px" : "40px",
              }}
            >
              {isOpen ? "←" : "→"}
            </button>
          </li>
          <li>
            <button
              onClick={() => changeProject(0)}
              style={{ ...navButtonStyle, width: isOpen ? "180px" : "40px" }}
            >
              {isOpen ? "Home" : <FaHome />}
            </button>
          </li>
          <li>
            <button
              onClick={() => changeProject(1)}
              style={{ ...navButtonStyle, width: isOpen ? "180px" : "40px" }}
            >
              {isOpen ? "Resume/CV" : <FaUser />}
            </button>
          </li>
        </ul>
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
        <div>{project === 0 ? <App /> : <PDFViewer />}</div>
      </div>
    </div>
  );
}

export default Sidebar;
