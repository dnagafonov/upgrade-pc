import React from "react";
import PropTypes from "prop-types";
import Image from "../common/image/image";
import Note from "../common/note/note";
import PriceOldPrice from "../common/price-old-price/price-old-price";

import "./good-item.scss";

const GoodItem = ({ img, name, price, oldPrice, redirect }) => (
  <div className="good-item" onClick={redirect}>
    <Image src={img} alt={name} width="260" />
    <Note>{name}</Note>
    <PriceOldPrice price={price} oldPrice={oldPrice} />
  </div>
);

GoodItem.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  oldPrice: PropTypes.number.isRequired,
  redirect: PropTypes.func.isRequired  
};

export default GoodItem;