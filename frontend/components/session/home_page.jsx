import React from 'react';
import SignUpFormContainer from './signup_form_container';


class HomePage extends React.Component {
  render() {
    return (
      <div className="login-container">
        <div className='homepage-img'>
          <img src={window.homepage}/>
            <div className='signup-form-homepage'>
              <SignUpFormContainer/>
            </div>
        </div>
      </div>
    )
  }
}

export default HomePage;
