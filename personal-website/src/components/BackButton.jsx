import { useNavigate } from "react-router-dom";
import "../App.css";

function BackButton({ location }) {
  const navigate = useNavigate();

  return (
    <button
      className="reportButtonThin"
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        backgroundColor: "gray",
        padding: "5px 10px 5px 10px",
        zIndex: 10000,
      }}
      onClick={() => {
        navigate(location);
      }}
    >
      Go Back
    </button>
  );
}

export default BackButton;
