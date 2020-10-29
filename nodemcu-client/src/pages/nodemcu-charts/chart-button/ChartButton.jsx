import React from "react";
import "./ChartButton-style.scss";

const ChartButton = ({ title, icon, selected, ...otherProps }) => {
  return (
    <button
      className={`chart-button-container ${selected ? "selected-button" : ""}`}
      {...otherProps}
    >
      <h2 className="button-title">{title}</h2>
      <div
        className="button-icon"
        style={{ backgroundImage: `url(${icon})` }}
      />
    </button>
  );
};

export default ChartButton;
