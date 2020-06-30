/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from 'ZoxApp1/store/user/intialState'
import { createReducer } from 'reduxsauce'
import { UserTypes } from 'ZoxApp1/store/user/Actions'



export const userLoginLoading = (state) => ({
  ...state,
  userLoginIsLoading: true
});

export const userLoginSuccess = (state, { user }) => ({
  ...state,
  id: user.id,
  token: user.token,
      userLoginIsLoading: false,
      userLoginErrorMessage: null
});

export const userLoginFailure = (state, { errorMessage }) => ({
  ...state,
  id: null,
  token: null,
  userLoginIsLoading: false,
  userLoginErrorMessage: errorMessage
});

export const changeLoginForm = (state, {user}) => ({



  ...state,
  number: user.number,
  password: user.password,
  userLoginIsLoading: false,
  validation: {...INITIAL_STATE.validation}
});

export const userLoginValidationFailed = (state, {validation}) => ({
  ...state,
  validation: {...state.validation, ...validation}
});





export const reducer = createReducer(INITIAL_STATE, {


  [UserTypes.USER_LOGIN_LOADING]              : userLoginLoading,
  [UserTypes.USER_LOGIN_SUCCESS]              : userLoginSuccess,
  [UserTypes.USER_LOGIN_FAILURE]              : userLoginFailure,
  [UserTypes.CHANGE_LOGIN_FORM]               : changeLoginForm,
  [UserTypes.USER_LOGIN_VALIDATION_FAILED]    : userLoginValidationFailed,

}




);