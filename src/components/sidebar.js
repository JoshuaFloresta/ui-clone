import "./Sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { useState } from "react";

const Sidebar = ({ isSide, toggleSidebar }) => {
  
   const toggleSidebarWithin = () => {
    toggleSidebar(); 
    setOpen(!isOpen); 
  };

  const [isOpen, setOpen] = useState(false);

  return (
    <div className={isSide ? "sidebar" : "sidebar-close "}>
    <div className="sidebar-heading">
      <button className="back" onClick={toggleSidebarWithin}>
        <ArrowBackIosIcon fontSize="small" />
      </button>
    </div>
    <hr />

      <div className="navigations">
        <a href="/dashboard" className="nav-links">
          <DashboardIcon fontSize="medium" className="nav-icons" />
          <p className="nav">Dashboard</p>
        </a>
        <a href="/dashboard" className="nav-links">
          <ShoppingCartIcon fontSize="medium" className="nav-icons" />
          <p className="nav">Orders</p>
        </a>
        <a href="/dashboard" className="nav-links">
          <PeopleAltIcon fontSize="medium" className="nav-icons" />
          <p className="nav">Customer</p>
        </a>
        <a href="/dashboard" className="nav-links">
          <BarChartIcon fontSize="medium" className="nav-icons" />
          <p className="nav">Report</p>
        </a>
        <a href="/dashboard" className="nav-links">
          <LayersIcon fontSize="medium" className="nav-icons" />
          <p className="nav">Integrations</p>
        </a>
      </div>
      <hr />
      <div className="navigations">
        <p className="save">Save reports</p>
        <a href="/dashboard" className="nav-links">
          <AssignmentIcon fontSize="medium" className="nav-icons" />
          <p className="nav">Current Month</p>
        </a>
        <a href="/dashboard" className="nav-links">
          <AssignmentIcon fontSize="medium" className="nav-icons" />
          <p className="nav">Last quarter</p>
        </a>
        <a href="/dashboard" className="nav-links">
          <AssignmentIcon fontSize="medium" className="nav-icons" />
          <p className="nav">Year-end sale</p>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
