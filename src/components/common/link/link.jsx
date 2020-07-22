import React from "react";
import PropTypes from "prop-types";

import "./link.scss";

const Link = ({ className="", children, href = "#" }) => (
  <a className={`${className} link`} href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

Link.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;
