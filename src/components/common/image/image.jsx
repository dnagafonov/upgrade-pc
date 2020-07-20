import React from "react";
import PropTypes from "prop-types";
import stub from "@images/img-stub.svg";

import "./image.scss";

const Image = ({ className = "", width, height, src = stub, alt }) => {
  const style = { width: `${width}px`, height: `${height}px` };
  return (
    <div className={`${className} image`} style={style}>
      <img className="img" src={src} alt={alt} />
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
