import React from "react";
import Note from "../../../components/common/note/note";

import "./not-found__info.scss";

const NotFoundInfo = () => (
  <article className="not-found__info">
    <Note className="t404">404</Note>
    <Note className="h1">У меня плохие новости</Note>
    <Note className="h5">Страницу, которую ты ищешь не существует или она была перемещена на другой адрес</Note>
  </article>
);

export default NotFoundInfo;
