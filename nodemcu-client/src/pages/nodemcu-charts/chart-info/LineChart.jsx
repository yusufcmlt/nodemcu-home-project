import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ datasetProp }) => {
  const [chartData, setchartData] = useState({
    data: {
      labels: ["2s", "4s", "6s", "8s", "10s"],
      datasets: [],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });

  useEffect(() => {
    setchartData({
      ...chartData,
      data: { ...chartData.data, datasets: [...datasetProp] },
    });
  }, [datasetProp]);

  return <Line data={chartData.data} options={chartData.options} />;
};

export default LineChart;
