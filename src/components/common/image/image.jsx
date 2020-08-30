import React from "react";
import PropTypes from "prop-types";
import stub from "@images/img-stub.svg";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';
import "./image.scss";

const Image = ({ className = "", width, height, src = stub, alt }) => {
  const style = { width, height };
  return (
    <div className={`${className} image`} style={style}>
      <LazyLoadImage
        className="img"
        alt={alt}
        effect="blur"
        src={src} 
      />
    </div>
  );
};

Image.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string.isRequired,
  height: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
