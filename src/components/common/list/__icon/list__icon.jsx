import React from "react";
import PropTypes from "prop-types";

import './list__icon.scss'

const ListIcon = ({ isOpen }) => (
  <div className="list__icon">
    {isOpen ? <div></div> : <div className="active"></div> }
  </div>
);

ListIcon.propTypes = {
  isOpen: PropTypes.bool.isRequired
}

export default ListIcon;