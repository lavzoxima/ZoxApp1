import {createActions} from 'reduxsauce';

const {Types, Creators} = createActions({
  loginUser: ['data'],
  userLoginLoading: null,
  userLoginSuccess: ['user'],
  userLoginFailure: ['errorMessage'],
  changeLoginForm: ['user'],
  userLoginValidationFailed: ['validation'],
});

export const UserTypes = Types;
export default Creators;
