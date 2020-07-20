import {put, call, take, select} from 'redux-saga/effects';
import {RegisterTypes} from '../actionTypes';
import {SignupActions as UserRegisterActions} from '../actions';
import {userService} from '../../utils/api/user.api';
import * as NavigationService from '../../utils/navigation';


export function* RegisterUser(data) {
  try {
    const userData = yield call(userService.userSignUp, data);
    console.log(userData);
    if (userData) {
      yield put(UserRegisterActions.userRegisterSuccess(userData));
        NavigationService.navigate('CasualWearScreen');
    } else {
      yield put(UserRegisterActions.userRegisterFailure());
    }
  } catch (error) {
    yield put(UserRegisterActions.userRegisterFailure());
  }
}

export function* watchUserRegisterRequest() {
  while (true) {
    const {data} = yield take(RegisterTypes.REGISTER_USER);
    yield call(RegisterUser, data);
  }
}
