import axios from 'axios';
import { REDEEM_POINTS, GET_TOTAL } from './types';

export function redeem(redeem) {
  return {
    type: REDEEM_POINTS,
    payload: redeem
  }
}

export function updateCurrentPoints(newTotal) {
  return {
    type: GET_TOTAL,
    payload: newTotal.reward_points
  }
}

export function currentPoints (userId, newPointTotal) {
  let update = {
    user: userId,
    value: newPointTotal,
    requestType: "add"
  };
  return dispatch => {
    return axios.put('/api/points', update)
    .then(res => {
      dispatch(updateCurrentPoints(res.data.response));
    });
  }
}