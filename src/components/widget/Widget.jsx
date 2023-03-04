import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutline';
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const Widget = ({type}) => {
    let data;
    const amount = 100;
  const diff = 20;
   const readmissions = 17.8;
  switch (type) {
    case "user":
      data = {
        title: "Patients Count",
        isMoney: false,
        link: "See all patients",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "30-day Readmissions",
        isMoney: false,
        link: "View all readmissions",
        icon: (
          <LocalHospitalIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "Risk Adjusted pmpm",
        isMoney: true,
         link: "⬇️ 5.4% from September",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "Earnings",
        isMoney: true,
        link: "⬆️ 2.3% from September",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
             <span className="counter">
                {data.isMoney && "$"} {amount}
             </span>
             <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
              <KeyboardArrowUpIcon/>
                {diff}%
            </div>
           {data.icon}
        </div>
      
    </div>
  )
}

export default Widget
