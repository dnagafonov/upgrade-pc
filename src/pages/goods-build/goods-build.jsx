import React from "react";
import PropTypes from "prop-types";
import GoodsBuildInfo from "./goods-build-info/goods-build-info";
import Wrapper from "../../components/common/wrapper/wrapper";
import Slider from "../../components/common/slider-goods/slider-goods";

import "./goods-build.scss";
import Paths from "../../components/paths/paths";

const GoodsBuild = (props) => {
  return (
    <main className="goods-build">
      <Wrapper>
        <Paths />
        <GoodsBuildInfo {...props} />
        <Slider {...props.components} />
        <pre className="pre">{props.description}</pre>
      </Wrapper>
    </main>
  );
};

GoodsBuild.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  oldPrice: PropTypes.string.isRequired,
  lists: PropTypes.arrayOf({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bestSeller: PropTypes.exact({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      oldPrice: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
    sellers: PropTypes.arrayOf({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      oldPrice: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default GoodsBuild;
