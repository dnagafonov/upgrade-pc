import React from "react";
import PropTypes from "prop-types";
import Image from "../../../components/common/image/image";
import DividerGray from "../../../components/common/divider/_gray/divider_gray";
import PriceOldPrice from "../../../components/common/price-old-price/price-old-price";
import ButtonOrderBig from "../../../components/common/button/__order/_big/button__order_big";
import Note from "../../../components/common/note/note";

import "./good-info.scss";

const GoodInfo = ({ id, href, img, description="...", name="Имя товара", price="цена", oldPrice="цена" }) => (
  <div className="good-info">
    <Image src={img} alt={name} width="550" height="550" />
    <div className="good-info__main">
      <div className="name">{name}</div>
      <div className="buy">
        <PriceOldPrice price={price} oldPrice={oldPrice} />
        <ButtonOrderBig href={href}>Заказать с Aliexpress</ButtonOrderBig>
      </div>
      <DividerGray />
      <Note>Характеристики:</Note>
      <pre className="pre">{description.split(`\\n`).map(e => <div key={e}>{e}<br/></div>)}</pre>
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
