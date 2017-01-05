import React, { Component } from 'react';

class Login extends Component {

  


  render() {
    return (
      <div id='auth'>
        <img src="http://i.imgur.com/dLQMwZp.png" className="logo" />
        <h2>CodeLaborate</h2>
        <h4>Log in</h4>
        <form>
          <input className='username' type='text' placeholder='Username' value={this.props.username} onChange={ (e) => {this.props.usernameChange(e)}}></input>
          <input className='password' type='password' placeholder='Password' value={this.props.password} onChange={ (e) => {this.props.passwordChange(e)}}></input>
          <button onClick={ () => {this.props.userVerify()}} >Log in</button>
        </form>
        <p>New User? <a onClick={this.props.newRegistration}>Sign up here.</a></p>
      </div>
    )
  }
}

export default Login;