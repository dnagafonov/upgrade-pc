import React from "react";
import PropTypes from "prop-types";
import Image from "../common/image/image";
import Note from "../common/note/note";
import PriceOldPrice from "../common/price-old-price/price-old-price";

import "./good-item.scss";

const GoodItem = ({ img, name="название", price="мало", oldPrice="много", onClick, path }) => (
  <div className="good-item">
    <Image src={img} alt={name} width="260" height="260" />
    <Note>{name}</Note>
    <PriceOldPrice price={price} oldPrice={oldPrice} />
  </div>
);

GoodItem.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  oldPrice: PropTypes.string.isRequired,
};

export default GoodItem;