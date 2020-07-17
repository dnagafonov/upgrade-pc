import React, { useEffect } from 'react'
import Goods from './goods'
import { useRouteMatch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { getItems } from '../../redux/selectors';
import { requsetComponents } from '../../redux/actions';
import FallBack from '../../components/common/fallback/fallback';
import { compose } from 'redux';

const GoodsContainer = ({ items, requsetComponents }) => {
  const { url } = useRouteMatch();
  useEffect(() => {
    requsetComponents(url);
  }, [url])
  if(!items) return <FallBack />
  return <Goods items={items} />
}

const map = state => ({
  items: getItems(state)
})

export default compose(
  connect(map, { requsetComponents }),
  withRouter
)(GoodsContainer);