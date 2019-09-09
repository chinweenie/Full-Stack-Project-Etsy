import { RECEIVE_PRODUCT, RECEIVE_PRODUCTS, REMOVE_PRODUCT } from '../actions/products_actions';

const productsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PRODUCT:
            return Object.assign({}, state,{
                [action.product.id]: action.product
            });

        case RECEIVE_PRODUCTS:
            return Object.assign({}, action.products);

        case REMOVE_PRODUCT:
            const newState = Object.assign({}, state);
            delete newState[action.id];
            return newState;
            
        default:
            return state;
    }
};

export default productsReducer;