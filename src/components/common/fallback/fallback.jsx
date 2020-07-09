import React from "react";
import svg from "@images/loading.svg";

import "./fallback.scss";

const FallBack = ({ width, height }) => (
  <div className="fallback">
    <img
      src={svg}
      alt="loading"
      style={{ width: { width }, height: { height } }}
    />
  </div>
);

export default FallBack;
