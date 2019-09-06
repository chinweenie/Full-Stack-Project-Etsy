import { connect } from 'react-redux';
import { updateShop } from '../../actions/shops_actions';
import ShopForm from './shop_form';

const mapStateToProps = (state, ownProps) => {
    const shopId = ownProps.match.params.shopId;
    const shop = state.entities.shops[shopId];
    return {
        shop: shop
    };
};

const mapDispatchToProps = dispatch => ({
    action: shop => dispatch(updateShop(shop))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopForm);