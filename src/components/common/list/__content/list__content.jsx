import React from "react";
import PropTypes from "prop-types";

import "./list__content.scss";

const ListContent = ({ children }) => (
  <div className="list__content">{children}</div>
);

ListContent.proptypes = {
  children: PropTypes.node.isRequired,
};

export default ListContent;
