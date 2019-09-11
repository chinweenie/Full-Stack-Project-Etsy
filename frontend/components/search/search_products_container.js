import { connect } from 'react-redux';
import SearchProducts from './search_products';
import { fetchSearchProducts } from '../../actions/search_products_actions';
import { selectAllSearch } from '../../reducers/selectors';
import { fetchShops } from '../../actions/shops_actions';

const mapStateToProps = state => ({
    search: selectAllSearch(state.entities.search),
    shops: state.entities.shops
});

const mapDispatchToProps = dispatch => ({
    fetchSearchProducts: searchQuery => dispatch(fetchSearchProducts(searchQuery)),
    fetchShops: () => dispatch(fetchShops())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchProducts);