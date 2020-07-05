import React from "react";
import PropTypes from "prop-types";
import ButtonOrder from "../button__order";

import "./button__order_big.scss";

const ButtonOrderBig = ({ className = "", children, href = "#" }) => (
  <ButtonOrder className={`${className} button__order_big`} href={href}>
    {children}
  </ButtonOrder>
);

ButtonOrderBig.proptypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonOrderBig;
