import { RECEIVE_PRODUCTS_ERRORS, RECEIVE_PRODUCT } from "../actions/products_actions";

const productErrorsReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS_ERRORS:
            return action.errors;
            
        case RECEIVE_PRODUCT:
            return [];
    
        default:
            return [];
    }
}

export default productErrorsReducer;