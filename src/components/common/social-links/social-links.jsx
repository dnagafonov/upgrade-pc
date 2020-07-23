import React from "react";
import inst from "@images/instagram.svg";
import vk from "@images/vk.svg";
import telegram from "@images/telegram.svg";
import Image from "../image/image";
import { Space } from "antd";
import Link from "../link/link";

import "./social-links.scss";

const SocialLinks = () => (
  <Space className="social-links" direction="horizontal" size={10}>
    <Link href="https://www.instagram.com/v.margo.v/">
      <Image className="social-link" src={inst} alt="insta" width="24" height="24" />
    </Link>
    <Link href="https://vk.com/im">
      <Image className="social-link" src={vk} alt="vk" width="24" height="24" />
    </Link>
    <Link href="https://t.me/dnagafonov">
      <Image className="social-link" src={telegram} alt="telegram" width="24" height="24" />
    </Link>
  </Space>
);

export default SocialLinks;
