import React from "react";
import PropTypes from "prop-types";
import Image from "../common/image/image";
import Note from "../common/note/note";
import PriceOldPriceList from "../common/price-old-price/__list/price-old-price__list";

import "./good-item.scss";

const GoodItem = ({ img, name, price, oldPrice }) => (
  <div className="good-item">
    <Image src={img} alt={name} width="260" height="260" />
    <Note>{name}</Note>
    <PriceOldPriceList price={price} oldPrice={oldPrice} />
  </div>
);

GoodItem.proptypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  oldPrice: PropTypes.string.isRequired,
};

export default GoodItem;