import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../header/header";
import HeaderLogo from "../header-logo/header-logo";
import GoodsBuildContainer from "../../pages/goods-build/goods-build-container/goods-build-container";
import FallBack from "../common/fallback/fallback";

import "./app.scss";

const NotFound = React.lazy(() => import("../../pages/not-found/not-found"));

const App = () => {
  return (
    <Router>
      <div className="app">
        <HeaderLogo />
        <Header />
        <Switch>
          <Route path="/sets/:id">
            <GoodsBuildContainer />
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
