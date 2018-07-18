import React from 'react';
import { Link } from 'react-router-dom'
export default class SignUpForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      email:"",
      full_name:"",
      username: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
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
                <button className="SignUp-button">Sign up</button>
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
