import React from 'react'
import { connect } from 'react-redux';
import { selectFavoritedShops } from '../../reducers/selectors';
import { fetchShops } from '../../actions/shops_actions';
import { fetchFavorites } from '../../actions/favorites_actions';
import LoadingIcon from '../loading_icon';

class FavoriteShopsIndex extends React.Component {
    constructor(props){
        super(props);
        this.toShop = this.toShop.bind(this);
    }

    toShop(shopId){
        return event => {
            this.props.history.push(`/shops/${shopId}`);
        }
    }
    
    componentDidMount(){
        this.props.fetchFavorites();
        this.props.fetchShops();
    }

    render(){
        let { currentUserId, favoritedShops } = this.props;
        if (!currentUserId || !favoritedShops) return <LoadingIcon/>;

        const favoritedShopLi = favoritedShops.map(shop => {
            let imageUrl = shop.imageUrl ? <img className="favorited-shop-image" src={shop.imageUrl} alt="" /> : <img className="favorited-shop-image" src="default_avatar_400x400.png" alt=""/>;
            let profilePicUrl = shop.profilePicUrl ? <img className="favorited-shop-owner-image" src={shop.profilePicUrl} alt="" /> : <img className="favorited-shop-owner-image" src="default_avatar_400x400.png" alt="" />;
            return (
                <li className="favorite-shop-li" onClick={this.toShop(shop.id)}>
                    <div>
                        {imageUrl}
                    </div>

                    <div>
                        {profilePicUrl}
                        <div>
                            <p>{shop.name}</p>
                            <p>{shop.owner.fname}</p>
                            <p>{shop.usersWhoFavoritedMe.length} like(s)</p>
                        </div>
                    </div>      
                </li>
            )
        })
        return (
            <div>
                <ul className="favorited-shops-ul">
                    {favoritedShopLi}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const currentUserId = state.session.id;
    const favoritedShops = selectFavoritedShops(state.entities.favorites, currentUserId);
    return {
        currentUserId,
        favoritedShops
    }
}

const mapDispatchToProps = dispatch => ({
    fetchShops: () => dispatch(fetchShops()),
    fetchFavorites: () => dispatch(fetchFavorites())
})

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteShopsIndex);
