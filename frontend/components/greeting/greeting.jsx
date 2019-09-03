import React from 'react';

const Greeting = ({currentUser, logout, openModal}) => {

    const sessionLinks = () => (
        <nav className="login-signup">
            <a href="#" onClick={() => openModal('login')} className="btn-block">
                Login
            </a>
            &nbsp;or&nbsp;

            <a href="#" onClick={() => openModal('register')} className="btn-block">
                Register
            </a>
        </nav>
    );

    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <a href="#" onClick={logout} className="btn-block">Log out</a>
        </hgroup>
    );

    return (
        currentUser ? personalGreeting() : sessionLinks()
    );
};


export default Greeting;
