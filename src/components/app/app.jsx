import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../header/header";
import HeaderLogo from "../header-logo/header-logo";
import GoodsBuildContainer from "../../pages/goods-build/goods-build-container/goods-build-container";
import FallBack from "../common/fallback/fallback";
import Good from "../../pages/good/good";
import { useComponents } from "../../tools/hooks";

import "./app.scss";

const NotFound = React.lazy(() => import("../../pages/not-found/not-found"));
const Goods = React.lazy(() => import("../../pages/goods/goods"));

const App = () => {
  return (
    <Router>
      <div className="app">
        <HeaderLogo />
        <Header />
        <Switch>
          <Route exact path="/">
            <div>Home</div>
          </Route>
          <Route exact path="/sets">
            <div>sets</div>
          </Route>
          <Route exact path="/components">
            <Suspense fallback={<FallBack />}>
              <Goods path="/components" />
            </Suspense>
          </Route>
          <Route exact path="/sets/:id">
            <GoodsBuildContainer />
          </Route>
          <Route exact path="/components/processors/lga2011/1">
            <Good />
          </Route>
          <Route path="/404">
            <Suspense fallback={<FallBack />}>
              <NotFound />
            </Suspense>
          </Route>
          <Route path="*">
            <Suspense fallback={<FallBack />}>
              <NotFound />
            </Suspense>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
