
import {EMAIL_CHANGED ,PASSWORD_CHANGED, NAME_CHANGED ,LOGIN_USER_SUCCESS,LOGIN_USER_FAIL, LOGIN_USER} from './types';
export const emailChanged = (text)=>{
return{

type: EMAIL_CHANGED,
payload: text

};

};

export const passwordChanged =(text) =>
{
return{

type: PASSWORD_CHANGED,
payload: text

};

};


export const nameChanged =(text) =>

{
    return{

    type: NAME_CHANGED,
    payload: text




    };




};

export const loginUser = ({ email, password }) => {
  return  {
   type: LOGIN_USER
};
};

 export const loginUserFail = () => {
   return { type: LOGIN_USER_FAIL }
};

const loginUserSuccess = ( user) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: user
  }


};










