import React from "react";
import PropTypes from "prop-types";
import GoodInfo from "./__info/good__info";
import BreadcrumbContainer from "../../components/breadcrumb/breadcrumb-container";
import Wrapper from "../../components/common/wrapper/wrapper";
import { Helmet } from "react-helmet-async";

import "./good.scss";

const Good = ({ good }) => {
  return (
    <main className="good media1220">
      <Wrapper>
        <Helmet>
          <title>{good.name}</title>
          <meta name="description" content={good.description} />
          <meta property="og:title" content={good.name} data-react-helmet="true" />
          <meta property="og:type" content="product" data-react-helmet="true" />
          <meta property="og:image" content={good.img} data-react-helmet="true" />
        </Helmet>
        <BreadcrumbContainer />
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
    price: PropTypes.number.isRequired,
    oldPrice: PropTypes.number.isRequired,
    path: PropTypes.string.isRequired
  }).isRequired,
};

export default Good;
