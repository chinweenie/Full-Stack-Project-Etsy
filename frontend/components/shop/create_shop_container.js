import { connect } from 'react-redux';
import { createShop } from '../../actions/shops_actions';
import ShopForm from './shop_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
    const ownerId = state.entities.users[state.session.id];
    const shop = { name: '', owner_id: ownerId, shopImage: null, imageUrl: null};
    return {
        shop
    }
};

const mapDispatchToProps = dispatch => ({
    action: shop => dispatch(createShop(shop))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShopForm));