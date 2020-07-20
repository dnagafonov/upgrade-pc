import React from "react";
import PropTypes from "prop-types";
import Note from "../../../components/common/note/note";

import "./good__characteristics.scss";

const GoodCharacteristics = ({ description }) => (
  <article className="good__characteristics">
    <Note>Характеристики:</Note>
    <div className="">
      {description.split(`\\n`).map((e) => (
        <p className="good__characteristic" key={e}>
          {e}
          <br />
        </p>
      ))}
    </div>
  </article>
);

GoodCharacteristics.propTypes = {
  description: PropTypes.string.isRequired,
};

export default GoodCharacteristics;
