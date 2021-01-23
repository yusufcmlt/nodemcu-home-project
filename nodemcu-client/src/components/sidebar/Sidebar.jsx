import React from "react";
import { withRouter } from "react-router-dom";
import SidebarButton from "../sidebar-button/SidebarButton";
import nodemcuImage from "../../assets/esp8266_nodemcu.png";

import "./Sidebar-style.scss";
const Sidebar = ({ history, selectedButton }) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <img
          src={nodemcuImage}
          alt="nodemcu"
          className="nodemcu-image-sidebar"
        />
        <h1 className="nodemcu-title">NodeMCU Web</h1>
      </div>
      <div className="route-buttons-container">
        <SidebarButton
          onClick={() => {
            history.push(process.env.PUBLIC_URL + "/");
          }}
          selected={!selectedButton ? true : false}
        >
          Home
        </SidebarButton>
        <SidebarButton
          onClick={() => {
            history.push(process.env.PUBLIC_URL + "/kontroller");
          }}
          selected={selectedButton === "kontroller" ? true : false}
        >
          Controls
        </SidebarButton>
        <SidebarButton
          onClick={() => {
            history.push(process.env.PUBLIC_URL + "/grafikler");
          }}
          selected={selectedButton === "grafikler" ? true : false}
        >
          Charts
        </SidebarButton>
      </div>
      <div className="sidebar-links-container">
        <a
          className="github-link"
          href="https://github.com/yusufcmlt/nodemcu-home-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          {""}
        </a>
      </div>
    </div>
  );
};

export default withRouter(Sidebar);
