import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "../header/header";
import HeaderLogoContainer from "../header-logo/header-logo-container";
import FallBack from "../common/fallback/fallback";
import { ToastContainer } from "react-toastify";
import Footer from "../footer/footer";
import ScrollToTop from "../common/scroll-to-top/scroll-to-top";

import "react-toastify/dist/ReactToastify.css";
import "./app.scss";

const CategoriesContainer = React.lazy(() => import("../categories/categories-container"));
const GoodsContainer = React.lazy(() => import("../goods/goods-container"));
const GoodContainer = React.lazy(() => import("../good/good-container"));
const GoodsBuild = React.lazy(() => import("../goods-build/goods-build-container"));
const NotFound = React.lazy(() => import("../not-found/not-found"));
const Home = React.lazy(() => import("../home/home"));

//FIX
const App = () => {
  return (
    <div className="app">
      <Router>
        <HeaderLogoContainer />
        <Header />
        <Suspense fallback={<FallBack />}>
          <Switch>
            {pages
              .map(({ component, paths }) =>
                paths.map((path) => (
                  <Route exact path={path} component={component} key={path} />
                ))
              )
              .flat()}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
          <ScrollToTop />
          <ToastContainer limit={3} />
        </Suspense>
      </Router>
    </div>
  );
};

const pages = [
  {
    component: CategoriesContainer,
    paths: [
      "/components",
      "/components/processors",
      "/components/motherboards",
      "/components/ram",
    ],
  },
  {
    component: GoodContainer,
    paths: [
      "/components/processors/lga2011/:id",
      "/components/processors/v3/:id",
      "/components/motherboards/lga2011/:id",
      "/components/motherboards/v3/:id",
      "/components/ram/ddr3/:id",
      "/components/ram/ddr4/:id",
      "/components/ram/server-ddr3/:id",
      "/components/videocards/all/:id",
    ],
  },
  {
    component: GoodsBuild,
    paths: ["/sets/:id"],
  },
  {
    component: GoodsContainer,
    paths: [
      "/sets",
      "/components/processors/lga2011",
      "/components/processors/v3",
      "/components/motherboards/lga2011",
      "/components/motherboards/v3",
      "/components/ram/ddr3",
      "/components/ram/server-ddr3",
      "/components/ram/ddr4",
      "/components/videocards/all",
    ],
  },
  {
    component: NotFound,
    paths: ["/404"],
  },
];

export default React.memo(App);
