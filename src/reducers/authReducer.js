import isEmpty from "../validations/isEmpty";
import { SET_CURRENT_USER, REGISTERED_USER } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {},
  registered: null,
  wins: 0,
  losses: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case REGISTERED_USER:
      return {
        ...state,
        registered: action.payload,
      };
    default:
      return state;
  }
}
