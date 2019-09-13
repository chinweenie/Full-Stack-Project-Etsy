import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import SearchProductsFormContainer from '../search/search_products_form_container';

const LoggedOutNavbar = (props) => {
    return (
        <ul className="logged-out-navbar-ul">

            <li className="logo-nav">
                <a href="/" id="logo"></a>
            </li>

            <SearchProductsFormContainer />

            <li className="sell-on-epsy" onClick={() => alert('Please log in or sign up first!')}>
                Sell on Epsy
            </li>

            <li className="greeting-nav"><GreetingContainer/></li>

            <li className="cart-nav" onClick={() => alert('Please log in or sign up first!')}>
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                Cart
            </li>

        </ul>
    );
};

export default LoggedOutNavbar;