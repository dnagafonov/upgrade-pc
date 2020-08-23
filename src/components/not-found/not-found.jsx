import React from "react";
import Wrapper from "../../components/common/wrapper/wrapper";
import NotFoundInfo from "./__info/not-found__info";
import NotFoundImage from "./__image/not-found__image";
import { Helmet } from "react-helmet-async";

import "./not-found.scss";

const NotFound = () => (
  <section className="not-found media1220">
    <Wrapper>
      <Helmet>
        <meta name="description" content="Upgrade PC — сайт, на которым вы можете купить лучшие комплектующие для компьютера с Aliexpess по лучшим ценам, так же сможете купить уже готовую сборку" />
        <meta property="og:image" content="https://i.ibb.co/BcP1pQZ/og-img.png" />
        <meta property="og:url" content={`https://upgradepc.ru/404`} />
        <meta property="og:type" content="website" />
      </Helmet>
      <NotFoundInfo />
      <NotFoundImage />
    </Wrapper>
  </section>
);

export default NotFound;
