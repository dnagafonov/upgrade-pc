import React from "react";
import PropTypes from "prop-types";

import "./layout.scss";

const Layout = ({ className = "", children }) => (
  <section className={`${className} layout`}>{children}</section>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Layout;