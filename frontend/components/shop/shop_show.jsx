import React from 'react';
import LoadingIcon from '../loading_icon';

class ShopShow extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.fetchShop(this.props.match.params.shopId);
    };

    componentDidUpdate(prevProps) {
        if (this.props.match.params.shopId !== prevProps.match.params.shopId) {
            this.props.fetchShop(this.props.match.params.shopId);
        }
    }

    render() {
        let { shop } = this.props;
        if (!shop) {
            return (
                <LoadingIcon />
            )
        }
        return (
            <div className="shop-show">
                <div className="shop-show-header">
                    <div className="shop-logo">
                        <img src={shop.imageUrl} />
                    </div>

                    <div className="shop-info">
                        <div className="shop-name">
                            {shop.name}
                        </div>
                        <div className="favorite-shop">
                            <i className="fa fa-heart-o" aria-hidden="true"></i>
                            Favorite shop ({shop.users_who_favorited_me.length})
                        </div>
                    </div>

                    <div className="owner-info">
                        <p>Shop owner</p>
                        <img src={shop.profilePicUrl} />
                        <div className="shop-owner-name">{shop.owner.fname}</div>
                        <div className="shop-owner-email">
                            <i className="fa fa-envelope-o" aria-hidden="true"></i>
                            {shop.owner.email}
                        </div>
                    </div>
                </div>

                <div className="products-listing">

                </div>

                {/* show products sold by this shop */}
                {/* can insert reviews too */}

            </div>
        );
    };
}

export default ShopShow;