import {all, fork, delay, takeLatest} from 'redux-saga/effects';
import {ProductTypes, VisitsTypes} from '../actionTypes';
import {watchUserLoginRequest, watchUserSignUpRequest} from './user.saga';
import {watchUserRegisterRequest} from './signup.saga';
import {fetchProducts} from './product.saga';
import {addItemToCart, removeItemFromCart, editCartOrder, getAllDistributor} from './cart.saga';

export default function* rootSaga() {
  yield all([
    fork(watchUserSignUpRequest),
    fork(watchUserLoginRequest),
    fork(watchUserRegisterRequest),
    takeLatest(ProductTypes.FETCH_PRODUCTS, fetchProducts),
    takeLatest(VisitsTypes.ADD_ITEM_TO_CART, addItemToCart),
    takeLatest(VisitsTypes.REMOVE_ITEM_FROM_CART, removeItemFromCart),
     takeLatest(VisitsTypes.GET_ALL_DISTRIBUTOR, getAllDistributor),
  ]);
}
