import { combineReducers } from "redux";
import toggleReducer from "./toggle/toggleReducer";

export default combineReducers({
  toggle: toggleReducer,
});