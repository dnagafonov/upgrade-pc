import React from "react";
import Layout from "../../common/layout/layout";
import Note from "../../common/note/note";

import "./header__nav.scss";

const HeaderNav = () => {
  const pages = [
    { name: "Готовые сборки" },
    { name: "Комплектующие" },
    { name: "Игровые девайсы" },
  ];
  return (
    <Layout className="header__nav">
      {pages.map((e) => (
        <Note className="header__nav-page">{e.name}</Note>
      ))}
    </Layout>
  );
};

export default HeaderNav;
