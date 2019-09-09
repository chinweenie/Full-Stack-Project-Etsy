import React from 'react';
import LoadingIcon from '../loading_icon';
import { withRouter, Link } from 'react-router-dom';
import Slider from '../carousel/slider';

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
                        <li>{product.price}</li>
                        <li>
                            <label htmlFor="quantity">Quantity</label>
                            <br/>
                            <select value={this.state.quantity} id="">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </li>
                        <li>
                            <a href="#">Add to cart</a>
                        </li>
                        <li>
                            <label htmlFor="details">Item details</label>
                            {product.description}
                        </li>
                        <li></li>
                    </ul>
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
