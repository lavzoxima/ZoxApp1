import {put, call, take, select} from 'redux-saga/effects';
import {UserActions} from '../actions';
import {UserTypes, RegisterTypes} from '../actionTypes';
import {userService} from '../../utils/api/user.api';
import * as NavigationService from '../../utils/navigation';

export function* loginUser(data) {
  try {
    const userData = yield call(userService.loginUser, data);
    console.log(userData);
    if (userData) {
      yield put(UserActions.userLoginSuccess(userData));
      NavigationService.navigate('FooterScreen');
    } else {
      yield put(UserActions.userLoginFailure());
    }
  } catch (error) {
    yield put(UserActions.userLoginFailure());
  }
}

export function* signUpUser(data) {
  try {
    const userData = yield call(userService.loginUser, data);
    console.log(userData);
    if (userData) {
      yield put(UserActions.userLoginSuccess(userData));
    } else {
      yield put(UserActions.userLoginFailure());
    }
  } catch (error) {
    yield put(UserActions.userLoginFailure());
  }
}

export function* watchUserLoginRequest() {
  while (true) {
    const {data} = yield take(UserTypes.LOGIN_USER);
    yield call(loginUser, data);
  }
}

export function* watchUserSignUpRequest() {
  while (true) {
    const {data} = yield take(RegisterTypes.SIGN_UP_USER);
    yield call(signUpUser, data);
  }
}
