import React from "react";
import Wrapper from "../common/wrapper/wrapper";
import BreadcrumbContainer from "../breadcrumb/breadcrumb-container";
import CategoriesItems from "./__items/categories__items";
import { Helmet } from "react-helmet-async";

import "./categories.scss"

const Categories = ({ categories, url }) => (
  <section className="categories media1220">
    <Wrapper>
      <Helmet>
        <meta name="description" content="Upgrade PC — сайт, на которым вы можете купить лучшие комплектующие для компьютера с Aliexpess по лучшим ценам, так же сможете купить уже готовую сборку" />
        <meta property="og:url" content={`https://upgradepc.ru${url}`} />
        <meta property="og:image" content="https://i.ibb.co/BcP1pQZ/og-img.png" />
        <meta property="og:type" content="product.group" />
        <link rel="canonical" href={`https://upgradepc.ru${url}`}/>
      </Helmet>
      <BreadcrumbContainer />
      <CategoriesItems categories={categories} />
    </Wrapper>
    <h1 className="hidden">Upgrade PC — сайт, на которым вы можете купить лучшие комплектующие для компьютера с Aliexpess по лучшим ценам, так же сможете купить уже готовую сборку</h1>
  </section>
);

export default Categories;