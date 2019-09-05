import React from 'react';
import {connect} from 'react-redux';
import LoggedInNavbar from './logged_in_navbar';
import LoggedOutNavbar from './logged_out_navbar';

class Navbar extends React.Component{
    render() {
        let {navbar} = this.props;
        const component = !navbar ? <LoggedOutNavbar/> : <LoggedInNavbar/>;
        return (
            <div className="navbar">
                {component}
                <ul className="category-ul">
                    <li>Jewelry & Accessories</li>
                    <li>Clothing & Shoes</li>
                    <li>Home & Living</li>
                    <li>Wedding & Party</li>
                    <li>Toys & Entertainment</li>
                    <li>Art & Collectibles</li>
                    <li>Craft Supplies & Tools</li>
                    <li>Vintage</li>
                </ul>
            </div>
        );
    };
} 
    

const mapStateToProps = state => {
    
    return {
        navbar: Boolean(state.session.id)
    }
  
};


export default connect(mapStateToProps, null)(Navbar);