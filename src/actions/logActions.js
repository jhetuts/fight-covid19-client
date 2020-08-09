import axios from "axios";

import { ADD_NEW_LOG, LOG_HISTORY, GET_ERRORS } from "./types";

const api = process.env.REACT_APP_API_ENDPOINT;

export const getLogs = (playerId) => (dispatch) => {
  axios
    .get(`${api}/logs/${playerId}`)
    .then((res) => {
      const sortByDate = res.data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );

      dispatch({
        type: LOG_HISTORY,
        payload: sortByDate,
      });
    })
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const addNewLog = (log) => (dispatch) => {
  axios
    .post(`${api}/logs`, log)
    .then((res) => {
      dispatch({
        type: ADD_NEW_LOG,
        payload: res.data,
      });
    })
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};
