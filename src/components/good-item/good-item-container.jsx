import React from 'react'
import GoodItem from "./good-item";
import PropTypes from "prop-types";

const GoodItemContainer = ({ img, name = "название", price = "мало", oldPrice = "много", path }) => {
  return <GoodItem img={img} name={name} price={price} oldPrice={oldPrice} path={path} />;
};

GoodItemContainer.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  oldPrice: PropTypes.number.isRequired,
  path: PropTypes.string.isRequired
};

export default GoodItemContainer;