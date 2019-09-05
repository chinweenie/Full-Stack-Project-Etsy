import React from 'react';
import GreetingContainer from '../greeting/greeting_container';

const LoggedOutNavbar = (props) => {
    return (
        <ul className="logged-out-navbar-ul">

            <li className="logo-nav">
                <a href="/" id="logo"></a>
            </li>

            <li className="search-nav">Search
                <span className="search-icon">
                    <i className="fa fa-search" aria-hidden="true"></i>
                </span>
            </li>

            <li className="sell-on-epsy">
                Sell on Epsy
            </li>

            <li className="greeting-nav"><GreetingContainer/></li>

            <li className="cart-nav">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                Cart
            </li>

        </ul>
    );
};

export default LoggedOutNavbar;