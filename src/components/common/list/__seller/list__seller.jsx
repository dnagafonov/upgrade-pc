import React, { useState } from "react";
import PropTypes from "prop-types";
import PriceOldPriceList from "../../price-old-price/_list/price-old-price_list";
import { Link } from "react-router-dom";
import Button from "../../button/button";
import Linka from "../../link/link";

import "./list__seller.scss";

const ListSeller = ({ seller }) => {
  const { name, price, oldPrice, link, path } = seller;
  return (
    <Link className="list__seller" to={path}>
      <div className="seller__name">{name}</div>
      <div className="seller__buy">
        <PriceOldPriceList price={price} oldPrice={oldPrice} />
        <Linka href={link}>
          <Button>Заказать с Aliepress</Button>
        </Linka>
      </div>
    </Link>
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
