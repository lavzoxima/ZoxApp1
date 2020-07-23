import {put, call, take, select} from 'redux-saga/effects';
import {DistributorService} from '../../utils/api/distributor.api';
import {VisitsActions} from '../actions';

export function* addItemToCart({payload}) {
  let cart = yield select(state => state.visits.cart);
  let quantity = yield select(state => state.visits.quantity);
  console.log(quantity);
  let itemAlreadyPresent = false;
  cart.items = cart.items.map(obj => {
    if (obj.item__c == payload.item__c) {
      obj = payload;
      itemAlreadyPresent = true;
      obj.Quantity__c = obj.Quantity__c + 1;
      obj.Data.Products_Pricing__r.records = obj.Data.Products_Pricing__r.records.map(
        obj1 => {
          obj.total__c = obj1.MRP__c * obj.Quantity__c;
          return obj1;
        },
      );
    }
    return obj;
  });

  if (!itemAlreadyPresent) {
    cart.items.push(payload);
    cart.items.map( obj=> {
     obj.Quantity__c= 1

     return obj.Quantity__c

    })

  }

  yield put(VisitsActions.addItemToCartSuccess(cart));
}

export function* removeItemFromCart({payload}) {
  let cart = yield select(state => state.visits.cart);
  let itemAlreadyPresent = true;

  console.log(cart.items.Quantity__c);
  cart.items = cart.items.map(obj => {
    if (obj.item__c == payload.item__c) {
      obj = payload;
      if (obj.Quantity__c >= 1) {
        obj.Quantity__c = obj.Quantity__c - 1;
      }
      if (obj.Quantity__c == 0) {
        itemAlreadyPresent = false;
      }
    }

    return obj;
  });

  if (!itemAlreadyPresent) {
    cart.items = cart.items.filter(obj => obj.item__c != payload.item__c);
  }

  yield put(VisitsActions.removeItemFromCartSuccess(cart));
}

export function* editCartOrder({payload}) {
  let cart = yield select(state => state.visits.cart);
  cart.order[payload.edited_field] = payload.edited_value;
  yield put(VisitsActions.editCartOrderSuccess(cart));
}

export function* getAllDistributor() {


	try {
		yield put(VisitsActions.getAllDistributorLoading());

		const user = yield select(state => state.user);
		const userId = user.id;
   	 	const access_token = user. token


		let successData = yield call(DistributorService.getAllDistributors, {access_token, userId, });
		if (successData) {
			let searchList = []
			successData.map((obj) => {

					searchList.push({
						id: obj.Id,
						name: obj.Name
					});

			});

			searchList.push({id: 'ALL', name: 'ALL'})

			yield put(VisitsActions.getAllDistributorSuccess({list: searchList}));

		} else {
			yield put(VisitsActions.getAllDistributorFailure());
		}
	} catch (error) {
		yield put(VisitsActions.getAllDistributorFailure());
	}
}