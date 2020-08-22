import React from "react";
import Wrapper from "../common/wrapper/wrapper";
import GoodsItems from "./__items/goods__items";
import SortGoods from "../sort-goods/sort-goods";
import BreadcrumbContainer from "../breadcrumb/breadcrumb-container";
import { Helmet } from "react-helmet-async";

import "./goods.scss";

const Goods = ({ items, url }) => {
  return (
    <main className="goods media1220">
      <Wrapper>
        <Helmet>
          <meta property="og:url" content={`https://www.upgradepc.ru${url}`} />
          <meta property="og:type" content="product.group" />
        </Helmet>
        <BreadcrumbContainer />
        <SortGoods />
        <GoodsItems items={items} />
      </Wrapper>
    </main>
  );
};

export default Goods;
