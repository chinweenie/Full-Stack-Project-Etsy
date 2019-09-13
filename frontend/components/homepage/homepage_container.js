import { connect } from 'react-redux';
import { fetchCartItems } from '../../actions/cart_items_actions';
import { fetchCategories } from '../../actions/categories_actions';
import { fetchProducts } from '../../actions/products_actions';
import { fetchShops } from '../../actions/shops_actions';
import { fetchAllUsers } from '../../actions/users_actions';
import HomePage from './homepage';

// const mapStateToProps = state => ({
    

// });

const mapDispatchToProps = dispatch => ({
    fetchCartItems: () => dispatch(fetchCartItems()),
    fetchCategories: () => dispatch(fetchCategories()),
    fetchProducts: () => dispatch(fetchProducts()),
    fetchShops: () => dispatch(fetchShops()),
    fetchAllUsers: () => dispatch(fetchAllUsers())
});

export default connect(null, mapDispatchToProps)(HomePage);
