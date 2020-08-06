import React from "react";
import PropTypes from "prop-types";

import "./link.scss";

const Link = ({ className="", children, href = "#" }) => {
  const onClick = e => e.stopPropagation();
  return(
    <a className={`${className} link`} href={href} target="_blank" rel="noopener noreferrer" onClick={onClick}>
      {children}
    </a>
  );
}

Link.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;
