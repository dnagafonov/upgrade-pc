import React from "react";
import PropTypes from "prop-types";

import "./button__order.scss";

const ButtonOrder = ({ className="", children, href = "#" }) => (
  <a className={`${className} button__order`} href={href} target="_blank" rel="noopener">
    {children}
  </a>
);

ButtonOrder.proptypes = {
  className: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ButtonOrder;
