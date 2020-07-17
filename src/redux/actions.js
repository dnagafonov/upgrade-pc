import { types } from "./constants";
import { errorToast } from "../tools/toasts";

export const changeSortCriterion = (sortBy) => ({
  type: types.CHANGE_SORT_CRITERION,
  sortBy,
});

export const setSortCriterion = (criterions, sortBy) => ({
  type: types.CHANGE_SORT_CRITERION,
  criterions,
  sortBy,
});

export const error = (msg) => {
  errorToast(msg);
  return { type: types.ERROR };
};

export const requsetComponents = path => ({
  type: types.REQUEST_COMPONENTS,
  path
});

export const setGoods = items => ({
  type: types.SET_GOODS,
  items
});

export const getGood = path => ({
  type: types.SET_GOODS,
  path
});

export const setGood = good => ({
  type: types.SET_GOODS,
  good
});


