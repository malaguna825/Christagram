import React from 'react';
import { Route } from 'react-router-dom';
import LoginForm from './session/login_form_container'
import SignupForm from './session/signup_form_container'

const App = () => (
  <div>
    <Route path="/login" component={LoginForm}/>
    <Route path="/signup" component={SignupForm}/>
  </div>
);

export default App;
