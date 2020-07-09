import React from "react";
import Layout from "../../common/layout/layout";
import Note from "../../common/note/note";

import "./header__nav.scss";
import { Link } from "react-router-dom";

const HeaderNav = () => {
  const pages = [
    { name: "Готовые сборки", href: "/sets" },
    { name: "Комплектующие", href: "/components" },
    { name: "Игровые девайсы", href: "/devices" },
  ];
  return (
    <Layout className="header__nav">
      {pages.map((e) => (
        <Link to={e.href} key={e.name} className="header__nav-page link"><Note>{e.name}</Note></Link>
      ))}
    </Layout>
  );
};

export default HeaderNav;
