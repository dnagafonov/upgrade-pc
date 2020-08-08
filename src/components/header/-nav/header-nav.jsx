import React from "react";
import Layout from "../../common/layout/layout";
import Note from "../../common/note/note";
import { Link } from "react-router-dom";

import "./header-nav.scss";

const HeaderNav = () => {
  const pages = [
    { name: "Готовые сборки", href: "/sets" },
    { name: "Комплектующие", href: "/components" },
    { name: "Игровые девайсы", href: "/devices" },
  ];
  return (
    <Layout className="header-nav">
      {pages.map((e) => (
        <Link to={e.href} key={e.name} className="header-nav-page link"><Note>{e.name}</Note></Link>
      ))}
    </Layout>
  );
};

export default HeaderNav;
