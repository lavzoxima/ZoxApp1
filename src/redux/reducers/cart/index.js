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
export const getAllDistributorSuccess = (state,  { payload }) => ({
    ...state,
     allDistributors: payload.list,
     allDistributorsLoader: false
});


export const getAllDistributorFailure = (state) => ({
    ...state,
    allDistributors: [],
   allDistributors: false
});

export const getAllDistributorLoading = (state) => ({
    ...state,
     allDistributorsLoader: true
});


export const getAllDistributorLoadingStop = (state) => ({
    ...state,
    allDistributorsLoader: false
});

export const  updateDistributorSearchFilters = (state, { payload }) => {
  let updated_search_filters = _.cloneDeep(state.searchFilters);
  updated_search_filters[payload.edited_field] = payload.edited_value;
    return {
        ...state,
        searchFilters: {
            ...state.searchFilters,
            ...updated_search_filters
        }
    }
}







export default createReducer(INITIAL_STATE, {
  [VisitsTypes.ADD_ITEM_TO_CART_SUCCESS]: addItemToCartSuccess,
  [VisitsTypes.REMOVE_ITEM_FROM_CART_SUCCESS]: removeItemFromCartSuccess,
  [VisitsTypes.EDIT_CART_ORDER_SUCCESS]: editCartOrderSuccess,

  [VisitsTypes.PLACE_ORDER_LOADING]: placeOrderLoading,
  [VisitsTypes.PLACE_ORDER_LOADING_STOP]: placeOrderLoadingStop,
  [VisitsTypes.PLACE_ORDER_SUCCESS]: placeOrderSuccess,
  [VisitsTypes.PLACE_ORDER_FAILURE]: placeOrderFailure,

   [VisitsTypes.GET_ALL_DISTRIBUTOR_SUCCESS]             :  getAllDistributorSuccess,
      [VisitsTypes.GET_ALL_DISTRIBUTOR_FAILURE]             : getAllDistributorFailure,
      [VisitsTypes.GET_ALL_DISTRIBUTOR_LOADING]             :  getAllDistributorLoading,
      [VisitsTypes.GET_ALL_DISTRIBUTOR_LOADING_STOP]        : getAllDistributorLoadingStop,

      [VisitsTypes.UPDATE_DISTRIBUTOR_SEARCH_FILTERS] :        updateDistributorSearchFilters

});
