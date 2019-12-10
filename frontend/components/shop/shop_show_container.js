import ShopShow from "./shop_show";
import { connect } from 'react-redux';
import { fetchShop } from '../../actions/shops_actions';
import { deleteProduct, fetchProducts } from '../../actions/products_actions';
import { selectShopProducts, selectFavoriteId } from "../../reducers/selectors";
import { createFavorite, deleteFavorite, fetchFavorites } from '../../actions/favorites_actions';

const mapStateToProps = (state, ownProps) => {
    const shopId = ownProps.match.params.shopId;
    const shop = state.entities.shops[shopId];
    const currentUserId = state.session.id;
    const products = selectShopProducts(state.entities.products, shopId);
    const favorite = selectFavoriteId(state.entities.favorites, ownProps.match.params.shopId, currentUserId);
    return {
        shop,
        currentUserId,
        products,
        favorite
    }
}

const mapDispatchToProps = dispatch => ({
    fetchShop: id => dispatch(fetchShop(id)),
    fetchProducts: () => dispatch(fetchProducts()),
    deleteProduct: id => dispatch(deleteProduct(id)),
    createFavorite: favorite => dispatch(createFavorite(favorite)),
    deleteFavorite: id => dispatch(deleteFavorite(id)),
    fetchFavorites: () => dispatch(fetchFavorites())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopShow);
