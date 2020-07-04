import React from "react";
import PropTypes from "prop-types";

import "./note.scss";

const Note = ({ className = "", children }) => (
  <p className={`${className} note`}>{children}</p>
);

Note.proptypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired
};

export default Note;
