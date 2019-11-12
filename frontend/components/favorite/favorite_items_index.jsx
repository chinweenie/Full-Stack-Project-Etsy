import React from 'react'
import { connect } from 'react-redux';
import { selectFavoritedItems } from '../../reducers/selectors';
import { fetchProducts } from '../../actions/products_actions';
import { fetchFavorites } from '../../actions/favorites_actions';
import LoadingIcon from '../loading_icon';

class FavoriteItemsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.toItem = this.toItem.bind(this);
    }

    toItem(shopId, productId) {
        return event => {
            this.props.history.push(`/shops/${shopId}/products/${productId}`);
        }
    }

    componentDidMount() {
        this.props.fetchFavorites();
        this.props.fetchProducts();
    }

    render() {
        let { currentUserId, favoritedItems } = this.props;
        if (!currentUserId || !favoritedItems) return <LoadingIcon />;
        let favoritedItemLi;

        if (favoritedItems.length === 0){
            favoritedItems = (
                <li className="favorite-shop-li">
                    <div className="empty-item-list">
                        
                    </div>
                </li>
            )
        }

        favoritedItemLi = favoritedItems.map(item => {
            let imageUrl = item.imageUrls.length > 0 ? <img className="favorited-item-image" src={item.imageUrls[0]} alt="" /> : <img className="favorited-item-image" src="default_avatar_400x400.png" alt="" />;
            return (
                <li className="favorite-shop-li" onClick={this.toItem(item.shopId, item.id)}>
                    <div>
                        {imageUrl}
                    </div>

                    <div>
                        <div>
                            <p>{item.title}</p>
                            <p>{item.shopName}</p>
                            <p>{item.usersWhoFavoritedMe.length} like(s)</p>
                        </div>
                    </div>
                </li>
            )
        })
        return (
            <div>
                <ul className="favorited-shops-ul">
                    {favoritedItemLi}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const currentUserId = state.session.id;
    const favoritedItems = selectFavoritedItems(state.entities.favorites, currentUserId);
    return {
        currentUserId,
        favoritedItems
    }
}

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts()),
    fetchFavorites: () => dispatch(fetchFavorites())
})

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteItemsIndex);
