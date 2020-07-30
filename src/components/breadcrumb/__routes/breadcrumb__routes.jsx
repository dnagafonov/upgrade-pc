import React from "react";
import PropTypes from "prop-types";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

import "./breadcrumb__routes.scss";

const BreadcrumbRoutes = ({ routes }) => (
  <Breadcrumb className="breadcrumb__routes">
    {routes.map((e) => (
      <Breadcrumb.Item key={e.to} className="breadcrumb__route">
        <Link to={`/${e.to}`}>{e.name}</Link>
      </Breadcrumb.Item>
    ))}
  </Breadcrumb>
);

BreadcrumbRoutes.propTypes = {
  url: PropTypes.string.isRequired,
};

export default BreadcrumbRoutes;
