import React from "react";
import PropTypes from "prop-types";
import PathsRoute from "../__route/paths__route";

import "./paths__routes.scss";

const PathsRoutes = ({ url }) => {
  const routes = url.split("/").slice(1);
  return (
    <div className="paths__routes">
      {routes.map((e, i, a) => {
        const to = a.slice(0, ++i).join("/");
        return <PathsRoute key={e} path={e} to={to} />;
      })}
    </div>
  );
};

PathsRoutes.propTypes = {
  url: PropTypes.string.isRequired,
};

export default PathsRoutes;
