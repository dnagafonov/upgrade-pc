import React from "react";
import PropTypes from "prop-types";
import Image from "../common/image/image";
import Note from "../common/note/note";

import "./categories-item.scss";

const CategoriesItem = ({ img, name, redirect }) => (
  <div className="categories-item" onClick={redirect}>
    <Image src={img} alt={name} width="260" />
    <Note>{name}</Note>
  </div>
);

CategoriesItem.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  redirect: PropTypes.func.isRequired  
};

export default CategoriesItem;