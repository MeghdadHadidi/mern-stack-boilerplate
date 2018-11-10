import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// Reducers
import rootReducer from "./reducers";

// compose
const composeEnhancer =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const middleware = [thunk];
const enhancer = [];

const composedEnhancers = composeEnhancer(
  applyMiddleware(...middleware),
  ...enhancer
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, composedEnhancers);

  // enable hot reload on reducers
  if (module.hot) {
    module.hot.accept("./reducers", () =>
      store.replaceReducer(require("./reducers").default)
    );
  }
  return store;
}
