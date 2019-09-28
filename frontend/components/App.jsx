import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import Modal from './modal/modal';
import Navbar from './navbar/navbar';
import EditShopContainer from './shop/edit_shop_container';
import CreateShopContainer from './shop/create_shop_container';
import ShopShowContainer from './shop/shop_show_container';
import CreateProductContainer from './product_form/create_product_container';
import EditProductForm from './product_form/edit_product_container';
import ProductShowContainer from './product_show/product_show_container';
import CategoryShowContainer from './category/category_show_container';
import EditUserProfileContainer from './user/edit_user_profile_container';
import UserProfileShowContainer from './user/user_profile_show_container';
import SearchProductsContainer from './search/search_products_container';
import CartItemsContainer from './cart/cart_items_container';
import HomePageContainer from './homepage/homepage_container';
import ReviewIndex from './reviews/reviews_index';
import ReviewForm from './reviews/review_form';



const App = () => (
    <div>
        <Modal/>
        <header>
            <Navbar />
        </header>

        {/* Route declaration */}
        <Switch>
            <Route exact path='/' component={HomePageContainer}/>
            <AuthRoute path='/signup' component={SignupFormContainer} />
            <AuthRoute path='/login' component={LoginFormContainer} />

            <ProtectedRoute exact path='/shops/:shopId/edit' component={EditShopContainer} />
            <ProtectedRoute exact path='/shops/new' component={CreateShopContainer}/>
            <Route exact path='/shops/:shopId' component={ShopShowContainer}/>

            <ProtectedRoute exact path='/shops/:shopId/products/new' component={CreateProductContainer}/>
            <ProtectedRoute exact path='/products/:productId/edit' component={EditProductForm}/>
            <Route exact path='/shops/:shopId/products/:productId' component={ProductShowContainer}/>

            <Route exact path='/categories/:categoryId' component={CategoryShowContainer}/>
            <Route exact path='/users/:userId' component={UserProfileShowContainer}/>
            <ProtectedRoute exact path='/users/:userId/edit' component={EditUserProfileContainer}/>
            
            <Route exact path='/search/:searchQuery' component={SearchProductsContainer}/>

            <ProtectedRoute exact path='/cartItems' component={CartItemsContainer}/>
            <ProtectedRoute exact path='/products/:productId/reviews' component={ReviewIndex}/>
            <ProtectedRoute exact path='/products/:productId/reviews/new' component={ReviewForm}/>

        </Switch>
        
    </div>
)

export default App;