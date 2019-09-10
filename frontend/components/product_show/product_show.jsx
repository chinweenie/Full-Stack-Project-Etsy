import React from 'react';
import LoadingIcon from '../loading_icon';
import { withRouter, Link } from 'react-router-dom';
import Slider from '../carousel/slider';
import NumericInput from 'react-numeric-input';

class ProductShow extends React.Component {
    constructor(props){
        super(props);
        this.state = {quantity: 1};
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId);
        this.props.fetchShop(this.props.match.params.shopId);
    };

    componentDidUpdate(prevProps) {
        if (this.props.match.params.productId !== prevProps.match.params.productId) {
            this.props.fetchProduct(this.props.match.params.productId);
            this.props.fetchShop(this.props.match.params.shopId);
        }
    }

    handleEdit(event){
        event.preventDefault();
        this.props.history.push(`/products/${this.props.product.id}/edit`);
    }

    // handleAddToCart

    render(){
        let {product, shop} = this.props;  
        if (!product || !shop){
            return (
                <LoadingIcon/>
            )
        }
        
        return (
            <div className="product-show">
                <div className="carousel">
                    <Slider imageUrls={product.imageUrls}/>
                </div>

                <div className="product-info">
                    <ul>
                        <li>
                            <Link to={`/shops/${shop.id}`}>{shop.name}</Link>
                            
                        </li>
                        <li>{product.title}</li>
                        <li className="price"><strong>USD {product.price}</strong></li>
                        <li>
                            <label className="quantity" htmlFor="quantity">Quantity</label>
                            <br/>
                            <NumericInput required value={this.state.quantity} id="quantity" min={1} max={product.quantity}/>
                            <span>Only <strong>{product.quantity}</strong> in stock!</span>
                        </li>
                        <li>
                            <a className="add-to-cart" href="#">Add to cart</a>
                        </li>
                        
                    </ul>
                    <div className="product-details">
                        <label htmlFor="details">Item details</label>
                        {product.description}
                    </div>
                    <div className="owner-info">
                        <p>Meet {shop.owner.fname}</p>
                        <img src={shop.profilePicUrl} />
                        <div className="shop-owner-name">{shop.owner.fname}</div>
                        <div className="shop-owner-email">
                            <i className="fa fa-envelope-o" aria-hidden="true"></i>
                            {shop.owner.email}
                        </div>
                    </div>
                </div>

                <div className="reviews">

                </div>

                
            </div>
        )
    };
}

export default withRouter(ProductShow);
