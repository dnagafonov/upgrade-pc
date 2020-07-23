import React from "react";
import CategoriesItemContainer from "../../categories-item/categories-item-container";

import "./categories__items.scss";

const CategoriesItems = ({ categories }) => (
  <article className="categories__items">
    {categories.map((e) => (
      <CategoriesItemContainer img={e.img} name={e.name} path={e.path} />
    ))}
  </article>
);

export default CategoriesItems;