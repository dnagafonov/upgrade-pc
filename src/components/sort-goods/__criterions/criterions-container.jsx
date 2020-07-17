import React from "react";
import SortGoodsCriterions from "./sort-goods__criterions";
import { getSortBy, getCriterions } from "../../../redux/selectors";
import { changeSortCriterion } from "../../../redux/actions";
import { connect } from "react-redux";

import "./sort-goods__criterions.scss";

const SortGoodsCriterionsContainer = ({ criterions, changeSortCriterion }) => {
  const changeSort = sortBy => {
    changeSortCriterion(criterions, sortBy);
  };
  console.log(criterions);
  
  return <SortGoodsCriterions onClick={changeSort} criterions={criterions} />;
};

const mapState = (state) => ({
  criterions: getCriterions(state)
});

export default connect(mapState, { changeSortCriterion })(SortGoodsCriterionsContainer);
