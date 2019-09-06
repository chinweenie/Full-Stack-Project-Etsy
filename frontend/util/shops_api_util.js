export const createShop = formData => (
    $.ajax({
        method: 'POST',
        url: '/api/shops',
        data: formData,
        contentType: false,
        processData: false
    })
);

export const updateShop = formData => (
    $.ajax({
        method: 'PATCH',
        url: `/api/shops/${shop.id}`,
        data: formData,
        contentType: false,
        processData: false
    })
);

export const fetchShop = id => (
    $.ajax({
        method: 'GET',
        url: `api/shops/${id}`
    })
);