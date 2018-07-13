import React from 'react';
import { Link } from 'react-router-dom'
export default class SigninForm extends React.Component{

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
        <div className='signup-form'>
          <label className='logo'>Christagram</label>
          <p className='top-msg'>Sign up to see photos and videos from your friends.</p>
          <form onSubmit={this.handleSubmit}>

          <input className='form-information' onChange={this.handleChange('email')} type='text' placeholder="Email"/>
          <br/>
          <input className='form-information' onChange={this.handleChange('full_name')} type='text' placeholder="Full Name"/>
          <br/>
          <input className='form-information' onChange={this.handleChange('username')} type='text' placeholder="Username"/>
          <br/>
          <input className='form-information' onChange={this.handleChange('password')} type='password' placeholder="Password"/>
          <br/>

          <button className="SignUp-button">Sign up</button>
          <p className='bottom-msg'>By signing up, you agree to Christagram Policy.</p>
          </form>
        </div>

          <div className='linktologin'>
          <p className='haveAnAccount'>Have an account?</p>
            <Link to={`/login`}> Login</Link>
          </div>
        </div>
    )
  }
}
