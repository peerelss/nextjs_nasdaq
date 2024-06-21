"use client";
import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LineChart1 = () => {
  const [chartData, setChartData] = useState({});
  // 准备图表数据和配置
  useEffect(() => {
    fetch("http://localhost:3000/api/nas")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.data);
        setChartData(data.data);
      });
  }, []);
  return (
    <div>
      <h2>Line Chart Example</h2>
      <LineChart
        width={2500}
        height={2300}
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="average"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default LineChart1;
