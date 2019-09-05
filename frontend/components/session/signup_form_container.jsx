import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import React from 'react';
import {openModal, closeModal} from '../../actions/modal_actions';

const mapStateToProps = state => ({
    errors: state.errors.session,
    formType: 'Register'
});

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(signup(user)),
    otherForm: (
        <a href="#" onClick={() => dispatch(openModal('login'))} className="btn-block">Login</a>

    ),
    closeModal: () => dispatch(closeModal()),
    login: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);