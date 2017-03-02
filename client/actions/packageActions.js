import axios from 'axios';
import { GET_PACKAGE } from './types';

export function setPackage(pkg) {
  return {
    type: GET_PACKAGE,
    pkg
  };
}

export function getPackageData() {//data) {
  return dispatch => {
    return axios.get('/api/package') //, data)
    .then(res => {
      console.log("in the getPackageData function");
      console.log("res", res)
      // console.log("JSON.Parse(res)", JSON.parse(res));
      const packageArray = res.request.response;
      console.log("packageArray", packageArray);
      dispatch(setPackage(packageArray));
      // return packageArray;
      // dispatch({ type: 'packages', payload: })
      // res.data.forEach(p => dispatch(setPackage(p)));
    })
  }
}