import React from 'react';
import {withRouter} from 'react-router-dom';

class HomePage extends React.Component {
    componentDidMount(){
        this.props.fetchCartItems();
        this.props.fetchCategories();
        this.props.fetchProducts();
        this.props.fetchShops();
        this.props.fetchAllUsers();
    }

    render(){
        return (
            <div>

            </div>
        )
    }
}

export default withRouter(HomePage)