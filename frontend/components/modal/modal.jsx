import React from 'react';
import {closeModal} from '../../actions/modal_actions';
import {connect} from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';

const Modal = ({modal, closeModal}) => {
    if (!modal) {
        return null;
    };
    let component;
    switch (modal) {
        case 'login':
            component = <LoginFormContainer/>
            break;
        case 'register':
            component = <SignupFormContainer/>
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={ event => event.stopPropagation()}>
                { component }
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);