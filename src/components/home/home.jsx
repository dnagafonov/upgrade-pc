import React from "react";
import PromotionContainer from "../common/promotion/promotion-container";
import Wrapper from "../common/wrapper/wrapper";

import "./home.scss";

const Home = () => {
  return (
    <div className="home media1220">
      <Wrapper>
        <PromotionContainer />
      </Wrapper>
    </div>
  );
};

export default Home;