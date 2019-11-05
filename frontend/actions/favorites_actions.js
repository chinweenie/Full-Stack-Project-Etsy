import * as FavoritesApiUtil from '../util/favorites_api_util';
export const RECEIVE_FAVORITES = 'RECEIVE_FAVORITES';
export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';
export const RECEIVE_FAVORITE_ERRORS = 'RECEIVE_FAVORITE_ERRORS'; 
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export const receiveFavorites = favorites => ({
    type: RECEIVE_FAVORITES,
    favorites
});

export const receiveFavorite = favorite => ({
    type: RECEIVE_FAVORITE,
    favorite
});

export const receiveFavoriteErrors = errors => ({
    type: RECEIVE_FAVORITE_ERRORS,
    errors
});

export const removeFavorite = id => ({
    type: REMOVE_FAVORITE,
    id
})

export const fetchFavorites = () => dispatch => {
    return FavoritesApiUtil.fetchFavorites()
        .then(favorites => {
            return dispatch(receiveFavorites(favorites))
        }, err => {
            return dispatch(receiveFavoriteErrors(err))
        })
};

export const createFavorite = favorite => dispatch => {
    return FavoritesApiUtil.createFavorite(favorite)
        .then(favorite => {
            return dispatch(receiveFavorite(favorite))
        }, err => {
            return dispatch(receiveFavoriteErrors(err))
        })
};

export const deleteFavorite = id => dispatch => {
    return FavoritesApiUtil.deleteFavorite(id)
        .then(response => {
            return removeFavorite(response.id)
        })
};
