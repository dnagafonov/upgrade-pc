import React from "react";
import PropTypes from "prop-types";
import SortGoodsCriterion from "../__criterion/sort-goods__criterion";

import "./sort-goods__criterions.scss";

const SortGoodsCriterions = ({ criterions, onClick }) => (
  <div className="sort-goods__criterions">
    {criterions.map((e) => (
      <SortGoodsCriterion
        key={e.name}
        criterion={e}
        onClick={onClick}
      />
    ))}
  </div>
);

export default SortGoodsCriterions;
