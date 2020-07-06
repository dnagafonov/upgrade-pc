import React from "react";
import PropTypes from "prop-types";
import Image from "../../common/image/image";
import DividerGray from "../../common/divider/_gray/divider_gray";
import PriceOldPrice from "../../common/price-old-price/price-old-price";
import ButtonOrderBig from "../../common/button/__order/_big/button__order_big";

import "./good-info.scss";

const GoodInfo = ({ id, href, img, name, price, oldPrice, description }) => (
  <div className="good-info">
    <Image src={img} alt={name} width="550" height="550" />
    <div className="good-info__main">
      <div className="name">{name}</div>
      <div className="buy">
        <PriceOldPrice price={price} oldPrice={oldPrice} />
        <ButtonOrderBig href={href}>Заказать с Aliexpress</ButtonOrderBig>
      </div>
      <DividerGray />
      <pre className="pre">{description}</pre>
    </div>
  </div>
);

GoodInfo.proptypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  oldPrice: PropTypes.string.isRequired
};

export default GoodInfo;
