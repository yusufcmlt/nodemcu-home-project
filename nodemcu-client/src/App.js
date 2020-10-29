import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import "./App.scss";
import Sidebar from "./components/sidebar/Sidebar";
import HomePage from "./pages/homepage/HomePage";
import NodemcuCharts from "./pages/nodemcu-charts/NodemcuCharts";
import NodemcuControls from "./pages/nodemcu-controls/NodemcuControls";

const App = ({ history }) => {
  const [selectedButton, setSelectedButton] = useState("");
  //Getting which button selected from sidebar
  useEffect(() => {
    //Getting pathname and setting button that selected
    setSelectedButton(history.location.pathname.slice(1));
  }, [history.location.pathname]);
  return (
    <div className="app-container">
      <Sidebar selectedButton={selectedButton} />
      <div className="app-content-container">
        <Switch>
          <Route
            exact
            path={process.env.PUBLIC_URL + "/"}
            render={() => {
              return <HomePage />;
            }}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/kontroller"}
            render={() => {
              return <NodemcuControls />;
            }}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/grafikler"}
            render={() => {
              return <NodemcuCharts />;
            }}
          />
          <Route
            render={() => <Redirect to={process.env.PUBLIC_URL + "/"} />}
          />
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(App);
