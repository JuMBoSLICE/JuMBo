import React, { Component } from 'react';
import {Router, Link, browserHistory} from 'react-router';
import axios from 'axios';
 
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '', 
      password: '',
    }
  }
  usernameChange(e) {
    const state = {};
    state.username = e.target.value;
    this.setState(state);
  }
  passwordChange(e) {
    const state = {};
    state.password= e.target.value;
    this.setState(state);
  }
  userVerify() {
    axios.post('/login', {
      username: this.state.username,
      password: this.state.password
      }).then((res) => {
        console.log('logged in');
        // this.setState({page: res.data.view, message: res.data.message});
        // this.context.router.transitionTo('/home');
        // Router.routeActions.push('/home');
      }).catch((error) => {
        console.log(error);
    })
  }


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
            value={this.username}
            onChange={ (e) => {this.usernameChange(e)}}>
          </input>
          <input
            className='password'
            type='password'
            placeholder='Password'
            value={this.password}
            onChange={ (e) => {this.passwordChange(e)}}>
          </input>
          <button onClick={ () => {this.userVerify()}} >Log in</button>
          <Link to='/home'>ENTER</Link>
        <p>New User? <Link to='/signUp'>Sign Up Here</Link></p>
      </div>
    )
  }
}

export default Login;