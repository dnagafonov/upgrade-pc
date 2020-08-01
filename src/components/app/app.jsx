import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../header/header";
import HeaderLogo from "../header-logo/header-logo";
import FallBack from "../common/fallback/fallback";
import { ToastContainer } from "react-toastify";
import Wrapper from "../common/wrapper/wrapper";
import PromotionContainer from "../common/promotion/promotion-container";
import Footer from "../footer/footer";
import CategoriesPage from "../../pages/categories-page/categories-page";

import "./app.scss";
import 'react-toastify/dist/ReactToastify.css';
import GoodPage from "../../pages/good-page/good-page";
import GoodsPage from "../../pages/goods-page/goods-page";

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
          <CategoriesPage />
          <GoodPage />
          <GoodsPage />
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
