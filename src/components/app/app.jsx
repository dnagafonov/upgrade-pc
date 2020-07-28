import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../header/header";
import HeaderLogo from "../header-logo/header-logo";
import FallBack from "../common/fallback/fallback";
import { ToastContainer } from "react-toastify";
import Wrapper from "../common/wrapper/wrapper";
import PromotionContainer from "../common/promotion/promotion-container";

import "./app.scss";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../footer/footer";

const CategoriesContainer = React.lazy(() => import("../categories/categories-container"));
const GoodContainer = React.lazy(() => import("../good/good-container"));
const GoodsBuildContainer = React.lazy(() => import("../goods-build/goods-build-container"));
const NotFound = React.lazy(() => import("../not-found/not-found"));
const GoodsContainer = React.lazy(() => import("../goods/goods-container"));

const App = () => {
  return (
    <Router>
      <div className="app">
        <HeaderLogo />
        <Header />
        <Switch>
          <Route exact path="/">
            <Wrapper>
              <PromotionContainer />
            </Wrapper>
          </Route>
          <Route exact path="/sets">
            <Suspense fallback={<FallBack />}>
              <GoodsContainer />
            </Suspense>
          </Route>
          <Route exact path="/sets/:id">
            <Suspense fallback={<FallBack />}>
              <GoodsBuildContainer />
            </Suspense>
          </Route>
          <Route exact path="/components">
            <Suspense fallback={<FallBack />}>
              <CategoriesContainer />
            </Suspense>
          </Route>
          <Route exact path="/components/processors">
            <Suspense fallback={<FallBack />}>
              <CategoriesContainer />
            </Suspense>
          </Route>
          <Route exact path="/components/motherboard">
            <Suspense fallback={<FallBack />}>
              <CategoriesContainer />
            </Suspense>
          </Route>
          <Route exact path="/components/ram">
            <Suspense fallback={<FallBack />}>
              <CategoriesContainer />
            </Suspense>
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
        <Footer />
        <ToastContainer limit={3} />
      </div>
    </Router>
  );
};

export default App;
