import React from "react";
import Note from "../common/note/note";
import SortGoodsCriterions from "./__criterions/sort-goods__criterions";

import "./sort-goods.scss";

const SortGoods = () => {
  return (
    <section className="sort-goods">
      <Note>Сортировать по:</Note>
      <SortGoodsCriterions />
    </section>
  );
};

export default SortGoods;
