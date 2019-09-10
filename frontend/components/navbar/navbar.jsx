import React from 'react';
import {connect} from 'react-redux';
import LoggedInNavbar from './logged_in_navbar';
import LoggedOutNavbar from './logged_out_navbar';
import {withRouter, Link} from 'react-router-dom'; 

class Navbar extends React.Component{
    render() {
        let {navbar, hasShop} = this.props;
        const component = !navbar ? <LoggedOutNavbar/> : <LoggedInNavbar hasShop={hasShop}/>;
        return (
            <div className="navbar">
                {component}
                <ul className="category-ul">
                    {/* Development */}
                    {/* <li><Link to={`/categories/56`}>Jewelry & Accessories</Link></li>
                    <li><Link to={`/categories/57`}>Clothing & Shoes</Link></li>
                    <li><Link to={`/categories/58`}>Home & Living</Link></li>
                    <li><Link to={`/categories/59`}>Wedding & Party</Link></li>
                    <li><Link to={`/categories/60`}>Toys & Entertainment</Link></li>
                    <li><Link to={`/categories/61`}>Art & Collectibles</Link></li>
                    <li><Link to={`/categories/62`}>Craft Supplies & Tools</Link></li>
                    <li><Link to={`/categories/63`}>Vintage</Link></li> */}

                    {/*Production  */}
                    <li><Link to={`/categories/1`}>Jewelry & Accessories</Link></li>
                    <li><Link to={`/categories/2`}>Clothing & Shoes</Link></li>
                    <li><Link to={`/categories/3`}>Home & Living</Link></li>
                    <li><Link to={`/categories/4`}>Wedding & Party</Link></li>
                    <li><Link to={`/categories/5`}>Toys & Entertainment</Link></li>
                    <li><Link to={`/categories/6`}>Art & Collectibles</Link></li>
                    <li><Link to={`/categories/7`}>Craft Supplies & Tools</Link></li>
                    <li><Link to={`/categories/8`}>Vintage</Link></li>
                    
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


export default withRouter(connect(mapStateToProps, null)(Navbar));