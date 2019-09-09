import ShopShow from "./shop_show";
import { connect } from 'react-redux';
import { fetchShop } from '../../actions/shops_actions';
import { deleteProduct } from '../../actions/products_actions';

const mapStateToProps = (state, ownProps) => {
    const shopId = ownProps.match.params.shopId;
    const shop = state.entities.shops[shopId];
    const currentUserId = state.session.id;
    const products = Object.keys(state.entities.products).map(id => state.entities.products[id])
    return {
        shop,
        currentUserId,
        products
    }
}

const mapDispatchToProps = dispatch => ({
    fetchShop: id => dispatch(fetchShop(id)),
    fetchProducts: products => dispatch(fetchProducts(products)),
    deleteProduct: id => dispatch(deleteProduct(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopShow);
