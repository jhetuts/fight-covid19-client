import {
  SET_TIME_LIMIT,
  SET_COUNTDOWN,
  SET_PLAYER_HEALTH,
  SET_MONSTER_HEALTH,
  SET_SURRENDERED,
  RESET_GAME,
  GAME_OVER,
  SET_WON,
} from "../actions/types";

const initialState = {
  timeLimit: 60,
  countDown: 0,
  playerHealth: 100,
  monsterHealth: 100,
  surrendered: false,
  gameOver: false,
  wasWon: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_TIME_LIMIT:
      return {
        ...state,
        timeLimit: action.payload,
      };
    case SET_COUNTDOWN:
      return {
        ...state,
        countDown: action.payload,
      };
    case SET_PLAYER_HEALTH:
      return {
        ...state,
        playerHealth: action.payload,
      };
    case SET_MONSTER_HEALTH:
      return {
        ...state,
        monsterHealth: action.payload,
      };
    case SET_SURRENDERED:
      return {
        ...state,
        surrendered: true,
      };
    case SET_WON:
      return {
        ...state,
        wasWon: action.payload,
      };
    case GAME_OVER:
      return {
        ...state,
        gameOver: true,
      };
    case RESET_GAME:
      return {
        ...state,
        playerHealth: 100,
        monsterHealth: 100,
        surrendered: false,
        gameOver: false,
        wasWon: null,
      };
    default:
      return state;
  }
}
