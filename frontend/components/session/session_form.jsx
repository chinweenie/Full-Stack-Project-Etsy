import React from 'react';

class SessionForm extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            email: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const user = Object.assign({}, this.state);  // {user: {username, password}}
        this.props.processForm(user);
    }

    update(field) {
        return (event) => {
            this.setState({ [field]: event.target.value });
        }
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    
    render() {

        const loginHeader = (
            <div className="login-header">
                <h1>Login to continue</h1>
            </div>
        );

        const registerHeader = (
            <div className="register-header">
                <h1>Create your account</h1>
                <p>Registration is easy.</p>
            </div>
        );

        const header = this.props.formType === 'Register' ? registerHeader : loginHeader;

        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">

                    {header}

                    <div className="login-form">
                        <br />
                        <label>Username:
                                <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </label>

                        <br />
                        <label>Password:
                                <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <br />

                        <label>Email:
                                <input type="email"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                            />
                        </label>
                        <br />

                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }

}

export default SessionForm;