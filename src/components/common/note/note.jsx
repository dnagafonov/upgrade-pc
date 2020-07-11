import React from "react";
import PropTypes from "prop-types";

import "./note.scss";

const Note = ({ className = "", children }) => (
  <p className={`${className} note`}>{children}</p>
);

Note.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default Note;
