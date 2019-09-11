import React from 'react';

class SearchProducts extends React.Component {

    constructor() {
        super();
        this.toProductPage = this.toProductPage.bind(this);

    };


    toProductPage(product) {
        event.preventDefault();
        return (event) => {
            event.preventDefault();
            this.props.history.push(`/shops/${product.shopId}/products/${product.id}`)
        }
    };

    render(){
        
        let { searchProducts } = this.props;
        const productsLi = searchProducts.map(product => {
            return (
                <li key={product.id} onClick={this.toProductPage(product)} >
                    <img src={product.imageUrls[0]} />
                    <p>{product.title.slice(0, 30)}...</p>
                    <p className="search-shop-name">{product.shopName}</p>
                    <p>USD {product.price}</p>
                </li>
            )
        });

        return (
            <div className="products-listing ">
                <ul>
                    {productsLi}
                </ul>
            </div>
        )
    };
}

export default SearchProducts;