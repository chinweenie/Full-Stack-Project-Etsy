import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import {withRouter} from 'react-router-dom';

class LoggedInNavbar extends React.Component {
    constructor(props){
        super(props);
        this.redirectToTarget = this.redirectToTarget.bind(this);
    };

    redirectToTarget(event){
        event.preventDefault();
        let { shopId } = this.props;
        const shopManagerLink = shopId ? `/shops/${shopId}` : "/shops/new";
        this.props.history.push(shopManagerLink);
    }

    render(){
        return (
            <ul className="navbar-ul">

                <li className="logo-nav">
                    <a href="/" id="logo"></a>
                </li>

                <li className="search-nav">Search
                <span className="search-icon">
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </span>
                </li>

                <li className="notification-nav">
                    <div className="bell-icon">
                        <i className="fa fa-bell-o" aria-hidden="true"></i>
                    </div>
                    Notifications
                <span className="down-icon">
                        <i className="fa fa-caret-down" aria-hidden="true"></i>
                    </span>
                </li>

                <li className="shop-nav" onClick={this.redirectToTarget}>
                    <div id="store-icon"></div>
                    Shop Manager
                </li>
                    <li className="greeting-nav"><GreetingContainer /></li>
                    <li className="cart-nav">
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        Cart
                </li>

            </ul>
        );
    }
}


export default withRouter(LoggedInNavbar);