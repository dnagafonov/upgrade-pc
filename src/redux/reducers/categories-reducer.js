import { types } from "../constants";
import produce from "immer";

const categories = produce((draft, action) => {
  switch (action.type) {
    case types.SET_CATEGORIES:
      draft = action.categories;
      return draft;
    case types.CLEAN_CATEGORIES:
      draft = null;
      return draft;
    default:
      return draft;
  }
}, null);

export { categories };
