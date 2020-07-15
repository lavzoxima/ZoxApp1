import { put, call, take, select } from 'redux-saga/effects'
import { UserTypes } from 'ZoxApp1/store/user/Actions'
import UserActions from 'ZoxApp1/store/user/Actions'
import { userService } from 'ZoxApp1/service/API/userService'
import { Toast } from 'native-base'
import * as NavigationService from 'ZoxApp1/service/util/NavigationService'


export function* loginUser(data) {
	try {
		const userData = yield call(userService.loginUser, data);
		console.log(userData);
		if (userData) {
			yield put(UserActions.userLoginSuccess(userData));


		} else {
			yield put(UserActions.userLoginFailure())
		}
	} catch (error) {
		yield put(UserActions.userLoginFailure())

	}
}











export function* watchUserLoginRequest() {
	while (true) {
		const { data } = yield take(UserTypes.LOGIN_USER)

        console.log('im in saga');
        console.log(data);
		yield call(loginUser, data)
	}

}

