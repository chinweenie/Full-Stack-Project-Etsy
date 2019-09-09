import {RECEIVE_SHOP, RECEIVE_SHOPS} from '../actions/shops_actions';

const shopsReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_SHOP:
            return Object.assign({}, state, {
                [action.shop.id]: action.shop
            })
        case RECEIVE_SHOPS:
            return Object.assign({}, action.shops);
    
        default:
            return state;
    }
}

export default shopsReducer