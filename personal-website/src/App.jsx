import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import AgentFor2048 from "./pages/AgentFor2048";
import FYP_Report from "./pages/FYP_Report";
import PacmanProject from "./pages/PacmanProject";
import ExtendedEssay from "./pages/ExtendedEssay";
import EE_Report from "./pages/EE_Report";
import "./App.css";

//make routing for page navigation
function App({ basename }) {
  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="resume" element={<Resume />} />
          <Route path="2048_agent" element={<AgentFor2048 />} />
          <Route path="FYP_report" element={<FYP_Report />} />
          <Route path="pacman" element={<PacmanProject />} />
          <Route path="extendedessay" element={<ExtendedEssay />} />
          <Route path="EE_report" element={<EE_Report />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
