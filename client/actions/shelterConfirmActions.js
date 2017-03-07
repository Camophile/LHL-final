import axios from 'axios';
// import { CONFIRM_DELIVERY } from './types';

export function postDeliveredAt(data) {
  return dispatch => {
    return axios.post('/api/shelter-form', data)
    .then(res => {
      const packageArray = res.request.response;
      // dispatch(retrievePackages(packageArray));
      // return packageArray;
      // dispatch({ type: 'packages', payload: })
      // res.data.forEach(p => dispatch(setPackage(p)));
    })
  }
}

export function getTransporterData(data) {
  return dispatch => {
    return axios.get('/api/shelterform', data)
  }
}