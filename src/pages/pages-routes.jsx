import React from "react";
import { Route } from "react-router-dom";

import CategoriesContainer from "../components/categories/categories-container";
import GoodsContainer from "../components/goods/goods-container";
import GoodContainer from "../components/good/good-container";
import NotFound from "../components/not-found/not-found";

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
    paths: [
      "/components/processors/lga2011/:id",
      "/components/ram/ddr3/:id",
      "/sets/:id",
    ],
  },
  {
    component: GoodsContainer,
    paths: ["/sets", "/components/ram/ddr3", "/components/processors/lga2011"],
  },
  {
    component: NotFound,
    paths: ["/404"]
  }
];

const PagesRoutes = ({ pages = p2 }) => {
  const routes = pages.map(({ component, paths }) =>
  paths.map((path) => (
    <Route exact path={path} component={component} key={path} />
  ))).flat();
  return (
    <>
      {routes}
    </>
  );
};

export default PagesRoutes;
