import {connect} from 'react-redux';
import UserProfileShow from './user_profile_show';
import { currentUserHasShop, selectCurrentUserShop } from '../../reducers/selectors';
import { fetchAllUsers } from '../../actions/users_actions';
import {fetchShops} from '../../actions/shops_actions';

const mapStateToProps = (state, ownProps) => {
    const shopId = currentUserHasShop(state.session.id, state.entities.users);
    let shop;
    if (Boolean(shopId)){
        shop = selectCurrentUserShop(state.entities.shops, shopId)
    }
    
    return {
        user: state.entities.users[ownProps.match.params.userId],
        shop
    }
    
}

const mapDispatchToProps = dispatch => ({
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchShops: () => dispatch(fetchShops())
})




export default connect(mapStateToProps, mapDispatchToProps)(UserProfileShow);