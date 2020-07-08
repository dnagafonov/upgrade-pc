import React from "react";
import PropTypes from "prop-types";
import Image from "../../../components/common/image/image";
import DividerGray from "../../../components/common/divider/_gray/divider_gray";
import PriceOldPrice from "../../../components/common/price-old-price/price-old-price";
import SetList from "../../../components/common/set-list/set-list";

import "./goods-build-info.scss";

const GoodsBuildInfo = ({ id, img, name="Название сборки", price="мало", oldPrice="много", lists }) => (
  <div className="goods-build-info">
    <Image src={img} alt={name} width="550" height="550" />
    <div className="goods-build-info__main">
      <div className="name">{name}</div>
        <PriceOldPrice price={price} oldPrice={oldPrice} />
      <DividerGray />
      <SetList lists={lists}/>
    </div>
  </div>
);

GoodsBuildInfo.proptypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  oldPrice: PropTypes.string.isRequired,
  lists: PropTypes.arrayOf({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bestSeller: PropTypes.exact({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      oldPrice: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
    sellers: PropTypes.arrayOf({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      oldPrice: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default GoodsBuildInfo;