import {
  generateEndtType,
  generateErrorType,
  generateStartType
} from "../utils";

import { APP_LOADING, APP_OFFLINE, APP_ONLINE } from "../types";

const initialState = {
  loading: true,
  fetching: false,
  offline: false,
  error: null
};

export default function app(state = initialState, action = {}) {
  switch (action.type) {
    case generateStartType(APP_LOADING):
      return {
        ...state,
        loading: true
      };
    case generateEndtType(APP_LOADING):
      return {
        ...state,
        loading: false
      };
    case generateErrorType(APP_LOADING):
      return {
        ...state,
        error: action.payload
      };
    case APP_OFFLINE:
      return {
        ...state,
        offline: true
      };
    case APP_ONLINE:
      return {
        ...state,
        offline: false
      };
    default:
      return state;
  }
}
