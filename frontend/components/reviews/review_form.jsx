import { connect } from 'react-redux';
import { createReview } from '../../actions/reviews_action';
import React from 'react'

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
        this.props.createReview(this.state, this.props.productId)
    }

    changeRating(event){
        event.preventDefault();
        this.setState({rating: event.target.value});
    }

    changeBody(event){
        event.preventDefault();
        this.setState({body: event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="rating">Rating</label>
                <input type="number" id="rating" value={this.state.ratiing} onChange={this.changeRating}/>

                <label htmlFor="body">Body</label>
                <textarea value={this.state.body} id="body" cols="30" rows="10" onChange={this.changeBody}></textarea>

                <button>Submit review</button>
            </form>
        )
    };
}





const mapDispatchToProps = dispatch => ({
    createReview: (productId, review) => dispatch(createReview(productId, review))
})

export default connect(null, mapDispatchToProps)(ReviewForm);