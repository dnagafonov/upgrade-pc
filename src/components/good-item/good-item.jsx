import React from "react";
import PropTypes from "prop-types";
import Image from "../common/image/image";
import Note from "../common/note/note";
import PriceOldPrice from "../common/price-old-price/price-old-price";
import Button from "../common/button/button";
import { Link } from "react-router-dom";

import "./good-item.scss";

const GoodItem = ({ img, name, price, oldPrice, path }) => (
  <div className="good-item">
    <Image src={img} alt={name} width="260" />
    <Link to={path}>
      <Button>→</Button>
    </Link>
    <Note>{name}</Note>
    <PriceOldPrice price={price} oldPrice={oldPrice} />
  </div>
);

GoodItem.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  oldPrice: PropTypes.number,
  path: PropTypes.string.isRequired,
};

export default GoodItem;
