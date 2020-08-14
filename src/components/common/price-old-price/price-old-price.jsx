import React from "react";
import PropTypes from "prop-types";

import "./price-old-price.scss";

const PriceOldPrice = ({ price, oldPrice }) => {
  return (
    <div className="price-old-price">
      <div className="price">{`${price} руб`}</div>
      { oldPrice && <div className="oldPrice">{`${oldPrice} руб`}</div > }
    </div>
  );
};

PriceOldPrice.propTypes = {
  price: PropTypes.number.isRequired,
  oldPrice: PropTypes.number,
};

export default PriceOldPrice;
