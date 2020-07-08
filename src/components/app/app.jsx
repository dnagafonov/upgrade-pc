import React, { useState, useEffect } from "react";
import Header from "../header/header";
import HeaderLogo from "../header-logo/header-logo";
import Good from "../../pages/good/good";
import GoodsBuild from "../../pages/goods-build/goods-build";
import { useComponents, useSets } from "../../tools/hooks";

import "./app.scss";

const App = () => {
  const g = useComponents("processors/lga2011/1");
  const g2 = useSets("1");
  return (
    <div className="app">
      <HeaderLogo />
      <Header />
      <div className="wrapper">
        <pre>Комплектующие / процессоры / XFX RX 580 8GB 2304 256bit GDDR5</pre>{" "}
      </div>
      <GoodsBuild {...g2} />
    </div>
  );
};

export default App;
