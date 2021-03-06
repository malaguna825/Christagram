import React from 'react';
import { Route } from 'react-router-dom';
import LoginForm from './session/login_form_container';
import SignUpForm from './session/signup_form_container';
import HomePage from './session/home_page';
import SignUpPage from './session/signup_page';
import PostIndex from './mainpage/post_index_container';
import NavBar from './navBar/nav_bar_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="homepage">
    <AuthRoute exact path="/" component={HomePage}/>
    <AuthRoute exact path="/login" component={LoginForm}/>
    <AuthRoute exact path="/signup" component={SignUpPage}/>
    <ProtectedRoute  component={NavBar}/>

    <ProtectedRoute exact path="/posts" component={PostIndex}/>
  </div>
);

export default App;





// <ProtectedRoute exact path="/posts/user/:userid" component={PostShow}/>
