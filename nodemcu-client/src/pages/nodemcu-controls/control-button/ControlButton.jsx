import React from "react";
import "./ControlButton-style.scss";

const ControlButton = ({ title, icon, status, ...otherProps }) => {
  return (
    <button className="control-button-container" {...otherProps}>
      <h2 className="button-title">{title}</h2>
      <div
        className="button-icon"
        style={{ backgroundImage: `url(${icon})` }}
      />
      <div
        className={`status-container ${
          status ? "status-open" : "status-closed"
        }`}
      >
        <h2 className="button-title">{status ? "On" : "Off"}</h2>
      </div>
    </button>
  );
};

export default ControlButton;
