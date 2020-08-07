import React, { useEffect } from 'react'
import Goods from './goods'
import { useRouteMatch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { getItems } from '../../redux/selectors';
import { requsetComponents, cleanGoods } from '../../redux/actions';
import FallBack from '../common/fallback/fallback';
import { compose } from 'redux';

const GoodsContainer = ({ items, requsetComponents, cleanGoods }) => {
  const { url } = useRouteMatch();
  useEffect(() => {
    requsetComponents(url);
    return () => cleanGoods();
  }, [url])
  if(!items) return <FallBack />
  console.log(items);
  return <Goods items={items} />
}

const map = state => ({
  items: getItems(state)
})

export default compose(
  connect(map, { requsetComponents, cleanGoods }),
  withRouter
)(GoodsContainer);