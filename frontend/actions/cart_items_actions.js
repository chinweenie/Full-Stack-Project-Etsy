import * as CartItemsApiUtil from '../util/cart_items_api_util';

export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const RECEIVE_SUCCESS_MESSAGE = 'RECEIVE_SUCCESS_MESSAGE';
export const RECEIVE_ITEM_ERRORS = 'RECEIVE_ITEM_ERRORS';

export const receiveCartItems = cartItems => ({
    type: RECEIVE_CART_ITEMS,
    cartItems
});

export const receiveSuccessMessage = (message) => ({
    type: RECEIVE_SUCCESS_MESSAGE,
    message
});

export const receiveItemErrors = errors => ({
    type: RECEIVE_ITEM_ERRORS,
    errors
})

export const fetchCartItems = () => dispatch => (
    CartItemsApiUtil.fetchCartItems().then(cartItems => (
        dispatch(receiveCartItems(cartItems))
    ), err => (
        dispatch(receiveItemErrors(err.responseJSON))
    ))
);

export const addToCart = cartItem => dispatch => (
    CartItemsApiUtil.addToCart(cartItem).then(message => {
            debugger
            return dispatch(receiveSuccessMessage(message))
        }, err => (
        dispatch(receiveItemErrors(err.responseJSON))
    ))
);

export const updateCartItem = cartItem => dispatch => (
    CartItemsApiUtil.updateCartItem(cartItem).then(message => (
        dispatch(receiveSuccessMessage(message))
    ), err => (
        dispatch(receiveItemErrors(err.responseJSON))
    ))
);

export const removeCartItem = cartItemId => dispatch => (
    CartItemsApiUtil.removeCartItem(cartItemId).then(message => (
        dispatch(receiveSuccessMessage(message))
    ), err => (
        dispatch(receiveItemErrors(err.responseJSON))
    ))
);