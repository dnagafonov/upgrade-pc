import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../header/header";
import HeaderLogo from "../header-logo/header-logo";
import FallBack from "../common/fallback/fallback";
import { ToastContainer } from "react-toastify";

import "./app.scss";
import 'react-toastify/dist/ReactToastify.css';

const GoodContainer = React.lazy(() => import("../../pages/good/good-container"));
const GoodsBuildContainer = React.lazy(() => import("../../pages/goods-build/goods-build-container/goods-build-container"));
const NotFound = React.lazy(() => import("../../pages/not-found/not-found"));
const GoodsContainer = React.lazy(() => import("../../pages/goods/goods-container"));

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
          <Route exact path="/components/processors/lga2011">
            <Suspense fallback={<FallBack />}>
              <GoodsContainer />
            </Suspense>
          </Route>
          <Route exact path="/components/ram/ddr3">
            <Suspense fallback={<FallBack />}>
              <GoodsContainer />
            </Suspense>
          </Route>
          <Route exact path="/components/processors/lga2011/:id">
            <Suspense fallback={<FallBack />}>
              <GoodContainer />
            </Suspense>
          </Route>
          <Route exact path="/components/ram/ddr3/:id">
            <Suspense fallback={<FallBack />}>
              <GoodContainer />
            </Suspense>
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
        <ToastContainer limit={3} />
      </div>
    </Router>
  );
};

export default App;
