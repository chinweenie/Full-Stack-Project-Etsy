import React from 'react'
import {Link} from 'react-router-dom';
import StarRatings from 'react-star-ratings';

const PaginationItems = ({reviews}) => {
    const reviewsLi = reviews.map(review => {
        return (
            <li key={review.id}>
                <div>
                    <h5><Link to={`/users/${review.user_id}`}>{review.userName}</Link></h5>
                    <img src={review.profilePicUrl} alt="user profile picture" />
                </div>
                <div className="review-body">
                    <p>
                        <StarRatings
                            rating={review.rating}
                            starDimension="20px"
                            starSpacing="4px"
                            starRatedColor='#f2b01e'
                        />
                    </p>
                    <p>{review.body}</p>
                </div>
            </li>
        )
    })

    return (
        <ul>
            {reviewsLi}
        </ul>
    )
}


export default PaginationItems;