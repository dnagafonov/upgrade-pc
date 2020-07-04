import React from "react";
import PropTypes from "prop-types";

import "./note__backstage.scss";

const NoteBackstage = ({ children }) => (
  <p className="note__backstage">{children}</p>
);

NoteBackstage.proptypes = {
  children: PropTypes.node.isRequired,
};

export default NoteBackstage;
