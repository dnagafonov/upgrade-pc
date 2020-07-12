import { types } from "../constants";
import produce from "immer";

const goods = produce((draft, action) => {
  switch (action.type) {
    case types.CHANGE_SORT_CRITERION:
      draft.sortBy = action.sortBy;
      return draft;
    default:
      return draft;
  }
},{});

export { goods };
