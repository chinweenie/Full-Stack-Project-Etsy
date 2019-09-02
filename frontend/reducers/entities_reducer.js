import { combineReducers } from 'redux';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
    // products: productsReducer,
    users: usersReducer,
    // cartItems: cartItemsReducer,
    // reviews: reviewsReducer,
    // categories: categoriesReducer,
    // shops: shopsReducer,
    // favorites: favoritesReducer
})

export default entitiesReducer;