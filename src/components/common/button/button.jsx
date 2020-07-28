import React from "react";
import PropTypes from "prop-types";

import "./button.scss";

const stub = () => true

const Button = ({ className="", id, children, onClick = stub }) => (
  <button className={`${className} button`} onClick={() => onClick(id)}>
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
