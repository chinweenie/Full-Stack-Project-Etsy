import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct } from '../../actions/products_actions';
import { fetchShop } from '../../actions/shops_actions';
import { addToCart, fetchCartItems } from '../../actions/cart_items_actions';
import { createFavorite, deleteFavorite, fetchFavorites } from '../../actions/favorites_actions';
import { selectFavoriteId } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
    const product = state.entities.products[ownProps.match.params.productId];
    const shop = state.entities.shops[ownProps.match.params.shopId];
    const currentUserId = state.session.id;
    const favorite = selectFavoriteId(state.entities.favorites, ownProps.match.params.productId, currentUserId);
    return {
        product,
        shop,
        currentUserId,
        favorite
    }
}


const mapDispatchToProps = dispatch => ({
    fetchProduct: (id) => dispatch(fetchProduct(id)),
    fetchShop: id => dispatch(fetchShop(id)),
    addToCart: cartItem => dispatch(addToCart(cartItem)),
    fetchCartItems: () => dispatch(fetchCartItems()),
    createFavorite: (favorite) => dispatch(createFavorite(favorite)),
    deleteFavorite: (favorite) => dispatch(deleteFavorite(favorite)),
    fetchFavorites: () => dispatch(fetchFavorites())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);

