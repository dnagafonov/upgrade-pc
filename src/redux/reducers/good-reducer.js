import { types } from "../constants";
import produce from "immer";

const good = produce((draft, action) => {
  switch (action.type) {
    case types.SET_GOOD:
      draft = action.good;
      return draft;
    default:
      return draft;
  }
}, null);

export { good };
