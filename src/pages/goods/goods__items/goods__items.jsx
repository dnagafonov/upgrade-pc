import React from "react";
import GoodItemContainer from "../../../components/good-item/good-item-container/good-item-container";

import "./goods__items.scss";

const GoodsItems = ({ items = [] }) => {
  return (
    <section className="goods__items">
      {items.map((e) => (
        <GoodItemContainer {...e} />
      ))}
    </section>
  );
};

export default GoodsItems;
