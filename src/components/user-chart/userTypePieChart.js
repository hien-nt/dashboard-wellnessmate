import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

import { Typography, Stack } from "@mui/material";
import "../revenue-chart/chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const items = [
  { value: 6, label: "Free User" },
  {  value: 26, label: "Prenium User" },
  //   { id: "id_C", value: 20, label: "Series C" },
];
let total = 0;
let freeUser = 0;
let premiumUser = 0;

items.map((item) => {
  if (item.label === "Free User") {
    freeUser = item.value;
  }
  if (item.label === "Prenium User") {
    premiumUser = item.value;
  }
  total += item.value;
});

const formatObject = (obj) => {
  if (obj === null) {
    return "  undefined";
  }
  return JSON.stringify(obj, null, 2)
    .split("\n")
    .map((l) => `  ${l}`)
    .join("\n");
};

export default function OnSeriesItemClick() {
  const [identifier, setIdentifier] = React.useState(null);
  const [id, setId] = React.useState(undefined);

  const handleClick = (event, itemIdentifier, item) => {
    setId(item.id);
    setIdentifier(itemIdentifier);
  };

  return (
    <div className="chart">
      <h3 className="chartTitle">Users Type Analystic</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems={{ xs: "flex-start", md: "center" }}
          justifyContent="space-between"
          sx={{ width: "100%" }}
        >
          <Typography
            component="pre"
            sx={{
              maxWidth: { xs: "100%", md: "50%", flexShrink: 1 },
              overflow: "auto",
              fontWeight: "bold", // Làm chữ đậm
              fontSize: "1rem", // Tùy chỉnh kích thước font
             // Khoảng cách từ phía trên
            }}
          >
            Total User of Wellness Mate : {total} <br></br>
            Prenium USer : {premiumUser} <br></br>
            Free User : {freeUser}
          </Typography>
          
          <PieChart
              series={[
                {
                  arcLabel: (item) => `${item.value}`,
                  arcLabelMinAngle: 45,
                  data: items
                },
            ]}
            onClick={handleClick}
            width={500}
            height={250}
            margin={{ right: 200 }}
            colors={[ "green", "#FF8042"]}
          />
        </Stack>
      </ResponsiveContainer>
    </div>
  );
}
