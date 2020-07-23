import React from "react";
import Wrapper from "../common/wrapper/wrapper";
import PathsContainer from "../paths/paths-container";
import CategoriesItems from "./__items/categories__items";

const Categories = ({ categories }) => (
  <section className="categories">
    <Wrapper>
      <PathsContainer />
      <CategoriesItems categories={categories} />
    </Wrapper>
  </section>
);

export default Categories;