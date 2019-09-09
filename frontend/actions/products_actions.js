import  * as ProductsApiUtil  from '../util/products_api_util';

export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const RECEIVE_PRODUCTS_ERRORS = 'RECEIVE_PRODUCTS_ERRORS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'

export const receiveProducts = products => {
    return {
        type: RECEIVE_PRODUCTS,
        products
    }
};

export const receiveProduct = (product) => {
    return {
        type: RECEIVE_PRODUCT,
        product
    };
};

export const removeProduct = id => {
    return {
        type: REMOVE_PRODUCT,
        id
    }
}

export const receiveProductsErrors = errors => ({
    type: RECEIVE_PRODUCTS_ERRORS,
    errors
});

export const fetchProducts = () => dispatch => (
    ProductsApiUtil.fetchProducts().then(response => dispatch(receiveProducts(response)))
)

export const fetchProduct = (product) => dispatch => (
    ProductsApiUtil.fetchProduct(product).then(response => dispatch(receiveProduct(response)) )
);

export const createProduct = (product) => dispatch => (
    ProductsApiUtil.createProduct(product).then(response => (
        dispatch(receiveProduct(response))
    ), err => (
        dispatch(receiveProductsErrors(err.responseJSON))
    ))
);

export const updateProduct = (product) => dispatch => (
    ProductsApiUtil.updateProduct(product).then(response => (
        dispatch(receiveProduct(response))
    ), err => (
        dispatch(receiveProductsErrors(err.responseJSON))
    ))
);

export const deleteProduct = id => dispatch => (
    ProductsApiUtil.deleteProduct(id).then(response => {
        return dispatch(removeProduct(response.id))}
    )
);



