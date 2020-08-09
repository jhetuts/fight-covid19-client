import { combineReducers } from "redux";
import authReducer from "./authReducer.js";
import errorReducer from "./errorReducer.js";
import gameConfigReducer from "./gameConfigReducer";
import logReducer from "./logReducer.js";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  gameConfig: gameConfigReducer,
  logs: logReducer,
});
