import React from 'react';
import SignUpForm from './signup_form';


class HomePage extends React.Component {
  render() {
    return (
      <div className="login-container">
        <div className='homepage-img'>
          <img src={window.homepage}/>
          <SignUpForm/>
        </div>
      </div>
    )
  }
}

export default HomePage;
