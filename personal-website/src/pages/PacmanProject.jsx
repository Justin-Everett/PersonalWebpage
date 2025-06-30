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
        Project:{" "}
        <a href="https://github.com/Justin-Everett/pacman-project" style={{}}>
          Recreating Pac-Man
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
                      Pac-Man Movement
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
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "100%",
                  borderRadius: isMobile ? "10px" : "4px",
                }}
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
              <p className="paragraph">
                Created at the very start of my programming education, this
                project's aims were to develop understanding of object-oriented
                programming and to gain proficiency with the programming
                language Java, all by creating a replica of the game Pac-Man.
                This project was made as part of my education in the IB
                (International Baccalaureate) program as the culmination of the
                program's 2 year computer science course, and served as my first
                real introduction to leveraging code to create something.
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
                Put bluntly, this project taught me a lot of what you shouldn't
                do when creating a programming project. As it was among my first
                projects more advanced than simple terminal-based algorithm
                programs, I learned a lot throughout this project by first
                failing, then learning what not to do and adapting accordingly.
                For example, the most monumental setback during the creation of
                this project saw me unable to fix a bug where the Pac-Man
                character would duplicate repeatedly upon crossing the diagonal
                between the lower left and upper right corners, to which my only
                successful course of action was to completely restart my
                codebase. This was, in hindsight, a questionable choice, but
                highlighted important misteps in my planning process which I
                addressed by applying more careful planning on how I would
                implement various parts of the project, as well as adjusting my
                future approach to be more modular and incremental, a change
                which has proven to be very helpful in the planning of all my
                projects since.
              </p>
            </div>
          </div>

          <div id="Graphics">
            <h3 onClick={() => setIsGraphicsOpen(!isGraphicsOpen)}>
              {isMobile && (
                <span style={{ marginRight: "10px" }}>
                  {isGraphicsOpen ? "▼" : "▷"}
                </span>
              )}
              Graphics
            </h3>
            <div
              className={
                isMobile ? `collapsible ${isGraphicsOpen ? "open" : ""}` : ""
              }
            >
              <p className="paragraph">
                This project gave me my first experience in handling graphics,
                which, as is the theme with this project, I did in a way which
                showed me I had much to learn. The graphics in this project were
                handled by holding all the information of the playable game area
                as a 2-dimensional grid of numbers, where the number at each
                position represented what would be displayed there. For example,
                if the number at any given position was 0, then a food pellet
                would be drawn at that position. This leads to several issues,
                each of which provided me with things to learn upon reflection
                on this project. For example, with this system and my neglect of
                the use of a spritesheet, the project required 20+ different png
                images, which became very confusing. Additionally, since each
                image is drawn in a tile system, there is no easy way to have
                smoothly animated transitions for when Pac-Man or a ghost moves
                from tile to tile (I did ammend this slightly by adding a
                frame-dependent mouth opening and closing animation to Pac-Man,
                which turned out better than I expected it to). It did, however,
                provide ease of use and simplicity, which was important for this
                project's timeline, as I was effectively learning on the go.
              </p>
            </div>
          </div>
          <div id="Pacman">
            <h3 onClick={() => setIsPacmanOpen(!isPacmanOpen)}>
              {isMobile && (
                <span style={{ marginRight: "10px" }}>
                  {isPacmanOpen ? "▼" : "▷"}
                </span>
              )}
              Pac-Man Movement
            </h3>
            <div
              className={
                isMobile ? `collapsible ${isPacmanOpen ? "open" : ""}` : ""
              }
            >
              <p className="paragraph">
                As mentioned in the section on{" "}
                <a
                  href="#Graphics"
                  style={{ color: "lightblue" }}
                  onClick={() => setIsGraphicsOpen(true)}
                >
                  graphics
                </a>
                , Pac-Man is displayed as a numerical value on a 2-dimensional
                grid, where an image of Pac-Man is displayed at his position.
                Pac-Man's position is held as a class attribute, as the Pac-Man
                displayed is an instance of the Pac-Man class. His movement is
                thus controlled by simply adjusting his coordinates on the grid,
                after checking that his new position is a valid position (i.e.
                not outside of the map, not on a wall piece). This is done by
                using event handlers that listen for key presses, such that if
                the user presses the right arrow key, Pac-Man's position is
                updated by adding 1 to his x-coordinate. The same applies for
                each of the other directions, allowing for fluid movement in
                each cardinal direction.
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
              Ghost Pathfinding
            </h3>
            <div
              className={
                isMobile ? `collapsible ${isGhostOpen ? "open" : ""}` : ""
              }
            >
              <p className="paragraph">
                The last major component of this project was the Ghosts, which,
                like{" "}
                <a
                  href="#Pacman"
                  style={{ color: "lightblue" }}
                  onClick={() => setIsPacmanOpen(true)}
                >
                  Pac-Man
                </a>
                , are created as instances of a class. In the original Pac-Man
                game, each of the 4 ghosts has a different pathfinding
                algorithm, however for this project I chose to only use one
                pathfinding algorithm and apply it to all the ghosts. This
                algorithm works by, for each ghost, checking the pythagorean
                distance to Pac-Man's tile in each of the tiles which the ghost
                could possibly move to next (e.g. if the ghost has open space
                all around it, then it will check the distance to Pac-Man from
                each of its neighboring tiles). The ghost then moves to the
                square which would put it closest to Pac-Man's current position.
                In hindsight this algorithm is extremely rudimentary.
                Surprisingly though, its simplicity along with the ghost's
                ability to move onto the same tile as each other, lead to the
                final game being actually rather difficult to beat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PacmanProject;
