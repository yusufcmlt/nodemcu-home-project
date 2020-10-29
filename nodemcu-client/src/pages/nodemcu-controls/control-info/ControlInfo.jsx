import React, { useEffect, useState } from "react";
import firebase from "../../../firebase";

import "./ControlInfo-style.scss";

const ControlInfo = ({ infoValue, infoName, infoUnit, minVal, maxVal }) => {
  const [valueLimit, setValueLimit] = useState("low");
  const [lastVal, setLastVal] = useState(0);

  const valueCalculator = () => {
    if (lastVal <= minVal) return "low";
    else if (lastVal >= maxVal) return "max";
    else return "mid";
  };

  useEffect(() => {
    const latestValRef = firebase.database().ref(`${infoValue}/deger`);
    latestValRef.on("value", (snapshot) => {
      const valueKeys = Object.keys(snapshot.val());

      setLastVal(snapshot.val()[valueKeys[valueKeys.length - 1]]);
    });

    setValueLimit(valueCalculator());

    return () => {
      latestValRef.off();
    };
  });

  return (
    <div className="info-box-container">
      <span className={`info-value ${valueLimit}`}>
        {lastVal}
        <span className={`info-unit ${infoName}`}>{infoUnit}</span>
      </span>

      <span className="info-name">{infoName}</span>
    </div>
  );
};
export default ControlInfo;
