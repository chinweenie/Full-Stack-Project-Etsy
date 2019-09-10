import { connect } from 'react-redux';
import { updateShop, fetchShop } from '../../actions/shops_actions';
import ShopForm from './shop_form';
import React from 'react';
import LoadingIcon from '../loading_icon';
import {fetchAllUsers} from'../../actions/users_actions';

const mapStateToProps = (state, ownProps) => {
    const shopId = parseInt(ownProps.match.params.shopId);
    const shop = state.entities.shops[shopId];
    const errors = state.errors.shop;
    return { shop: shop, errors: errors };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    action: formData => dispatch(updateShop(formData)),
    fetchShop: id => dispatch(fetchShop(id)),
    fetchAllUsers: () => dispatch(fetchAllUsers())
});

class EditShopForm extends React.Component {
    componentDidMount() {
        this
            .props
            .fetchShop(this.props.match.params.shopId);
        this.props.fetchAllUsers();
    };

    componentDidUpdate(prevProps) {
        if (this.props.match.params.shopId !== prevProps.match.params.shopId) {
            this
                .props
                .fetchShop(this.props.match.params.shopId);
                this.props.fetchAllUsers();
        }
    };

    render() {
        const { action, shop } = this.props;

        if (!shop) {
            return (
                <LoadingIcon />
            )
        };

        return (
            <ShopForm action={action} shop={shop} />
        )
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(EditShopForm);