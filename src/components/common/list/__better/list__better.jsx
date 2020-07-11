import React from "react";
import PropTypes from "prop-types";

import "./list__better.scss";

const ListBetter = ({ children }) => (
  <div className="list__better">{children}</div>
);

ListBetter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ListBetter;
