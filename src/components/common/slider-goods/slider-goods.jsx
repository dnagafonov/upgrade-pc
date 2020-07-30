import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import Wrapper from "../wrapper/wrapper";
import GoodItemContainer from "../../good-item/good-item-container";
import Note from "../note/note";

import "./slider-goods.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderGoods = ({ name, items, settings }) => {
  return (
    <section className="slider">
      <Wrapper>
        <div className="slider__header">
          <Note>{name}</Note>
        </div>
        <Slider {...settings}>
          {items.map((e, i) => (
            <GoodItemContainer
              key={i}
              img={e.img}
              name={e.name}
              price={e.price}
              oldPrice={e.oldPrice}
              path={e.path}
            />
          ))}
        </Slider>
      </Wrapper>
    </section>
  );
};

SliderGoods.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  settings: PropTypes.object.isRequired
};

export default SliderGoods;
