import React from "react";
import PropTypes from "prop-types";
import Note from "../../note/note";

import "./promotion__info.scss";
import { Link } from "react-router-dom";
import Button from "../../button/button";

const PromotionInfo = ({ name, description, path }) => (
  <article className="promotion__info">
    <Note className="promotion__header h2">{name}</Note>
    <Note className="promotion__text">{description}</Note>
    <Link className="promotion__button" to={path}>
      <Button>Перейти →</Button>
    </Link>
  </article>
);

PromotionInfo.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default PromotionInfo;
