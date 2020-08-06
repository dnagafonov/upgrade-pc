import React from "react";
import Wrapper from "../common/wrapper/wrapper";
import GoodsItems from "./__items/goods__items";
import SortGoods from "../sort-goods/sort-goods";
import BreadcrumbContainer from "../breadcrumb/breadcrumb-container";

import "./goods.scss";

const Goods = ({ items }) => {
  return (
    <main className="goods media1220">
      <Wrapper>
        <BreadcrumbContainer />
        <SortGoods />
        <GoodsItems items={items} />
      </Wrapper>
    </main>
  );
};

export default Goods;
