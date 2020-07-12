import React from "react";
import Wrapper from "../../components/common/wrapper/wrapper";
import GoodsItems from "./goods__items/goods__items";
import Paths from "../../components/paths/paths";

import "./goods.scss";
import SortGoods from "../../components/sort-goods/sort-goods";


const s = [
  {
    img: "https://sun9-48.userapi.com/93DICdQHJliz3BZLjh7A1KkQuCx73kBqnH1F0A/2CU1OKDN2mU.jpg",
    name: "X79 LGAsd",
    price: 3000,
    oldPrice: 3220,
    path: "components/processors/lga2011/1"
  },
  {
    img: "https://sun9-48.userapi.com/93DICdQHJliz3BZLjh7A1KkQuCx73kBqnH1F0A/2CU1OKDN2mU.jpg",
    name: "X79 LGAa",
    price: 3000,
    oldPrice: 3220,
    path: "components/processors/lga2011/1"
  },
  {
    img: "https://sun9-48.userapi.com/93DICdQHJliz3BZLjh7A1KkQuCx73kBqnH1F0A/2CU1OKDN2mU.jpg",
    name: "X79 LGAe",
    price: 3000,
    oldPrice: 3220,
    path: "components/processors/lga2011/1"
  },
  {
    img: "https://sun9-48.userapi.com/93DICdQHJliz3BZLjh7A1KkQuCx73kBqnH1F0A/2CU1OKDN2mU.jpg",
    name: "X79 LGAq",
    price: 3000,
    oldPrice: 3220,
    path: "components/processors/lga2011/1"
  },
  {
    img: "https://sun9-48.userapi.com/93DICdQHJliz3BZLjh7A1KkQuCx73kBqnH1F0A/2CU1OKDN2mU.jpg",
    name: "X79 LGAg",
    price: 3000,
    oldPrice: 3220,
    path: "components/processors/lga2011/1"
  },
  {
    img: "https://sun9-48.userapi.com/93DICdQHJliz3BZLjh7A1KkQuCx73kBqnH1F0A/2CU1OKDN2mU.jpg",
    name: "X79 LGAd",
    price: 3000,
    oldPrice: 3220,
    path: "components/processors/lga2011/1"
  },
  {
    img: "https://sun9-48.userapi.com/93DICdQHJliz3BZLjh7A1KkQuCx73kBqnH1F0A/2CU1OKDN2mU.jpg",
    name: "X79 LGAet",
    price: 3000,
    oldPrice: 3220,
    path: "components/processors/lga2011/1"
  },
  {
    img: "https://sun9-48.userapi.com/93DICdQHJliz3BZLjh7A1KkQuCx73kBqnH1F0A/2CU1OKDN2mU.jpg",
    name: "X79 LGAy",
    price: 3000,
    oldPrice: 3220,
    path: "components/processors/lga2011/1"
  },
  {
    img: "https://sun9-48.userapi.com/93DICdQHJliz3BZLjh7A1KkQuCx73kBqnH1F0A/2CU1OKDN2mU.jpg",
    name: "X79 LGAjh",
    price: 3000,
    oldPrice: 3220,
    path: "components/processors/lga2011/1"
  },
]

const Goods = ({ path }) => {
  return (
    <main className="goods">
      <Wrapper>
        <Paths />
        <SortGoods />
        <GoodsItems items={s} />
      </Wrapper>
    </main>
  );
};

export default Goods;
