import ShopShow from "./shop_show";
import { connect } from 'react-redux';
import { fetchShop } from '../../actions/shops_actions';

const mapStateToProps = (state, ownProps) => {
    const shopId = ownProps.match.params.shopId;
    const shop = state.entities.shops[shopId];
    const currentUserId = state.session.id;
    return {
        shop,
        currentUserId
    }
}

const mapDispatchToProps = dispatch => ({
    fetchShop: id => dispatch(fetchShop(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopShow);
