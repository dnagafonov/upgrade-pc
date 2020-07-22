import React from "react";
import Image from "../../components/common/image/image";
import Note from "../../components/common/note/note";
import Wrapper from "../../components/common/wrapper/wrapper";
import NotFoundInfo from "./__info/not-found__info";
import NotFoundImage from "./__image/not-found__image";

import "./not-found.scss";

const NotFound = () => (
  <section className="not-found">
    <Wrapper>
      <NotFoundInfo />
      <NotFoundImage />
    </Wrapper>
  </section>
);

export default NotFound;
