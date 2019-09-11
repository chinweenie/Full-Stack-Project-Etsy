import { connect } from "react-redux";
import SearchProductsForm from "./search_products_form";
import {fetchSearchProducts} from '../../actions/search_products_actions';
import  {fetchShops} from '../../actions/shops_actions';

const mapDispatchToProps = dispatch => ({
    fetchSearchProducts: searchQuery => dispatch(fetchSearchProducts(searchQuery)),
});

export default connect(null, mapDispatchToProps)(SearchProductsForm);