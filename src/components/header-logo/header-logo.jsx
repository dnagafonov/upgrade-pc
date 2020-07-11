import React from "react";

import "./header-logo.scss";
import { Link } from "react-router-dom";

const HeaderLogo = () => (
  <div className="header-logo">
    <Link to="/" className="link"><h1 className="h1">Upgrade pc</h1></Link>
  </div>
);

export default HeaderLogo;
