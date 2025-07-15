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

  const [isProblemOpen, setIsProblemOpen] = useState(false);

  const [isFindingsOpen, setIsFindingsOpen] = useState(false);

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
              width: "65vw",
            }}
          >
            {!isMobile && (
              <div style={{ width: "100%" }}>
                <h3>Contents & Important Skills</h3>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    background: "rgba(255, 255, 255, 0.15)",
                    borderRadius: "20px",
                    padding: "20px",
                    maxWidth: "100%",
                    gap: "40px",
                  }}
                >
                  <ul
                    style={{
                      listStyle: "none",
                      textAlign: "left",
                      display: "grid",
                      gap: "10px",
                      margin: 0,
                      padding: 0,
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
                      <a href="#Report" className="contents">
                        Final Report
                      </a>
                    </li>
                    <li>
                      <a href="#Problem" className="contents">
                        Problem Statement
                      </a>
                    </li>
                    <li>
                      <a href="#Findings" className="contents">
                        Findings
                      </a>
                    </li>
                  </ul>
                  <ul
                    style={{
                      listStyle: "none",
                      textAlign: "right",
                      display: "grid",
                      gap: "10px",
                      fontWeight: "bold",
                      margin: 0,
                      padding: 0,
                      whiteSpace: "nowrap",
                    }}
                  >
                    <li>Research</li>
                    <li>Report Writing</li>
                    <li>Math Skills</li>
                    <li>Integral Calculus</li>
                    <li>Self-Directed Learning</li>
                  </ul>
                </div>
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
                This project was made as part of my IB (International
                Baccalaureate) education, as my submission for the program's
                "Extended Essay" (EE). The premise of this essay is a ~4000 word
                deep dive essay into a topic of the student's choosing, so long
                as it falls under the bracket of one of their studied subjects.
                I chose to do my EE in Math and in an attempt to unite it with
                my interest of computer science, I used the heat equation in 1
                dimension to model how heat flows in a transistor.
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
                At the time of working on this essay, the extent of my math
                capabilities was intermediate trigonometry and (maybe) some
                basic calculus. This project took me far outside of my comfort
                zone, requiring me to teach myself much more advanced topics
                from the ground up, such as differential equations, partial
                differential equations, and fourier tranforms. As a result, not
                only did I learn a lot of math which was much more advanced than
                the IB higher level maths courses offer (which resulted in my
                university maths courses feeling quite straighforward), I
                learned a lot about how I learn topics and how to teach myself
                topics without the aid of an educator, which has and will
                continue to be an extremely valuable skill for me to rely on.
                This project also taught me some of the basics of how to write a
                maths-based academic paper, a skill which I used to streamline
                my{" "}
                <a
                  onClick={() => navigate("/2048_agent")}
                  style={{ cursor: "pointer", color: "lightblue" }}
                >
                  final year project
                </a>{" "}
                in university.
              </p>
            </div>
          </div>
          <div id="Report">
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
          <div id="Problem">
            <h3 onClick={() => setIsProblemOpen(!isProblemOpen)}>
              {isMobile && (
                <span style={{ marginRight: "10px" }}>
                  {isProblemOpen ? "▼" : "▷"}
                </span>
              )}
              Problem Statement
            </h3>
            <div
              className={
                isMobile ? `collapsible ${isProblemOpen ? "open" : ""}` : ""
              }
            >
              <p className="paragraph">
                Upon some basic research that yielded that some transistors can
                achieve a worst-case maximum operating temperature of 134
                degrees C, along with the assumption that if this transistor is
                cooled to under this temperature within 1 second it will not be
                permanently damaged, the problem statement for this essay is as
                follows:
              </p>
              <p style={{ fontWeight: "bold", textAlign: "center" }}>
                What is the maximum temperature a transistor can reach before it
                can be cooled under 134 degrees C within 1 second?
              </p>
            </div>
          </div>
          <div id="Findings">
            <h3 onClick={() => setIsFindingsOpen(!isFindingsOpen)}>
              {isMobile && (
                <span style={{ marginRight: "10px" }}>
                  {isFindingsOpen ? "▼" : "▷"}
                </span>
              )}
              Findings
            </h3>
            <div
              className={
                isMobile ? `collapsible ${isFindingsOpen ? "open" : ""}` : ""
              }
            >
              <p className="paragraph">
                After solving both the general case for the 1 dimensional heat
                equation, then the case specific to the{" "}
                <a
                  href="#Problem"
                  style={{ color: "lightblue" }}
                  onClick={() => setIsProblemOpen(true)}
                >
                  problem statement
                </a>
                , the temperature that a transistor can be cooled under 134
                degrees C within 1 second is found to be <b>147.9</b> degrees C.
              </p>
              <p className="paragraph">
                It is important to note, however, that this result follows from
                some pretty heavy assumptions. Most obviously, this is found
                using the 1 dimensional heat equation, and effectively models
                for heat in a finite length infinitessamly thin bar. This is not
                ideal for modelling transistor heat, as it is clear that
                transistors exist in 3 dimensions rather than 1, however the
                mathematical complexity of the 1 dimensional heat equation was
                already both complicated enough to be appropriate for an EE and
                taking non-negligible time over my summer to learn, so the 2 and
                3 dimensional versions of the equation were deemed to be out of
                the scope of this essay. Some other important assumptions, whose
                reasoning can be found in the{" "}
                <a href="#Report" style={{ color: "lightblue" }}>
                  final essay document
                </a>
                , include both ends of the 1 dimensional transistor being held
                at 0 degrees celsius throughout the simulation, as well as the
                material properties of the transistor being pure silicon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExtendedEssay;
