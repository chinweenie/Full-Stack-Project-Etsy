import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import productsReducer from './products_reducer';
import shopsReducer from './shops_reducer';
import categoriesReducer from './categories_reducer';
import searchProductsReducer from './search_products_reducer';
import cartItemsReducer from './cart_items_reducer';
import reviewsReducer from './reviews_reducer';
import favoritesReducer from './favorites_reducer';

const entitiesReducer = combineReducers({
    products: productsReducer,
    users: usersReducer,
    shops: shopsReducer,
    categories: categoriesReducer,
    searchProducts: searchProductsReducer,
    cartItems: cartItemsReducer,
    reviews: reviewsReducer,
    // favorites: favoritesReducer
})

export default entitiesReducer;