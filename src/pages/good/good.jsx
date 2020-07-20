import React from "react";
import PropTypes from "prop-types";
import GoodInfo from "./__info/good__info";
import PathsContainer from "../../components/paths/paths-container";
import Wrapper from "../../components/common/wrapper/wrapper";

import "./good.scss";

const Good = ({ good }) => {
  return (
    <main className="good">
      <Wrapper>
        <PathsContainer />
        <GoodInfo {...good} />
      </Wrapper>
    </main>
  );
};

Good.propTypes = {
  good: PropTypes.exact({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    oldPrice: PropTypes.string.isRequired,
  }).isRequired,
};

export default Good;
