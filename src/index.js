import React from "react";
import ReactDOM from "react-dom";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter as Router } from "react-router-dom";

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
);
