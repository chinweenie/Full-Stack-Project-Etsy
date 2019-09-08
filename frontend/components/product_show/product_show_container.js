import { connect } from 'react-redux';
import ProductShow from './product_show';

const mapStateToProps = state => ({
    product: state.entities.product
});

const mapDispatchToProps = dispatch => ({
    // create cart item
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);

