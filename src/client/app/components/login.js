import React, { Component } from 'react';
import {Link} from 'react-router';
 
class Login extends Component {

  render() {
    return (
      <div id='auth'>
        <img src="http://i.imgur.com/dLQMwZp.png" className="logo" />
        <h2>CodeLaborate</h2>
        <h4>Log in</h4>
          <input
            className='username'
            type='text'
            placeholder='Username'
            value={this.props.username}
            onChange={ (e) => {this.props.usernameChange(e)}}>
          </input>
          <input
            className='password'
            type='password'
            placeholder='Password'
            value={this.props.password}
            onChange={ (e) => {this.props.passwordChange(e)}}>
          </input>
          <button onClick={ () => {this.props.userVerify()}} >Log in</button>
        <p>New User? <Link to='/signUp'>Sign Up Here</Link></p>
      </div>
    )
  }
}

export default Login;