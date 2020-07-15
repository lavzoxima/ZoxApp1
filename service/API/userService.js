import axios from 'axios'
import { Config } from 'ZoxApp1/config'
import { is, curryN, gte } from 'ramda'

const isWithin = curryN(3, (min, max, value) => {
  const isNumber = is(Number)
  return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
})
const in200s = isWithin(200, 299)


function loginUser(params) {
console.log(params);
  return axios.post(Config.ACCESS_URL, params).then((response) => {
    if (in200s(response.status)) {
        console.log(response )
      return response.data
    }
    return null
  }).catch(error => {
    console.log(error)
    return null
  });
}

function getProductDetails(params) {

  return axios.get( Config.ALL_PRODUCT_PRICE_URL,
 {
    headers: {
      Authorization: 'Bearer ' + params.token,
      agentid: params.agentid,
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    if (in200s(response.status)) {
      return response['data']['records'];
    }
    return null
  }).catch(error => {
    console.log(error)
    return null
  });
}
function userSignUp(params) {
let requestParams = {
     City: params.City,

       Email: params.Email,
       FirstName: params.FirstName,
       LastName:params.LastName,
       Phone: params.Phone,
       Password:params.Password

  };


  return axios.post( Config.SIGN_UP ,  requestParams,
 {
    headers: {
      Authorization: 'Bearer ' + params.token,
      agentid: params.agentid,

      'Content-Type': 'application/json'
    }
  }).then((response) => {
    if (in200s(response.status)) {

      return response.data;
    }
    return null
  }).catch(error => {
    console.log(error)
    return null
  });
}






export const userService = {

  loginUser,
   getProductDetails,
    userSignUp,


}