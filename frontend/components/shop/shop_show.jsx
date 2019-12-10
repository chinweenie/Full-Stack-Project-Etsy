import React from 'react';
import LoadingIcon from '../loading_icon';
import { withRouter, Link } from 'react-router-dom';

class ShopShow extends React.Component {
    constructor() {
        super();
        this.handleEdit = this.handleEdit.bind(this);
        this.handleStock = this.handleStock.bind(this);
        this.toProductPage = this.toProductPage.bind(this);
        this.addToFavorite = this.addToFavorite.bind(this);
        this.removeFromFavorite = this.removeFromFavorite.bind(this);
    }

    componentDidMount() {
        this.props.fetchShop(this.props.match.params.shopId);
        this.props.fetchProducts();
        this.props.fetchFavorites();
    };
    
    componentDidUpdate(prevProps) {
        if (this.props.match.params.shopId !== prevProps.match.params.shopId) {
            this.props.fetchShop(this.props.match.params.shopId);
            this.props.fetchProducts();
            this.props.fetchFavorites();
        }
    }

    handleEdit(event){
        event.preventDefault();
        this.props.history.push(`/shops/${this.props.shop.id}/edit`);  
    }

    handleStock(event){
        event.preventDefault();
        this.props.history.push(`/shops/${this.props.shop.id}/products/new`);   
    }

    toProductPage(productId){
        return (event) => {
            event.preventDefault();
            this.props.history.push(`/shops/${this.props.shop.id}/products/${productId}`)
        }
    }

    editDeleteButton(product){
        let { shop, currentUserId, deleteProduct } = this.props;
        let editDeleteButton;
        if (currentUserId === shop.owner.id) {
            editDeleteButton = (
                <div className="edit-delete-button">
                    <Link to={`/products/${product.id}/edit`} className="clicky">Edit item</Link>
                    <button onClick={() => deleteProduct(product.id)} className="clicky">Delete me</button>
                </div>
            );
        };
        return editDeleteButton;
    }

    addToFavorite(event){
        event.preventDefault();
        this.props.createFavorite({
            favoritable_id: this.props.match.params.shopId,
            favoritable_type: "Shop"
        });
    }

    removeFromFavorite(favoriteId){
        return event => {
            this.props.deleteFavorite(favoriteId);
        }
    }

    render() {
        let { shop, currentUserId, products, favorite } = this.props;
        if (!shop || !products) {
            return (
                <LoadingIcon />
            )
        }
        const isFavorited = favorite;
        let favoriteButton = <button>Login or register to add to favorite</button>;
        let stockItemButton;

        if (currentUserId){
            if (currentUserId === shop.owner.id) {
                stockItemButton = (
                    <div className="stock-edit-button">
                        <button className="clicky stock-your-shop-button" onClick={this.handleStock}>
                            Stock your shop
                    </button>

                        <button className="clicky edit-your-shop-button" onClick={this.handleEdit}>
                            Edit your shop
                    </button>
                    </div>

                );
                favoriteButton = <div></div>;
            } else {
                stockItemButton = '';
                favoriteButton = isFavorited ? 
                    <div className="favorite-shop" onClick={this.removeFromFavorite(favorite.id)}><i className="fa fa-heart favorited"></i>Unfavorite</div> : 
                    <div className="favorite-shop" onClick={this.addToFavorite}><i className="fa fa-heart not-favorited"></i>Favorite</div>
            };
        }

        const productLi = products.map(product => {

            // if (product.shopId === shop.id){
                return (
                    <li key={product.id}>
                        <div onClick={this.toProductPage(product.id)}>
                            <img src={product.imageUrls[0]} />
                            <p className="product-title">{product.title.slice(0, 27)}...</p>
                            <p><strong>USD {product.price}</strong></p>
                        </div>

                        {this.editDeleteButton(product)}
                    </li>
                )
            
        });

        return (
            <div className="shop-show">
                <div className="shop-show-header">
                    <div className="shop-logo">
                        <img src={shop.imageUrl} />
                        {stockItemButton}
                    </div>

                    <div className="shop-info">
                        <div className="shop-name-show">
                            {shop.name}
                        </div>
                        {favoriteButton}
                        {/* <div className="favorite-shop" onClick={}> */}
                            {/* <i className="fa fa-heart-o" aria-hidden="true"></i>
                            Favorite shop ({shop.usersWhoFavoritedMe.length}) */}
                        {/* </div> */}
                        
                    </div>

                    <div className="owner-info">
                        <p>Shop owner</p>
                        <img src={shop.profilePicUrl} id="owner-info-image" />
                        <div className="shop-owner-name">{shop.owner.fname}</div>
                        <div className="shop-owner-email">
                            <i className="fa fa-envelope-o" aria-hidden="true"></i>
                            {shop.owner.email}
                        </div>
                    </div>
                    
                </div>

                <div className="products-listing">
                    <label>All items</label>
                    <ul>
                        {productLi}
                    </ul>
                </div>

                {/* can insert reviews too */}

            </div>
        );
    };
}

export default withRouter(ShopShow);