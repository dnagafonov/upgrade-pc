import React from "react";
import { useRouteMatch } from "react-router-dom";
import Good from "./good";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getGood, cleanGood } from "../../redux/actions";
import { getGoodSelector } from "../../redux/selectors";
import FallBack from "../../components/common/fallback/fallback";

const GoodContainer = ({ good, getGood, cleanGood }) => {
  const { url } = useRouteMatch();
  useEffect(() => {
    getGood(url);
    return () => cleanGood();
  }, []);
  if (!good) return <FallBack />;
  return <Good good={good} url={url} />;
};

const mapState = (state) => ({
  good: getGoodSelector(state),
});

export default connect(mapState, { getGood, cleanGood })(GoodContainer);
