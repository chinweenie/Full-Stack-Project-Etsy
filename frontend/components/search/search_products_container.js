import { connect } from 'react-redux';
import SearchProducts from './search_products';
import { selectAllSearch } from '../../reducers/selectors';
import { fetchShops } from '../../actions/shops_actions';

const mapStateToProps = state => ({
    searchProducts: selectAllSearch(state.entities.searchProducts),
    shops: state.entities.shops
});



export default connect(mapStateToProps, null)(SearchProducts);