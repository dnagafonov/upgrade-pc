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
      switch (action.sortBy.name) {
        case "Цене":
          if(action.sortBy.isAsc) draft.items = draft.items.sort((e1, e2) => e1.price - e2.price) 
          else draft.items = draft.items.sort((e1, e2) => e2.price - e1.price) 
          break;
        case "Имени":
        if(action.sortBy.isAsc) draft.items = draft.items.sort((e1, e2) => e1.name.localeCompare(e2.name)) 
          else draft.items = draft.items.sort((e1, e2) => e2.name.localeCompare(e1.name)) 
          break;
        default:
          break;
      }
      return draft;
    case types.SET_GOODS:
      draft.items = action.items.sort((e1, e2) => e2.price - e1.price);
      return draft;
    case types.CLEAN_GOODS:
      draft.items = null;
      return draft;
    default:
      return draft;
  }
}, init);

export { goods };
