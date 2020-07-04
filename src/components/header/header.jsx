import React from "react";

import "./header.scss";
import HeaderLinks from "./__links/header__links";
import HeaderNav from "./__nav/header__nav";
import s from "@images/search.svg";

const Header = () => (
  <header className="header">
    <div className="wrapper">
      <HeaderLinks />
      <HeaderNav />
      <img src={s} alt="search"/>
    </div>
  </header>
);

export default Header;
