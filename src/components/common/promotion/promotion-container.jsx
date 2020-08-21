import React from "react";
import Promotion from "./promotion";

import "./promotion.scss";

const PromotionContainer = ({ data }) => {
  return <Promotion {...data} />
};

export default PromotionContainer;
