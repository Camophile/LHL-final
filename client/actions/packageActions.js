import axios from 'axios';

export function getPackageData() {//data) {
  return dispatch => {
    return axios.post('/api/packages') //, data)
    .then(res => {

    })
  }
}