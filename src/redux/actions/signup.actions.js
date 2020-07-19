import {createActions} from 'reduxsauce';

const {Types, Creators} = createActions({
  SignUpUser: ['data'],
  RegisterUser: ['data'],
  userLoginLoading: null,
  userRegisterSuccess: ['user'],
  userRegisterFailure: ['errorMessage'],
  changeLoginForm: ['user'],
  userLoginValidationFailed: ['validation'],
});

export const RegisterTypes = Types;
export default Creators;
