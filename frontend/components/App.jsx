import React from 'react';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import GreetingContainer from './greeting/greeting_container';
import {AuthRoute} from '../util/route_util';
import Modal from './modal/modal';


const App = () => (
    <div>
        <Modal/>
        <header>
            <GreetingContainer/>
        </header>

        {/* Route declaration */}
        <AuthRoute path='/signup' component={SignupFormContainer} />
        <AuthRoute path='/login' component={LoginFormContainer} />

    </div>
)

export default App;