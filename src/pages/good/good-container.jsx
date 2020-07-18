import React from 'react';
import { useRouteMatch } from "react-router-dom";
import Good from "./good";
import { useEffect } from "react";
import { connect } from 'react-redux';
import { getGood } from '../../redux/actions';
import { getGoodSelector } from '../../redux/selectors';
import FallBack from '../../components/common/fallback/fallback';

const GoodContainer = ({ good, getGood }) => {
  const { url } = useRouteMatch();
  useEffect(()  => {
    getGood(url);
  }, []);
  if(!good) return <FallBack />
  return <Good good={good} />;
};

const mapState = state => ({
  good: getGoodSelector(state)
})

export default connect(mapState, { getGood })(GoodContainer);