import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from "./redux/reducers/root-reducer";
import { Provider } from "react-redux";
import { mainSaga } from "./redux/sagas";
import { HelmetProvider } from 'react-helmet-async';

import "@scss/general.scss";
import 'antd/dist/antd.css';
import './index.css';

const saga = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(saga)));

saga.run(mainSaga);

ReactDOM.render(
    <Provider store={store}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Provider>,
  document.getElementById("root")
);
