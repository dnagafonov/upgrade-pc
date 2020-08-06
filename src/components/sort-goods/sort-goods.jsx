import React from "react";
import Note from "../common/note/note";
import SortGoodsCriterionsContainer from "./__criterions/criterions-container";

import "./sort-goods.scss";

const SortGoods = () => {
  return (
    <section className="sort-goods">
      <Note>Сортировать по:</Note>
      <SortGoodsCriterionsContainer />
    </section>
  );
};

export default SortGoods;
