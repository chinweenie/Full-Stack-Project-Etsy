import React from 'react';

const Greeting = ({currentUser, logout, openModal}) => {

    const sessionLinks = () => (
        <div className="login-signup">
            <div className="login">
                <a href="#" onClick={() => openModal('login')} className="btn-block">
                    Login
                </a>
            </div>

            <div className="register">
                <a href="#" onClick={() => openModal('register')} className="btn-block">
                    Register
                </a>
            </div>

        </div>
    );

    const personalGreeting = () => (
        <div className="dropdown">
            <button className="dropdown-btn">
                <div className="user-icon">
                    <i className="fa fa-user" aria-hidden="true"></i>
                </div>
                You
            </button>
            <div className="dropdown-menu">
                <div className="dropdown-header">
                    <a href="#">
                        <span className="view-profile">View profile</span>
                        <span className="fname">{currentUser.fname}</span>
                        <div id="profile-pic"></div>
                    </a>
                    
                </div>
                <div className="dropdown-content">
                    <a href="#">Favorites</a>
                    <a href="#">Puchases and reviews</a>
                    <a href="#" onClick={logout} className="btn-block">Log out</a>
                </div>
            </div>

        </div>
    // <ul className="profile-nav">     <div className="profile-nav-header"> <li>
    //    <span>{currentUser.fname}</span>             <span
    // className="profile-picture"></span>             View profile         </li>
    // </div>     <li>Favorites</li>     <li>Puchases and reviews</li>     <li
    // className="logout-button">         <a href="#" onClick={logout}
    // className="btn-block">Log out</a>     </li> </ul>
    );

    return (currentUser
        ? personalGreeting()
        : sessionLinks());
};

export default Greeting;
