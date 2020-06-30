import { all, fork,delay } from 'redux-saga/effects';
import { watchUserLoginRequest } from 'ZoxApp1/sagas/usersaga';



export default function* rootSaga() {
    yield all([
        fork(watchUserLoginRequest)
    ]);
}