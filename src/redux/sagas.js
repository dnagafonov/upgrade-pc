import { takeEvery, call, put } from "redux-saga/effects";
import { types } from "./constants";
import { changeSortCriterion, error } from "./actions";

export function* sortWatcher() {
  console.log("watcher");
  
  yield takeEvery(types.CHANGE_SORT_CRITERION, sortWorker);
}

function* sortWorker() {
  try {
    yield put(changeSortCriterion("s"));
    yield put(error("its work"))
  }
  catch (e) {
    yield put(error("Sort error"))
  }
}
