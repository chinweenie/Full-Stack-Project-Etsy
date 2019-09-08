import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import shopErrorsReducer from './shop_errors_reducer';
import productErrorsReducer from "./product_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    shop: shopErrorsReducer,
    product: productErrorsReducer
});



export default errorsReducer;