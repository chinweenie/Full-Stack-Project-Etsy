import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import {withRouter} from 'react-router-dom';
import SearchProductsFormContainer from '../search/search_products_form_container';
 

class LoggedInNavbar extends React.Component {
    constructor(props){
        super(props);
        this.redirectToTarget = this.redirectToTarget.bind(this);
        this.searchPage = this.searchPage.bind(this);
        this.goToCart = this.goToCart.bind(this);
    };

    redirectToTarget(event){
        event.preventDefault();
        let { shopId } = this.props;
        const shopManagerLink = shopId ? `/shops/${shopId}` : "/shops/new";
        this.props.history.push(shopManagerLink);
    }

    searchPage(event){
        event.preventDefault();
        this.props.history.push('/search');
    }

    goToCart(event){
        event.preventDefault();
        this.props.history.push('/cartItems');
    }

    render(){
        return (
            <ul className="navbar-ul">

                <li className="logo-nav">
                    <a href="/" id="logo"></a>
                </li>

                
                <SearchProductsFormContainer/>
                

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
                <li className="cart-nav" onClick={this.goToCart}>
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        Cart
                </li>

            </ul>
        );
    }
}


export default withRouter(LoggedInNavbar);