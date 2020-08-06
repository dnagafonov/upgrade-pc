import React from "react";
import CategoriesItemContainer from "../../categories-item/categories-item-container";
import { Link } from "react-router-dom";

import "./categories__items.scss";

const CategoriesItems = ({ categories }) => (
  <article className="categories__items">
    {categories.map((e) => (
      <Link className="categories-item__link link" to={e.path}>
        <CategoriesItemContainer
          key={e.name}
          img={e.img}
          name={e.name}
          path={e.path}
        />
      </Link>
    ))}
  </article>
);

export default CategoriesItems;
