import { takeEvery, put, call } from "redux-saga/effects";
import { types } from "./constants";
import { error, setGoods, setSortCriterion } from "./actions";
import { getComponents } from "../tools/requests";
import { errorToast } from "../tools/toasts";

export function* componentsWatcher() {
  yield takeEvery(types.REQUEST_COMPONENTS, componentsWorker);
}

export function* sortWatcher() {
  yield takeEvery(types.CHANGE_SORT_CRITERION, sortWorker);
}

export function* goodWatcher() {
  yield takeEvery(types.GET_GOOD, goodWorker);
}

function* componentsWorker(action) {
  try {
    const goods = yield call(() => getComponents(action.path));
    yield put(setGoods(goods));
  } catch {
    errorToast("Ошибка при получении компонентов!");
    yield put(error("Sort error"));
  }
}

function* goodWorker(action) {
  try {
    const goods = yield call(() => getComponents(action.path));
    yield put(setGoods(goods));
  } catch {
    errorToast("Ошибка при получении компонентов!");
    yield put(error("Sort error"));
  }
}

function* sortWorker(action) {
  try {
    const criterions = action.criterions.map(e => ({
      name: e.name,
      isAsc: e.name === action.sortBy.name ? !e.isAsc : false,
      active: e.name === action.sortBy.name,
    }));
    put(setSortCriterion(criterions, action.sortBy))
  } catch {
    errorToast("Ошибка сортировки!");
    yield put(error("Sort error"));
  }
}
