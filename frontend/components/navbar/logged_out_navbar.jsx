import React from 'react';
import GreetingContainer from '../greeting/greeting_container';

const LoggedOutNavbar = (props) => {
    return (
        <ul className="navbar-ul">

            <li className="logo-nav">
                <div id="logo"></div>
            </li>

            <li className="search-nav">Search
                <span className="search-icon">
                    <i className="fa fa-search" aria-hidden="true"></i>
                </span>
            </li>

            <li className="sell-on-epsy">
                Sell on Epsy
            </li>

            <li className="greeting-nav"><GreetingContainer /></li>

            <li className="cart-nav">Cart</li>

        </ul>
    );
};

export default LoggedOutNavbar;