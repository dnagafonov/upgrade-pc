import React from "react";
import PropTypes from "prop-types";
import PromotionInfo from "./__info/promotion__info";
import AlphaContainer from "../alpha-container/alpha-container";

import "./promotion.scss";

const Promotion = ({ name, description, img, path }) => {
  const style = { backgroundImage: `url(${img})` };
  return (
    <section className="promotion" style={style}>
      <AlphaContainer>
        <PromotionInfo name={name} description={description} path={path} />
      </AlphaContainer>
    </section>
  );
};

Promotion.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Promotion;
