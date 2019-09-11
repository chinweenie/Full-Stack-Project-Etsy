import * as SearchApiUtil from "../util/search_api_util";

export const RECEIVE_SEARCH_PRODUCTS = 'RECEIVE_SEARCH_PRODUCTS';

export const receiveSearchProducts = products => ({
    type: RECEIVE_SEARCH_PRODUCTS,
    products
});

export const fetchSearchProducts = searchQuery => dispatch => (
    SearchApiUtil.fetchSearchProducts(searchQuery).then(response => (
        dispatch(receiveSearchProducts(response))
    ))
);