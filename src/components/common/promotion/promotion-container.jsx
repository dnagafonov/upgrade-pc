import React from "react";
import Promotion from "./promotion";

import "./promotion.scss";

const PromotionContainer = () => {
  const data = {
    name: "Процессоры LGA2011",
    description: "Купить процессоры на базе lga2011 по самым низким ценам с Aliexpress",
    img: "https://sun9-71.userapi.com/U-IQ6XFI1SGVAtwn-TWQZXGFeaYbs98f7fVIFw/l88XlbwucG4.jpg",
    path: "components/processors/lga2011"
  }
  return <Promotion {...data} />
};

export default PromotionContainer;
