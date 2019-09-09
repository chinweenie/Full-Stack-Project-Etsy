export const createShop = formData => (
    $.ajax({
        method: 'POST',
        url: '/api/shops',
        data: formData,
        contentType: false,
        processData: false
    })
);

export const updateShop = (formData ) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/shops/${formData.get('shop[id]')}`,
        data: formData,
        contentType: false,
        processData: false
    })

};


export const fetchShop = id => (
    $.ajax({
        method: 'GET',
        url: `api/shops/${id}`
    })
);

export const fetchShops = () => (
    $.ajax({
        method: 'GET',
        url: `api/shops`
    })
);