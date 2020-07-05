import React from "react";
import Layout from "../../common/layout/layout";
import inst from "@images/instagram.svg";
import vk from "@images/vk.svg";
import Image from "../../common/image/image";

import "./header__links.scss";

const HeaderLinks = () => (
  <Layout className="header__links">
    <Image className="header__link" src={inst} alt="insta" width="24" height="24"/>
    <Image className="header__link" src={vk} alt="vk" width="24" height="24"/>
  </Layout>
);

export default HeaderLinks;