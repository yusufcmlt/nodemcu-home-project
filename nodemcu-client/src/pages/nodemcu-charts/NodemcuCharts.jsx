import React, { useEffect, useState } from "react";
import { database, setLastDate } from "../../firebase.js";

import ChartInfo from "./chart-info/ChartInfo";
import ChartButton from "./chart-button/ChartButton";

import "./NodemcuCharts-style.scss";
import { smoke, humidity, temperature } from "../../assets/assets";

const NodemcuCharts = () => {
  const [selectedButton, setSelectedButton] = useState({
    buttonVal: "temperature",
    firebaseVal: "sicaklik",
    unit: "°",
    dataColor: "rgb(255, 99, 71)",
  });
  const [sensorData, setSensorData] = useState([]);

  const { buttonVal, firebaseVal, unit, dataColor } = selectedButton;

  useEffect(() => {
    const latestValRef = database.ref(`${firebaseVal}/deger`);
    latestValRef.on("value", (snapshot) => {
      const valueKeys = Object.keys(snapshot.val());
      setSensorData([...valueKeys.map((key) => snapshot.val()[key])]);
      setLastDate();
    });

    return () => {
      latestValRef.off();
    };
  }, [firebaseVal]);

  return (
    <div className="charts-content-container">
      <h1 className="page-title">GRAFIKLER</h1>
      <div className="charts-container">
        <div className="chart-buttons-container">
          <ChartButton
            title="Sıcaklık"
            icon={temperature}
            selected={buttonVal === "temperature"}
            onClick={() =>
              setSelectedButton({
                buttonVal: "temperature",
                firebaseVal: "sicaklik",
                unit: "°",
                dataColor: "rgb(255, 99, 71,1)",
              })
            }
          />
          <ChartButton
            title="Nem"
            icon={humidity}
            selected={buttonVal === "humidity"}
            onClick={() =>
              setSelectedButton({
                buttonVal: "humidity",
                firebaseVal: "nem",
                unit: "%",
                dataColor: "rgb(106, 90, 205,1)",
              })
            }
          />
          <ChartButton
            title="Duman"
            icon={smoke}
            selected={buttonVal === "smoke"}
            onClick={() =>
              setSelectedButton({
                buttonVal: "smoke",
                firebaseVal: "gaz",
                unit: "ppm",
                dataColor: "rgb(75, 240, 227,1)",
              })
            }
          />
        </div>
        <div className="chart-info-container">
          <ChartInfo data={sensorData} unit={unit} dataColor={dataColor} />
        </div>
      </div>
    </div>
  );
};

export default NodemcuCharts;
