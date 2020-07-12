import React from "react";
import PropTypes from "prop-types";

import "./sort-goods__criterion.scss";

const SortGoodsCriterion = ({ name, isActive, isAsc }) => (
  <div className={`sort-goods__criterion ${isActive ? "active" : ""}`}>
    {name}<div className="triangle"><span></span></div>
  </div>
);

SortGoodsCriterion.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  isAsc: PropTypes.bool.isRequired
}

export default SortGoodsCriterion;
