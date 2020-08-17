import React from "react";
import Note from "../../common/note/note";
import { Link } from "react-router-dom";
import { Space } from "antd";

import "./header-nav.scss";

const HeaderNav = () => {
  const pages = [
    { name: "Готовые сборки", href: "/sets" },
    { name: "Комплектующие", href: "/components" },
    { name: "Игровые девайсы", href: "/devices" },
  ];
  return (
    <Space size={20} className="header-nav">
      {pages.map((e) => (
        <Link to={e.href} key={e.name} className="header-nav-page link"><Note>{e.name}</Note></Link>
      ))}
    </Space>
  );
};

export default HeaderNav;
