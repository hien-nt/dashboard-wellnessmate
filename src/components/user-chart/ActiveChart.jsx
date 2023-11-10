import "../revenue-chart/chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ChartActiveUser({ title, data, dataKey, grid }) {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Active" stroke="#82ca9d" />
          <Line type="monotone" dataKey="Inactive" stroke="#ff0000"/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
