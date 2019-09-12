import { combineReducers } from "redux";
import cartItemSuccessReducer from "./cart_item_success_reducer";

const successReducer = combineReducers({
    cartItem: cartItemSuccessReducer
});

export default successReducer;