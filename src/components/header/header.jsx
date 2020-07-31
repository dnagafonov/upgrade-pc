import React from "react";
import HeaderNav from "./__nav/header__nav";
import SocialLinks from "../common/social-links/social-links";
import Wrapper from "../common/wrapper/wrapper";

import "./header.scss";

const Header = () => (
  <header className="header media1220">
    <Wrapper>
      <SocialLinks />
      <HeaderNav />
    </Wrapper>
  </header>
);

export default Header;
