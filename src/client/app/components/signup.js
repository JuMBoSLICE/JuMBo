import React, { Component } from 'react';
import Header from './header';
import {Link} from 'react-router';


class Signup extends Component {
  render() {
    return (
        <div id='auth'>
        <img src="http://i.imgur.com/dLQMwZp.png" className="logo" />
        <h2>CodeLaborate</h2>
        <h4>Sign Up</h4>
          <input
            className='name'
            type='text'
            placeholder='Your Name'
            value={this.props.name}
            onChange={(e) => {this.props.nameChange(e)}}>
          </input>
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
          <button onClick={ () => {this.props.signUpPost()}} >Register</button>

          <p><Link to='/'>Actually, I have an account!</Link></p>
        </div>
    )
  }
}

export default Signup;