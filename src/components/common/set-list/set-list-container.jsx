import React, { useState } from "react";
import PropTypes from "prop-types";
import SetList from "./set-list";

const SetListContainer = ({ lists = [] }) => {
  const [activeId, setActiveId] = useState(null);
  const changeActive = (id) => {
    if (activeId === id) setActiveId(null);
    else setActiveId(id);
  };
  return (
    <SetList
      lists={lists}
      onClick={(id) => changeActive(id)}
      activeId={activeId}
    />
  );
};

SetListContainer.propTypes = {
  lists: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    bestSeller: PropTypes.exact({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      oldPrice: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
    className: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    sellers: PropTypes.arrayOf({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      oldPrice: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
    isOpen: PropTypes.bool.isRequired,
  }),
};

export default SetListContainer;
