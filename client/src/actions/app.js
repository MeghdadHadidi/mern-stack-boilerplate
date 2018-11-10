import {
  generateEndtType,
  generateErrorType,
  generateStartType,
  generateSuccessType
} from "../utils";

import { APP_LOADING } from "../types";

export const appLoadingStart = () => ({
  type: generateStartType(APP_LOADING)
});

export const appLoadingEnd = () => ({
  type: generateEndtType(APP_LOADING)
});

export const appLoadingError = () => ({
  type: generateErrorType(APP_LOADING),
  payload: "Error occured while loading app"
});
