import React from "react";
import PropTypes from "prop-types";

import "./alpha-container.scss";

const AlphaContainer = ({ color, alpha, children }) => {
  const style = { backgroundColor: `rgba(0, 0,0, 0.5)`}
  return (
    <div className="alpha-container" style={style}>
      {children}
    </div>
  );
};

AlphaContainer.propTypes = {
  color: PropTypes.string.isRequired,
  alpha: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired
}

export default AlphaContainer;
