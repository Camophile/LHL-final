import axios from 'axios';
import { GET_GROCERIES } from './types';

export function retrieveGroceries(groceries) {
  return {
    type: GET_GROCERIES,
    groceries
  };
}

export const storeSelectedAction = (id) => ({ type: 'STORE_SELECTED', payload: id });