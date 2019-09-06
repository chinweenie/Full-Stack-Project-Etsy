import * as ShopsApiUtil from '../util/shops_api_util';

export const RECEIVE_SHOP = 'RECEIVE_SHOP';
export const RECEIVE_SHOPS_ERRORS = 'RECEIVE_SHOPS_ERRORS';

export const receiveShop = shop => ({
    type: RECEIVE_SHOP,
    shop
});

export const receiveShopsErrors = errors => ({
    type: RECEIVE_SHOPS_ERRORS,
    errors
});

export const fetchShop = id => dispatch => (
    ShopsApiUtil.fetchShop(id).then(shop => dispatch(receiveShop(shop)))
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

export const updateShop = shop => dispatch => (
    ShopsApiUtil.updateShop(shop).then(
        shop => (
            dispatch(receiveShop(shop))
        ), err => (
            dispatch(receiveShopsErrors(err.responseJSON))
        )
    )
);



