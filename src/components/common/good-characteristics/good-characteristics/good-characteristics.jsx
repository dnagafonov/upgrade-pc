import React from "react";
import PropTypes from "prop-types";
import Note from "../../note/note";

import "./good-characteristics.scss";

const GoodCharacteristics = ({ description }) => (
  <article className="good-characteristics">
    <Note>Характеристики:</Note>
    <div className="">
      {description.split(`\\n`).map((e) => {
        return (
          <pre className="pre good-characteristic" key={e}>
            {e}
          </pre>
        );
      })}
    </div>
  </article>
);

GoodCharacteristics.propTypes = {
  description: PropTypes.string.isRequired,
};

export default GoodCharacteristics;
