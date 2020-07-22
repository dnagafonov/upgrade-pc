import React from "react";
import HeaderNav from "./__nav/header__nav";
import SocialLinks from "../common/social-links/social-links";
import Wrapper from "../common/wrapper/wrapper";
import search from "@images/search.svg";

import "./header.scss";

const Header = () => (
  <header className="header media1220">
    <Wrapper>
      <SocialLinks />
      <HeaderNav />
      <img src={search} alt="search" />
    </Wrapper>
  </header>
);

export default Header;
