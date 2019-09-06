import React from 'react';

class ShopShow extends React.Component {
    constructor(){
        super();
    }

    componentDidMount(){
        this.props.fetchShop(this.props.match.params.shopId);
    };

    componentDidUpdate(prevProps){
        if (this.props.match.params.shopId !== prevProps.match.params.shopId){
            this.props.fetchShop(this.props.match.params.shopId);
        }
    }

    render(){
        return (
            <div className="shop-show">
                {/* shop's name, shop's logo, shop's owner image, number of users that fav the shop */}
                {/* show products sold by this shop */}

            </div>
        );
    };
}

export default ShopShow;