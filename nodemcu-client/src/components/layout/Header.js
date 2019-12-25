import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

export default function Header() {
  return (
    <header>
      <Link className="text-decoration-none text-danger" to="">
        <h1 className="display-3">NodeMcu Kontrol Paneli</h1>
      </Link>
      <div className="Grid-container">
        <Link type="button" to="/" className="btn btn-lg btn-warning m-2">
          Kontroller
        </Link>
        <Link
          type="button"
          to="/grafikler"
          className="btn btn-lg btn-danger m-2"
        >
          Grafikler
        </Link>
      </div>
    </header>
  );
}
