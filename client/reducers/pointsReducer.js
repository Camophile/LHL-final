import { REDEEM_POINTS } from '../actions/types';

let initialState = {
  points: false
};

export default (state = initialState, action) => {
  switch(action.type) {
    case REDEEM_POINTS:
      let currentPoints = {points: action.payload};
      return Object.assign({}, state, currentPoints);
    default:
      return state;
  }
}