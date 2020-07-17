import React from "react";
import PropTypes from "prop-types";

import "./sort-goods__criterion.scss";

const SortGoodsCriterion = ({ name, isActive, isAsc, onClick }) => (
  <div className={`sort-goods__criterion ${isActive ? "active" : ""}`} onClick={onClick}>
    {name}<div className={`${isAsc ? "triangle" : "tirangle-up"}`}><span></span></div>
  </div>
);

SortGoodsCriterion.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  isAsc: PropTypes.bool.isRequired
}

export default SortGoodsCriterion;
