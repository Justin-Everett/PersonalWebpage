import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../App.css";

function PacmanProject() {
  const isMobile =
    /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  const navigate = useNavigate();

  //use states for paragraph collapsability
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);

  const [isLearnedOpen, setIsLearnedOpen] = useState(false);

  const [isFlowOpen, setIsFlowOpen] = useState(false);

  const [isExpmaxOpen, setIsExpmaxOpen] = useState(false);

  const [isCVOpen, setIsCVOpen] = useState(false);

  return (
    <div
      className="aboutMe"
      style={{
        paddingTop: 0,
        marginBottom: "40px",
        marginLeft: "5px",
      }}
    >
      <h1
        style={{
          fontWeight: "bold",
        }}
      >
        Project:{" "}
        <a href="https://github.com/Justin-Everett/pacman-project" style={{}}>
          Recreating PacMan
        </a>
      </h1>
      <div className="aboutMe">
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {!isMobile && (
              <div
                style={{
                  marginRight: "30px",
                  width: "240px",
                }}
              >
                <h3>Contents</h3>
                <ul
                  style={{
                    background: "rgba(255, 255, 255, 0.15)",
                    borderRadius: "20px",
                    padding: "20px",
                    textAlign: "left",
                    listStyle: "none",
                    display: "grid",
                    gap: "10px",
                    maxWidth: "100%",
                  }}
                >
                  <li>
                    <a href="#Overview" className="contents">
                      Overview
                    </a>
                  </li>
                  <li>
                    <a href="#Learned" className="contents">
                      What I Learned
                    </a>
                  </li>
                  <li>
                    <a href="#Graphics" className="contents">
                      Graphics
                    </a>
                  </li>
                  <li>
                    <a href="#Pacman" className="contents">
                      PacMan Movement
                    </a>
                  </li>
                  <li>
                    <a href="#Ghost" className="contents">
                      Ghost Pathfinding
                    </a>
                  </li>
                </ul>
              </div>
            )}
            <div
              style={{
                aspectRatio: "71/40",
                flex: 1,
                maxWidth: "calc(100% - 540px)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minWidth: isMobile ? "80vw" : "40vw",
              }}
            >
              <img
                src={`${import.meta.env.BASE_URL}Pacman.gif`}
                style={{ maxWidth: "100%", maxHeight: "100%", width: "100%" }}
              ></img>
            </div>
            {!isMobile && (
              <div
                style={{
                  marginLeft: "30px",
                  width: "240px",
                }}
              >
                <h3>Important Skills</h3>
                <ul
                  style={{
                    background: "rgba(255, 255, 255, 0.15)",
                    borderRadius: "20px",
                    padding: "20px",
                    textAlign: "right",
                    listStyle: "none",
                    display: "grid",
                    gap: "10px",
                    maxWidth: "100%",
                    fontWeight: "bold",
                  }}
                >
                  <li style={{ textWrap: "nowrap" }}>Java</li>
                  <li style={{ textWrap: "nowrap" }}>Game Design</li>
                  <li style={{ textWrap: "nowrap" }}>Project Planning</li>
                  <li style={{ textWrap: "nowrap" }}>AI Pathfinding</li>
                  <li style={{ textWrap: "nowrap" }}>Event Handling</li>
                </ul>
              </div>
            )}
          </div>
          <hr style={{ marginBottom: 0 }}></hr>
        </div>
        <div
          style={{
            flexBasis: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <hr
            style={{
              width: "70%",
              opacity: "80%",
              marginTop: "10px",
              marginBottom: "15px",
            }}
          />
        </div>
        <div
          className="aboutMe"
          style={{
            width: isMobile ? "80%" : "65%",
            background: "rgba(255, 255, 255, 0.15)",
            borderRadius: "20px",
            padding: "0 20px 20px 20px",
          }}
        >
          <div id="Overview">
            <h3 onClick={() => setIsOverviewOpen(!isOverviewOpen)}>
              {isMobile && (
                <span style={{ marginRight: "10px" }}>
                  {isOverviewOpen ? "▼" : "▷"}
                </span>
              )}
              Project Overview
            </h3>
            <div
              className={
                isMobile ? `collapsible ${isOverviewOpen ? "open" : ""}` : ""
              }
            >
              <p className="paragraph">Placeholder text</p>
            </div>
          </div>

          <div id="Learned">
            <h3 onClick={() => setIsLearnedOpen(!isLearnedOpen)}>
              {isMobile && (
                <span style={{ marginRight: "10px" }}>
                  {isLearnedOpen ? "▼" : "▷"}
                </span>
              )}
              What This Project Taught Me
            </h3>
            <div
              className={
                isMobile ? `collapsible ${isLearnedOpen ? "open" : ""}` : ""
              }
            >
              <p className="paragraph" style={{ marginBottom: 0 }}>
                Placeholder text
              </p>
            </div>
          </div>

          <div id="ControlFlow">
            <h3 onClick={() => setIsFlowOpen(!isFlowOpen)}>
              {isMobile && (
                <span style={{ marginRight: "10px" }}>
                  {isFlowOpen ? "▼" : "▷"}
                </span>
              )}
              Agent Control Flow
            </h3>
            <div
              className={
                isMobile ? `collapsible ${isFlowOpen ? "open" : ""}` : ""
              }
            >
              <p className="paragraph">Placeholder text</p>
            </div>
          </div>
          <div id="Expectimax">
            <h3 onClick={() => setIsExpmaxOpen(!isExpmaxOpen)}>
              {isMobile && (
                <span style={{ marginRight: "10px" }}>
                  {isExpmaxOpen ? "▼" : "▷"}
                </span>
              )}
              Expectimax Component
            </h3>
            <div
              className={
                isMobile ? `collapsible ${isExpmaxOpen ? "open" : ""}` : ""
              }
            >
              <p className="paragraph">Placeholder text</p>
            </div>
          </div>
          <div id="ComputerVision">
            <h3 onClick={() => setIsCVOpen(!isCVOpen)}>
              {isMobile && (
                <span style={{ marginRight: "10px" }}>
                  {isCVOpen ? "▼" : "▷"}
                </span>
              )}
              Computer Vision Component
            </h3>
            <div
              className={
                isMobile ? `collapsible ${isCVOpen ? "open" : ""}` : ""
              }
            >
              {" "}
              <p className="paragraph">Placeholder text</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PacmanProject;
