import * as ReviewsApiUtil from '../util/reviews_api_util';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS'; 

export const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
});

export const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
});

export const receiveReviewErrors = errors => ({
    type:RECEIVE_REVIEW_ERRORS,
    errors
})

export const fetchReviews = productId => dispatch => {
    return ReviewsApiUtil.fetchReviews(productId)
        .then(reviews => {
            return dispatch(receiveReviews(reviews))
        }, err => {
            return dispatch(receiveReviewErrors(err))
        })
};

export const createReview = (review, productId) => dispatch => (
    ReviewsApiUtil.createReview(review, productId)
        .then(review => (
            dispatch(receiveReview(review))
        ), err => (
            dispatch(receiveReviewErrors(err))
        ))
);

export const updateReview = (review) => dispatch => (
    ReviewsApiUtil.updateResponse(review)
        .then(review => (
            dispatch(receiveReview(review))
        ), err => (
            dispatch(receiveReviewErrors(err))
        ))
);




