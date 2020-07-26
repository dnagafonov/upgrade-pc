import { types } from "../constants";
import produce from "immer";

const init = {
  items: null,
  sortBy: {
    name: "Цена",
    isAsc: true,
    active: true,
  },
  criterions: [
    {
      name: "Цене",
      isAsc: true,
      active: true,
    },
    {
      name: "Имени",
      isAsc: true,
      active: false,
    },
  ]
};

const goods = produce((draft, action) => {
  switch (action.type) {
    case types.SET_SORT_CRITERION:
      draft.sortBy = action.sortBy;
      draft.criterions = action.criterions;
      return draft;
    case types.SET_GOODS:
      draft.items = action.items;
      return draft;
    case types.CLEAN_GOODS:
      draft.items = null;
      return draft;
    default:
      return draft;
  }
}, init);

export { goods };
