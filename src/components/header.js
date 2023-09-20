import React, { useState } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./header.css";
import Sidebar from "./sidebar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav>
      <div className="header">
        <div className="header-content">
          <button className="burger-button" onClick={toggleSidebar}>
            <DehazeIcon fontSize="medium" className="hamburger" />
          </button>

          <p>Dashboard</p>

          <button className="notif-counter">
            <NotificationsIcon className="notif-icon" />
            <span className="counter">4</span>
          </button>
        </div>
      </div>

      {/* Pass the isSidebarOpen state and toggleSidebar function to the Sidebar component */}
      <Sidebar isSide={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </nav>
  );
};

export default Header;
