import React from "react";
import PropTypes from "prop-types";
import GoodsBuildInfo from "./__build-info/goods-build-info";
import Wrapper from "../../components/common/wrapper/wrapper";
import SliderGoodsContaner from "../common/slider-goods/slider-goods-container";
import BreadcrumbContainer from "../breadcrumb/breadcrumb-container";
import GoodCharacteristics from "../common/good-characteristics/good-characteristics";
import { Helmet } from "react-helmet-async";
import { DiscussionEmbed } from 'disqus-react';

import "./goods-build.scss";

const GoodsBuild = (props) => {
  return (
    <main className="goods-build media1220">
      <Wrapper>
        <Helmet>
          <title>{props.name}</title>
          <meta name="description" content={props.description} />
          <meta property="og:title" content={props.name} />
          <meta property="og:url" content={`https://upgradepc.ru${props.url}`} />
          <meta property="og:type" content="product" />
          <meta property="og:image" content={props.img} />
          <link rel="canonical" href={`https://upgradepc.ru${props.url}`}/>
        </Helmet>
        <BreadcrumbContainer />
        <GoodsBuildInfo {...props} />
        <SliderGoodsContaner {...props.components} />
        <GoodCharacteristics description={props.description} />
        <DiscussionEmbed 
          shortname= "upgradepc"
          config={{
            url: `https://upgradepc.ru${url}`,
            identifier: url,
            title: props.name,
            language: "ru_RU"
          }} 
        />
      </Wrapper>
    </main>
  );
};

GoodsBuild.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  oldPrice: PropTypes.number.isRequired,
  lists: PropTypes.arrayOf({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bestSeller: PropTypes.exact({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      oldPrice: PropTypes.number.isRequired,
      link: PropTypes.string.isRequired,
    }),
    sellers: PropTypes.arrayOf({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      oldPrice: PropTypes.number.isRequired,
      link: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default GoodsBuild;
