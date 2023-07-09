import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutline';
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import { useEffect, useState } from "react";
const Widget = ({type}) => {
  const [number , setNumber] = useState(null);
  const [loading , setLoading] = useState(true);
  const [error,setError] = useState(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=5'); 
        const data = await response.json();
      
        setNumber(data[0]);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [setNumber]);


    let data;
   
  const diff = 20;
  switch (type) {
    case "user":
      data = {
        title: "Total Revenues",
        isMoney: true,
        
        icon: (
          <AccountBalanceWalletOutlinedIcon
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
        title: "Total Transactions",
        isMoney: false,
       
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
        title: "Total Likes",
        isMoney: false,
         link: "⬇️ 5.4% from September",
        icon: (
          <ThumbUpOffAltOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "Total Users",
        isMoney: false,
        link: "⬆️ 2.3% from September",
        icon: (
          <PersonOutlinedIcon
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
            {/* <span className="title">{data.title}</span>
            
             <span className="counter">
                {data.isMoney && "$"} {max}
             </span>
             <span className="link">{data.link}</span> */}
                 {loading ? (
          <span>Loading...</span>
        ) : error ? (
          <span>Error: {error}</span>
        ) : (
          <>
            <span className="counter">
              {data.isMoney && "$"} {number}
            </span>
            <span className="link">{data.link}</span>
          </>
        )}
        </div>
        <div className="right">
            <div className="percentage positive">
              <KeyboardArrowUpIcon/>
                {diff}%
            </div>
           {data.icon}
        </div>
      
    </div>
  );
};

export default Widget
