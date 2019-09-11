import React from 'react';
import {withRouter} from 'react-router-dom';
import LoadingIcon from '../loading_icon';

class SearchProducts extends React.Component {
    constructor(){
        super();

        this.state = {
            searchQuery: ''
        };

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    componentDidMount(){
        this.props.fetchShops();
    }

    update(event){
        event.preventDefault();
        this.setState({searchQuery: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.fetchSearchProducts(this.state.searchQuery);
    }

    toProductPage(product){
        event.preventDefault();
        return (event) => {
            event.preventDefault();
            this.props.history.push(`/shops/${product.shopId}/products/${product.id}`)
        }
    }

    render(){
        let {search, shops} = this.props;

        if(!search || !shops){
            return <LoadingIcon/>
        };

        const productsLi = search.map(product => {
            return (
                <li key={product.id} onClick={this.toProductPage(product)} >
                    <img src={product.imageUrls[0]} />
                    <p>{product.title.slice(0, 35)}...</p>
                    <p className="category-shop-name">{shops[product.shopId].name}</p>
                    <p>USD {product.price}</p>
                </li>
            )
        })

        return(
            <div className="search-products">
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                           placeholder="search product keyword"
                           onChange={this.update}
                           value={this.state.searchQuery}/>
                    <button><i className="fa fa-search" aria-hidden="true"></i></button>
                </form>




                <div className="products-listing">
                    <ul>
                        {productsLi}
                    </ul>
                </div>
                
            </div>
        )
    }
    

    
    
};

export default withRouter(SearchProducts);
