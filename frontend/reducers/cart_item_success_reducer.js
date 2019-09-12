import { RECEIVE_ITEM_ERRORS, RECEIVE_SUCCESS_MESSAGE } from "../actions/cart_items_actions";

const cartItemSuccessReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_ITEM_ERRORS:
            return [];

        case RECEIVE_SUCCESS_MESSAGE:
            debugger
            return action.message;

        default:
            return [];
    }
};

export default cartItemSuccessReducer;


