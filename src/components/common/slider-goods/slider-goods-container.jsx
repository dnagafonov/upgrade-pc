import React from "react";
import SliderGoods from "./slider-goods";

const SliderGoodsContaner = ({ name, items }) => {
  let settings = {
    infinity: false,
    lazyLoad: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    dots: true
  };
  return (
    <SliderGoods
      name={name}
      items={items}
      settings={settings}
    />
  );
};

export default SliderGoodsContaner;
