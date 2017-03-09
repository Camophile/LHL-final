import { GET_SCHEDULED_PACKAGES } from '../actions/types';

export default (state = [], { type, payload }) => {
    switch(type)
    {
      case GET_SCHEDULED_PACKAGES:
        return payload;
      default:
        return state;
    }
  }