import axios from 'axios';
import {Config} from '../../../config';
import {in200s} from './common';

function loginUser(params) {
  console.log(params);
  let url = Config.ACCESS_URL;
   url = url.replace('userId', params.number);
    url = url.replace('passwordId', params.password);
    console.log(url);


  return axios
    .post(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      if (in200s(response.status)) {
        console.log(response);
        return response.data;
      }
      return null;
    })
    .catch(error => {

      console.log(error);
      return null;
    });
}

function signUpUser(params) {
  console.log(params);
  return axios
    .post(Config.ACCESS_URL, params, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      if (in200s(response.status)) {
        console.log(response);
        return response.data;
      }
      return null;
    })
    .catch(error => {
      console.log(error);
      return null;
    });
}

function getProductDetails(params) {
  return axios
    .get(Config.ALL_PRODUCT_PRICE_URL, {
      headers: {
        Authorization: 'Bearer ' + params.token,
        agentid: params.agentid,
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      if (in200s(response.status)) {
        return response['data']['records'];
      }
      return null;
    })
    .catch(error => {
      console.log(error);
      return null;
    });
}

function userSignUp(params) {
  let requestParams = {
    Email: params.Email,
    FirstName: params.FirstName,
    LastName: params.LastName,
    Phone: params.Phone,
    Password: params.Password,
  };

  return axios
    .post(Config.SIGN_UP, requestParams, {
      headers: {
        Authorization: 'Bearer ' + params.token,
        agentid: params.agentid,

        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      if (in200s(response.status)) {
        return response.data;
      }
      return null;
    })
    .catch(error => {
      console.log(error);
      return null;
    });
}

function placeOrder(params) {
  let url = Config.VISITS_SERVICE.PLACE_ORDER;
  return visitsApiClient
    .post(url, params.payload, {
      headers: {
        Authorization: 'Bearer ' + params.token,
        agentid: params.agentid,
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      debugger;
      if (in200s(response.status)) {
        return response['data'];
      }
      return null;
    })
    .catch(error => {
      debugger;
      console.log('API FAIL = ', error);
      return null;
    });
}

export const userService = {
  loginUser,
  getProductDetails,
  userSignUp,
};
