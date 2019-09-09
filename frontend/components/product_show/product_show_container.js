import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct } from '../../actions/products_actions';
import { fetchShop } from '../../actions/shops_actions';

const mapStateToProps = (state, ownProps) => {
    const product = state.entities.products[ownProps.match.params.productId];
    const shop = state.entities.shops[ownProps.match.params.shopId];
    return {
        product,
        shop
    }
}


const mapDispatchToProps = dispatch => ({
    fetchProduct: (id) => dispatch(fetchProduct(id)),
    fetchShop: id => dispatch(fetchShop(id))
    // create cart item
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);

