import React from "react";
import Promotion from "./promotion";

import "./promotion.scss";

const PromotionContainer = () => {
  const data = {
    name: "Процессоры LGA2011",
    description: "Купить процессоры на базе lga2011 по самым низким ценам с Aliexpress",
    img: "",
    path: "components/processors/lga2011"
  }
  return <Promotion {...data} />
};

export default PromotionContainer;
