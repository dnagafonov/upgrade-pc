import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../header/header";
import HeaderLogo from "../header-logo/header-logo";
import Good from "../../pages/good/good";
import GoodsBuild from "../../pages/goods-build/goods-build";
import Goods from "../../pages/goods/goods";
import { useComponents, useSets } from "../../tools/hooks";

import "./app.scss";
import FallBack from "../common/fallback/fallback";

const NotFound = React.lazy(() => import("../../pages/not-found/not-found"));

const App = () => {
  const set = useSets("1");
  const good = useComponents("processors/lga2011/1");
  return (
    <Router>
      <div className="app">
        <HeaderLogo />
        <Header />
        <Switch>

          <Route path="/ass/1">
            <Good {...good}/>
          </Route>
          <Route path="/ass/2">
            <GoodsBuild {...set}/>
          </Route>
          <Route path="*">
            <Suspense fallback={<FallBack />}><NotFound /></Suspense>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
