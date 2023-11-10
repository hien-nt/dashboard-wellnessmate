import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import "../revenue-chart/chart.css";
import { ResponsiveContainer } from "recharts";

const uData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const pData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0];
const xLabels = [
    'Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'
];

export default function NewVsReturnUserChart() {
  return (
    <div className="chart">
    <h3 className="chartTitle">New vs Returning Users</h3>
    <ResponsiveContainer width="100%" aspect={4 / 1}>
    <LineChart
      width={500}
      height={300}
      series={[
        { data: pData, label: 'New Users' },
        { data: uData, label: 'Return Users' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
    </ResponsiveContainer>
  </div>
   
  );
}
