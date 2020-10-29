import React, { useEffect, useState } from "react";
import "./ControlInfo-style.scss";

const ControlInfo = ({ infoValue, infoName, infoUnit, minVal, maxVal }) => {
  const [valueLimit, setValueLimit] = useState("low");

  const valueCalculator = (infoValue, minVal, maxVal) => {
    const numberVal = Number(infoValue);
    if (numberVal <= minVal) return "low";
    else if (numberVal >= maxVal) return "max";
    else return "mid";
  };

  useEffect(() => {
    setValueLimit(valueCalculator(infoValue, minVal, maxVal));
  }, [infoValue]);

  return (
    <div className="info-box-container">
      <span className={`info-value ${valueLimit}`}>
        {infoValue}
        <span className={`info-unit ${infoName}`}>{infoUnit}</span>
      </span>

      <span className="info-name">{infoName}</span>
    </div>
  );
};
export default ControlInfo;
