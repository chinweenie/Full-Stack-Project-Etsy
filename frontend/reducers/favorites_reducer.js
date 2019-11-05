import { RECEIVE_FAVORITES, RECEIVE_FAVORITE, REMOVE_FAVORITE } from '../actions/favorites_actions';


const favoritesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_FAVORITES:
            return Object.assign({}, action.favorites);
            
        case RECEIVE_FAVORITE:
            return Object.assign({}, state, {
                [action.favorite.id]: action.favorite
            });
            
        case REMOVE_FAVORITE:
            const newState = Object.assign({}, state);
            delete newState[action.id];
            return newState;
    
        default:
            return state;
    }
};

export default favoritesReducer;