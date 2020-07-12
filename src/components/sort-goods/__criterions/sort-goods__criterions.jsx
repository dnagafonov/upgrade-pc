import React from 'react'
import PropTypes from 'prop-types'
import SortGoodsCriterion from '../__criterion/sort-goods__criterion'

import "./sort-goods__criterions.scss";

const SortGoodsCriterions = ({ criterions }) => (
  <div className="sort-goods__criterions">
    {criterions.map(e => <SortGoodsCriterion name={e} isActive/>)}
  </div>
)

export default SortGoodsCriterions;