import DaysUntil from "../components/DaysUntil";
import "../App.css";

//return structure of homepage
function Home() {
  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
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
      <div className="aboutMe">
        <h2>Versatile Programmer, Dedicated Learner</h2>
        <div
          style={{
            width: "80%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <span>
            American living in London with right to work in the UK. I love
            learning new things, especially around technology and personal
            development. Recently completed my BSc in Computer Science at Royal
            Holloway, graduating this July.
          </span>
          <hr></hr>
          <span>
            I consider myself an adept and versatile programmer, eager to learn
            from others and share my knowledge. Growing up in an international
            school, I developed a deep respect for people from various cultural
            backgrounds. As a non-native resident, I appreciate the richness
            that diverse perspectives bring to both personal and professional
            settings.
          </span>
          <hr></hr>
          <span>
            Outside of work, I am passionate about music and will often ask for
            recommendations on the best album of all time. I am active in team
            sports, participating in the Royal Holloway Ultimate Frisbee
            community. I also value the time spent with loved ones, as moving
            across the world has underscored the importance of family and close
            relationships.
          </span>
        </div>
      </div>
      <div className="card">
        <div>
          <DaysUntil targetDateString="2025-07-31" />
        </div>
        <p
          style={{
            textAlign: "center",
            margin: 2,
          }}
        >
          <code>Use the sidebar to the left to navigate</code>
        </p>
        <p
          className="read-the-docs"
          style={{
            textAlign: "center",
            margin: 5,
          }}
        >
          Click on the image of me to visit my{" "}
          <span>
            <a href="https://www.linkedin.com/in/justin-everett-6b629a253/">
              LinkedIn
            </a>
          </span>{" "}
          profile!
        </p>
      </div>
    </div>
  );
}

export default Home;
