import { RECEIVE_ITEM_ERRORS, RECEIVE_CART_ITEM } from "../actions/cart_items_actions";

const cartItemSuccessReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_ITEM_ERRORS:
            return [];

        case RECEIVE_CART_ITEM:
            return ['Successfully added to cart'];

        default:
            return [];
    }
};

export default cartItemSuccessReducer;


