import { connect } from "react-redux";
import ProductForm from "./product_form";

const mapStateToProps = state => ({
    product: {title: '', description: '', quantity: '', price: '', categoryId: '', shopId: ''}
});

const mapDispatchToProps = dispatch => ({
    action: product => dispatch(createProduct(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);