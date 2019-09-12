export const fetchCartItems = () => (
    $.ajax({
        method: 'GET',
        url: 'api/cart_items'
    })
);

export const addToCart = (cartItem) => (
    $.ajax({
        method: 'POST',
        url: 'api/cart_items',
        data: {cart_item: cartItem}
    })
);

export const updateCartItem = cartItem => (
    $.ajax({
        method: 'PATCH',
        url: `api/cart_items/${cartItem.id}`,
        data: {cart_item: cartItem}
    })
)

export const removeCartItem = cartItemId => (
    $.ajax({
        method: 'DELETE',
        url: `api/cart_items/${cartItemId}`
    })
)