import { ADD_NEW_LOG, LOG_HISTORY } from "../actions/types";

const initialState = {
  logs: [],
  history: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_LOG:
      return {
        ...state,
        logs: [action.payload, ...state.logs],
      };
    case LOG_HISTORY:
      return {
        ...state,
        history: [action.payload, ...state.history],
      };
    default:
      return state;
  }
}
