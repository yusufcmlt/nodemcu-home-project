import React, { useEffect, useState } from "react";
import { database, setLastDate } from "../../firebase";

import ControlButton from "./control-button/ControlButton";
import ControlInfo from "./control-info/ControlInfo";

import {
  lamp,
  lampColored,
  fan,
  fanColored,
  smoke,
  humidity,
  temperature,
} from "../../assets/assets";
import "./NodemcuControls-style.scss";

const NodemcuControls = () => {
  const [buttonStatus, setButtonStatus] = useState({ lamp: 0, fan: 0 });

  //Setting button status ON/OFF
  const handleClick = (buttonRef) => {
    database
      .ref(`/${buttonRef === "lamp" ? "lamba" : "klima"}`)
      .set(!buttonStatus[buttonRef]);
    setLastDate();
  };

  //Getting control buttons info from firebase on mount.
  useEffect(() => {
    const controlsRef = database.ref(`/`);

    controlsRef.on("value", (snapshot) => {
      const { lamba, klima } = snapshot.val();

      setButtonStatus({ lamp: lamba, fan: klima });
    });

    return () => {
      controlsRef.off();
    };
  }, []);

  return (
    <div className="controls-content-container">
      <h1 className="page-title">KONTROLLER</h1>
      <div className="controls-container">
        <ControlButton
          onClick={() => handleClick("lamp")}
          title="Ledler"
          icon={buttonStatus.lamp ? lampColored : lamp}
          status={buttonStatus.lamp}
        />
        <ControlButton
          onClick={() => handleClick("fan")}
          title="Fanlar"
          icon={buttonStatus.fan ? fanColored : fan}
          status={buttonStatus.fan}
        />
      </div>
      <div className="info-container">
        <ControlInfo
          infoName="Sıcaklık"
          infoValue="sicaklik"
          infoUnit="°"
          minVal={10}
          maxVal={35}
          icon={temperature}
        />
        <ControlInfo
          infoName="Nem"
          infoValue="nem"
          infoUnit="%"
          minVal={50}
          maxVal={80}
          icon={humidity}
        />
        <ControlInfo
          infoName="Duman"
          infoValue="gaz"
          infoUnit="ppm"
          minVal={200}
          maxVal={250}
          icon={smoke}
        />
      </div>
    </div>
  );
};

export default NodemcuControls;
