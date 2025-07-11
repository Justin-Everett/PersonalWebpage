import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PDFViewer from "../components/PDFViewer";
import "../App.css";

function ExtendedEssay() {
  const isMobile =
    /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  const navigate = useNavigate();

  //use states for paragraph collapsability
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);

  const [isLearnedOpen, setIsLearnedOpen] = useState(false);

  const [isGraphicsOpen, setIsGraphicsOpen] = useState(false);

  const [isPacmanOpen, setIsPacmanOpen] = useState(false);

  const [isGhostOpen, setIsGhostOpen] = useState(false);

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
          maxWidth: isMobile ? "90%" : "100%",
        }}
      >
        Project: IB Extended Essay - Transistor Heat Modelling
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
                      Final Report
                    </a>
                  </li>
                  <li>
                    <a href="#Pacman" className="contents">
                      Problem Statement
                    </a>
                  </li>
                  <li>
                    <a href="#Ghost" className="contents">
                      Findings
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
              }}
            ></div>
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
                  <li style={{ textWrap: "nowrap" }}>Research</li>
                  <li style={{ textWrap: "nowrap" }}>Report Writing</li>
                  <li style={{ textWrap: "nowrap" }}>Math Skills</li>
                  <li style={{ textWrap: "nowrap" }}>Integral Calculus</li>
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
              <p className="paragraph">
                Placeholder placeholder placeholder placeholder placeholder
                placeholder placeholder placeholder placeholder placeholder
                placeholder placeholder placeholder placeholder placeholder
                placeholder placeholder placeholder placeholder placeholder
                placeholder placeholder placeholder placeholder placeholder
              </p>
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
                Placeholder placeholder placeholder placeholder placeholder
                placeholder placeholder placeholder placeholder placeholder
                placeholder placeholder placeholder placeholder placeholder
                placeholder placeholder placeholder placeholder placeholder
                placeholder placeholder placeholder placeholder placeholder
              </p>
            </div>
          </div>

          <div id="Graphics">
            {!isMobile && <h3>Project Report</h3>}
            <div>
              {!isMobile && (
                <div
                  style={{
                    overflowY: "auto",
                    marginTop: "10px",
                    height: "100vh",
                  }}
                >
                  <PDFViewer pdfFilePath={"Transistor Heat Modelling.pdf"} />
                </div>
              )}
              {isMobile && (
                <button
                  className="reportButton"
                  style={{
                    backgroundColor: "gray",
                    padding: "5px 10px 10px 10px",
                    marginTop: "10px",
                  }}
                  onClick={() => {
                    navigate("/EE_report");
                  }}
                >
                  View Full Project Report
                </button>
              )}
            </div>
          </div>
          <div id="Pacman">
            <h3 onClick={() => setIsPacmanOpen(!isPacmanOpen)}>
              {isMobile && (
                <span style={{ marginRight: "10px" }}>
                  {isPacmanOpen ? "▼" : "▷"}
                </span>
              )}
              Problem Statement
            </h3>
            <div
              className={
                isMobile ? `collapsible ${isPacmanOpen ? "open" : ""}` : ""
              }
            >
              <p className="paragraph">
                Placeholder placeholder placeholder placeholder placeholder
                placeholder placeholder placeholder placeholder placeholder
                placeholder placeholder placeholder placeholder placeholder
                placeholder placeholder placeholder placeholder placeholder
                placeholder placeholder placeholder placeholder placeholder
              </p>
            </div>
          </div>
          <div id="Ghost">
            <h3 onClick={() => setIsGhostOpen(!isGhostOpen)}>
              {isMobile && (
                <span style={{ marginRight: "10px" }}>
                  {isGhostOpen ? "▼" : "▷"}
                </span>
              )}
              Findings
            </h3>
            <div
              className={
                isMobile ? `collapsible ${isGhostOpen ? "open" : ""}` : ""
              }
            >
              <p className="paragraph">
                Placeholder placeholder placeholder placeholder placeholder
                placeholder placeholder placeholder placeholder placeholder
                placeholder placeholder placeholder placeholder placeholder
                placeholder placeholder placeholder placeholder placeholder
                placeholder placeholder placeholder placeholder placeholder
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExtendedEssay;
