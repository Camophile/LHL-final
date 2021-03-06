import axios from 'axios';
import { GET_SHELTER_DETAILS } from './types';

export function postDeliveredAt(data) {
  return dispatch => {
    return axios.post('/api/shelter-form', data)
    .then(res => {
      // console.log("in the postPackageData function");
      // console.log('data', data)
      // console.log("res", res)
      // console.log("JSON.Parse(res)", JSON.parse(res));
      const packageArray = res.request.response;
      // console.log("packageArray", packageArray);
      // dispatch(retrievePackages(packageArray));
      // return packageArray;
      // dispatch({ type: 'packages', payload: })
      // res.data.forEach(p => dispatch(setPackage(p)));
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