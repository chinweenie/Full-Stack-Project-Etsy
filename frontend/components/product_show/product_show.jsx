import React from 'react';
import LoadingIcon from '../loading_icon';
import { withRouter, Link } from 'react-router-dom';
import Slider from '../carousel/slider';
import NumericInput from 'react-numeric-input';
import ReviewForm from '../reviews/review_form';
import ReviewsIndex from '../reviews/reviews_index';

class ProductShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product_id: this.props.match.params.productId,
            quantity: 1
        };

        this.handleEdit = this
            .handleEdit
            .bind(this);
        this.handleAddToCart = this
            .handleAddToCart
            .bind(this);
        this.handleChange = this
            .handleChange
            .bind(this);
        this.showReviewForm = this.showReviewForm.bind(this);
        this.addToFavorite = this.addToFavorite.bind(this);
        this.removeFromFavorite = this.removeFromFavorite.bind(this);
    }

    componentDidMount() {
        this
            .props
            .fetchProduct(this.props.match.params.productId);
        this
            .props
            .fetchShop(this.props.match.params.shopId);
        this.props.fetchFavorites();
    };

    componentDidUpdate(prevProps) {
        if (this.props.match.params.productId !== prevProps.match.params.productId) {
            this
                .props
                .fetchProduct(this.props.match.params.productId);
            this
                .props
                .fetchShop(this.props.match.params.shopId);
            this.props.fetchFavorites();
        }
    }

    handleEdit(event) {
        event.preventDefault();
        this
            .props
            .history
            .push(`/products/${this.props.product.id}/edit`);
    }

    handleAddToCart(event) {
        event.preventDefault();
        this
            .props
            .addToCart(this.state);
        this
            .props
            .history
            .push('/cartItems');
    }

    handleChange(event) {
        this.setState({ quantity: event });
    }

    addToFavorite(event){
        event.preventDefault();
        this.props.createFavorite({
            favoritable_id: this.props.match.params.productId,
            favoritable_type: "Product"
        });
    }

    removeFromFavorite(favoriteId){
        return event => {
            this.props.deleteFavorite(favoriteId);              
        }
    }

    showReviewForm(event){
        let { currentUserId } = this.props;
        if (!currentUserId){
            alert("Please login or sign up first!");
            return;
        };

        const reviewForm = document.getElementById("review-form");
        if (event.target.innerHTML === "Add review") {
            event.target.innerHTML = "Close form";
        } else {
            event.target.innerHTML = "Add review";
        }

        reviewForm.classList.toggle("hidden");
    }

    render() {
        let { product, shop, currentUserId, favorite } = this.props;
        if (!product || !shop) {
            return (<LoadingIcon />)
        }

        const isFavorited = favorite;
        let favoriteButton = <button>Login or register to add to favorite</button> ;
        let addToCartButton = <button>Login or register to add to cart</button>;
        let addReview = <button>Login or register to add review</button>
        
        if (currentUserId){
            if (currentUserId === product.ownerId){
                favoriteButton = '';
                addToCartButton = '';
                addReview = '';
            } else {
                favoriteButton = isFavorited ? <button className="favorite-button" onClick={this.removeFromFavorite(favorite.id)}><i className="fa fa-heart favorited"></i>Remove from favorite</button> : <button className="favorite-button" onClick={this.addToFavorite}><i className="fa fa-heart not-favorited"></i>Add to favorite</button>
                addToCartButton = <button className="clicky" onClick={this.handleAddToCart}>Add to cart</button>;
                addReview = <button className="show-review-form-button clicky" onClick={this.showReviewForm}>Add review</button>
            }
        }

        return (
            <div className="product-show-reviews">
                <div className="product-show">              
                    <div className="carousel">
                        <Slider imageUrls={product.imageUrls} />
                    </div>

                    <div className="product-info">
                        <ul>
                            <li>
                                <Link to={`/shops/${shop.id}`}>{shop.name}</Link>
                            </li>
                            <li>{product.title}</li>
                            <li className="price">
                                <strong>USD {product.price}</strong>
                            </li>
                            <li>
                                <label className="quantity" htmlFor="quantity">Quantity</label>
                                <br />
                                <NumericInput
                                    required
                                    value={this.state.quantity}
                                    id="quantity"
                                    min={1}
                                    max={product.quantity}
                                    onChange={this.handleChange} />
                                <span>Only <strong>{product.quantity}</strong>
                                    in stock!</span>
                                    
                            </li>
                            <li>
                                {addToCartButton}
                            </li>
                            <li>
                                {favoriteButton}
                            </li>

                        </ul>
                        <div className="product-details">
                            <label htmlFor="details">Item details</label>
                            {product.description}
                        </div>
                        <div className="owner-info">
                            <p>Meet {shop.owner.fname}</p>
                            <img id="owner-info-image" src={shop.profilePicUrl} />
                            <div className="shop-owner-name">{shop.owner.fname}</div>
                            <div className="shop-owner-email">
                                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                {shop.owner.email}
                            </div>
                        </div>

                    </div>

                    <div className="review-section">
                        <ReviewsIndex productId={this.props.match.params.productId} />
                        {addReview}
                        <div id="review-form" className="hidden">
                            <ReviewForm productId={this.props.match.params.productId} />
                        </div>
                    </div>

                </div>
            </div>
        )
    };
}

export default withRouter(ProductShow);
