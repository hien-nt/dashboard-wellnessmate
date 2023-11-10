import "./chart.css";
import {
  LineChart,
  Line,
  Area,
  AreaChart,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data =[
  { "name": "Jan", "expenses": 0, "income": 0 },
  { "name": "Feb", "expenses": 0, "income": 0 },
  { "name": "Mar", "expenses": 0, "income": 0 },
  { "name": "Apr", "expenses": 0, "income": 0 },
  { "name": "May", "expenses": 0, "income": 0 },
  { "name": "Jun", "expenses": 0, "income": 0 },
  { "name": "Jul", "expenses": 0, "income": 0 },
  { "name": "Aug", "expenses": 0, "income": 0 },
  { "name": "Sep", "expenses": 0, "income": 0 },
  { "name": "Oct", "expenses": 0, "income": 0 },
  { "name": "Nov", "expenses": 10, "income": 56.8 },
  { "name": "Dec", "expenses": 0, "income": 0 },
]

  
  
  
export default function IncomeExpensesChart( ) {

  return (
    <div className="chart">
      <h3 className="chartTitle">Income and Expenses</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
      <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="expenses" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="income" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
      </ResponsiveContainer>
    </div>
  );
}