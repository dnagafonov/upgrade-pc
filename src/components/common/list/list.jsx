import React from "react";
import PropTypes from "prop-types";
import ListIcon from "./__icon/list__icon";
import ListHeader from "./__header/list__header";
import DividerGray from "../divider/_gray/divider_gray";
import ListSellers from "./__sellers/list__sellers";
import ListSeller from "./__seller/list__seller";
import ListContent from "./__content/list__content";
import ListBetter from "./__better/list__better";

import "./list.scss";
import Note from "../note/note";

const List = ({ className = "", id, name, img, bestSeller, sellers, isOpen, onClick }) => (
  <div className={`list ${className} ${isOpen ? "list_open" : "list_close"}`}>
  <ListHeader onClick={onClick} id={id}>
      <div className="list__name">{name}</div>
      <ListIcon isOpen={isOpen}/>
    </ListHeader>
    <DividerGray />
    <ListContent>
      <ListBetter>
        <img className="list__image" src={img} alt="good image" width="70" height="70" />
        <ListSeller seller={bestSeller} />
      </ListBetter>
      <Note>Аналогичные товары:</Note>
      <ListSellers sellers={sellers} />
    </ListContent>
  </div>
);

List.proptypes = {
  img: PropTypes.string.isRequired,
  bestSeller: PropTypes.exact({
  childrensas: PropTypes.node.isRequired,
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
};

export default List;
