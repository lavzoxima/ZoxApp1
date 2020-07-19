import {put, call, take, select} from 'redux-saga/effects';
import {ProductActions} from '../actions';
import {userService} from '../../utils/api/user.api';

export function* fetchProducts({payload}) {
  try {
    let successData = yield call(userService.getProductDetails, payload);
    if (successData) {
      yield put(ProductActions.fetchProductsSuccess(successData));
    } else {
      yield put(ProductActions.fetchProductsFailure());
    }
  } catch (error) {
    console.log('error in fetch products: ', error);
    yield put(ProductActions.fetchProductsFailure());
  }
}
