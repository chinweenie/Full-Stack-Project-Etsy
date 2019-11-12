import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import FavoriteShopsIndex from '../favorite/favorite_shops_index';
import FavoriteItemsIndex from '../favorite/favorite_items_index';

class UserProfileShow extends React.Component {
    constructor(props){
        super(props);
        this.openTab = this.openTab.bind(this);
        this.showDetail = this.showDetail.bind(this);
    }

    componentDidMount(){
        this.props.fetchAllUsers();
        this.props.fetchShops();
    }

    componentDidUpdate(prevProps){
        if (this.props.match.params.userId !== prevProps.match.params.userId){
            this.props.fetchAllUsers();
            this.props.fetchShops();
        }
    }

    openTab(field){
        return event => {
            const nonActiveAnchors = document.getElementsByClassName("user-tab");
            for (let i = 0; i < nonActiveAnchors.length; i++){
                if (!nonActiveAnchors[i].classList.contains("hidden")){
                    nonActiveAnchors[i].classList.toggle("hidden");
                }
            }
            const activeAnchor = document.getElementsByClassName(field)[0];
            activeAnchor.classList.toggle("hidden");
        }
    }

    showDetail(event){
        event.preventDefault();
        const lis = document.getElementsByClassName("nav-link");
        for (let i = 0; i < lis.length; i++){
            if (lis[i].classList.contains("active")){
                lis[i].classList.toggle("active");
            }
        }
        event.target.classList.toggle("active");
    }

    render(){
        let {user, shop} = this.props;
        let shopLogo;
        if (Boolean(shop)) {
            shopLogo = (
                <div>
                    <div id="default-shop-logo">
                    </div>
                    <div className="enter-shop">
                        <span className="profile-shop-name">{shop.name}</span>
                        <Link to={`/shops/${shop.id}`} className="btn-block">Visit shop</Link>
                    </div>
                </div>
            )
        }

        return (
            <div className="user-profile-show">
                <div className="user-info">
                    <div>
                        <div>
                            <img src={user.imageUrl} />
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
                            <p id="favorite-items" className="nav-link active" onClick={this.openTab("user-detail")}>{t("p.setting")}</p>
                        </li>
                        <li className="nav-item">
                            <p id="favorite-shops" className="nav-link" onClick={this.openTab("user-items")}>{t("p.items")}</p>
                        </li>
                    </ul>
                </div>

                <div className="user-tab favorite-items">
                    <FavoriteItemsIndex/>
                </div>
                <div className="user-tab favorite-shops hidden">
                    <FavoriteShopsIndex/>
                </div>

            </div>

        )
    }
}


export default withRouter(UserProfileShow);