import React from "react";
import PropTypes from "prop-types";

import "./button__order.scss";

const ButtonOrder = ({ children, href = "#" }) => (
  <a className="button__order" href={href} target="_blank" rel="noopener">
    {children}
  </a>
);

ButtonOrder.proptypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonOrder;
