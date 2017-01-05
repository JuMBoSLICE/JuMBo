import React, { Component } from 'react';
import { render } from 'react-dom';

const Signup = (props) => {
  render() {
    return (
      <div id='auth'>
      <h4>Sign up!</h4>
        <form method='POST'>
          <input class='username' type='text' placeholder='Username'></input>
          <input class='password' type='password' placeholder='Password'></input>
          <button>Register</button>
        </form>
          <p><a onClick={this.props.newRegistration}>Actually, I have an account!</a></p>
      </div>
    )
  }
}

export default Signup;