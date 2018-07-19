import React from 'react';
import { Link } from 'react-router-dom'

export default class SignUpForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      email:"",
      full_name:"",
      username: "",
      password: ""
    }
    this.login = this.props.login;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemo = this.loginDemo.bind(this);
  }

  loginDemo(e){
    e.preventDefault();
    this.props.login({ username: "violahahaha", password: "7777777" });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.signup(this.state);
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
        <div className = "signup-form">
            <label className='logo'>Christagram</label>
              <p className='top-msg'>Sign up to see photos and videos from your friends.</p>
              <form onSubmit={this.handleSubmit} className ="form">
                <input className='form-information' onChange={this.handleChange('email')} type='text' placeholder="Email"/>
                <input className='form-information' onChange={this.handleChange('full_name')} type='text' placeholder="Full Name"/>
                <input className='form-information' onChange={this.handleChange('username')} type='text' placeholder="Username"/>
                <input className='form-information' onChange={this.handleChange('password')} type='password' placeholder="Password"/>
                {this.displayErrors.bind(this)()}
                <button className="SignUp-button">Sign up</button>
                <button onClick={this.loginDemo} className='demo'>Log in as Demo User</button>
                <p className='bottom-msg'>By signing up, you agree to Christagram Policy.</p>
              </form>
        </div>
        <div className='linktologin'>
            <p className='haveAnAccount'>Have an account?
              <Link to={`/login`} className ="link"> Login</Link>

            </p>
          </div>
      </div>
    )
  }
}
