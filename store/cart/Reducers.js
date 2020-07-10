
import { INITIAL_STATE } from './initials'
import { createReducer } from 'reduxsauce'
import { VisitsTypes } from './Actions'
import _ from 'lodash';



export const addItemToCartSuccess = (state, { payload }) => {
    //console.log('addItemToCartSuccess', payload)
    return {
        ...state,

        cart: _.cloneDeep(payload),
       

    }
};


export const removeItemFromCartSuccess = (state, { payload }) => {
    return {
        ...state,
        cart: _.cloneDeep(payload)
    }
};

export const editCartOrderSuccess = (state, { payload }) => {
    return {
        ...state,
        cart: _.cloneDeep(payload)
    }
};


export const placeOrderLoading = (state) => {
    return {
        ...state,
        placeOrderLoader: true
    }
};

export const placeOrderLoadingStop = (state) => {
    return {
        ...state,
        placeOrderLoader: false
    }
};


export const placeOrderSuccess = (state, { payload }) => {
    return {
        ...state,
        cart: {
            order: INITIAL_STATE.cart.order,
            items: []
        },
        placeOrderLoader: false
    }
};

export const placeOrderFailure = (state, { payload }) => {
    return {
        ...state,
        placeOrderLoader: false
    }
};








export const reducer = createReducer(INITIAL_STATE, {



    [VisitsTypes.ADD_ITEM_TO_CART_SUCCESS]: addItemToCartSuccess,
    [VisitsTypes.REMOVE_ITEM_FROM_CART_SUCCESS]: removeItemFromCartSuccess,
    [VisitsTypes.EDIT_CART_ORDER_SUCCESS]: editCartOrderSuccess,


    [VisitsTypes.PLACE_ORDER_LOADING]: placeOrderLoading,
    [VisitsTypes.PLACE_ORDER_LOADING_STOP]: placeOrderLoadingStop,
    [VisitsTypes.PLACE_ORDER_SUCCESS]: placeOrderSuccess,
    [VisitsTypes.PLACE_ORDER_FAILURE]: placeOrderFailure,




});