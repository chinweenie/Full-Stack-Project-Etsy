import { connect } from "react-redux";
import { fetchCartItems, updateCartItem, removeCartItem } from "../../actions/cart_items_actions";
import { selectAllCartItems } from "../../reducers/selectors";
import CartItems from "./cart_items";

const mapStateToProps = state => ({
    allCartItemsArray: selectAllCartItems(state.entities.cartItems)
});

const mapDispatchToProps = dispatch => ({
    fetchCartItems: () => dispatch(fetchCartItems()),
    updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem)),
    removeCartItem: cartItemId => dispatch(removeCartItem(cartItemId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);