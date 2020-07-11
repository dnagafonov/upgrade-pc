import React from "react";
import GoodsBuild from "../goods-build";
import { useParams, Redirect } from "react-router-dom";
import { useSets } from "../../../tools/hooks";
import PropTypes from 'prop-types'

const GoodsBuildContainer = () => {
  const { id } = useParams();
  const set = useSets(id);
  return <GoodsBuild {...set} />
};

GoodsBuildContainer.propTypes = {

}

export default GoodsBuildContainer;
