import React from "react";
import PropTypes from "prop-types";
import ButtonOrder from "../button_order";

import "./button_order_big.scss";

const ButtonOrderBig = ({ className = "", children, href = "#" }) => (
  <ButtonOrder className={`${className} button_order_big`} href={href}>
    {children}
  </ButtonOrder>
);

ButtonOrderBig.proptypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonOrderBig;
