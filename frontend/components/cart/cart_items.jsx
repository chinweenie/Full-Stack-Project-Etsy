import React from 'react';
import {Link} from 'react-router-dom';

class CartItems extends React.Component {
    constructor(){
        super();
        this.handleRemoveCartItem = this.handleRemoveCartItem.bind(this);
        this.handleUpdateCartItem = this.handleUpdateCartItem.bind(this);
        this.calculateTotalPrice = this.calculateTotalPrice.bind(this);
    };

    componentDidMount(){
        this.props.fetchCartItems();
    };

    

    handleUpdateCartItem(item){
        return (event) => {
            this.props.updateCartItem({
                id: item.id,
                quantity: event.target.value,
            });
        }

    };

    handleRemoveCartItem(cartItemId){
        return event => {
            this.props.removeCartItem(cartItemId);
        }     
    };

    calculateTotalPrice(){
        let price = 0;
        this.props.allCartItemsArray.forEach(item => {
            price += (item.quantity * item.price)
        });
        return price;

    }

    directToProduct(shopId, productId){
        return event => {
            this.props.history.push(`/shops/${shopId}/products/${productId}`);
        } 
    }

    
    render(){
        let {allCartItemsArray} = this.props;
        let cartItemsLi;
        if (allCartItemsArray.length > 0 ){
            cartItemsLi = allCartItemsArray.map(item => {

                const shopImageUrl = item.shopImageUrl ? <img className="cart-shop-logo" src={item.shopImageUrl} /> : <div className="cart-shop-logo"></div>
                
                return (
                    <li key={item.id}>
                        <div className="shop-info">
                            {shopImageUrl}
                            <p><Link to={`/shops/${item.shopId}`}>{item.shopName}</Link></p>
                        </div>

                        <div className="item-info">
                            <div className="item-pic-title">
                                <img src={item.imageUrls[0]} onClick={this.directToProduct(item.shopId, item.productId)}/>
                                <div>
                                    <p onClick={this.directToProduct(item.shopId, item.productId)}>{item.productName}</p>
                                    <button className="clicky" onClick={this.handleRemoveCartItem(item.id)}><i className="fa fa-trash" aria-hidden="true"></i></button>
                                    
                                </div>
                            </div>

                            <div>
                                <input
                                    type="number"
                                    value={item.quantity}
                                    id="quantity"
                                    min="1"
                                    max={item.maximumQuantity}
                                    onChange={this.handleUpdateCartItem(item)} />
                            </div>

                            <div className="price-column">
                                <h4>USD {item.price * item.quantity}</h4>
                                <p>(USD {item.price} each)</p>
                            </div>

                           
                        </div>
                       

                    </li>
                )
            });

        } else {
            cartItemsLi = (
                <div></div>
            )
        };
        
        return (
            <div className="cart-items-checkout">
                <ul className="cart-items-list">
                    <h2>{allCartItemsArray.length} item(s) in your cart</h2>
                    {cartItemsLi}
                </ul>

                <ul className="checkout">
                    <div className="items-total">
                        <li>
                            <span>Item(s) total</span>
                            <span>USD {this.calculateTotalPrice()}</span>
                        </li>
                        <li>
                            <span>Shipping</span>
                            <span>-</span>
                        </li>
                    </div>

                    <div className="final-checkout-section">
                        <span><strong>Total</strong></span>
                        <span><strong>USD {this.calculateTotalPrice()}</strong></span>
                    </div>
                    
                    <button className="clicky">Proceed to checkout</button>
                    
                </ul>
            </div>
            
        )
    };
}

export default CartItems;