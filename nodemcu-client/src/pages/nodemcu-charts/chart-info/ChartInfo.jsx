import React, { useEffect, useState } from "react";
import LineChart from "./LineChart";
import "./ChartInfo-style.scss";

const ChartInfo = ({ data, unit, dataColor }) => {
  const [dataCalculated, setDataCalculated] = useState({
    dataAvg: 0,
    dataLast: 0,
    dataLastFive: [],
    dataMax: 0,
    dataMin: 0,
  });

  const getDataInfos = (sensorData) => {
    const dataAvg = (
      sensorData.reduce((total, val) => total + val, 0) / sensorData.length
    ).toFixed(2);
    const dataLastFive = sensorData.slice(Math.max(sensorData.length - 5, 0));

    setDataCalculated({
      dataLastFive,
      dataAvg,
      dataLast: sensorData[sensorData.length - 1],
      dataMin: Math.min(...sensorData),
      dataMax: Math.max(...sensorData),
    });
  };

  useEffect(() => {
    getDataInfos(data);
  }, [data]);

  const { dataAvg, dataLast, dataLastFive, dataMax, dataMin } = dataCalculated;
  return (
    <div className="chart-infos">
      <div className="info-header">
        <span className="latest-value">Değer: {dataLast + unit}</span>
        <span className="max-value">En Yüksek: {dataMax + unit}</span>
        <span className="min-value">En Düşük: {dataMin + unit}</span>
        <span className="average-value">Ortalama: {dataAvg + unit}</span>
      </div>
      <div className="info-chart">
        <LineChart
          datasetProp={[
            {
              label: "Son 10 Saniye İçerisindeki Değerler",
              data: [...dataLastFive],
              fill: true,
              backgroundColor: dataColor,
              borderColor: "rgba(255, 99, 132, 0.2)",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default ChartInfo;
