import React from "react";
import GoodItem from "../../../components/good-item/good-item";
import { useRouteMatch } from "react-router";

import "./goods__items";

const GoodsItems = ({ items = [] }) => {
  let { path, url } = useRouteMatch();
  console.log(2,path, url);
  return (
    <section className="goods__items">
      {items.map((e) => (
        <GoodItem {...e} />
      ))}
    </section>
  );
};

export default GoodsItems;
