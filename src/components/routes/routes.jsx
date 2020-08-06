import React from "react";
import { Route } from "react-router-dom";

//FIX
const Routes = ({ pages }) => {
  const routes = pages
  .map(({ component, paths }) =>
    paths.map((path) => (
      <Route exact path={path} component={component} key={path} />
    ))).flat();
    return <>{routes}</>;
  };
  
  export default Routes;
  