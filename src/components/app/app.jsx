import React, { useState } from "react";

import "./app.scss";
import Header from "../header/header";
import HeaderLogo from "../header-logo/header-logo";

const App = () => {
  return (
    <div className="app">
      <HeaderLogo />
      <Header />
    </div>
  );
};

export default App;
