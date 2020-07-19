import React, { useEffect } from "react";
import Wrapper from "../../components/common/wrapper/wrapper";
import GoodsItems from "./__items/goods__items";
import SortGoods from "../../components/sort-goods/sort-goods";
import PathsContainer from "../../components/paths/paths-container";

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
