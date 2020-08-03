import React from "react";
import Wrapper from "../common/wrapper/wrapper";
import Image from "../common/image/image";
import logo from "@images/logo.png";

import "./footer.scss";
import SocialLinks from "../common/social-links/social-links";
import Note from "../common/note/note";
import { Space } from "antd";
import DividerGray from "../common/divider/_gray/divider_gray";
import FooterCopyright from "./__copyright/footer__copyright";

const Footer = () => (
  <footer className="footer media1220">
    <Wrapper>
      <Space direction="vertical" size="middle">
        <Image src={logo} alt="logo" width="100" />
        <SocialLinks />
        <Note>2eblana@gmail.com</Note>
      </Space>
      <DividerGray />
      <FooterCopyright />
    </Wrapper>
  </footer>
);

export default Footer;
