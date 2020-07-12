import { types } from "./constants";
import { errorToast } from "../tools/toasts";

export const changeSortCriterion = (sortBy) => ({
  type: types.CHANGE_SORT_CRITERION,
  sortBy,
});

export const error = (msg) => {
  errorToast(msg);
  return { type: types.ERROR };
};
