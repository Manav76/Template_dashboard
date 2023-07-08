import "./navbar.scss"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
// import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
//import { DarkModeContext } from "../../context/darkModeContext";
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='wrapper'>
          <h1>Dashboard</h1>
            <div className='search'>
            < input type="text" placeholder="Search.." />
            <SearchOutlinedIcon/>
            </div>
            <div className="items">
                <div className="item">
                    <LanguageOutlinedIcon  className="icon"/>
                    English
                </div>
                <div className="item">
                    <DarkModeOutlinedIcon className="icon"/>
                </div>
              
                <div className="item">
                   <NotificationsNoneOutlinedIcon className="icon"/>
                   <div className="counter">1</div>
                </div>
                <div className="item">
                 <ChatBubbleOutlineOutlinedIcon className="icon"/>
                 <div className="counter">2</div>
                </div>
                <div className="item" >
               <AccountCircleRoundedIcon className="icon" style={{fontSize:"30px"}}/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
