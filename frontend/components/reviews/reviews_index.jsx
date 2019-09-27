import {connect} from 'react-redux';
import {selectAllReviews} from '../../reducers/selectors';
import {fetchReviews} from '../../actions/reviews_action';
import React from 'react'
import LoadingIcon from '../loading_icon';
import {Link} from 'react-router-dom';
import Pagination from '../pagination/pagination';
import PaginationItems from '../pagination/pagination_items';
import StarRatings from 'react-star-ratings';

class ReviewsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            reviewsPerPage: 5
        };
        this.paginate = this.paginate.bind(this);
    }

    componentDidMount() {
        this
            .props
            .fetchReviews(this.props.productId);
    }

    paginate(pageNumber){
        debugger
        return (event) => {
            this.setState({currentPage: pageNumber});
            debugger
        };
    };

    render() {
        let {reviews} = this.props;
        if (!reviews) {
            return (<LoadingIcon/>)
        }

        // Setup for pagination
        const indexOfLastReview = this.state.currentPage * this.state.reviewsPerPage;
        const indexOfFirstReview = indexOfLastReview - this.state.reviewsPerPage;
        const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

        debugger
        // Calc for average rating
        let reviewsRating = 0;
        reviews.forEach(review => {
            reviewsRating = review.rating + reviewsRating;
        });
        let ratingAverage = reviews.length
            ? reviewsRating / reviews.length
            : reviewsRating;


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
                            isAggregateRating={true}/>
                    </span>
                </div>

                <PaginationItems reviews={currentReviews}/>
                <Pagination
                    reviewsPerPage={this.state.reviewsPerPage}
                    totalReviews={reviews.length}
                    paginate={this.paginate}/>
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