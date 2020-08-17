import React from "react";
import PropTypes from "prop-types";

import "./alpha-container.scss";

const AlphaContainer = ({ children }) => {
  return (
    <div className="alpha-container">
      {children}
    </div>
  );
};

AlphaContainer.propTypes = {
  children: PropTypes.node.isRequired
}

export default AlphaContainer;
