import axios from 'axios';
import { GET_SHELTER_DETAILS } from './types';

export function postDeliveredAt(data) {
  return dispatch => {
    return axios.post('/api/shelter-form', data)
    .then(res => {
      const packageArray = res.request.response;
    })
  }
}

export function getShelterData(data) {
  return dispatch => {
    return axios.get('/api/shelterform', data)
  }
}

export function getShelterDetails(shelter) {
  return {
    type: GET_SHELTER_DETAILS,
    shelter
  };
}