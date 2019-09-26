export const fetchReviews  = productId => {
    return $.ajax({
        method: 'GET',
        url: `api/products/${productId}/reviews`
    }) 
};

export const createReview = (review, productId) => (
    $.ajax({
        method: 'POST',
        url: `api/products/${productId}/reviews`,
        data: {review: review}
    })
);

export const updateResponse = review => (
    $.ajax({
        method: 'PATCH',
        url: `api/reviews/${review.id}`,
        data: {review: review}
    })
);

