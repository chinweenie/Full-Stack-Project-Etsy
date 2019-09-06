import {connect} from 'react-redux';
import {updateShop, fetchShop} from '../../actions/shops_actions';
import ShopForm from './shop_form';
import React from 'react';

const mapStateToProps = (state, ownProps) => {
    
    const shopId = parseInt(ownProps.match.params.shopId);
    const shop = state.entities.shops[shopId];
    const errors = state.errors.shop;
    return {shop: shop, errors: errors};
};

const mapDispatchToProps = dispatch => ({
    action: shop => dispatch(updateShop(shop)),
    fetchShop: id => dispatch(fetchShop(id))
});

class EditShopForm extends React.Component {
    componentDidMount() {
        this
            .props
            .fetchShop(this.props.match.params.shopId);
    };

    componentDidUpdate(prevProps) {
        if (this.props.match.params.shopId !== prevProps.match.params.shopId) {
            this
                .props
                .fetchShop(this.props.match.params.shopId);
        }
    };

    render() {
        const {action, shop} = this.props;
        return (
            <ShopForm action={action} shop={shop}/>
        )
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(EditShopForm);