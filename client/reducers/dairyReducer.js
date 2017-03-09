import { INCREMENT_DAIRY, DECREMENT_DAIRY, ALL_DAIRY, CLEAR_DAIRY } from '../actions/types';

let initialState = {
  dairy: 0
};

export default (state = initialState.dairy, action) => {
  switch(action.type) {
    case INCREMENT_DAIRY:
      return state + 1;
    case DECREMENT_DAIRY:
      return state - 1
    case ALL_DAIRY:
      return state + action.payload;
    case CLEAR_DAIRY:
      return 0;
    default:
      return state;
  }
}