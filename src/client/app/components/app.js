import React, { Component } from 'react';
import Login from './login.js';
import Signup from './signup.js';
import styles from './../../style.css';
import AddProject from './addProject';
import Dashboard from './dashboard.js';
import axios from 'axios';


class App extends Component {

 constructor(props) {
    super(props);
    this.state = {
      page: 0,
      name: '',
      username: '', 
      password: '', 
    }
    this.newRegistration = this.newRegistration.bind(this);
    this.signUpPost = this.signUpPost.bind(this);
    this.usernameChange = this.usernameChange.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.userVerify = this.userVerify.bind(this);
    this.createProjectView = this.createProjectView.bind(this);
  }

  newRegistration() {
    if (this.state.page === 0) {
      this.setState({page: 1});
    } else {
      this.setState({page: 0});
    }
  }

  signUpPost() {
    console.log('inside signuppost')
      axios.post('/signup', {
        username: this.state.username,
        name: this.state.name,
        password: this.state.password,
      }).then(function(response){
          console.log(response);
      }).catch(function(error) {
          console.log(error);
      }) 
    this.setState({page: 0});
  }


  userVerify() {
    console.log('inside user verify')
      axios.post('/login', {
        username: this.state.username,
        password: this.state.password
      }).then((res) => {
        console.log(res.data);
          this.setState({page: 2})
      }).catch((error) => {
          console.log(error);
      })
  }

  usernameChange(e) {
    const state = {};
    state.username = e.target.value;
    this.setState(state);
  }

  nameChange(e) {
    const state = {};
    state.name = e.target.value;
    this.setState(state);
  }

  passwordChange(e) {
    const state = {};
    state.password= e.target.value;
    this.setState(state);
  }

  createProjectView() {
    this.setState({page: 3})
  }

  render() {
    if (this.state.page === 0) {
      return (
        <Login 
          newRegistration = {this.newRegistration}
          page={this.state.page}
          userVerify = {this.userVerify}
          usernameChange = {this.usernameChange}
          passwordChange = {this.passwordChange}
          />
        )
    };

    if (this.state.page === 1) {
      return ( 
        <Signup 
          newRegistration = {this.newRegistration}
          usernameChange = {this.usernameChange}
          nameChange = {this.nameChange}
          passwordChange = {this.passwordChange}
          username = {this.state.username}
          password = {this.state.password}
          name = {this.state.name}
          signUpPost = {this.signUpPost}
        />
      )
    }  

    if (this.state.page === 2) {
      return ( 
        <Dashboard viewChange = {this.createProjectView}/>
      )
    }

    if (this.state.page === 3) {
      return (
        <AddProject />
      )
    }
  }

}

export default App;
