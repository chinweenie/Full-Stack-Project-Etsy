import  * as ProductsApiUtil  from '../util/products_api_util';

export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';

export const receiveProduct = (product) => {
    return {
        type: RECEIVE_PRODUCT,
        product
    };
};


export const fetchProduct = (product) => dispatch => (
    ProductsApiUtil.fetchProduct(product).then(response => dispatch(receiveProduct(response)) )
);

export const createProduct = (product) => dispatch => (
    ProductsApiUtil.createProduct(product).then(response => dispatch(receiveProduct(response)))
);

export const updateProduct = (product) => dispatch => (
    ProductsApiUtil.updateProduct(product).then(response => dispatch(receiveProduct(response)))
);



