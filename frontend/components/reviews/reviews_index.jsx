import {connect} from 'react-redux';
import {selectAllReviews} from '../../reducers/selectors';
import {fetchReviews} from '../../actions/reviews_action';
import React from 'react'
import LoadingIcon from '../loading_icon';

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
        const reviewsLi = reviews.map(review => {
            return (
                <li key={review.id}>
                    <div>
                        <h5>{review.userName}</h5>
                        <img src={review.profilePicUrl} alt="user profile picture"/>
                    </div>
                    <div className="review-body">
                        <p>{review.rating}</p>
                        <p>{review.body}</p>
                    </div>
                </li>
            )
        })
        return (
            <div className="reviews-index">
                <h3>Reviews</h3>
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