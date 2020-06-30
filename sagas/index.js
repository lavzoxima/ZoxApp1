import { all, fork,delay } from 'redux-saga/effects';
import { watchUserLoginRequest } from 'ZoxApp1/sagas/usersaga';



export default function* rootSaga() {
  console.log('im in rootsaga');
    yield all([
        fork(watchUserLoginRequest),


    ]);

}