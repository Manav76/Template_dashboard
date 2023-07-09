import "./sidebar.scss"
import DashboardIcon from "@mui/icons-material/Dashboard";
//import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import FormatBoldIcon from '@mui/icons-material/FormatBold';
//import ScoreboardIcon from '@mui/icons-material/Scoreboard';
//import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import PaidIcon from '@mui/icons-material/Paid';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import {Link} from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <FormatBoldIcon style={{fontSize:"35px" , marginRight: "8" , marginLeft: "-3"}}/>
           <Link to="/" style={{textDecoration:"none"}} >
            <span className="logo">
            
                Board.</span>
                </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon style={{color:"white" , marginRight:"5px"}} />
                  
                    <span>Dashboard</span>
                
                    </li>
                    <p className="title">LISTS</p>
                <li>
                    <PaidIcon style={{color:"white", marginRight:"5px"}}/>
                   
                    <span>Transactions</span>
                    
                    </li>
                <li>
                  <WorkHistoryIcon style={{color:"white", marginRight:"5px"}}/>
                    <span>Schedules</span>
                    </li>
                <li>
                    <AccountCircleIcon style={{color:"white", marginRight:"5px"}}/>
                    <span>Users</span>
                    </li>
                    <li>
                    <SettingsIcon style={{color:"white", marginRight:"5px"}}/>
                    <span>Settings</span>
                    </li>
                <p className="title">USER</p>
            
                    {/* <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li> */}
          <li>
          <HelpIcon style={{color:"white", marginRight:"5px"}}/>
            <span>Help</span>
          </li>
          <li>
            <ContactPhoneIcon style={{color:"white", marginRight:"5px"}}/>
            <span>Contact Us</span>
          </li>
            </ul>
        </div>
        <div className="bottom">
           
        </div>
    
    </div>
  )
}

export default Sidebar
