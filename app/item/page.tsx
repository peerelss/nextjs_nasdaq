"use client";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

export default function Page() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const data = [
      { month: "1971-02", average: 101.0429994 },
      { month: "1971-03", average: 102.7599992 },
    ];
    const labels = data.map((item) => item.month);
    const chartData = data.map((item) => item.average);
    setChartData({
      labels: labels,
      datasets: [
        {
          label: "price",
          data: [100, 100],
        },
      ],
    });
    console.log(labels);
  }, []);

  return (
    <div>
      <h2>Monthly Average Open Price Chart</h2>
      <Line data={chartData} />
    </div>
  );
}
