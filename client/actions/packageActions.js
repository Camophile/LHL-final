import axios from 'axios';
import { GET_PACKAGES } from './types';

export function retrievePackages(packages) {
  return {
    type: GET_PACKAGE,
    packages
  };
}

export function postPackageData(data) {//data) {
  console.log("reaching package action");
  return dispatch => {
    return axios.post('/api/package', data) //, data)
    .then(res => {
      axios.get('/api/notifications');
    })
  }
}


