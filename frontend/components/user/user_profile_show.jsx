import React from 'react';
import {withRouter, Link} from 'react-router-dom';

class UserProfileShow extends React.Component {
    constructor(props){
        super(props);
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
                    <ul>
                        <li><a href="#">Favorite items</a></li>
                        <li><a href="#">Favorite shops</a></li>
                    </ul>
                    {/* favorite items, favorite shops  */}
                </div>

                <div className="favorite-list">
                    {/* list of items or shops favorited by user */}
                    {/* can use an onClick function to show the selected list*/}
                </div>

            </div>

        )
    }
}


export default withRouter(UserProfileShow);