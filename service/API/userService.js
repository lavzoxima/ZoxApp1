import axios from 'axios'
import { Config } from 'ZoxApp1/config'
import { is, curryN, gte } from 'ramda'

const isWithin = curryN(3, (min, max, value) => {
  const isNumber = is(Number)
  return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
})
const in200s = isWithin(200, 299)


function loginUser(params) {
    console.log('im here');
  return axios.post(Config.ACCESS_URL, params).then((response) => {
    if (in200s(response.status)) {
        console.log(response.data)
      return response.data
    }
    return null
  }).catch(error => {
    console.log(error)
    return null
  });
}


export const userService = {

  loginUser,

}