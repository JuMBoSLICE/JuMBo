import React, { Component } from 'react';
import Header from './header';


class Signup extends Component {
  render() {
    console.log(this.props)
    return (
        <div id='auth'>
        <img src="http://i.imgur.com/dLQMwZp.png" className="logo" />
        <h2>CodeLaborate</h2>
        <h4>Sign Up</h4>
          <input className='name' type='text' placeholder='Your Name' value={this.props.name} onChange={(e) => {this.props.nameChange(e)}}></input>
          <input className='username' type='text' placeholder='Username' value={this.props.username} onChange={ (e) => {this.props.usernameChange(e)}}></input>
          <input className='password' type='password' placeholder='Password' value={this.props.password} onChange={ (e) => {this.props.passwordChange(e)}}></input>
          <button onClick={ () => {this.props.signUpPost()}}>Register</button>

          <p><a onClick={this.props.newRegistration}>Actually, I have an account!</a></p>
        </div>
    )
  }
}

export default Signup;