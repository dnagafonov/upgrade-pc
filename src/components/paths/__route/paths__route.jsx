import React, { useState } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import "./paths__route.scss";

const PathsRoute = ({ path, to }) => {
  const [state, setstate] = useState(false);
  if(state) return <Redirect to={`/${to}`} />;
  return(
    <div className="paths__route" onClick={() => setstate(true)}>
      {path}
    </div>
  )
};

PathsRoute.propTypes = {
  path: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default PathsRoute;
