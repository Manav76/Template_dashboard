import "./chart.scss"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
const data = [
    {
      name: 'Week 1',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Week 2',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Week 3',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Week 4',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Week 5',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Week 6',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Week 7',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
;
const Chart = () => {
  return (
    <div className='chart'>
        <h1 className="title" >Bcleaasys.ai Score</h1>
            <AreaChart width={830} height={450} data={data}
  margin={{ top: 30, right: 30, left: 0, bottom: 0 }}>
  <defs>
  
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#6439ff" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#6439ff" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="pv" stroke="#6439ff" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
    </div>
  )
}

export default Chart
