import React from "react";
import { withRouter } from "react-router-dom";
import SidebarButton from "../sidebar-button/SidebarButton";

import "./Sidebar-style.scss";
const Sidebar = ({ history, selectedButton }) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <div className="nodemcu-image" />
        <h1 className="nodemcu-title">NODEMCU ARAYUZ</h1>
      </div>
      <div className="route-buttons-container">
        <SidebarButton
          onClick={() => {
            history.push(process.env.PUBLIC_URL + "/");
          }}
          selected={!selectedButton ? true : false}
        >
          Anasayfa
        </SidebarButton>
        <SidebarButton
          onClick={() => {
            history.push(process.env.PUBLIC_URL + "/kontroller");
          }}
          selected={selectedButton === "kontroller" ? true : false}
        >
          Kontroller
        </SidebarButton>
        <SidebarButton
          onClick={() => {
            history.push(process.env.PUBLIC_URL + "/grafikler");
          }}
          selected={selectedButton === "grafikler" ? true : false}
        >
          Grafikler
        </SidebarButton>
      </div>
      <div className="sidebar-links-container">
        <a
          className="github-link"
          href="https://github.com/akdagosman/Home-automation/tree/client-refactor"
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
