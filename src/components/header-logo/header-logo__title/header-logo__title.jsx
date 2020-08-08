import React from "react";
import Button from "../../common/button/button";
import { UnorderedListOutlined } from "@ant-design/icons";
import SocialLinks from "../../common/social-links/social-links";

import "./header-logo__title.scss";

const HeaderLogoTitle = ({ openDrawer }) => (
  <div className="header-logo__title">
    <SocialLinks />
    <Button onClick={openDrawer}>
      <UnorderedListOutlined />
    </Button>
  </div>
);

export default HeaderLogoTitle;
