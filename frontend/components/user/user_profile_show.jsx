import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import FavoriteShopsIndex from '../favorite/favorite_shops_index';
import LoadingIcon from '../loading_icon';

class UserProfileShow extends React.Component {
    constructor(props) {
        super(props);
        this.openTab = this
            .openTab
            .bind(this);
        this.showDetail = this
            .showDetail
            .bind(this);
        this.toItem = this
            .toItem
            .bind(this);
    }

    componentDidMount() {
        this
            .props
            .fetchUser(this.props.match.params.userId);
        this
            .props
            .fetchAllUsers();
        this
            .props
            .fetchShops();
        this
            .props
            .fetchFavorites();
        this
            .props
            .fetchProducts();

    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {

            this
                .props
                .fetchProducts();
            this
                .props
                .fetchUser(this.props.match.params.userId);
            this
                .props
                .fetchAllUsers();
            this
                .props
                .fetchShops();
            this
                .props
                .fetchFavorites();
        }
    }

    openTab(field) {
        return event => {
            const nonActiveAnchors = document.getElementsByClassName("user-tab");
            for (let i = 0; i < nonActiveAnchors.length; i++) {
                if (!nonActiveAnchors[i].classList.contains("hidden")) {
                    nonActiveAnchors[i]
                        .classList
                        .toggle("hidden");
                }
            }
            const activeAnchor = document.getElementsByClassName(field)[0];
            activeAnchor
                .classList
                .toggle("hidden");
        }
    }

    showDetail(event) {
        event.preventDefault();
        const lis = document.getElementsByClassName("nav-link");
        for (let i = 0; i < lis.length; i++) {
            if (lis[i].classList.contains("active")) {
                lis[i]
                    .classList
                    .toggle("active");
            }
        }
        event
            .target
            .classList
            .toggle("active");
    }

    toItem(shopId, productId) {
        return event => {
            this
                .props
                .history
                .push(`/shops/${shopId}/products/${productId}`);
        }
    }

    render() {
        let {user, shop, favoritedItems} = this.props;
        if (!user) {
            return <LoadingIcon/>
        };

        let shopLogo;
        if (Boolean(shop)) {
            shopLogo = (
                <div>
                    <div id="default-shop-logo"></div>
                    <div className="enter-shop">
                        <span className="profile-shop-name">{shop.name}</span>
                        <Link to={`/shops/${shop.id}`} className="btn-block">Visit shop</Link>
                    </div>
                </div>
            )
        }
        const userImage = user.imageUrl
            ? <img src={user.imageUrl}/>
            : <img src="" id="owner-info-image "/>;

        let favoritedItemLi;
        if (favoritedItems.length === 0) {

            favoritedItemLi = (
                <li className="favorite-item-li-empty">
                    <div>
                        <div id="empty-item-list"></div>
                        <p>No favorite item yet.</p>
                    </div>
                </li>
            )
        } else {
            favoritedItemLi = favoritedItems.map(item => {
                let imageUrl = item.imageUrls.length > 0
                    ? <img className="favorited-item-image" src={item.imageUrls[0]} alt=""/>
                    : <img className="favorited-item-image" src="default_avatar_400x400.png" alt=""/>;
                return (
                    <li className="favorite-item-li" onClick={this.toItem(item.shopId, item.id)}>
                        <div className="fav-item-card">
                            <div>
                                {imageUrl}
                            </div>

                            <div>
                                <div>
                                    <p>{item.title}</p>
                                    <p>{item.shopName}</p>
                                    <p>{item.usersWhoFavoritedMe.length}
                                        like(s)</p>
                                </div>
                            </div>
                        </div>
                    </li>
                )
            })
        }

        return (
            <div className="user-profile-show">
                <div className="user-info">
                    <div>
                        <div>
                            {userImage}
                            <div>
                                <h3>{user.fname}</h3>

                                <Link to={`/users/${user.id}/edit`} className="btn-block">
                                    <i className="fa fa-pencil" aria-hidden="true"></i>
                                    Edit profile
                                </Link>
                            </div>
                        </div>

                        <div className="shop-section">
                            <h4>About</h4>
                            {shopLogo}
                        </div>
                    </div>

                </div>

                <div className="favorite-lists-navbar">
                    <ul className="nav nav-tabs" onClick={this.showDetail}>
                        <li className="nav-item">
                            <p
                                id="favorite-items"
                                className="nav-link active"
                                onClick={this.openTab("favorite-items")}>Favorite Items</p>
                        </li>
                        <li className="nav-item">
                            <p
                                id="favorite-shops"
                                className="nav-link"
                                onClick={this.openTab("favorite-shops")}>Favorite Shops</p>
                        </li>
                    </ul>
                </div>

                <div className="user-tab favorite-items">
                    {favoritedItemLi}
                </div>
                <div className="user-tab favorite-shops hidden">
                    {/* <FavoriteShopsIndex/> */}
                </div>

            </div>

        )
    }
}

export default withRouter(UserProfileShow);