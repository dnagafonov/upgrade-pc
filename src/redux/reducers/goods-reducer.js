import { types } from "../constants";
import produce from "immer";

const init = {
  items: null,
  sortBy: {
    name: "Цена",
    isAsc: false,
    active: true
  },
  criterions: [
    {
      name: "Цене",
      isAsc: false,
      active: true
    },
    {
      name: "Имени",
      isAsc: false,
      active: false
    },
  ]
}

const goods = produce((draft, action) => {
  switch (action.type) {
    case types.SET_SORT_CRITERION:
      draft.sortBy = action.sortBy;
      draft.criterions = action.criterions;
      return draft;
    case types.SET_GOODS:
      draft.items = action.items;
      return draft;
    default:
      return draft;
  }
}, init);

export { goods };
