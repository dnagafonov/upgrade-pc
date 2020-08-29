import React from "react";
import logo from "@images/logo.svg";
import Image from "../common/image/image";

import "./preloader.scss";

const Preloader = () => (
  <div className="preloader">
    <img src={logo} alt="logo" width="130" />
  </div>
);

export default Preloader;