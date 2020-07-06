import React from "react";
import PropTypes from "prop-types";
import Image from "../../common/image/image";
import DividerGray from "../../common/divider/_gray/divider_gray";
import PriceOldPrice from "../../common/price-old-price/price-old-price";
import ButtonOrderBig from "../../common/button/__order/_big/button__order_big";

import "./goods-build-info.scss";
import SetList from "../../common/set-list/set-list";

const GoodsBuildInfo = ({ id, img, name, price, oldPrice, lists }) => (
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