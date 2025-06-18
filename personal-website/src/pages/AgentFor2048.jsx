import "../App.css";

function AgentFor2048() {
  const isMobile =
    /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  return (
    <div
      className="aboutMe"
      style={{
        paddingTop: 0,
        marginBottom: "40px",
      }}
    >
      <h1
        style={{
          fontWeight: "bold",
        }}
      >
        Project:{" "}
        <a
          href="https://github.com/Justin-Everett/Uni-Final-Project"
          style={{}}
        >
          Autonomous 2048 Agent
        </a>
      </h1>
      <div className="aboutMe">
        <div>
          <img
            src={
              isMobile
                ? `${import.meta.env.BASE_URL}2048mobile.gif`
                : `${import.meta.env.BASE_URL}2048.gif`
            }
            style={{
              width: isMobile ? "70%" : "50%",
              maxWidth: "100%",
              borderRadius: isMobile ? "10px" : "4px",
            }}
          ></img>
          <hr style={{ marginBottom: 0 }}></hr>
          <code>
            Agent playing <i>2048</i> autonomously
          </code>
        </div>
        <hr
          style={{
            opacity: "80%",
            width: "70%",
            marginTop: "10px",
            marginBottom: "15px",
          }}
        ></hr>
        <div
          className="aboutMe"
          style={{
            width: isMobile ? "80%" : "65%",
            background: "rgba(255, 255, 255, 0.15)",
            borderRadius: "20px",
            padding: "0 20px 20px 20px",
          }}
        >
          <h3>Project Overview</h3>
          <p className="paragraph">
            For my final year project (dissertation equivalent) for my computer
            science BSc at Royal Holloway, I constructed an autonomous agent to
            play the game <i>2048</i> entirely automatically, directly on its
            native website (found <a href="https://play2048.co">here</a>
            ). <i>2048</i> is a simple sliding tile game, where the user aims to
            combine same-valued tiles by sliding them into each other along the
            4 cardinal axes, with the goal of creating a tile whose value is
            2048. The project was created during my 3rd and final year at Royal
            Holloway, spanning the entire year, starting in September and
            concluding in late May. The agent is driven by an{" "}
            <a href="#Expectimax" style={{ color: "lightblue" }}>
              <i>expectimax</i>
            </a>{" "}
            algorithm, and utilizes computer vision to visually reconstruct the
            game board from the website.
          </p>
          <h3>What This Project Taught Me</h3>
          <p className="paragraph" style={{ marginBottom: 0 }}>
            Throughout the development of this project, I learned a ton of new
            concepts and technologies, alongside enriching my knowledge of
            plenty of concepts I had previous experience. Firstly, before this
            project I had not used the OpenCV or Selenium libraries in any
            respect, so a part of this project's lifetime consisted of me
            learning how to use both. This proved to be extremely interesting,
            as the Selenium I learned helped me to facilitate a web scraping
            component of the project my team created at my first ever hackathon.
            Additionally, while I was learning to use the OpenCV library, I was
            concurrently taking a deep learning course, which not only improved
            my understanding of basic computer vision concepts like
            preprocessing, but also helped foster a deeper interest in deep
            learning that I have carried with me since.
          </p>
          <p className="paragraph" style={{ marginTop: 0 }}>
            Secondly, this project was also a wonderful exercise in long-term
            planning and execution, something that I had lacked extensive
            practice of through the short sprint-like nature of most previous
            university projects. The process of developing an in-depth plan
            prior to development, then focusing on iterative development
            alongside documentation has since helped me discipline other
            projects, notably this very website!
          </p>
          <h3 id="ControlFlow">Agent Control Flow</h3>
          <p className="paragraph">
            Step by step, this agent works as follows: <br></br> 1. Open a
            browser window to the <i>2048</i> website, then accept cookies and
            decline the tutorial popup (done using Selenium) <br></br> 2. Make 8
            movements of random directions <br></br> 3. Take a screenshot of the
            webpage <br></br> 4. Apply OpenCV-powered computer vision game board
            reconstruction to recognize the value of each tile and reconstruct
            the game board from the screenshot as a 4x4 matrix of tile values{" "}
            <br></br> 5. Apply expectimax search algorithm to the 4x4 matrix
            representing the game board, returning a suggestion of which
            direction to move in <br></br>6. Simulate a movement in the
            direction suggested, but do not create new tile - store the
            locations of the empty tiles in the resultant board to allow for
            quicker checking of the next board <br></br>7. Apply the suggested
            movement using Selenium <br></br>8. If the game has not ended,
            return to step 3
          </p>
          <h3 id="Expectimax">Expectimax Component</h3>
          <p className="paragraph">
            The brains of this entire operation is the expectimax algorithm used
            to generate move suggestions. An expectimax algorithm is a tree
            search algorithm that extends from another algorithm, the minimax
            algorithm. The minimax algorithm's premise is that two players are
            opposing each other in some form of turn-based game, and the goal of
            each player is to maximize their own score/reward. This can then be
            structured as a tree of move options, where each layer of the tree
            alternates between players. This tree structure can be used to find
            an optimal move by framing the nodes in each alternating layer as
            'max' nodes (representing the first player's move) and 'min' nodes
            (representing the second player's move, which will aim to minimize
            the first player's score). A visualization of this can be seen
            below:
          </p>
          <img
            src={`${import.meta.env.BASE_URL}Minimax.png`}
            style={{ width: isMobile ? "" : "40%", maxWidth: "100%" }}
          ></img>
          <p className="paragraph">
            The expectimax algorithm is similar to the minimax algorithm, but is
            built to handle non-deterministic outcomes by replacing the 'min'
            nodes with 'chance' nodes, which calculate the expected return of
            all their children (using the expected value probability formula).
            Using this expectimax algorithm (along with a set of heuristics,
            which are used to assign a numerical value to the strength of
            non-terminal game boards), <i>2048</i> can be effectively played
            automatically.
          </p>
          <h3 id="ComputerVision">Computer Vision Component</h3>
          <p className="paragraph">
            As the expectimax algorithm is unaware of the content of the
            webpage, I needed some way for the game board on the webpage to be
            known to the expectimax algorithm, which I decided to use
            screenshots and computer vision to accomplish. As seen in the
            agent's{" "}
            <a href="#ControlFlow" style={{ color: "lightblue" }}>
              control flow
            </a>
            , a screenshot of the webpage is taken each time a move is made.
            Using the python library{" "}
            <a href="https://docs.opencv.org/4.x/index.html">OpenCV</a>, the{" "}
            <i>2048</i> game board is isolated from the rest of the screenshot,
            then divided up into each of the 16 tiles spaces, which are each
            stored as images via image slicing of the original screenshot. Each
            of these tile images then has a blur applied, is converted to
            greyscale, and finally is converted to black and white. With the now
            preprocessed tile images, the digits within them are then identified
            using an optical character recognizer (OCR) called{" "}
            <a href="https://github.com/tesseract-ocr/tesseract">Tesseract</a>,
            then these digits are used to reconstruct the game board in a 2-d
            array and finally sent through the expectimax algorithm to generate
            a move suggestion.
          </p>

          <button
            className="reportButton"
            style={{ backgroundColor: "gray", padding: "5px 10px 10px 10px" }}
          >
            View Full Project Report
          </button>
        </div>
      </div>
    </div>
  );
}

export default AgentFor2048;
