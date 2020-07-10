import { put, call, take, select } from 'redux-saga/effects'


import { VisitsTypes } from 'ZoxApp1/store/cart/Actions'
import VisitsActions from 'ZoxApp1/store/cart/Actions'

import { Toast } from 'native-base'



export function* addItemToCart({ payload }) {
	let cart = yield select(state => state.visits.cart);
	let quantity = yield select(state=> state.visits.quantity)
	console.log(quantity);
	let itemAlreadyPresent = false;
	cart.items = cart.items.map((obj) => {
		if (obj.item__c == payload.item__c) {
			obj = payload
			itemAlreadyPresent = true
			console.log('im in if')
			obj.Quantity__c = obj.Quantity__c +1


		}
		return obj;
	});

	if (!itemAlreadyPresent) {
		cart.items.push(payload)
	}

	yield put(VisitsActions.addItemToCartSuccess(cart))

}

export function* removeItemFromCart({ payload }) {
	let cart = yield select(state => state.visits.cart);
	let itemAlreadyPresent = false;
	cart.items = cart.items.filter((obj) => obj.item__c != payload.item__c);
	yield put(VisitsActions.removeItemFromCartSuccess(cart))

}

export function* editCartOrder({ payload }) {
	let cart = yield select(state => state.visits.cart);
	cart.order[payload.edited_field] = payload.edited_value;
	yield put(VisitsActions.editCartOrderSuccess(cart))
}