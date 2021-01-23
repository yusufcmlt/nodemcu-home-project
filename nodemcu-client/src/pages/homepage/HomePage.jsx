import React from "react";
import "./HomePage-style.scss";
const HomePage = () => {
  return (
    <div className="homepage-container">
      <h1 className="page-title">NodeMCU Smart Home Prototype Web UI</h1>
      <div className="homepage-text">
        <h2>What is NodeMCU?</h2>
        <p>
          The NodeMCU (Node MicroController Unit) is an open-source software and
          hardware development environment built around an inexpensive
          System-on-a-Chip (SoC) called the ESP8266. The ESP8266, designed and
          manufactured by Espressif Systems, contains the crucial elements of a
          computer: CPU, RAM, networking (WiFi), and even a modern operating
          system and SDK. That makes it an excellent choice for the Internet of
          Things (IoT) projects of all kinds.
        </p>
        <h2>About This Project</h2>
        <p>
          In this project, we tried to control various devices, gather and
          visualize sensor informations using NodeMCU, React and Firebase. You
          can use menu to access relevant pages and Github logo for project's
          source.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
