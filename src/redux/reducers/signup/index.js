import {createReducer} from 'reduxsauce';
import INITIAL_STATE from './initialState';
import {RegisterTypes} from '../../actionTypes';

const userLoginLoading = state => ({
  ...state,
  userLoginIsLoading: true,
});

const userRegisterSuccess = (state, {user}) => ({
  ...state,
  userId: user.id,
  userLoginIsLoading: false,
  userLoginErrorMessage: null,
});

const userRegisterFailure = (state, {errorMessage}) => ({
  ...state,

  userLoginIsLoading: false,
  userLoginErrorMessage: errorMessage,
});

const changeLoginForm = (state, {user}) => ({
  ...state,
  Email: user.Email,
  Password: user.Password,
  Phone: user.Phone,
  City: user.City,
  FirstName: user.FirstName,
  LastName: user.LastName,
  userLoginIsLoading: false,
  validation: {...INITIAL_STATE.validation},
});

const userLoginValidationFailed = (state, {validation}) => ({
  ...state,
  validation: {...state.validation, ...validation},
});

export default createReducer(INITIAL_STATE, {
  [RegisterTypes.USER_LOGIN_LOADING]: userLoginLoading,
  [RegisterTypes.USER_REGISTER_SUCCESS]: userRegisterSuccess,
  [RegisterTypes.USER_REGISTER_FAILURE]: userRegisterFailure,
  [RegisterTypes.CHANGE_LOGIN_FORM]: changeLoginForm,
  [RegisterTypes.USER_LOGIN_VALIDATION_FAILED]: userLoginValidationFailed,
});
