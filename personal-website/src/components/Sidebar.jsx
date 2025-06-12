import { useState } from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

//collapsible sidebar component to handle intra-website navigation
function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  //adjust width of sidebar based on whether it is open or closed
  var sidebarWidth = isOpen ? 250 : 60;

  //check if user is on a mobile device, then adjust sidebar width accordingly
  const isMobile =
    /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  sidebarWidth = isMobile ? sidebarWidth * 0.8 : sidebarWidth;

  const toggleSidebar = () => setIsOpen(!isOpen);

  //styling for navigation buttons
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
    boxSizing: "border-box",
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
            boxSizing: "border-box",
          }}
        >
          <li>
            <button
              onClick={toggleSidebar}
              style={{
                ...navButtonStyle,
                marginBottom: "40px",
                width: isOpen ? "180px" : "100%",
                maxWidth: "100%",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {isOpen ? "←" : "→"}
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/");
                if (isOpen) toggleSidebar();
              }}
              style={{
                ...navButtonStyle,
                width: isOpen ? "180px" : "100%",
                maxWidth: "100%",
                overflow: "hidden",
                textOverflow: "ellipsis",
                fontWeight: location.pathname === "/" ? "bold" : "normal",
              }}
            >
              {isOpen ? "Home" : <FaHome />}
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/resume");
                if (isOpen) {
                  toggleSidebar();
                }
              }}
              style={{
                ...navButtonStyle,
                width: isOpen ? "180px" : "100%",
                maxWidth: "100%",
                overflow: "hidden",
                textOverflow: "ellipsis",
                fontWeight: location.pathname === "/resume" ? "bold" : "normal",
              }}
            >
              {isOpen ? "Resume/CV" : <FaUser />}
            </button>
          </li>
        </ul>
      </div>
      <div
        style={{
          padding: "20px",
          marginLeft: isOpen ? sidebarWidth / 1.2 : 0,
          transition: "margin-left 0.3s",
          display: "flex",
          flexGrow: 1,
          justifyContent: "center",
          height: "100vh",
          boxSizing: "border-box",
          scrollPaddingBottom: "20px",
        }}
      ></div>
    </div>
  );
}

export default Sidebar;
