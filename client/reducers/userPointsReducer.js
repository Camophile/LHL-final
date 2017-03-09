import { ADD_POINTS } from '../actions/types';
import { SET_USER_POINTS } from '../actions/types';

let initialState = {
  userPoints: 0
};

export default (state = initialState.userPoints, action) => {
  switch(action.type) {
    case SET_USER_POINTS:
      return action.pointTotal;
    case ADD_POINTS:
      return action.newTotal;
    default:
      return state;
  }
}