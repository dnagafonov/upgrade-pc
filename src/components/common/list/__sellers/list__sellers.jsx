import React from "react";
import PropTypes from "prop-types";
import ListSeller from "../__seller/list__seller";
import DividerGray from "../../divider/_gray/divider_gray";

import "./list__sellers.scss";
import ListSellerContainer from "../__seller/list__seller-container";

const ListSellers = ({ sellers }) => (
  <div className="list__sellers">
    {sellers && sellers.map((e) => <ListSellerContainer key={e.link} seller={e} />)}
    <DividerGray />
  </div>
);

ListSellers.propTypes = {
  sellers: PropTypes.arrayOf({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    oldPrice: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }),
};

export default ListSellers;
