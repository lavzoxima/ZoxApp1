import {createReducer} from 'reduxsauce';
import INITIAL_STATE from './initialState';
import {ProductTypes} from '../../actionTypes';

const fetchProductsSuccess = (state, {payload}) => {
  return {
    ...state,
    productList: payload,
    fetchProductsLoader: false,
  };
};

const fetchProductsFailure = (state, {payload}) => {
  return {
    ...state,
    fetchProductsLoader: false,
  };
};

const fetchProductsLoading = state => {
  return {
    ...state,
    fetchProductsLoader: true,
  };
};

const fetchProductsLoadingStop = state => {
  return {
    ...state,
    fetchProductsLoader: false,
  };
};

export default createReducer(INITIAL_STATE, {
  [ProductTypes.FETCH_PRODUCTS_SUCCESS]: fetchProductsSuccess,
  [ProductTypes.FETCH_PRODUCTS_FAILURE]: fetchProductsFailure,
  [ProductTypes.FETCH_PRODUCTS_LOADING]: fetchProductsLoading,
  [ProductTypes.FETCH_PRODUCTS_LOADING_STOP]: fetchProductsLoadingStop,
});
