import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Routes from "./Routes";

// Store
import configureStore from "./store";
const store = configureStore();

// Styles
import "./stylesheets/main.scss";

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("app")
);

if (module.hot && process.env.NODE_ENV === "development") {
  module.hot.accept();
}
