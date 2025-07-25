import { useState } from "react";
import "../App.css";

function Tempus_Cura() {
  const isMobile =
    /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  //use states for paragraph collapsability
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);

  const [isLearnedOpen, setIsLearnedOpen] = useState(false);

  const [isRoleOpen, setIsRoleOpen] = useState(false);

  const [isChallengesOpen, setIsChallengesOpen] = useState(false);

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
        <a href="https://github.com/viczommers/Tempus-Cura" style={{}}>
          Tempus Cura
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
                  marginTop: "40px",
                  width: "240px",
                }}
              >
                <h3>Contents</h3>
                <ul
                  style={{
                    background: "rgba(255, 255, 255, 0.15)",
                    borderRadius: "20px",
                    padding: "20px",
                    paddingLeft: "30px",
                    textAlign: "left",
                    listStyle: "none",
                    display: "grid",
                    gap: "10px",
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
                    <a href="#MyRole" className="contents">
                      My Role In The Project
                    </a>
                  </li>
                  <li>
                    <a href="#Challenges" className="contents">
                      Challenges
                    </a>
                  </li>
                </ul>
              </div>
            )}
            <img
              src={`${import.meta.env.BASE_URL}TempusCura.jpg`}
              style={{
                width: isMobile ? "70%" : "40%",
                maxWidth: "100%",
                borderRadius: isMobile ? "10px" : "4px",
              }}
            ></img>
            {!isMobile && (
              <div
                style={{
                  marginLeft: "30px",
                  marginTop: "40px",
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
                    fontWeight: "bold",
                    display: "grid",
                    gap: "10px",
                  }}
                >
                  <li>Python</li>
                  <li style={{ textWrap: "nowrap" }}>Selenium/Web Scraping</li>
                  <li>Portia AI</li>
                  <li>Azure OpenAI</li>
                  <li>Agentic Actions</li>
                  <li>Fast-Paced Development</li>
                  <li style={{ textWrap: "nowrap" }}>Team Collaboration</li>
                </ul>
              </div>
            )}
          </div>
          <hr style={{ marginBottom: 0 }}></hr>
          <code>
            End of hackathon team photo {!isMobile ? "(me on the right)" : ""}
          </code>
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
                The outcome of my first ever hackathon, this project aimed to
                provide an AI-powered solution to a real problem people in the
                UK face: inability to schedule doctor visits in a timely manner.
                This project's ultimate goal was two-fold:
              </p>
              <p className="paragraph">
                <b>1.</b> Help patients find and book an insurance-approved
                doctor and, for self-funded patients, get the best price.
              </p>
              <p className="paragraph">
                <b>2.</b> Reduce unnecessary administration delays in invoicing
                and payments for doctors and de-incentivising preference for
                booking self-pay patients.
              </p>
              <p className="paragraph">
                These goals were tackled by creating a proof-of-concept (given
                the time constraints) product that, given a postcode, ailment,
                and insurance status, will find the doctors with the best fit
                for the patient. This is done with a combination of web
                scraping, LLM-powered option analysis, and sequential agentic
                action planning, and provided a list of 2-5 of the best doctors
                for the patient, based on price, rating, and distance.
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
                This project, along with the hackathon event where we completed
                it, primarily taught me how to plan and contribute to a project
                in a high-intensity startup environment. I learned a lot about
                how to handle new, fast, and unpredictable environments,
                building adaptibility in the process. I also had new experience
                with handling compromise in a project like this, as the first
                day of the hackathon consisted of our group constantly trying to
                add more things to our project plan, then subsequently needing
                to cut back and consolidate our ideas.
              </p>
            </div>
          </div>

          <div id="MyRole">
            <h3 onClick={() => setIsRoleOpen(!isRoleOpen)}>
              {isMobile && (
                <span style={{ marginRight: "10px" }}>
                  {isRoleOpen ? "▼" : "▷"}
                </span>
              )}
              My Role
            </h3>
            <div
              className={
                isMobile ? `collapsible ${isRoleOpen ? "open" : ""}` : ""
              }
            >
              <p className="paragraph">
                My main roles in this project were threefold:
              </p>
              <p className="paragraph">
                <b>1. </b>I helped spearhead our project planning phase,
                providing helpful input while crucially ensuring that we were
                conscious not to stall too long before beginning implementation.
              </p>
              <p className="paragraph">
                <b>2. </b>I worked together with 1 other group member to work to
                understand the tech stack we had chosen, which required use of{" "}
                <a href="https://docs.portialabs.ai">Portia AI</a>, one of the
                hackathon's sponsors. This tool allows for plaintext prompt
                planning to guide LLM-powered agentic action, so my main
                responsibilities were reading through their source code to
                determine how to use their tool and developing the plaintext
                plan which would sculpt our program control flow.
              </p>
              <p className="paragraph">
                <b>3. </b>I developed a custom tool based on the Portia AI
                source code which allowed for web scraping the phin.org.uk
                website to find doctors, then fold the returned information back
                into the agentic workflow.
              </p>
            </div>
          </div>
          <div id="Challenges">
            <h3 onClick={() => setIsChallengesOpen(!isChallengesOpen)}>
              {isMobile && (
                <span style={{ marginRight: "10px" }}>
                  {isChallengesOpen ? "▼" : "▷"}
                </span>
              )}
              Challenges Faced
            </h3>
            <div
              className={
                isMobile ? `collapsible ${isChallengesOpen ? "open" : ""}` : ""
              }
            >
              <p className="paragraph">
                Our project faced a few challenges through its creation, which
                coupled with the intense time constraint of the hackathon to
                force us to narrow the scope of our proof-of-concept program.
                One of the main challenges that led to this was our planning
                phase resulting in a very ambitious project idea, which we
                didn't have the ability to implement within the 2.5 days of the
                hackathon. The original plan for the project was to extend our
                doctor-finding proof-of-concept product to also handle
                appointment booking and invoicing based on the pre-authorization
                code. This would have allowed patients to give their postcode,
                ailment, and insurance status, then automatically have the best
                appointment scheduled for them without any necessary further
                action. These components which we could not implement were not
                possible to do due to inability to access necessary information
                from insurance companies, and would require systematic reform
                for this process to be changed. Additionally, we faced several
                smaller issues throughout the project development relating to
                various things like bugs in our tech stack, bugs when working
                with new technology like Portia AI, and other minor speed bumps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tempus_Cura;
