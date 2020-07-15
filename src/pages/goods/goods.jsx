import React, { useEffect } from "react";
import Wrapper from "../../components/common/wrapper/wrapper";
import GoodsItems from "./goods__items/goods__items";
import Paths from "../../components/paths/paths";

import "./goods.scss";
import SortGoods from "../../components/sort-goods/sort-goods";

const Goods = ({ items }) => {
  return (
    <main className="goods">
      <Wrapper>
        <Paths />
        <SortGoods />
        <GoodsItems items={items} />
      </Wrapper>
    </main>
  );
};

export default Goods;
