
export const fetchProduct = (id) => (
     $.ajax({
        method: 'GET',
        url: `api/products/${id}`
    })
);

export const createProduct = product => (
    $.ajax({
        method: 'POST',
        url: '/api/shops/:shop_id/products',
        data: {product: product}
    })
);

export const updateProduct = product => (
    $.ajax({
        method: 'PATCH',
        url: `/api/products/${product.id}`
    })
)