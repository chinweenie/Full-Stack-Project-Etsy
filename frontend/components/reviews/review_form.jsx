import { connect } from 'react-redux';
import { createReview } from '../../actions/reviews_action';
import React from 'react'
import StarRatings from 'react-star-ratings';

class ReviewForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            rating: 0,
            body: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeRating = this.changeRating.bind(this);
        this.changeBody = this.changeBody.bind(this);
    };

    handleSubmit(event){
        event.preventDefault();
        this.props.createReview(this.state, this.props.productId);
        this.setState({rating: 0, body: ''});
    }

    
    changeRating(newRating) {
        this.setState({
            rating: newRating
        });
    }
    

    changeBody(event){
        event.preventDefault();
        this.setState({body: event.target.value});
    }

    render() {
        return (
            <form className="review-form" onSubmit={this.handleSubmit}>
                <label htmlFor="rating">Rating</label>
                <StarRatings
                    rating={this.state.rating}
                    starRatedColor='#f2b01e'
                    starHoverColor='#f2b01e'
                    changeRating={this.changeRating}
                    numberOfStars={5}
                    name='rating'
                    starDimension="20px"
                    starSpacing="4px"
                />

                <label htmlFor="body">Body</label>
                <textarea value={this.state.body} id="body" cols="50" rows="10" onChange={this.changeBody}></textarea>

                <button className="clicky">Submit review</button>
            </form>
        )
    };
}

const mapDispatchToProps = dispatch => ({
    createReview: (productId, review) => dispatch(createReview(productId, review))
})

export default connect(null, mapDispatchToProps)(ReviewForm);