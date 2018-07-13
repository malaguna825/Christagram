import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { login, signup } from './util/session_api_util.js'
window.login = login;
window.signup = signup;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root store={configureStore()}/>, document.getElementById('root'))
});
