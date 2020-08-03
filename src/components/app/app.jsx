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

const NotFound = React.lazy(() => import("../not-found/not-found"));
const PagesRoutes = React.lazy(() => import("../../pages/pages-routes"));

const App = () => {
  return (
    <Router>
      <div className="app">
        <HeaderLogo />
        <Header />
        <Suspense fallback={<FallBack />}>
          <Switch>
            <Route exact path="/">
              <Wrapper>
                <PromotionContainer />
              </Wrapper>
            </Route>
            <PagesRoutes />
          </Switch>
          <Footer />
          <ToastContainer limit={3} />
        </Suspense>
      </div>
    </Router>
  );
};

export default React.memo(App);
