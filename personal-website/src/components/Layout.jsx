import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

//use outlet component to allow sidebar to function cohesively with rest of each page
function Layout() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flexGrow: 1, paddingTop: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
