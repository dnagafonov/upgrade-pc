import { takeEvery, put, call, all } from "redux-saga/effects";
import { types } from "./constants";
import { error, setGoods, setSortCriterion, setGood } from "./actions";
import { getComponents, fetchDoc } from "../tools/requests";
import { errorToast } from "../tools/toasts";

export function* mainSaga() {
  yield all([componentsWatcher(), sortWatcher(), goodWatcher()])
}

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
    yield put(error("Ошибка при получении компонентов!"));
  }
}

function* goodWorker(action) {
  try {
    const good = yield call(() => fetchDoc(action.path));
    yield put(setGood(good));
  } catch(e) {
    console.log(e);
    yield put(error("Ошибка при получении компонентa!"));
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
    yield put(error("Ошибка сортировки!"));
  }
}
