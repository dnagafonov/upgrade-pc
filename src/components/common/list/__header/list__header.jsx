import React from "react";
import PropTypes from "prop-types";

import "./list__header.scss";

const ListHeader = ({ children }) => (
  <div className="list__header">{children}</div>
);

ListHeader.proptypes = {
  children: PropTypes.node.isRequired,
};

export default ListHeader;
