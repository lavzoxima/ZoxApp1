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
        obj.Data.Products_Pricing__r.records = obj.Data.Products_Pricing__r.records.map( (obj1) =>{

        			 obj.total__c= obj1.MRP__c*obj.Quantity__c

                       return obj1;

        			 }

                    )




		}
		return obj;
	});

	if (!itemAlreadyPresent) {
		cart.items.push(payload)

	cart.items.Quantity__c=1





	}

	yield put(VisitsActions.addItemToCartSuccess(cart,))

}

export function* removeItemFromCart({ payload }) {
	let cart = yield select(state => state.visits.cart);
	let itemAlreadyPresent = true



    console.log(cart.items.Quantity__c);
	cart.items = cart.items.map((obj) => {
    		if (obj.item__c == payload.item__c) {
    			obj = payload

    			console.log('im in if')
    			if(obj.Quantity__c >=1){
    			obj.Quantity__c = obj.Quantity__c -1
    			}

    			if(obj.Quantity__c ==0){

    			itemAlreadyPresent = false;

    			}



}


    		return obj;
    	});


    	if(!itemAlreadyPresent){
        	cart.items = cart.items.filter((obj) => obj.item__c != payload.item__c);}





	yield put(VisitsActions.removeItemFromCartSuccess(cart))

}

export function* editCartOrder({ payload }) {
	let cart = yield select(state => state.visits.cart);
	cart.order[payload.edited_field] = payload.edited_value;
	yield put(VisitsActions.editCartOrderSuccess(cart))
}