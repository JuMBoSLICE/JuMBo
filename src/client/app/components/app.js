import React, { Component } from 'react';
import {Router, Route, Link, IndexRoute, hashHistory, browserHistory} from 'react-router';
import Login from './login.js';
import Signup from './signup.js';
import styles from './../../style.css';
import Dashboard from './dashboard.js';
import ProjectCreator from './projectCreator.js';
import ProjectContainer from './projectContainer.js';
import axios from 'axios';
import AddProj from './addProj.js';
import Header from './header';
import ViewProject from './viewProject.js';


class App extends Component {

 constructor(props) {
    super(props);
    this.state = {
      page: 0,
      name: '',
      username: '', 
      password: '',
      message: '',
      newProject: '',
      newProjectSummary: '',

    }
    this.newRegistration = this.newRegistration.bind(this);
    this.signUpPost = this.signUpPost.bind(this);
    this.usernameChange = this.usernameChange.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.userVerify = this.userVerify.bind(this);
    this.changeView = this.changeView.bind(this);
    this.projChange = this.projChange.bind(this);
    this.createProject = this.createProject.bind(this);
  }

//setState to change Login page to SignUp page
  newRegistration() {
    if (this.state.page === 0) {
      this.setState({page: 1});
    } else {
      this.setState({page: 0});
    }
  }

//register new user on signup page, create new user in database, send client to login page
  signUpPost() {
    axios.post('/signup', {
      username: this.state.username,
      name: this.state.name,
      password: this.state.password,
    }).then((res) => {
      this.setState({
        page: res.data.view,
        message: res.data.message
      });
    }).catch(function(error) {
      console.log(error);
    }) 
  }

//verify user, send user to database 
  userVerify() {
    axios.post('/login', {
      username: this.state.username,
      password: this.state.password
      }).then((res) => {
        // this.setState({page: res.data.view, message: res.data.message});
        this.context.router.transitionTo('/home');
      }).catch((error) => {
        console.log(error);
    })
  }

//create new project in database, send client to dashboard
  createProject() {
    axios.post('/createProject', {
      title: this.state.newProject,
      summary: this.state.newProjectSummary
    }).then((res) => {
      this.setState({page: res.data.view, message: res.data.message})
    }).catch((error) => {
      console.log(error);
    })
  }

//changes to appropriate view based on passed in variable
  changeView(num) {
    this.setState({page: num})
  }

//wraps username input and sends username value to state
  usernameChange(e) {
    const state = {};
    state.username = e.target.value;
    this.setState(state);
  }

//wraps name input and sends name value to state
  nameChange(e) {
    const state = {};
    state.name = e.target.value;
    this.setState(state);
  }

//wraps password input and sends password value to state
  passwordChange(e) {
    const state = {};
    state.password= e.target.value;
    this.setState(state);
  }

//wraps project title input and sends project title value to state
  projChange(e) {
    const state = {};
    state.newProject = e.target.value;
    this.setState(state);
  }

//conditional rendering for components based on 'page' property in state
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Header}>
          <IndexRoute component={Dashboard} />
          <Route path='/createProject' component={ProjectCreator} />
          <Route path='/viewProject/:projectID' component={ViewProject} />
        </Route>
      </Router>
    )
    // if (this.state.page === 0) {
    //   return (
    //     <Login 
    //       newRegistration = {this.newRegistration}
    //       page={this.state.page}
    //       userVerify = {this.userVerify}
    //       usernameChange = {this.usernameChange}
    //       passwordChange = {this.passwordChange}
    //       message = {this.state.message}
    //     />
    //   )
    // };

    // if (this.state.page === 1) {
    //   return ( 
    //     <Signup 
    //       newRegistration = {this.newRegistration}
    //       usernameChange = {this.usernameChange}
    //       nameChange = {this.nameChange}
    //       passwordChange = {this.passwordChange}
    //       username = {this.state.username}
    //       password = {this.state.password}
    //       name = {this.state.name}
    //       signUpPost = {this.signUpPost}
    //       message = {this.state.message}
    //     />
    //   )
    // }  

    // if (this.state.page === 2) {
    //   return ( 
    //     <Dashboard changeView = {this.changeView}/>
    //   )
    // }

    // if (this.state.page === 3) {
    //   return (
    //     <AddProj
    //       projChange = {this.projChange}
    //       createProject = {this.createProject}
    //       changeView = {this.changeView}
    //     />
    //   )
    // }
  }

}

export default App;
