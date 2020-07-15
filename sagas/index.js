import { all, fork,delay,takeLatest } from 'redux-saga/effects';
import { ProductTypes } from 'ZoxApp1/store/product/Actions';
import { watchUserLoginRequest } from 'ZoxApp1/sagas/usersaga';
import {watchUserRegisterRequest } from 'ZoxApp1/sagas/signUpSaga';
import { fetchProducts} from 'ZoxApp1/sagas/productsaga';
import { addItemToCart,removeItemFromCart, editCartOrder,} from 'ZoxApp1/sagas/cartsaga';
import { VisitsTypes } from 'ZoxApp1/store/cart/Actions'





export default function* rootSaga() {
    yield all([



        fork(watchUserLoginRequest),
         fork(watchUserRegisterRequest),

            delay(2000),

          takeLatest(ProductTypes.FETCH_PRODUCTS, fetchProducts),

           takeLatest(VisitsTypes.ADD_ITEM_TO_CART, addItemToCart),
          takeLatest(VisitsTypes.REMOVE_ITEM_FROM_CART, removeItemFromCart),






    ]);
}