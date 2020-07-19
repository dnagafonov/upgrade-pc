import React from "react";
import PropTypes from "prop-types";
import Note from "../../../components/common/note/note";

import "./good__characteristics.scss";

const GoodCharacteristic = ({ description }) => (
  <article className="good__characteristics">
    <Note>Характеристики:</Note>
    <pre className="pre">
      {description.split(`\\n`).map((e) => (
        <p key={e}>
          {e}
          <br />
        </p>
      ))}
    </pre>
  </article>
);

GoodCharacteristic.propTypes = {
  description: PropTypes.string.isRequired,
};

export default GoodCharacteristic;
