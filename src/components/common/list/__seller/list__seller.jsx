import React, { useState } from "react";
import PropTypes from "prop-types";
import ButtonOrder from "../../button/_order/button_order";
import PriceOldPriceList from "../../price-old-price/_list/price-old-price_list";
import { Redirect } from "react-router-dom";

import "./list__seller.scss";
import Button from "../../button/button";
import Link from "../../link/link";

const ListSeller = ({ seller, onClick }) => {
  const { name, price, oldPrice, link } = seller;
  return (
    <div className="list__seller" onClick={() => onClick()}>
      <div className="seller__name">{name}</div>
      <div className="seller__buy">
        <PriceOldPriceList price={price} oldPrice={oldPrice} />
        <Link href={link}>
          <Button>Заказать с Aliepress</Button>
        </Link>
      </div>
    </div>
  );
};

ListSeller.propTypes = {
  seller: PropTypes.exact({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    oldPrice: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  }),
  onClick: PropTypes.func.isRequired
};

export default ListSeller;
