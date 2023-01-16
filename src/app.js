import React from "react";
import ContentList from "./components/ContentList";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./store/reducer";
import rootSaga from "./sagas/saga";
import Header from "./components/Header";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default function app() {
  return (
    <div>
      <Provider store={store}>
        <div className="overflow-hidden	h-screen">
          <Header></Header>
          <ContentList></ContentList>
        </div>
      </Provider>
    </div>
  );
}
