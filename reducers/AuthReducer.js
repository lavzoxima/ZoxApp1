

import {EMAIL_CHANGED, PASSWORD_CHANGED , NAME_CHANGED,LOGIN_USER_SUCCESS,LOGIN_USER_FAIL, LOGIN_USER} from 'ZoxApp1/actions/types';
const INTIAL_STATE ={email :'',
password : '',
name: '',
user: null,
  error: '',


};


export default (state=INTIAL_STATE, action) =>{



switch(action.type){

    case EMAIL_CHANGED :
    return {...state, email: action.payload };


    case PASSWORD_CHANGED:

    return{...state, password: action.payload };

    case NAME_CHANGED:

    return{...state, name : action.payload };

     case LOGIN_USER:
          return { ...state,  error: '' };


       case LOGIN_USER_SUCCESS:
          return { ...state, ...INITIAL_STATE, user: action.payload };



          case LOGIN_USER_FAIL:
             return { ...state, error: 'Authentication Failed.', password: '', };

    default :

    return state;



}


};