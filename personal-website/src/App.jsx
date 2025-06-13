import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import AgentFor2048 from "./pages/AgentFor2048";
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
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
