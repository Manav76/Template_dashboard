import "./sidebar.scss"
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import ScoreboardIcon from '@mui/icons-material/Scoreboard';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HdrAutoIcon from '@mui/icons-material/HdrAuto';
import {Link} from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <FormatBoldIcon style={{fontSize:"35px" , marginRight: "8" , marginLeft: "-3"}}/>
           <Link to="/" style={{textDecoration:"none"}} >
            <span className="logo">
            
                Basys.ai</span>
                </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon/>
                    <Link to="/" style={{textDecoration:"none"}} >
                    <span>Dashboard</span>
                    </Link>
                    </li>
                    <p className="title">LISTS</p>
                <li>
                    <ScoreboardIcon/>
                    <Link to="/users" style={{textDecoration:"none"}} >
                    <span>Score Card</span>
                    </Link>
                    </li>
                <li>
                    <ReportProblemIcon/>
                    <span>Risk Management</span>
                    </li>
                <li>
                    <HdrAutoIcon/>
                    <span>Prior Authorization</span>
                    </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircleOutlinedIcon/>
                    <span>My Profile</span></li>
                    <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    
    </div>
  )
}

export default Sidebar
