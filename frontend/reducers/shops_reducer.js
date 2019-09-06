import {RECEIVE_SHOP} from '../actions/shops_actions';

const shopsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SHOP:
            return Object.assign({}, state, {
                [action.shop.id]: action.shop
            })
    
        default:
            return state;
    }
}

export default shopsReducer