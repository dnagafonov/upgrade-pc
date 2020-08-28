import React from "react";
import PropTypes from "prop-types";
import GoodInfo from "./__info/good__info";
import BreadcrumbContainer from "../../components/breadcrumb/breadcrumb-container";
import Wrapper from "../../components/common/wrapper/wrapper";
import { Helmet } from "react-helmet-async";
import { DiscussionEmbed } from "disqus-react";

import "./good.scss";

const Good = ({ good, url }) => {
  return (
    <main className="good media1220">
      <Wrapper>
        <Helmet>
          <title>{good.name}</title>
          <meta name="description" content={good.description} />
          <meta name="keywords" content={`Купить ${good.name}`} />
          <meta property="og:title" content={good.name} />
          <meta property="og:url" content={`https://upgradepc.ru${url}`} />
          <meta property="og:type" content="product" />
          <meta property="og:image" content={good.img} />
          <link rel="canonical" href={`https://upgradepc.ru${url}`} />
        </Helmet>
        <BreadcrumbContainer />
        <GoodInfo {...good} />
        <DiscussionEmbed
          shortname="upgradepc"
          config={{
            url: `https://upgradepc.ru${url}`,
            identifier: url,
            title: good.name,
            language: "ru_RU"
          }}
        />
      </Wrapper>
    </main>
  );
};

Good.propTypes = {
  good: PropTypes.exact({
    id: PropTypes.number,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    oldPrice: PropTypes.number,
    path: PropTypes.string.isRequired,
  }).isRequired,
  url: PropTypes.string.isRequired,
};

export default Good;
