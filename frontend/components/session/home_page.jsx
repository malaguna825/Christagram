import React from 'react';
import SignUpForm from './signup_form';


class HomePage extends React.Component {
  render() {
    return (
      <div>
      <img src={window.homepage}/>
      <SignUpForm/>
      </div>
    );
  }
}

export default HomePage;
