"use client";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

export default function Page() {
  const [chartData, setChartData] = useState({});
  useEffect(() => {
    // 假设你的 API 地址为 '/api/monthly-averages'
    fetch("http://localhost:3000/api/nas")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        const labels = data.data.map((item) => item.month);

        const dataPoints = data.data.map((item) => item.average);
        setChartData({
          labels,
          datasets: [
            {
              label: "Monthly Average Open Price",
              data: dataPoints,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>Monthly Average Open Price Chart</h2>
      <Line data={chartData} />
    </div>
  );
}
