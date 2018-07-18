import React from 'react';
import SignUpForm from './signup_form';


class SignUpPage extends React.Component {
  render() {
    return (
      <div className='signup-form-signup-page'>
        <div className="login-container">
          <SignUpForm/>
        </div>
      </div>
    )
  }
}

export default SignUpPage;
