import React from "react";
import PropTypes from "prop-types";

import "./sort-goods__criterion.scss";

const SortGoodsCriterion = ({ criterion, onClick }) => (
  <div
    className={`sort-goods__criterion ${criterion.active ? "active" : ""}`}
    onClick={() => onClick(criterion)}
  >
    {criterion.name}
    <div className={`${criterion.isAsc ? "triangle" : "triangle tirangle-up"}`}>
      <span></span>
    </div>
  </div>
);

SortGoodsCriterion.propTypes = {
  criterion: PropTypes.exact({
    name: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    isAsc: PropTypes.bool.isRequired,
  }),
  onClick: PropTypes.func.isRequired
};

export default SortGoodsCriterion;
