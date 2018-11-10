import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// Store
import configureStore from "./store";
const store = configureStore();

// Components
import App from "./components/App";

// Styles
import "./stylesheets/main.scss";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);

if (module.hot && process.env.NODE_ENV === "development") {
  module.hot.accept();
}
