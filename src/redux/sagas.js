import { takeEvery, put, call } from "redux-saga/effects";
import { types } from "./constants";
import { error, setGoods } from "./actions";
import { getComponents } from "../tools/requests";

export function* componentsWatcher() {
  yield takeEvery(types.REQUEST_COMPONENTS, componentsWorker);
}

function* componentsWorker(action) {
  try {
    const goods = yield call(() => getComponents(action.path));
    yield put(setGoods(goods));
  } catch (e) {
    console.log(e);

    yield put(error("Sort error"));
  }
}
