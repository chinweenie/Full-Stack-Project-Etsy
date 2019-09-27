import {connect} from 'react-redux';
import {selectAllReviews} from '../../reducers/selectors';
import {fetchReviews} from '../../actions/reviews_action';
import React from 'react'
import LoadingIcon from '../loading_icon';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

class ReviewsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this
            .props
            .fetchReviews(this.props.productId);
    }

    render() {

        let {reviews} = this.props;
        if (!reviews) {
            return (<LoadingIcon/>)
        }

        let reviewsRating = 0;

        const reviewsLi = reviews.map(review => {
            reviewsRating = review.rating + reviewsRating;
            return (
                <li key={review.id}>
                    <div>
                        <h5><Link to={`/users/${review.user_id}`}>{review.userName}</Link></h5>
                        <img src={review.profilePicUrl} alt="user profile picture"/>
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

        let ratingAverage = reviews.length ? reviewsRating / reviews.length : reviewsRating;
        return (
            <div className="reviews-index">
                <div className="reviews-index-title">
                    <h3>Reviews</h3>
                    <span>
                        <StarRatings
                        rating={ratingAverage}
                        starDimension="25px"
                        starSpacing="4px"
                        starRatedColor='#f2b01e'
                        isAggregateRating={true}
                        />
                    </span>
                </div>

                <ul>
                    {reviewsLi}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        reviews: selectAllReviews(state.entities.reviews)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchReviews: productId => dispatch(fetchReviews(productId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsIndex);