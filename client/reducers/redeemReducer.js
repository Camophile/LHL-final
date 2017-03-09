import { DECREMENT_REDEEM_POINTS, INCREMENT_REDEEM_POINTS } from '../actions/types';

let initialState = {
  redeem: 0
};

export default (state = initialState.redeem, action) => {
  switch(action.type) {
    case DECREMENT_REDEEM_POINTS:
      return state - 1000;
    case INCREMENT_REDEEM_POINTS:
      return state + 1000;
    default:
      return state;
  }
}