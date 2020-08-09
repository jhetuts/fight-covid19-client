// import axios from "axios";
// import jwt_decode from "jwt-decode";
// import setAuthToken from "../utils/setAuthToken";

import {
  SET_TIME_LIMIT,
  SET_COUNTDOWN,
  SET_PLAYER_HEALTH,
  SET_MONSTER_HEALTH,
  SET_SURRENDERED,
  RESET_GAME,
  GAME_OVER,
  SET_WON,
} from "./types";

// const api = process.env.REACT_APP_API_ENDPOINT;

export const setTimeLimit = (time) => (dispatch) => {
  dispatch({ type: SET_TIME_LIMIT, payload: time });
};

export const setCountDown = (time) => (dispatch) => {
  dispatch({ type: SET_COUNTDOWN, payload: time });
};

export const setPlayerHealth = (amount) => (dispatch) => {
  dispatch({ type: SET_PLAYER_HEALTH, payload: amount });
};

export const setMonsterHealth = (amount) => (dispatch) => {
  dispatch({ type: SET_MONSTER_HEALTH, payload: amount });
};

export const setSurrendered = () => (dispatch) => {
  dispatch({ type: SET_SURRENDERED });
};

export const gameOver = (outCome) => (dispatch) => {
  dispatch({ type: GAME_OVER });
  dispatch(wasWon(outCome));
};

export const wasWon = (outCome) => (dispatch) => {
  dispatch({ type: SET_WON, payload: outCome });
};

export const resetGame = () => (dispatch) => {
  dispatch({ type: RESET_GAME });
};
