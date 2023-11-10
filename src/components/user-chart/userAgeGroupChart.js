import * as React from "react";

import { BarChart } from "@mui/x-charts/BarChart";
import "../revenue-chart/chart.css";
import { ResponsiveContainer } from "recharts";
const uData = [0, 10, 0, 0, 0, 0];
const pData = [0, 22, 0, 0, 0, 0];
const xLabels = [
  "13 - 18",
  "18 - 25",
  "25 - 35",
  "35 - 45",
  "45 - 55",
  "55 + +",
];

export default function UserAgeGroupChart() {
  return (
    <div className="chart">
      <h3 className="chartTitle">Users Group Age Analystic</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <BarChart
          width={500}
          height={300}
          series={[
            { data: pData, label: "Male", id: "pvId" },
            { data: uData, label: "Female", id: "uvId" },
          ]}
          xAxis={[{ data: xLabels, scaleType: "band" }]}
        />
      </ResponsiveContainer>
    </div>
  );
}
