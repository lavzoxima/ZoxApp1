import { all, fork,delay,takeLatest } from 'redux-saga/effects';
import { ProductTypes } from 'ZoxApp1/store/product/Actions';
import { watchUserLoginRequest } from 'ZoxApp1/sagas/usersaga';
import { fetchProducts} from 'ZoxApp1/sagas/productsaga';




export default function* rootSaga() {
    yield all([



        fork(watchUserLoginRequest),

            delay(2000),

          takeLatest(ProductTypes.FETCH_PRODUCTS, fetchProducts),




    ]);
}