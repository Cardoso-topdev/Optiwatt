import { combineReducers } from "redux";

import themeReducer from "./themeReducer";
import authReducer from "./authReducer";

export const rootReducer = combineReducers({
  themeReducer,
  authReducer,
});
