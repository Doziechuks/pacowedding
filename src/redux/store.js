import { legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

const middleWares = [];
if (process.env.NODE_ENV === "development") {
  middleWares.push(logger);
}

export const store = legacy_createStore(rootReducer, applyMiddleware(...middleWares));
