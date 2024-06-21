"use client";
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const LineChart = () => {
  const [chartData, setChartData] = useState({});
  // 准备图表数据和配置
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Monthly Sales Data",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  useEffect(() => {
    setChartData(data);
  }, []);
  return (
    <div>
      <h2>Line Chart Example</h2>
      <Line data={chartDadatata} />
    </div>
  );
};

export default LineChart;
