import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import Wrapper from "../wrapper/wrapper";
import GoodItem from "../../good-item/good-item";
import Note from "../note/note";

import "./slider-goods.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderGoods = ({ name, items }) => {
  let settings = {
    infinity: false,
    lazyLoad: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="slider">
      <Wrapper>
        <div className="slider__header">
          <Note>{name}</Note>
        </div>
        <Slider {...settings}>
          {items.map((e, i) => (
            <GoodItem
              key={i}
              img={e.img}
              name={e.name}
              price={e.price}
              oldPrice={e.oldPrice}
            />
          ))}
        </Slider>
      </Wrapper>
    </div>
  );
};

SliderGoods.proptypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
};

export default SliderGoods;
