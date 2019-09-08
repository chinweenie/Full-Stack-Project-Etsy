import { connect } from "react-redux";
import ProductForm from "./product_form";
import { createProduct } from '../../actions/products_actions';

const mapStateToProps = (state, ownProps) => {    
    const shopId = ownProps.match.params.shopId;
    const product = {title: '', description: '', price: '', categoryId: '', shopId: shopId,  quantity: '' };
    const errors = state.errors.product;
    return {
        product,
        errors
    };
};


const mapDispatchToProps = dispatch => ({
    action: formData => dispatch(createProduct(formData))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);