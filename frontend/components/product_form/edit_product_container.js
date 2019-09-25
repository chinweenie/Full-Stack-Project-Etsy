import { connect } from 'react-redux';
import ProductForm from './product_form';
import { updateProduct, fetchProduct } from '../../actions/products_actions';
import React from 'react';
import LoadingIcon from '../loading_icon';

const mapStateToProps = (state, ownProps) => {
    const productId = ownProps.match.params.productId;
    const product = state.entities.products[productId];
    const errors = state.errors.product;

    return {
        product,
        errors
    };
};

const mapDispatchToProps = dispatch => {
    return {
        action: formData => dispatch(updateProduct(formData)),
        fetchProduct: id => dispatch(fetchProduct(id))
    };
};

class EditProductForm extends React.Component {
    constructor(){
        super();
        this.state = {};
    }
    componentDidMount(){
        this.props.fetchProduct(this.props.match.params.productId);
    };

    componentDidUpdate(prevProps){
        if (this.props.match.params.productId !== prevProps.match.params.productId){
            this.props.fetchProduct(this.props.match.params.productId);
        };
    };
    
    render(){
        const { product, action, errors } = this.props;
        if (!product){
            return (
                <LoadingIcon />
            )
        };
        return (
            <ProductForm action={action} product={product} errors={errors}/>
        )
        
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProductForm);