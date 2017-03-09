import { ADD_POINTS } from '../actions/types';
import { GET_TOTAL } from '../actions/types';

let initialState = {
  userPoints: 0
};

export default (state = initialState.userPoints, action) => {
  switch(action.type) {
    case ADD_POINTS:
      return action.newTotal;
    case GET_TOTAL:
      return action.payload;
    default:
      return state;
  }
}