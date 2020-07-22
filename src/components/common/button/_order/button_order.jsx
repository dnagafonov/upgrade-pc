import React from "react";
import PropTypes from "prop-types";
import Link from "../button";

import "./button_order.scss";

const ButtonOrder = ({ className="", children, href = "#" }) => (
  <Link className={`${className} button_order_big`} href={href}>
    {children}
  </Link>
);

ButtonOrder.propTypes = {
  className: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ButtonOrder;
