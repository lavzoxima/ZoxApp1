import {createReducer} from 'reduxsauce';
import INITIAL_STATE from './initialState';
import {UserTypes} from '../../actionTypes';

const userLoginLoading = state => ({
  ...state,
  userLoginIsLoading: true,
});

const userLoginSuccess = (state, {user}) => ({
  ...state,
  id: user.id,
  token: user.access_token,
  userLoginIsLoading: false,
  userLoginErrorMessage: null,
});

const userLoginFailure = (state, {errorMessage}) => ({
  ...state,
  id: null,
  token: null,
  userLoginIsLoading: false,
  userLoginErrorMessage: errorMessage,
});

const changeLoginForm = (state, {user}) => ({
  ...state,
  number: user.number,
  password: user.password,
  userLoginIsLoading: false,
  validation: {...INITIAL_STATE.validation},
});

const userLoginValidationFailed = (state, {validation}) => ({
  ...state,
  validation: {...state.validation, ...validation},
});

export default createReducer(INITIAL_STATE, {
  [UserTypes.USER_LOGIN_LOADING]: userLoginLoading,
  [UserTypes.USER_LOGIN_SUCCESS]: userLoginSuccess,
  [UserTypes.USER_LOGIN_FAILURE]: userLoginFailure,
  [UserTypes.CHANGE_LOGIN_FORM]: changeLoginForm,
  [UserTypes.USER_LOGIN_VALIDATION_FAILED]: userLoginValidationFailed,
});
