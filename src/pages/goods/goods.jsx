import React from "react";
import Wrapper from "../../components/common/wrapper/wrapper";
import GoodsItems from "./goods__items/goods__items";
import Paths from "../../components/paths/paths";

import "./goods.scss";


const s = [
  {
    img: "https://sun9-48.userapi.com/93DICdQHJliz3BZLjh7A1KkQuCx73kBqnH1F0A/2CU1OKDN2mU.jpg",
    name: "X79 LGA",
    price: 3000,
    oldPrice: 3220,
    path: "components/processors/lga2011/1"
  },
  {
    img: "https://sun9-48.userapi.com/93DICdQHJliz3BZLjh7A1KkQuCx73kBqnH1F0A/2CU1OKDN2mU.jpg",
    name: "X79 LGA",
    price: 3000,
    oldPrice: 3220,
    path: "components/processors/lga2011/1"
  },
  {
    img: "https://sun9-48.userapi.com/93DICdQHJliz3BZLjh7A1KkQuCx73kBqnH1F0A/2CU1OKDN2mU.jpg",
    name: "X79 LGA",
    price: 3000,
    oldPrice: 3220,
    path: "components/processors/lga2011/1"
  },
  {
    img: "https://sun9-48.userapi.com/93DICdQHJliz3BZLjh7A1KkQuCx73kBqnH1F0A/2CU1OKDN2mU.jpg",
    name: "X79 LGA",
    price: 3000,
    oldPrice: 3220,
    path: "components/processors/lga2011/1"
  },
  {
    img: "https://sun9-48.userapi.com/93DICdQHJliz3BZLjh7A1KkQuCx73kBqnH1F0A/2CU1OKDN2mU.jpg",
    name: "X79 LGA",
    price: 3000,
    oldPrice: 3220,
    path: "components/processors/lga2011/1"
  },
  {
    img: "https://sun9-48.userapi.com/93DICdQHJliz3BZLjh7A1KkQuCx73kBqnH1F0A/2CU1OKDN2mU.jpg",
    name: "X79 LGA",
    price: 3000,
    oldPrice: 3220,
    path: "components/processors/lga2011/1"
  },
  {
    img: "https://sun9-48.userapi.com/93DICdQHJliz3BZLjh7A1KkQuCx73kBqnH1F0A/2CU1OKDN2mU.jpg",
    name: "X79 LGA",
    price: 3000,
    oldPrice: 3220,
    path: "components/processors/lga2011/1"
  },
  {
    img: "https://sun9-48.userapi.com/93DICdQHJliz3BZLjh7A1KkQuCx73kBqnH1F0A/2CU1OKDN2mU.jpg",
    name: "X79 LGA",
    price: 3000,
    oldPrice: 3220,
    path: "components/processors/lga2011/1"
  },
  {
    img: "https://sun9-48.userapi.com/93DICdQHJliz3BZLjh7A1KkQuCx73kBqnH1F0A/2CU1OKDN2mU.jpg",
    name: "X79 LGA",
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
        <GoodsItems items={s} />
      </Wrapper>
    </main>
  );
};

export default Goods;
