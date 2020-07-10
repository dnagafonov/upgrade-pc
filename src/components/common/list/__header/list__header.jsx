import React from "react";
import PropTypes from "prop-types";

import "./list__header.scss";

const ListHeader = ({ children, id, onClick }) => (
  <div className="list__header" onClick={() => onClick(id)}>{children}</div>
);

ListHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ListHeader;
