import React from "react";
import HeaderLinks from "./__links/header__links";
import HeaderNav from "./__nav/header__nav";
import s from "@images/search.svg";
import Wrapper from "../common/wrapper/wrapper";

import "./header.scss";

const Header = () => (
  <header className="header">
    <Wrapper>
      <HeaderLinks />
      <HeaderNav />
      <img src={s} alt="search" />
    </Wrapper>
  </header>
);

export default Header;
