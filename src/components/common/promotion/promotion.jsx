import React from "react";
import PropTypes from "prop-types";
import PromotionInfo from "./__info/promotion__info";
import AlphaContainer from "../alpha-container/alpha-container";

import "./promotion.scss";
import Image from "../image/image";

const Promotion = ({ name, description, img, path }) => {
  return (
    <section className="promotion">
      <AlphaContainer>
        <img className="img" src={img} alt={name} width="100%" />
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
