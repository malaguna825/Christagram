import React from 'react';
import SignUpFormContainer from './signup_form_container';


class SignUpPage extends React.Component {
  render() {
    return (
      <div className='signup-form-signup-page'>
        <div className="login-container">
          <SignUpFormContainer/>
        </div>
      </div>
    )
  }
}

export default SignUpPage;
