import React from 'react';
import {connect} from 'react-redux';
import LoggedInNavbar from './logged_in_navbar';
import LoggedOutNavbar from './logged_out_navbar';

class Navbar extends React.Component{
    render() {
        let {navbar, hasShop} = this.props;
        const component = !navbar ? <LoggedOutNavbar/> : <LoggedInNavbar hasShop={hasShop}/>;
        return (
            <div className="navbar">
                {component}
                <ul className="category-ul">
                    <li><a href="#"> Jewelry & Accessories</a></li>
                    <li><a href="#">Clothing & Shoes</a></li>
                    <li><a href="#">Home & Living</a></li>
                    <li><a href="#">Wedding & Party</a></li>
                    <li><a href="#">Toys & Entertainment</a></li>
                    <li><a href="#">Art & Collectibles</a></li>
                    <li><a href="#">Craft Supplies & Tools</a></li>
                    <li><a href="#">Vintage</a></li>
                </ul>
            </div>
        );
    };
} 
    

const mapStateToProps = state => {
    let hasShop;
    if (state.session.id){
        hasShop = state.entities.users[state.session.id].shop;
    } else {
        hasShop = null;
    };

    return {
        navbar: Boolean(state.session.id),
        hasShop
    }
  
};


export default connect(mapStateToProps, null)(Navbar);