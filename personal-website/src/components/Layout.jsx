import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import BackgroundVideo from "./BackgroundVideo";

//use outlet component to allow sidebar to function cohesively with rest of each page
function Layout() {
  return (
    <div style={{ display: "flex" }}>
      <BackgroundVideo />
      <Sidebar />
      <div style={{ flexGrow: 1, paddingTop: "20px", marginLeft: "5px" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
