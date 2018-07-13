import React from 'react';
import { Link } from 'react-router-dom'

export default class LoginForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.login(this.state);
  }

  handleChange(field){
  return(e)=>{
    this.setState({[field]: e.target.value});
  };
}

  render(){
    return (
      <div>
        <div className='login-form'>
        <label className='logo'>Christagram</label>
        <p className='space'></p>
        <form onSubmit={this.handleSubmit}>
          <input className='form-information' onChange={this.handleChange('username')} type='type' placeholder="Phone number, username, or email"/>
          <input className='form-information' onChange={this.handleChange('password')} type='password' placeholder="Password"/>
          <button className="Login-button">login</button>
          <p className="forgotpw">Forgot password?</p>
        </form>
        </div>

        <div className='linktoSignUp'>
          <p className='DonthaveAnAccount'>Dont have an account?</p>
          <Link to={`/signup`}> Sign up</Link>
        </div>

      </div>
    )
  }
}
