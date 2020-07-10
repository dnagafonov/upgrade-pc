import React from "react";
import svg from "@images/404.svg";
import Image from "../../../components/common/image/image";

import "./not-found__image.scss";

const NotFoundImage = () => (
  <article className="not-found__image">
    <Image src={svg} width="100%" />
  </article>
);

export default NotFoundImage;
