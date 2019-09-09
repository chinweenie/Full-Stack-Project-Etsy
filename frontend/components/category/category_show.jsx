import React from 'react';
import LoadingIcon from '../loading_icon';
import CategoryItem from './category_item';

class CategoryShow extends React.Component {
    componentDidMount(){
        this.props.fetchCategory(this.props.match.params.categoryId);
        this.props.fetchShops();
        this.props.fetchProducts();
    }

    componentDidUpdate(prevProps){
        if (this.props.match.params.categoryId !== prevProps.match.params.categoryId){
            this.props.fetchCategory(this.props.match.params.categoryId);
            this.props.fetchShops();
            this.props.fetchProducts();
        }
    }

    render(){
        let {category, shops, products} = this.props;

        if (!category || Object.keys(shops).length === 0 || !products){
            return <LoadingIcon/>
        }
        
        debugger
        const categoryItems = products.map(product => {
            return (
                <li key={product.id}>
                    <img src={product.imageUrls[0]} />
                    <p>{product.title}</p>
                    <p>{shops[product.shopId].name}</p>
                    <p>{product.price}</p>

                </li>
            )
        });
        return (
            <div className="product-listing">
                <ul>
                    {categoryItems}
                </ul>

            </div>
        )
    }

}



export default CategoryShow;