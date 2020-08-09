import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";

import {
  GET_ERRORS,
  SET_CURRENT_USER,
  CLEAR_ERRORS,
  REGISTERED_USER,
} from "./types";

const api = process.env.REACT_APP_API_ENDPOINT;

export const registerPlayer = (playerData, history) => (dispatch) => {
  axios
    .post(`${api}/auth/register`, playerData)
    .then((res) => {
      if (res.status === 200) {
        dispatch({ type: REGISTERED_USER, payload: true });
        dispatch({ type: CLEAR_ERRORS });
      }
    })
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const loginPlayer = (playerData) => (dispatch) => {
  axios
    .post(`${api}/auth/login`, playerData)
    .then((res) => {
      if (res) {
        const { token } = res.data;

        localStorage.setItem("token", token);
        setAuthToken(token);

        const decoded = jwt_decode(token);
        decoded.registered = null;
        decoded.welcome = `Welcome Player`;

        dispatch(setCurrentUser(decoded));
        dispatch({ type: CLEAR_ERRORS });
      }
    })
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

export const clearRegister = () => {
  return {
    type: REGISTERED_USER,
    payload: null,
  };
};

export const logOutPlayer = () => (dispatch) => {
  if (localStorage.token) {
    localStorage.removeItem("token");
    setAuthToken(false);
    dispatch(setCurrentUser({}));
  }
};
