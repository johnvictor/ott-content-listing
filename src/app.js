import React from "react";
import ContentList from "./components/ContentList";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./store/reducer";
import rootSaga from "./sagas/saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default function app() {
  return (
    <div>
      <Provider store={store}>
        <ContentList></ContentList>
      </Provider>
    </div>
  );
}
