import { DECREMENT_REDEEM_POINTS, INCREMENT_REDEEM_POINTS, RESET_REDEEM } from '../actions/types';

let initialState = {
  redeem: 0
};

export default (state = initialState.redeem, action) => {
  switch(action.type) {
    case DECREMENT_REDEEM_POINTS:
      return state - 1000;
    case INCREMENT_REDEEM_POINTS:
      return state + 1000;
    case RESET_REDEEM:
      return 0;
    default:
      return state;
  }
}