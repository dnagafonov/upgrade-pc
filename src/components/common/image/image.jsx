import React from "react";
import PropTypes from "prop-types";
import stub from "@images/img-loading.svg";

import "./image.scss";

const Image = ({ className = "", width, height, src = stub, alt }) => (
  <div
    className={`${className} image`}
    style={{ width: width, height: height }}
  >
    <img src={src} alt={alt} width={width} height={height} />
  </div>
);

Image.proptypes = {
  className: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
