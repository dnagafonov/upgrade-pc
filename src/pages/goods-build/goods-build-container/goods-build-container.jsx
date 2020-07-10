import React from "react";
import GoodsBuild from "../goods-build";
import { useParams, Redirect } from "react-router-dom";
import { useSets } from "../../../tools/hooks";
import PropTypes from 'prop-types'

const GoodsBuildContainer = ({ img }) => {
  const { id } = useParams();
  const set = useSets(id);
  return set ? <GoodsBuild {...set} /> : <Redirect to="/404" />;
};

GoodsBuildContainer.propTypes = {
  img: PropTypes.bool.isRequired
}

export default GoodsBuildContainer;
