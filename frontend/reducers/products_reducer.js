import { RECEIVE_PRODUCT } from '../actions/products_actions';

const productsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PRODUCT:
            return Object.assign({}, state,{
                [action.product.id]: action.product
            });
            
        default:
            return state;
    }
};

export default productsReducer;