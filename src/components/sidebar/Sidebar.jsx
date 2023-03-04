import "./sidebar.scss"
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import ScoreboardIcon from '@mui/icons-material/Scoreboard';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HdrAutoIcon from '@mui/icons-material/HdrAuto';
const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <span className="logo">Basys.ai</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon/>
                    <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                <li>
                    <ScoreboardIcon/>
                    <span>Score Card</span></li>
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
