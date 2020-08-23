import React from "react";
import PropTypes from "prop-types";
import Image from "../../../components/common/image/image";
import DividerGray from "../../../components/common/divider/_gray/divider_gray";
import PriceOldPrice from "../../../components/common/price-old-price/price-old-price";
import GoodCharacteristic from "../../common/good-characteristics/good-characteristics";
import Button from "../../common/button/button";
import Link from "../../common/link/link";

import "./good__info.scss";

const GoodInfo = ({ href, img, description, name, price, oldPrice }) => (
  <section className="good-info">
    <Image className="good__image" src={img} alt={name} width="550" />
    <article className="good-info__main">
      <h1 className="hidden">{name}</h1>
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
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  oldPrice: PropTypes.number,
  path: PropTypes.string.isRequired
};

export default GoodInfo;
