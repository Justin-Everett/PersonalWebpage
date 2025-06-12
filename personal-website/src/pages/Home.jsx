import DaysUntil from "../components/DaysUntil";
import "../App.css";

//return structure of homepage
function Home() {
  return (
    <div
      style={{
        marginTop: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <a
          href="https://www.linkedin.com/in/justin-everett-6b629a253/"
          target="_blank"
        >
          <img
            src={`${import.meta.env.BASE_URL}WebsitePlaceHolder.jpg`}
            alt="LinkedIn"
            style={{ width: "200px", maxWidth: "100%", borderRadius: "10%" }}
          />
        </a>
      </div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Justin Everett
      </h1>
      <div className="card">
        <div>
          <DaysUntil targetDateString="2025-07-31" />
        </div>
        <p
          style={{
            textAlign: "center",
          }}
        >
          <code>Use the sidebar to the left to navigate</code>
        </p>
      </div>
      <p
        className="read-the-docs"
        style={{
          textAlign: "center",
        }}
      >
        Click on the image of me to visit my LinkedIn profile!
      </p>
    </div>
  );
}

export default Home;
