import {connect} from 'react-redux';
import {login} from '../../actions/session_actions';
import SessionForm from './session_form';
import {Link} from 'react-router-dom';
import React from 'react';
import {openModal, closeModal} from '../../actions/modal_actions';

const mapStateToProps = state => {
    return {
        errors: state.errors.session,
        formType: 'Login'
    }
};



const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(login(user)),
    otherForm: (
        <a href="#" onClick={() => dispatch(openModal('signup'))} className="btn-block">Register</a>
    ),
    closeModal: () => dispatch(closeModal()),
    login: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);