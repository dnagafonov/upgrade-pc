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
    <h1 className="hidden">Upgrade PC — сайт, на которым вы можете купить лучшие комплектующие для компьютера с Aliexpess по лучшим ценам, так же сможете купить уже готовую сборку</h1>
  </section>
);

export default Categories;