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

    // render() {
    //     let { errors, formType } = this.props;
    //     const errorsLi = errors.session.map(error => {
    //         return <li>{error}</li>
    //     })

    //     const linkButton = formType === 'login' ? "Login" : "Sign Up"

    //     return (
    //         <form onSubmit={this.handleSubmit}>
    //             <header>{formType}</header>

    //             <ul className="errors">
    //                 {errorsLi}
    //             </ul>

    //             <label htmlFor="username">Username</label>
    //             <input type="text" id="username" value={this.state.username} onChange={this.update('username')} />

    //             <label htmlFor="password">Password</label>
    //             <input type="password" id="password" value={this.state.password} onChange={this.update('password')} />

    //             <label htmlFor="email">Email</label>
    //             <input type="text" id="email" value={this.state.email} onChange={this.update('email')} />

    //             <button>{linkButton}</button>
    //         </form>
    //     );
    // }
    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">

                    Welcome to Epsy!
                    <br />

                    Please {this.props.formType} or {this.props.navLink}
                    {this.renderErrors()}

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