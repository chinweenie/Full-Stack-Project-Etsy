import { RECEIVE_FAVORITE_ERRORS, RECEIVE_FAVORITES, RECEIVE_FAVORITE } from "../actions/favorites_actions";

const favoriteErrorsReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_FAVORITE_ERRORS:
            return action.errors;

        case RECEIVE_FAVORITES:
            return [];

        case RECEIVE_FAVORITE:
            return [];

        default:
            return [];
    }
}

export default favoriteErrorsReducer;