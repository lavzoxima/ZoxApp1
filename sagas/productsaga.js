import { put, call, take, select } from 'redux-saga/effects'
import ProductActions from 'ZoxApp1/store/product/Actions';
import { ProductTypes } from 'ZoxApp1/store/product/Actions';
import { userService } from 'ZoxApp1/service/API/userService'


export function* fetchProducts({ payload }) {



	try {
		let successData = yield call(userService.getProductDetails, payload);
		if (successData) {
			yield put(ProductActions.fetchProductsSuccess(successData));

		} else {
			yield put(ProductActions.fetchProductsFailure());
		}
	} catch (error) {
		console.log('Error', error)
		yield put(ProductActions.fetchProductsFailure());
	}
}


