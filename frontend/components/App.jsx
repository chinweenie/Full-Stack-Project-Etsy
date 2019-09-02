import React from 'react';
import { Route } from 'react-router-dom';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import GreetingContainer from './greeting/greeting_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <header>
            <h1>Epsy</h1>
            <GreetingContainer/>
        </header>

        <AuthRoute path='/signup' component={SignupFormContainer}/>
        <AuthRoute path='/login' component={LoginFormContainer}/>
    </div>
);

export default App;