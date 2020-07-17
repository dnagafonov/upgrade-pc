import React from 'react';
import { useParams, withRouter, useRouteMatch } from "react-router-dom";
import Good from "./good";
import { useEffect } from "react";

const GoodContainer = (props) => {
  const { url } = useRouteMatch()
  useEffect(()  => {
        
  }, [])
  return <Good {...props} />;
};

export default GoodContainer;