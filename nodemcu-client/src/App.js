import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Kontroller from "./components/pages/Kontroller";
import Grafikler from "./components/pages/Grafikler";
//import firebase from "./firebase.js";
//import {Link} from 'react-router-dom';

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route exact path="/" component={Kontroller} />
          <Route path="/grafikler" component={Grafikler} />
        </div>
      </div>
    </Router>
  );
}

export default App;
