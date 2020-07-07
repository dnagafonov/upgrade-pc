import React from "react";
import PropTypes from "prop-types";
import GoodsBuildInfo from "./goods-build-info/goods-build-info";
import Wrapper from "../../components/common/wrapper/wrapper";
import Slider from "../../components/common/slider-goods/slider-goods";

import "./goods-build.scss";

const GoodsBuild = (props) => {
  const propss = {
    name: "Комплектующие: ",
    items: [
      {
        img: "https://sun9-48.userapi.com/93DICdQHJliz3BZLjh7A1KkQuCx73kBqnH1F0A/2CU1OKDN2mU.jpg",
        name: "X79 LGA",
        price: 3000,
        oldPrice: 3200
      },
      {
        img: "https://sun9-12.userapi.com/ueKJp5YsEDzXmr6UVdfvuVWSeUiTIb3699LDMQ/-NAODxaWTjY.jpg",
        name: "XEON 35-2640",
        price: 4000,
        oldPrice: 3100
      },
      {
        img: "https://sun9-11.userapi.com/oljTo3m_GiDWrZSeAFQOHkY8IFNDbsPNumd_QQ/oSWE3P17OMg.jpg",
        name: "RX-580",
        price: 5000,
        oldPrice: 5200
      },
      {
        img: "https://ae01.alicdn.com/kf/H8a5a326edc434ff5ad51c152ffd688c1K/XFX-RX-580-4-256bit-GDDR5.jpg",
        name: "XFX RX 580 4 Гб 256bit",
        price: 3000,
        oldPrice: 3200
      },
      {
        img: "https://sun9-11.userapi.com/oljTo3m_GiDWrZSeAFQOHkY8IFNDbsPNumd_QQ/oSWE3P17OMg.jpg",
        name: "RX-580",
        price: 5000,
        oldPrice: 5200
      },
    ]
  };
  return (
    <div className="goods-build">
      <Wrapper>
        <GoodsBuildInfo {...props} />
        <Slider {...propss} />
        <pre className="pre">{props.description}</pre>
      </Wrapper>
    </div>
  );
};

GoodsBuild.proptypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  oldPrice: PropTypes.string.isRequired,
  lists: PropTypes.arrayOf({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bestSeller: PropTypes.exact({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      oldPrice: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
    sellers: PropTypes.arrayOf({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      oldPrice: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default GoodsBuild;
