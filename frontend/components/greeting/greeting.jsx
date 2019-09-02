import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    render() {
        let { currentUser, logout } = this.props;

        if (currentUser) {
            return (
                <div>
                    <p>Welcome, {currentUser.username}</p>
                    <button onClick={logout}>Logout</button>

                </div>
            )
        } else {
            return (
                <div>
                    Sorry, you're not logged in yet.
                    <ul>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/signup'>Signup</Link></li>
                    </ul>
                </div>
            )
        }

    }
}

export default Greeting;
