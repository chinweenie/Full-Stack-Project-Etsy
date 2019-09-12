import { RECEIVE_CART_ITEMS, REMOVE_CART_ITEM, RECEIVE_CART_ITEM } from "../actions/cart_items_actions";



const cartItemsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CART_ITEMS:
            return Object.assign({}, action.cartItems);
        case REMOVE_CART_ITEM:
            const cartItemId = action.cartItemId;
            const newObject = Object.assign({}, state);
            delete newObject[cartItemId];
            return newObject;

        case RECEIVE_CART_ITEM:
            return Object.assign({}, state, {
                [action.cartItem.id]: action.cartItem
            });
        default:
            return state;
    }
};

export default cartItemsReducer;