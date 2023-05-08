import React from "react";
import ReactDOM from "react-dom";
import * as ReactDOMClient from "react-dom/client";
import thunk from "redux-thunk";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter as Router } from "react-router-dom";
import {socketMiddleWare} from "./store/middleware/socketMiddleware"
const wsUrl = "wss://norma.nomoreparties.space/orders/all";
const wsUrlAuth = "wss://norma.nomoreparties.space/orders";
const actionsAuth = {
  wsConnectionStart: "WS_CONNECTION_AUTH_START",
  wsConnectionSuccess: "WS_CONNECTION_AUTH_SUCCESS",
  wsConnectionError: "WS_CONNECTION_AUTH_ERROR",
  wsConnectionClosed: "WS_CONNECTION_AUTH_CLOSED",
  wsGetMessage: "WS_GET_AUTH_MESSAGE",
  wsSendMessage: "WS_SEND_AUTH_MESSAGE",
};

const actions = {
  wsConnectionStart: "WS_CONNECTION_START",
  wsConnectionSuccess: "WS_CONNECTION_SUCCESS",
  wsConnectionError: "WS_CONNECTION_ERROR",
  wsConnectionClosed: "WS_CONNECTION_CLOSED",
  wsGetMessage: "WS_GET_MESSAGE",
  wsSendMessage: "WS_SEND_MESSAGE",
};

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      socketMiddleWare(wsUrl,actions, false),
      socketMiddleWare(wsUrlAuth,actionsAuth, true)
    )
  )
);
const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
);
