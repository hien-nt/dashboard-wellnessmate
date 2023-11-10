import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import "../revenue-chart/chart.css";
import { ResponsiveContainer } from "recharts";

const chartSetting = {
  width: 500,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
};
const dataset = [
  {
    Premium: 0,
    FreeUser: 0,
    month: 'Jan',
  },
  {
    Premium: 0,
    FreeUser: 0,
    month: 'Fev',
  },
  {
    Premium: 0,
    FreeUser: 0,
    month: 'Mar',
  },
  {
    Premium: 0,
    FreeUser: 0,
    month: 'Apr',
  },
  {
    Premium: 0,
    FreeUser: 0,
    month: 'May',
  },
  {
    Premium: 0,
    FreeUser: 0,
    month: 'June',
  },
  {
    Premium: 0,
    FreeUser: 0,
    month: 'July',
  },
  {
    Premium: 0,
    FreeUser: 0,
    month: 'Aug',
  },
  {
    Premium: 0,
    FreeUser: 0,
    month: 'Sept',
  },
  {
    Premium: 0,
    FreeUser: 0,
    month: 'Oct',
  },
  {
    Premium: 26,
    FreeUser: 6,
    month: 'Nov',
  },
  {
    Premium: 0,
    FreeUser: 0,
    month: 'Dec',
  },
];


const valueFormatter = (value) => `${value} users`;

export default function PremiumConvensionBar() {
  return (
    <div className="chart">
    <h3 className="chartTitle">Premium Conversion Rate</h3>
    <ResponsiveContainer width="100%" aspect={4 / 1}>
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'FreeUser', label: 'Free User', valueFormatter },
        { dataKey: 'Premium', label: 'Premium', valueFormatter },
      ]}
      {...chartSetting}
      colors={[ "#95c1c4", "green"]}
    />
    </ResponsiveContainer>
  </div>
   
  );
}
