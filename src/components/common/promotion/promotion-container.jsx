import React from "react";
import Promotion from "./promotion";

import "./promotion.scss";

const PromotionContainer = () => {
  const data = {
    name: "Процессоры LGA2011",
    description: "Купить процессоры на базе lga2011 по самым низким ценам с Aliexpress",
    img: "https://sun9-62.userapi.com/SB3qr7vtUmZpnxYdqUf0doTqLWWFM6SD69kjMA/fjSEZo2STjI.jpg",
    path: "components/processors/lga2011"
  }
  return <Promotion {...data} />
};

export default PromotionContainer;
