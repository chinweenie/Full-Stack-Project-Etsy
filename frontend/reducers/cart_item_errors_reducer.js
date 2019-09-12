import { RECEIVE_CART_ITEMS, RECEIVE_ITEM_ERRORS, RECEIVE_SUCCESS_MESSAGE } from "../actions/cart_items_actions";

const cartItemErrorsReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_CART_ITEMS:
            return [];

        case RECEIVE_ITEM_ERRORS:
            return action.errors;

        case RECEIVE_SUCCESS_MESSAGE:
            return [];
    
        default:
            return [];
    }
};

export default cartItemErrorsReducer;


