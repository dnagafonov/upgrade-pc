import React from "react";
import PropTypes from "prop-types";
import Image from "../../../components/common/image/image";
import DividerGray from "../../../components/common/divider/_gray/divider_gray";
import PriceOldPrice from "../../../components/common/price-old-price/price-old-price";
import ButtonOrderBig from "../../../components/common/button/_order/_big/button_order_big";

import "./good__info.scss";
import GoodCharacteristic from "../__characteristics/good__characteristics";
import ButtonOrder from "../../common/button/_order/button_order";
import Button from "../../common/button/button";
import Link from "../../common/link/link";

const GoodInfo = ({ id, href, img, description="...", name="Имя товара", price="цена", oldPrice="цена" }) => (
  <section className="good-info">
    <Image className="good__image" src={img} alt={name} width="550" />
    <article className="good-info__main">
      <div className="name">{name}</div>
      <div className="buy">
        <PriceOldPrice price={price} oldPrice={oldPrice} />
        <Link href={href}>
          <Button>Заказать с Aliexpress</Button>
        </Link>
      </div>
      <DividerGray />
      <GoodCharacteristic description={description} />
    </article>
  </section>
);

GoodInfo.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  oldPrice: PropTypes.number.isRequired,
  path: PropTypes.string.isRequired
};

export default GoodInfo;
