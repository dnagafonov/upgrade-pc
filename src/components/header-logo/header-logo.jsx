import React from "react";
import { Link } from "react-router-dom";
import Image from "../common/image/image";
import logo from "@images/logo.svg";
import Button from "../common/button/button";
import { UnorderedListOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import HeaderLogoTitle from "./header-logo__title/header-logo__title";

import "./header-logo.scss";
import HeaderNav from "../header/-nav/header-nav";

const HeaderLogo = ({ openDrawer, visible }) => (
  <div className="header-logo media1220">
    <Link to="/" className="link">
      <Image src={logo} alt="logo" width="130" />
    </Link>
    <Button onClick={openDrawer}>
      <UnorderedListOutlined />
    </Button>
    <Drawer
      className="drawer"
      title={<HeaderLogoTitle openDrawer={openDrawer} />}
      placement="right"
      closable={false}
      onClose={openDrawer}
      visible={visible}
    >
      <HeaderNav />
    </Drawer>
  </div>
);

export default HeaderLogo;
