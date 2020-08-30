import React from "react";
import logo from "@images/logo.svg";

import "./preloader.scss";

const Preloader = () => (
  <div className="preloader">
    <img src={logo} alt="logo" width="130px" />
  </div>
);

export default Preloader;