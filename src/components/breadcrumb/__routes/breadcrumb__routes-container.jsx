import React from "react";
import { convertUrlToBreadcrumb } from "../../../tools/tools";
import PropTypes from "prop-types";
import BreadcrumbRoutes from "./breadcrumb__routes";

import "./breadcrumb__routes.scss";

const BreadcrumbRoutesContainer = ({ url }) => {
  const routes = convertUrlToBreadcrumb(url);
  return <BreadcrumbRoutes routes={routes} />;
};

BreadcrumbRoutesContainer.propTypes = {
  url: PropTypes.string.isRequired
}

export default BreadcrumbRoutesContainer;
