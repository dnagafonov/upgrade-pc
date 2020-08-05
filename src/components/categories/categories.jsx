import React from "react";
import Wrapper from "../common/wrapper/wrapper";
import BreadcrumbContainer from "../breadcrumb/breadcrumb-container";
import CategoriesItems from "./__items/categories__items";

import "./categories.scss"

const Categories = ({ categories }) => (
  <section className="categories media1220">
    <Wrapper>
      <BreadcrumbContainer />
      <CategoriesItems categories={categories} />
    </Wrapper>
  </section>
);

export default Categories;