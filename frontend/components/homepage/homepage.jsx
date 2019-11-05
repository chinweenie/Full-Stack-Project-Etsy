import React from 'react';
import {withRouter} from 'react-router-dom';

class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.toWeddingGifts = this.toWeddingGifts.bind(this);
        this.toHerGifts = this.toHerGifts.bind(this);
        this.toHousewarming = this.toHousewarming.bind(this);
        this.toVintage = this.toVintage.bind(this);
        this.toArts = this.toArts.bind(this);
        this.toClothing = this.toClothing.bind(this);
    }
    componentDidMount() {
        this
            .props
            .fetchCategories();
        this
            .props
            .fetchProducts();
        this
            .props
            .fetchShops();
        this
            .props
            .fetchAllUsers();
    }

    toWeddingGifts(event){
        event.preventDefault();
        // this.props.history.push('/categories/59');
        this.props.history.push('/categories/4');
    }

    toHerGifts(event){
        event.preventDefault();
        // this.props.history.push('/categories/56');
        this.props.history.push('/categories/1');
    }

    toHousewarming(event){
        event.preventDefault();
        // this.props.history.push('/categories/58');
        this.props.history.push('/categories/3');
    }

    toVintage(event){
        event.preventDefault();
        // this.props.history.push('/categories/63');
        this.props.history.push('/categories/8');
    }

    toArts(event){
        event.preventDefault();
        // this.props.history.push('/categories/61');
        this.props.history.push('/categories/6');
    }

    toClothing(event){
        event.preventDefault();
        // this.props.history.push('/categories/57');
        this.props.history.push('/categories/2');
    }

    render() {
        return (
            <div className="homepage">

                <h1>If it's handcrafted, vintage, custom, or unique, it's on Epsy.</h1>

                <div className="homepage-banner">
                    <h1>Personalized jewelry shines a little brighter</h1>
                    <button onClick={this.toHerGifts}>
                        Shop custom jewelry
                        <i className="fa fa-caret-right" aria-hidden="true"></i>
                    </button>
                </div>

                <div className="middle-banner">
                    <ul className="middle-banner-list">
                        <li>
                            <h3>
                                <i className="fa fa-check" aria-hidden="true"></i>
                                Unique everything
                            </h3>
                            <p>We have millions of one-of-a-kind items, so you can find whatever you need
                                (or really, really want).</p>
                        </li>
                        <li>
                            <h3>
                                <i className="fa fa-check" aria-hidden="true"></i>
                                Independent sellers
                            </h3>
                            <p>Buy directly from someone who put their heart and soul into making something
                                special.</p>
                        </li>
                        <li>
                            <h3>
                                <i className="fa fa-check" aria-hidden="true"></i>
                                Secure shopping
                            </h3>
                            <p>We use best-in-class technology to protect your transactions.</p>
                        </li>
                    </ul>
                </div>

                <div className="bottom-banner">
                    <h3>You might be interested in</h3>
                    <ul className="category-images-ul">
                        <li onClick={this.toWeddingGifts}>
                            <div id="wedding-gifts"></div>
                            <h4>Wedding gifts</h4>
                        </li>
                        <li onClick={this.toHerGifts}>
                            <div id="her-gifts"></div>
                            <h4>Gifts for her</h4>
                        </li>
                        <li onClick={this.toHousewarming}>
                            <div id="housewarming"></div>
                            <h4>Housewarming gifts</h4>
                        </li>
                        <li onClick={this.toVintage}>
                            <div id="vintage-goodies"></div>
                            <h4>Vintage goodies</h4>
                        </li>
                        <li onClick={this.toArts}>
                            <div id="artsy-crafts"></div>
                            <h4>Artsy Crafts</h4>
                        </li>
                        <li onClick={this.toClothing}>
                            <div id="handmade-clothing"></div>
                            <h4>Handmade clothing</h4>
                        </li>
                        
                    </ul>

                </div>
            </div>
        )
    }
}

export default withRouter(HomePage)