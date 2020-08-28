import React from "react";
import BreadcrumbRoutesContainer from "./__routes/breadcrumb__routes-container";
import Wrapper from "../common/wrapper/wrapper";
import PropTypes from "prop-types";

import "./breadcrumb.scss";

const Breadcrumb = ({ url }) => (
  <section className="breadcrumb">
    <Wrapper>
      <BreadcrumbRoutesContainer url={url} />
    </Wrapper>
  </section>
);

Breadcrumb.propTypes = {
  url: PropTypes.string
}

export default Breadcrumb;
