/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from 'ZoxApp1/store/SignUp/initials'
import { createReducer } from 'reduxsauce'
import { RegisterTypes } from 'ZoxApp1/store/SignUp/Actions'



export const userLoginLoading = (state) => ({
  ...state,
  userLoginIsLoading: true
});




export const  userRegisterSuccess = (state, { user }) => ({
  ...state,
      userId : user.id,
      userLoginIsLoading: false,
      userLoginErrorMessage: null
});

export const userRegisterFailure = (state, { errorMessage }) => ({
  ...state,

  userLoginIsLoading: false,
  userLoginErrorMessage: errorMessage
});

export const changeLoginForm = (state, {user}) => ({



  ...state,
  Email: user.Email,
  Password: user.Password,
   Phone: user.Phone,
   City: user.City,
    FirstName: user.FirstName,
    LastName : user.LastName,
  userLoginIsLoading: false,
  validation: {...INITIAL_STATE.validation}
});

export const userLoginValidationFailed = (state, {validation}) => ({
  ...state,
  validation: {...state.validation, ...validation}
});





export const reducer = createReducer(INITIAL_STATE, {


  [RegisterTypes.USER_LOGIN_LOADING]              : userLoginLoading,
  [RegisterTypes.USER_REGISTER_SUCCESS]              : userRegisterSuccess,
  [RegisterTypes.USER_REGISTER_FAILURE]              : userRegisterFailure,
  [RegisterTypes.CHANGE_LOGIN_FORM]               : changeLoginForm,
  [RegisterTypes.USER_LOGIN_VALIDATION_FAILED]    : userLoginValidationFailed,

}




);