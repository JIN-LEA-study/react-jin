import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { Provider } from "react-redux";
// import configureStore from "./common/redux/store";
import store from "./common/redux/configureStore";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

// const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById("chatApp"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
