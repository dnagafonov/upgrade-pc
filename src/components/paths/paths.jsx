import React from "react";
import PathsRoutes from "./__routes/paths__routes";
import Wrapper from "../common/wrapper/wrapper";
import PropTypes from "prop-types";

import "./paths.scss";

const Paths = ({ url }) => (
  <section className="paths">
    <Wrapper>
      <PathsRoutes url={url} />
    </Wrapper>
  </section>
);

Paths.propTypes = {
  url: PropTypes.string.isRequired
}

export default Paths;
