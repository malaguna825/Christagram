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
    this.loginDemo = this.loginDemo.bind(this);
  }

  loginDemo(e){
    e.preventDefault();
    this.setState({ username: "violahahaha", password: "7777777" }, () => {
      this.props.login(this.state);
    });
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

displayErrors(){
  if(this.props.errors.length > 0){
    return this.props.errors.map(error=><div className="error-divs">{error}</div>);
  }
}

  render(){
    return (
      <div>
        <div className='login-form'>
        <label className='logo'>Christagram</label>
        <p className='space'></p>
        <form onSubmit={this.handleSubmit} className ="form">
          <input className='form-information' onChange={this.handleChange('username')} type='type' placeholder="Phone number, username, or email"/>
          <input className='form-information' onChange={this.handleChange('password')} type='password' placeholder="Password"/>
          {this.displayErrors.bind(this)()}
          <button className="Login-button">login</button>
          <button onClick={this.loginDemo} className='demo'>Log in as Demo User</button>
          <p className="forgotpw">Forgot password?</p>
        </form>
        </div>

        <div className='linktoSignUp'>
          <p className='DonthaveAnAccount'>Dont have an account?</p>
          <Link to={`/signup`} className ="link"> Sign up</Link>
        </div>

      </div>
    )
  }
}
