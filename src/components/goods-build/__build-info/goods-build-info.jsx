import React from "react";
import Image from "../../../components/common/image/image";
import DividerGray from "../../../components/common/divider/_gray/divider_gray";
import PriceOldPrice from "../../../components/common/price-old-price/price-old-price";
import SetListContainer from "../../common/set-list/set-list-container";
import Note from "../../../components/common/note/note";

import "./goods-build-info.scss";

const GoodsBuildInfo = ({ img, name, price, oldPrice, lists }) => (
  <section className="goods-build-info">
    <Image className="goods-build__image" src={img} alt={name} width="550px" />
    <article className="goods-build-info__main">
      <h1 className="hidden">{name}</h1>
      <div className="name">{name}</div>
      <PriceOldPrice price={price} oldPrice={oldPrice} />
      <DividerGray />
      <Note>Купить комплектующие:</Note>
      <SetListContainer lists={lists} />
    </article>
  </section>
);


export default GoodsBuildInfo;