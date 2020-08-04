import React from "react";
import { Link } from "react-router-dom";
import Image from "../common/image/image";
import logo from "@images/logo.svg";

import "./header-logo.scss";

const HeaderLogo = () => (
  <div className="header-logo">
    <Link to="/" className="link"><Image src={logo} alt="logo" /></Link>
  </div>
);

export default HeaderLogo;
