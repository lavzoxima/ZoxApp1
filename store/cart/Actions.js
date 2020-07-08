import { createActions } from 'reduxsauce'


const { Types, Creators } = createActions({



  	addItemToCart: ['payload'],
  	addItemToCartSuccess: ['payload'],
  	removeItemFromCart: ['payload'],
  	removeItemFromCartSuccess: ['payload'],
  	editCartOrder: ['payload'],
  	editCartOrderSuccess: ['payload'],

  	placeOrder: ['payload'],
  	placeOrderLoading: null,
  	placeOrderLoadingStop: null,
  	placeOrderSuccess: ['payload'],
  	placeOrderFailure: ['payload'],




});

export const VisitsTypes = Types
export default Creators