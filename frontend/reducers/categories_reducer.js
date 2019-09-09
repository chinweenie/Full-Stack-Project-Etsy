import { RECEIVE_CATEGORIES, RECEIVE_CATEGORY } from "../actions/categories_actions";

const categoriesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CATEGORIES:
            return Object.assign({}, action.categories);
            
        case RECEIVE_CATEGORY:
            return Object.assign({} ,state,{
                [action.category.id]: action.category
            });
    
        default:
            return state;
    }
};

export default categoriesReducer;