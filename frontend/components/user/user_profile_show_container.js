import {connect} from 'react-redux';
import UserProfileShow from './user_profile_show';
import { currentUserHasShop, selectCurrentUserShop } from '../../reducers/selectors';
import { fetchAllUsers, fetchUser } from '../../actions/users_actions';
import {fetchShops} from '../../actions/shops_actions';
import { selectFavoritedItems } from '../../reducers/selectors';
import { fetchFavorites } from '../../actions/favorites_actions';
import { fetchProducts } from '../../actions/products_actions';


const mapStateToProps = (state, ownProps) => {
    const shopId = currentUserHasShop(state.session.id, state.entities.users);
    let shop;
    if (Boolean(shopId)){
        shop = selectCurrentUserShop(state.entities.shops, shopId)
    }
    const favoritedItems = selectFavoritedItems(state.entities.favorites, state.entities.products ,ownProps.match.params.userId);
    return {
        user: state.entities.users[ownProps.match.params.userId],
        shop,
        favoritedItems
    }
    
}

const mapDispatchToProps = dispatch => ({
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchShops: () => dispatch(fetchShops()),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchFavorites: () => dispatch(fetchFavorites()),
    fetchProducts: () => dispatch(fetchProducts())
})




export default connect(mapStateToProps, mapDispatchToProps)(UserProfileShow);