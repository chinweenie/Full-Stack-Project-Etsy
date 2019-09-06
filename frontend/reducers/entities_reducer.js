import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import productsReducer from './products_reducer';
import shopsReducer from './shops_reducer';

const entitiesReducer = combineReducers({
    products: productsReducer,
    users: usersReducer,
    shops: shopsReducer,
    // categories: categoriesReducer,
    // cartItems: cartItemsReducer,
    // reviews: reviewsReducer,
    // favorites: favoritesReducer
})

export default entitiesReducer;