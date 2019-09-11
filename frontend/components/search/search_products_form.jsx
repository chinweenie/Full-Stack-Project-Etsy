import React from 'react';
import {withRouter} from 'react-router-dom';


class SearchProductsForm extends React.Component {
    constructor(){
        super();

        this.state = {
            searchQuery: ''
        };

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };


    update(event){
        event.preventDefault();
        this.setState({searchQuery: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.fetchSearchProducts(this.state.searchQuery);
        this.props.history.push(`/search/${this.state.searchQuery}`);
        this.setState({searchQuery: ''});
    }

    

    render(){
        return(
            <form onSubmit={this.handleSubmit} className="search-products-form">
                <input type="text"
                       onChange={this.update}
                       placeholder="Search"
                       value={this.state.searchQuery}/>
                <button><i className="fa fa-search" aria-hidden="true"></i></button>
            </form>
        
        )
    }
    

    
    
};

export default withRouter(SearchProductsForm);
