import React from 'react';
import { Route } from 'react-router-dom';
import LoginForm from './session/login_form_container';
import SignUpForm from './session/signup_form_container';
import HomePage from './session/home_page';
import PostIndex from './mainpage/post_index_container';

const App = () => (
  <div className="homepage">
    <Route exact path="/" component={HomePage}/>
    <Route path="/login" component={LoginForm}/>
    <Route path="/signup" component={SignUpForm}/>
    <Route path="/posts" component={PostIndex}/>
  </div>
);

export default App;
