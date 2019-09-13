import React from 'react';
import {connect} from 'react-redux';
import LoggedInNavbar from './logged_in_navbar';
import LoggedOutNavbar from './logged_out_navbar';
import {withRouter, Link} from 'react-router-dom'; 
import { currentUserHasShop, selectAllUsers } from '../../reducers/selectors';
import { fetchAllUsers } from '../../actions/users_actions';
import { fetchCartItems } from '../../actions/cart_items_actions';


class Navbar extends React.Component{
    componentDidMount(){
        this.props.fetchAllUsers();
    }
    
    render() {

        let {navbar, shopId} = this.props;
        const development = (
            <ul className="category-ul">
                <li><Link to={`/categories/56`}>Jewelry & Accessories</Link></li>
                <li><Link to={`/categories/57`}>Clothing & Shoes</Link></li>
                <li><Link to={`/categories/58`}>Home & Living</Link></li>
                <li><Link to={`/categories/59`}>Wedding & Party</Link></li>
                <li><Link to={`/categories/60`}>Toys & Entertainment</Link></li>
                <li><Link to={`/categories/61`}>Art & Collectibles</Link></li>
                <li><Link to={`/categories/62`}>Craft Supplies & Tools</Link></li>
                <li><Link to={`/categories/63`}>Vintage</Link></li>
            </ul>
        );

        const production = (
            <ul className="category-ul">
                <li><Link to={`/categories/1`}>Jewelry & Accessories</Link></li>
                    <li><Link to={`/categories/2`}>Clothing & Shoes</Link></li>
                    <li><Link to={`/categories/3`}>Home & Living</Link></li>
                    <li><Link to={`/categories/4`}>Wedding & Party</Link></li>
                    <li><Link to={`/categories/5`}>Toys & Entertainment</Link></li>
                    <li><Link to={`/categories/6`}>Art & Collectibles</Link></li>
                    <li><Link to={`/categories/7`}>Craft Supplies & Tools</Link></li>
                    <li><Link to={`/categories/8`}>Vintage</Link></li>

            </ul>
        );

        const component = !navbar ? <LoggedOutNavbar/> : <LoggedInNavbar shopId={shopId} />;
        return (
            <div className="navbar">
                {component}
                {/* {development} */}
                {production}
            </div>
        );
    };
} 
    

const mapStateToProps = state => {
    let shopId;
    if (state.session.id){
        shopId = currentUserHasShop(state.session.id, state.entities.users)
    } else {
        shopId = false;
    };

    return {
        navbar: Boolean(state.session.id),
        shopId,
        users: selectAllUsers(state.entities.users),
    }
  
};

const mapDispatchToProps = dispatch => ({
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchCartItems: () => dispatch(fetchCartItems())
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));