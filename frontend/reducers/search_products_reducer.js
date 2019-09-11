import { RECEIVE_SEARCH_PRODUCTS } from "../actions/search_products_actions";

const searchProductsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SEARCH_PRODUCTS:
            return Object.assign({}, action.products);
        default:
            return state;
    }
}

export default searchProductsReducer;