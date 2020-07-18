import { put, call, take, select } from 'redux-saga/effects'
import { RegisterTypes } from 'ZoxApp1/store/SignUp/Actions'
import UserRegisterActions from 'ZoxApp1/store/SignUp/Actions'
import { userService } from 'ZoxApp1/service/API/userService'
import { Toast } from 'native-base'
import * as NavigationService from 'ZoxApp1/service/util/NavigationService'


export function* RegisterUser(data) {
	try {
		const userData = yield call(userService.userSignUp, data);
		console.log(userData);
		if (userData) {
			yield put(UserRegisterActions.userRegisterSuccess(userData));


		} else {
			yield put(UserRegisterActions.userRegisterFailure())
		}
	} catch (error) {
		yield put(UserRegisterActions .userRegisterFailure())

	}
}











export function* watchUserRegisterRequest() {
	while (true) {
		const { data } = yield take(RegisterTypes.REGISTER_USER)

        console.log('im in saga');
        console.log(data);
		yield call(RegisterUser, data)
	}

}
