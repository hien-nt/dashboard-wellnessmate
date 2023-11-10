import "./chart.css";
import {
  ComposedChart,
  YAxis,
  Legend,
  Bar,
  Area,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data =[
  { "name": "Jan", "income": 0 },
  { "name": "Feb", "income": 0 },
  { "name": "Mar", "income": 0 },
  { "name": "Apr", "income": 0 },
  { "name": "May", "income": 0 },
  { "name": "Jun", "income": 0 },
  { "name": "Jul", "income": 0 },
  { "name": "Aug", "income": 0 },
  { "name": "Sep", "income": 0 },
  { "name": "Oct", "income": 0 },
  { "name": "Nov", "income": 56.8 },
  { "name": "Dec", "income": 0 },
]






export default function IncomeMonthlyChart() {

  return (
    <div className="chart">
      <h3 className="chartTitle">Income Monthly Analystic</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
      <ComposedChart width={730} height={250} data={data}>
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <CartesianGrid stroke="#f5f5f5" />
  <Area type="monotone" dataKey="income" fill="#D3FFCE" stroke="green" />
  <Bar dataKey="income" barSize={20} fill="green" />
  {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" /> */}
</ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}