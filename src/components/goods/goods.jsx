import React, { useEffect } from "react";
import Wrapper from "../common/wrapper/wrapper";
import GoodsItems from "./__items/goods__items";
import SortGoods from "../sort-goods/sort-goods";
import PathsContainer from "../paths/paths-container";

import "./goods.scss";

const Goods = ({ items }) => {
  return (
    <main className="goods">
      <Wrapper>
        <PathsContainer />
        <SortGoods />
        <GoodsItems items={items} />
      </Wrapper>
    </main>
  );
};

export default Goods;
