import { INCREMENT_BAKED_GOODS, DECREMENT_BAKED_GOODS, ALL_BAKED_GOODS, CLEAR_BAKED_GOODS } from '../actions/types';

let initialState = {
  baked_goods: 0
};

export default (state = initialState.baked_goods, action) => {
  switch(action.type) {
    case INCREMENT_BAKED_GOODS:
      return state + 1;
    case DECREMENT_BAKED_GOODS:
      return state - 1
    case ALL_BAKED_GOODS:
      return state + action.payload;
    case CLEAR_BAKED_GOODS:
      return 0;
    default:
      return state;
  }
}