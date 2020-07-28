import React from "react";
import PropTypes from "prop-types";
import ButtonOrder from "../button_order";

import "./button_order_big.scss";

const ButtonOrderBig = ({ className = "", children, href = "#" }) => (
  <ButtonOrder className={`${className} button__order_big`} href={href}>
    {children}
  </ButtonOrder>
);

ButtonOrderBig.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonOrderBig;
