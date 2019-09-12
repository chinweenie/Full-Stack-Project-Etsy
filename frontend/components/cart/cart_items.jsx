import React from 'react';
import NumericInput from 'react-numeric-input';

class CartItems extends React.Component {
    constructor(){
        super();
        // this.state = {} || this.props.allCartItemsObject ;
        this.handleRemoveCartItem = this.handleRemoveCartItem.bind(this);
        this.handleUpdateCartItem = this.handleUpdateCartItem.bind(this);

    };

    componentDidMount(){
        this.props.fetchCartItems();
    };

    

    handleUpdateCartItem(item){
        return (event) => {
            this.props.updateCartItem({
                id: item.id,
                quantity: event,
            });
        }

    };

    handleRemoveCartItem(cartItemId){
        return event => {
            this.props.removeCartItem(cartItemId);
        }     
    };


    
    render(){
        let {allCartItemsArray} = this.props;
        let cartItemsLi;
        if (allCartItemsArray.length > 0 ){
            cartItemsLi = allCartItemsArray.map(item => {
                return (
                    <li key={item.id}>
                        <div>
                            <img src={item.imageUrls[0]} />
                        </div>

                        <div>
                            <label htmlFor="quantity">Quantity</label>
                            <NumericInput
                                value={item.quantity}
                                id="quantity"
                                min={1}
                                max={item.maximumQuantity}
                                onChange={this.handleUpdateCartItem(item)} />
                        </div>

                        <div>
                            <p>Price for single unit</p>
                            <p>{item.price}</p>
                        </div>

                        <div>
                            <p>Total in USD</p>
                            <p>{item.price * item.quantity}</p>
                        </div>

                        <button onClick={this.handleRemoveCartItem(item.id)}>Remove item</button>

                    </li>
                )
            });

        } else {
            cartItemsLi = (
                <div></div>
            )
        };
        
        return (
            <ul className="cart-items-list">
                {cartItemsLi}
            </ul>
        )
    };
}

export default CartItems;