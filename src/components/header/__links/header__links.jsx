import React from "react";
import Layout from "../../common/layout/layout";
import inst from "@images/instagram.svg";
import vk from "@images/vk.svg";

import "./header__links.scss";

const HeaderLinks = () => (
  <Layout className="header__links">
    <img className="header__link" src={inst} alt="insta" />
    <img className="header__link" src={vk} alt="vk" />
  </Layout>
);

export default HeaderLinks;