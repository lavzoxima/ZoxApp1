import { INITIAL_STATE } from './initialState'
import { createReducer } from 'reduxsauce'
import { ProductTypes } from './Actions'



export const fetchProductsSuccess = (state, {payload}) => {
    return {
      	...state,
      	productList: payload,
      	fetchProductsLoader: false
    }
};

export const fetchProductsFailure = (state, {payload}) => {
    return {
      ...state,
      fetchProductsLoader: false
    }
};

export const fetchProductsLoading = (state) => {
    return {
      ...state,
      fetchProductsLoader: true
    }
};

export const fetchProductsLoadingStop = (state) => {
    return {
      ...state,
      fetchProductsLoader: false
    }
};











export const reducer = createReducer(INITIAL_STATE, {
	// fetchProducts: ['payload'],
	[ProductTypes.FETCH_PRODUCTS_SUCCESS] 						: fetchProductsSuccess,
	[ProductTypes.FETCH_PRODUCTS_FAILURE] 						: fetchProductsFailure,
	[ProductTypes.FETCH_PRODUCTS_LOADING] 						: fetchProductsLoading,
	[ProductTypes.FETCH_PRODUCTS_LOADING_STOP] 					: fetchProductsLoadingStop,



});