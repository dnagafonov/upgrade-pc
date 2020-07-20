import React from 'react'
import PropTypes from 'prop-types'
import Note from '../../note/note';

import "./promotion__info.scss";

const PromotionInfo = ({ name, description, path }) => (
  <article className="promotion__info">
    <Note className="h2">{name}</Note>
    <Note className="text">{description}</Note>
  </article>
);

PromotionInfo.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};

export default PromotionInfo;