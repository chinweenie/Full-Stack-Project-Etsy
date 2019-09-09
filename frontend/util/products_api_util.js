
export const fetchProducts = () => (
    $.ajax({
        method: 'GET',
        url: `api/products`
    })
)

export const fetchProduct = (id) => (
     $.ajax({
        method: 'GET',
        url: `api/products/${id}`
    })
);

export const createProduct = formData => {
    const shopId = formData.get('product[shop_id]');
    return $.ajax({
        method: 'POST',
        url: `/api/shops/${shopId}/products`,
        data: formData,
        contentType: false,
        processData: false
    })
}

export const updateProduct = formData => {
    const productId = formData.get('product[id]');
    return $.ajax({
        method: 'PATCH',
        url: `/api/products/${productId}`,
        data: formData,
        contentType: false,
        processData: false
    })
}


export const deleteProduct = id => (
    $.ajax({
        method: 'DELETE',
        url: `api/products/${id}`
    })
)