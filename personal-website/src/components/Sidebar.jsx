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
    display: "flex",
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
    width: "90%",
    textOverflow: "ellipsis",
  };

  const flexCenter = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: sidebarWidth,
          height: "100%",
          background: "#382240",
          color: "#fff",
          transition: "width 0.3s ease",
          overflow: "hidden",
          padding: "10px",
          position: "fixed",
          boxSizing: "border-box",
          zIndex: 1000,
          display: "flex",
          alignItems: "baseline",
          justifyContent: "flex-start",
        }}
      >
        <ul
          style={{
            listStyleType: "none",
            margin: 0,
            paddingLeft: 0,
            paddingRight: 0,
            boxSizing: "border-box",
            width: "100%",
            transition: "width 0.3s ease",
          }}
        >
          <li
            style={{
              ...flexCenter,
            }}
          >
            <button
              onClick={toggleSidebar}
              style={{
                ...navButtonStyle,
                marginBottom: "40px",
              }}
            >
              <span>{isOpen ? "←" : "→"}</span>
            </button>
          </li>
          <li
            style={{
              ...flexCenter,
            }}
          >
            <button
              onClick={() => {
                navigate("/");
                if (isOpen) toggleSidebar();
              }}
              style={{
                ...navButtonStyle,
                fontWeight: location.pathname === "/" ? "bold" : "normal",
              }}
            >
              <span>{isOpen ? "Home" : <FaHome />}</span>
            </button>
          </li>
          <li
            style={{
              ...flexCenter,
            }}
          >
            <button
              onClick={() => {
                navigate("/resume");
                if (isOpen) {
                  toggleSidebar();
                }
              }}
              style={{
                ...navButtonStyle,
                fontWeight: location.pathname === "/resume" ? "bold" : "normal",
              }}
            >
              <span>{isOpen ? "Resume/CV" : <FaUser />}</span>
            </button>
          </li>
          <li
            style={{
              ...flexCenter,
            }}
          >
            <hr
              style={{
                borderTop: "1px solid white",
                opacity: "70%",
                width: "90%",
                transition: "width 0.3s ease",
              }}
            ></hr>
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
