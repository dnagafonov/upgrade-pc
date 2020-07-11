import React from "react";
import PropTypes from "prop-types";
import stub from "@images/img-stub.svg";

import "./image.scss";

const Image = ({ className = "", width, height, src = stub, alt }) => (
  <img
    className={`${className} image`}
    src={src}
    alt={alt}
    width={width}
    height={height}
  />
);

Image.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
