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
  { "name": "Jan", "expenses": 0 },
  { "name": "Feb", "expenses": 0 },
  { "name": "Mar", "expenses": 0 },
  { "name": "Apr", "expenses": 0 },
  { "name": "May", "expenses": 0 },
  { "name": "Jun", "expenses": 0 },
  { "name": "Jul", "expenses": 0 },
  { "name": "Aug", "expenses": 0 },
  { "name": "Sep", "expenses": 0 },
  { "name": "Oct", "expenses": 0 },
  { "name": "Nov", "expenses": 10 },
  { "name": "Dec", "expenses": 0 },
];
export default function ExpensesMonthlyChart() {

  return (
    <div className="chart">
      <h3 className="chartTitle">Expenses Monthly Analystic</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
      <ComposedChart width={730} height={250} data={data}>
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <CartesianGrid stroke="#f5f5f5" />
  <Area type="monotone" dataKey="expenses" fill="#8884d8" stroke="#8884d8" />
  <Bar dataKey="expenses" barSize={20} fill="#413ea0" />
  {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" /> */}
</ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}