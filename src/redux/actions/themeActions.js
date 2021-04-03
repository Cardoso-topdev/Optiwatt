import * as types from "../../constants";

export function setTheme(value) {
  return {
    type: types.THEME_SET,
    payload: value,
  };
}
