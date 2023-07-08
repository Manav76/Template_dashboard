import "./featured.scss"
 //import SemiCircleProgressBar from "react-progressbar-semicircle";
 import { PieChart, Pie , Cell } from 'recharts';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
const data = [
  { name: 'Green', value: 30 },
  { name: 'Yellow', value: 50 },
  { name: 'Pink', value: 20 },
];

const colors = ['#98D89E', '#F6DC7D', '#EE8484'];


const Featured = () => {
  return (
    <div className="card">
    <div className='featured'>
      <div className="top">
        <h1 className="title">Top Products</h1>
      </div>
      <div className="bottom">
        <div className="featuredChart">
  <PieChart width={730} height={250}>
      <Pie
        data={data}
        dataKey="value"
        cx="50%"
        cy="50%"
        outerRadius={120}
        fill="#8884d8"
        label
      >
        {data.map((_,index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
    </PieChart>
        </div>
   
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Basic Tess</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">420</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Custom Short Pants</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">69</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Super Hoodies</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">424</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Featured
