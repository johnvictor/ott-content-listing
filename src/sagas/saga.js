import { all, call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

export default function* rootSaga() {
  yield all([getContentsWatcher()]);
}

export function* getContentsWatcher() {
  yield takeLatest("GET_CONTENTS", getContentsHandler);
}

function* getContentsHandler(data) {
  const response = yield call(getContents, data.payload);
  yield put({
    type: "GET_CONTENTS_SUCCESS",
    payload: response.data,
  });
}

function getContents(page) {
  return axios({
    method: "GET",
    url: `./assets/apis/CONTENTLISTINGPAGE-PAGE${page}.json`,
  });
}
