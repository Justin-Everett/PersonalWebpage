import "../App.css";

function AgentFor2048() {
  const isMobile =
    /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  return (
    <div
      className="card"
      style={{
        flexWrap: "wrap",
        paddingTop: 0,
      }}
    >
      <h1
        style={{
          fontWeight: "bold",
        }}
      >
        Project: Autonomous
        <a href="https://play2048.co" style={{}}>
          {" "}
          2048{" "}
        </a>
        Agent
      </h1>
      <div>
        <img
          src={
            isMobile
              ? `${import.meta.env.BASE_URL}2048mobile.gif`
              : `${import.meta.env.BASE_URL}2048.gif`
          }
          style={{
            width: "60%",
            maxWidth: "100%",
          }}
        ></img>
        <hr style={{ marginBottom: 0 }}></hr>
        <code>Agent playing 2048 autonomously</code>
        <hr style={{ opacity: "80%", width: "70%", marginTop: "20px" }}></hr>
        <h4>Example subheading</h4>
        <p>Project description goes here - use h4 for subheadings</p>
      </div>
    </div>
  );
}

export default AgentFor2048;
