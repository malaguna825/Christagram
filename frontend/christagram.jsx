import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// import { login, signup } from './util/session_api_util.js'
// window.login = login;
// window.signup = signup;

import { fetchPosts } from './actions/post_actions'
window.fetchPosts = fetchPosts;


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore()
  window.store = store
  ReactDOM.render(<Root store={store}/>, document.getElementById('root'))
});
