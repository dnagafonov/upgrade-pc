import React, { useEffect } from "react";
import GoodsBuild from "./goods-build";
import { getGood, cleanGood } from '../../redux/actions';
import { useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import { getGoodSelector } from "../../redux/selectors";
import FallBack from "../common/fallback/fallback";

const GoodsBuildContainer = ({ set, getGood, cleanGood }) => {
  const { url } = useRouteMatch();
  useEffect(()  => {
    getGood(url);
    return () => cleanGood();
  }, []);
  if(!set) return <FallBack />
  return <GoodsBuild {...set} url={url} />
};

const mapState = state => ({
  set: getGoodSelector(state)
})

export default connect(mapState, { getGood, cleanGood })(GoodsBuildContainer);
