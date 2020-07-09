import { all, fork,delay,takeLatest } from 'redux-saga/effects';
import { ProductTypes } from 'ZoxApp1/store/product/Actions';
import { watchUserLoginRequest } from 'ZoxApp1/sagas/usersaga';
import { fetchProducts} from 'ZoxApp1/sagas/productsaga';
import { addItemToCart,removeItemFromCart, editCartOrder,} from 'ZoxApp1/sagas/cartsaga';
import { VisitsTypes } from 'ZoxApp1/store/cart/Actions'





export default function* rootSaga() {
    yield all([



        fork(watchUserLoginRequest),

            delay(2000),

          takeLatest(ProductTypes.FETCH_PRODUCTS, fetchProducts),

           takeLatest(VisitsTypes.ADD_ITEM_TO_CART, addItemToCart),
          takeLatest(VisitsTypes.REMOVE_ITEM_FROM_CART, removeItemFromCart),

            takeLatest(VisitsTypes.EDIT_CART_ORDER, editCartOrder),




    ]);
}