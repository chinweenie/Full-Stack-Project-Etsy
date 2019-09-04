import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/root_reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
const middleWares  = [thunk];

if (process.env.NODE_ENV !== "production"){
    // must use require (import only allowed at top of file)
    const {logger} = require('redux-logger');
    middleWares.push(logger);
}

const configureStore = (preloadedState = {}) => (
    createStore(rootReducer, preloadedState, applyMiddleware(...middleWares))
)

export default configureStore;