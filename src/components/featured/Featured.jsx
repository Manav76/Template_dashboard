import "./featured.scss"
import SemiCircleProgressBar from "react-progressbar-semicircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">ED Visits per 1000</h1>
      </div>
      <div className="bottom">
        <div className="featuredChart">
        <SemiCircleProgressBar percentage={33} strokeWidth={15} stroke="#7451f8" diameter={350} />
        </div>
        <p className="title">
            <h1 className="number">
                495
            </h1>
        </p>
        <p className="amount">8.9% from September</p>
        <p className="desc">143 Potentially Avoidable</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Usual Trend</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">420</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">69</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">424</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
