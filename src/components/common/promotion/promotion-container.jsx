import React from "react";
import Promotion from "./promotion";

import "./promotion.scss";

const PromotionContainer = () => {
  const data = {
    name: "Оперативная память DDR3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "https://sun9-71.userapi.com/U-IQ6XFI1SGVAtwn-TWQZXGFeaYbs98f7fVIFw/l88XlbwucG4.jpg",
    path: "components/ram/ddr3"
  }
  return <Promotion {...data} />
};

export default PromotionContainer;
