import { RECEIVE_CART_ITEMS } from "../actions/cart_items_actions";



const cartItemsReducer = (state ={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CART_ITEMS:
            return Object.assign({}, action.cartItems);
        default:
            return state;
    }
};

export default cartItemsReducer;