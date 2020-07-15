import React from 'react'
import Note from '../common/note/note'
import SortGoodsCriterions from './__criterions/sort-goods__criterions'
import { connect } from 'react-redux';
import { changeSortCriterion } from '../../redux/actions';

import "./sort-goods.scss";

const criterions = ["Цене", "Имени"];

const SortGoods = ({ changeSortCriterion }) => {
  return(
    <section className="sort-goods">
      <Note>Сортировать по:</Note>
      <SortGoodsCriterions criterions={["Цене", "Имени"]}/>
    </section>
  )
}

export default connect(null, { changeSortCriterion })(SortGoods);