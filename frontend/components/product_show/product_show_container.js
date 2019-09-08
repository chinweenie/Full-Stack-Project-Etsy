import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct } from '../../actions/products_actions';

const mapStateToProps = (state, ownProps) => ({
    product: state.entities.products[ownProps.match.params.productId]
});

const mapDispatchToProps = dispatch => ({
    fetchProduct: (id) => dispatch(fetchProduct(id))
    // create cart item
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);

