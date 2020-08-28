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
          <meta name="description" content="Upgrade PC — сайт, на которым вы можете купить лучшие комплектующие для компьютера с Aliexpess по лучшим ценам, так же сможете купить уже готовую сборку" />
          <meta property="og:url" content={`https://upgradepc.ru${url}`} />
          <meta property="og:image" content="https://i.ibb.co/BcP1pQZ/og-img.png" />
          <meta property="og:type" content="product.group" />
          <link rel="canonical" href={`https://upgradepc.ru${url}`}/>
        </Helmet>
        <BreadcrumbContainer />
        <SortGoods />
        <GoodsItems items={items} />
      </Wrapper>
      <h1 className="hidden">Upgrade PC — сайт, на которым вы можете купить лучшие комплектующие для компьютера с Aliexpess по лучшим ценам, так же сможете купить уже готовую сборку</h1>
    </main>
  );
};

export default Goods;
