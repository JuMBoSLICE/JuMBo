import React, { Component } from 'react';
import { render } from 'react-dom';

class Login extends Component {

  


  render() {
    return (
      <div id='auth'>
        <h2>Welcome to codeLaborate</h2>
        <h4>Log in!</h4>
        <form method='POST'>
          <input class='username' type='text' placeholder='Username'></input>
          <input class='password' type='password' placeholder='Password'></input>
          <button>Login</button>
        </form>
        <p><a onClick={this.props.newRegistration}>New User?</a></p>
      </div>
    )
  }
}

export default Login;