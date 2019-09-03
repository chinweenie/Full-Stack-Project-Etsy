import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const modalReducer = (state = null, action) => {
    switch (action.type) {
        case CLOSE_MODAL:
            return null;
        case OPEN_MODAL:
            return action.modal;
        default:
            return state;
    };
};

export default modalReducer