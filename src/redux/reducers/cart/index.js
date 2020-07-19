import {createReducer} from 'reduxsauce';
import _ from 'lodash';
import {VisitsTypes} from '../../actionTypes';
import INITIAL_STATE from './initialState';

const addItemToCartSuccess = (state, {payload}) => {
  return {
    ...state,

    cart: _.cloneDeep(payload),
  };
};

const removeItemFromCartSuccess = (state, {payload}) => {
  return {
    ...state,
    cart: _.cloneDeep(payload),
  };
};

const editCartOrderSuccess = (state, {payload}) => {
  return {
    ...state,
    cart: _.cloneDeep(payload),
  };
};

const placeOrderLoading = state => {
  return {
    ...state,
    placeOrderLoader: true,
  };
};

const placeOrderLoadingStop = state => {
  return {
    ...state,
    placeOrderLoader: false,
  };
};

const placeOrderSuccess = (state, {payload}) => {
  return {
    ...state,
    cart: {
      order: INITIAL_STATE.cart.order,
      items: [],
    },
    placeOrderLoader: false,
  };
};

const placeOrderFailure = (state, {payload}) => {
  return {
    ...state,
    placeOrderLoader: false,
  };
};

export default createReducer(INITIAL_STATE, {
  [VisitsTypes.ADD_ITEM_TO_CART_SUCCESS]: addItemToCartSuccess,
  [VisitsTypes.REMOVE_ITEM_FROM_CART_SUCCESS]: removeItemFromCartSuccess,
  [VisitsTypes.EDIT_CART_ORDER_SUCCESS]: editCartOrderSuccess,

  [VisitsTypes.PLACE_ORDER_LOADING]: placeOrderLoading,
  [VisitsTypes.PLACE_ORDER_LOADING_STOP]: placeOrderLoadingStop,
  [VisitsTypes.PLACE_ORDER_SUCCESS]: placeOrderSuccess,
  [VisitsTypes.PLACE_ORDER_FAILURE]: placeOrderFailure,
});
