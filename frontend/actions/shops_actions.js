import * as ShopsApiUtil from '../util/shops_api_util';

export const RECEIVE_SHOP = 'RECEIVE_SHOP';
export const RECEIVE_SHOPS_ERRORS = 'RECEIVE_SHOPS_ERRORS';
export const RECEIVE_SHOPS = 'RECEIVE_SHOPS';

export const receiveShop = shop => ({
    type: RECEIVE_SHOP,
    shop
});

export const receiveShopsErrors = errors => ({
    type: RECEIVE_SHOPS_ERRORS,
    errors
});

export const receiveShops = shops => ({
    type: RECEIVE_SHOPS,
    shops
})

export const fetchShop = id => dispatch => (
    ShopsApiUtil.fetchShop(id).then(shop => dispatch(receiveShop(shop)))
);

export const fetchShops = () => dispatch => (
    ShopsApiUtil.fetchShops().then(response => (
        dispatch(receiveShops(response))
    ))
);

export const createShop = shop => dispatch => (
    ShopsApiUtil.createShop(shop).then(
        shop => (
            dispatch(receiveShop(shop))
        ), err => (
            dispatch(receiveShopsErrors(err.responseJSON))
        )
    )
);

export const updateShop = (formData, shopId )=> dispatch => (
    ShopsApiUtil.updateShop(formData, shopId).then(
        shop => (
            dispatch(receiveShop(shop))
        ), err => (
            dispatch(receiveShopsErrors(err.responseJSON))
        )
    )
);



