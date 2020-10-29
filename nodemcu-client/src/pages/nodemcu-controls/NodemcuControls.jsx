import React, { useState } from "react";
import ControlButton from "./control-button/ControlButton";
import "./NodemcuControls-style.scss";
import imageAsset from "../../assets/assets";
import ControlInfo from "./control-info/ControlInfo";

const NodemcuControls = () => {
  const { lamp, lampColored, fan, fanColored } = imageAsset;
  const [buttonStatus, setButtonStatus] = useState({ lamp: 1, fan: 0 });
  const [infoValues, setInfoValues] = useState({
    temperature: 25,
    humidity: 50,
    smoke: 260,
  });
  //Setting button status ON/OFF
  const handleClick = (btnClicked) => {
    setButtonStatus({
      ...buttonStatus,
      [btnClicked]: !buttonStatus[btnClicked],
    });
  };
  const { temperature, humidity, smoke } = infoValues;

  return (
    <div className="controls-content-container">
      <h1 className="page-title">KONTROLLER</h1>
      <div className="controls-container">
        <ControlButton
          onClick={() => handleClick("lamp")}
          title="LEDLER"
          icon={buttonStatus.lamp ? lampColored : lamp}
          status={buttonStatus.lamp}
        />
        <ControlButton
          onClick={() => handleClick("fan")}
          title="FANLAR"
          icon={buttonStatus.fan ? fanColored : fan}
          status={buttonStatus.fan}
        />
      </div>
      <div className="info-container">
        <ControlInfo
          infoName="Sıcaklık"
          infoValue={temperature}
          infoUnit="°"
          minVal={10}
          maxVal={30}
        />
        <ControlInfo
          infoName="Nem"
          infoValue={humidity}
          infoUnit="%"
          minVal={50}
          maxVal={80}
        />
        <ControlInfo
          infoName="Duman"
          infoValue={smoke}
          infoUnit="ppm"
          minVal={200}
          maxVal={250}
        />
      </div>
    </div>
  );
};

export default NodemcuControls;
