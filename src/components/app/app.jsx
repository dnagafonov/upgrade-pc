import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from "../header/header";
import HeaderLogo from "../header-logo/header-logo";
import FallBack from "../common/fallback/fallback";
import { ToastContainer } from "react-toastify";
import Wrapper from "../common/wrapper/wrapper";
import PromotionContainer from "../common/promotion/promotion-container";
import Footer from "../footer/footer";

import "react-toastify/dist/ReactToastify.css";
import "./app.scss";

const CategoriesContainer = React.lazy(() => import( "../categories/categories-container"));
const GoodsContainer = React.lazy(() => import( "../goods/goods-container"));
const GoodContainer = React.lazy(() => import( "../good/good-container"));
const GoodsBuild = React.lazy(() => import( "../goods-build/goods-build-container"));
const NotFound = React.lazy(() => import("../not-found/not-found"));

//FIX
const App = () => {
  return (
    <Router>
      <div className="app">
        <HeaderLogo />
        <Header />
        <Suspense fallback={<FallBack />}>
          <Switch>
            {p2.map(({ component, paths }) =>
              paths.map((path) => (
                <Route exact path={path} component={component} key={path} />
              ))).flat()
            }
            <Route exact path="/">
              <Wrapper>
                <PromotionContainer />
              </Wrapper>
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
          <ToastContainer limit={3} />
        </Suspense>
      </div>
    </Router>
  );
};

const p2 = [
  {
    component: CategoriesContainer,
    paths: [
      "/components",
      "/components/processors",
      "/components/motherboard",
      "/components/ram",
    ],
  },
  {
    component: GoodContainer,
    paths: ["/components/processors/lga2011/:id", "/components/ram/ddr3/:id"],
  },
  {
    component: GoodsBuild,
    paths: ["/sets/:id"],
  },
  {
    component: GoodsContainer,
    paths: ["/sets", "/components/ram/ddr3", "/components/processors/lga2011"],
  },
  {
    component: NotFound,
    paths: ["/404"],
  },
];

export default React.memo(App);
