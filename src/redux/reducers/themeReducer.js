import * as types from "../../constants";
import { THEMES } from "../../constants";

const initialState = {
  currentTheme: THEMES.DEFAULT,
};

export default function reducer(state = initialState, actions) {
  switch (actions.type) {
    case types.THEME_SET:
      return {
        ...state,
        currentTheme: actions.payload,
      };

    default:
      return state;
  }
}
