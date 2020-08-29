import React from "react";
import Wrapper from "../common/wrapper/wrapper";
import Image from "../common/image/image";
import logo from "@images/logo.svg";
import SocialLinks from "../common/social-links/social-links";
import Note from "../common/note/note";
import { Space } from "antd";
import DividerGray from "../common/divider/_gray/divider_gray";
import FooterCopyright from "./__copyright/footer__copyright";
import { Link } from "react-router-dom";

import "./footer.scss";

const Footer = () => (
  <footer className="footer media1220">
    <Wrapper>
      <Space direction="vertical" size={10}>
        <Link to="/" className="link">
          <Image src={logo} alt="logo" width="130" />
        </Link>
        <SocialLinks />
        <Note>support@upgradepc.ru</Note>
      </Space>
      <DividerGray />
      <FooterCopyright />
    </Wrapper>
  </footer>
);

export default Footer;
