import React, { Component } from 'react';
import Login from './login.js';
import Signup from './signup.js';
import styles from './../../style.css';
import Dashboard from './dashboard.js';


class App extends Component {

 constructor() {
    super();
    this.state = {
      page: 0
    }
    this.newRegistration = this.newRegistration.bind(this)
  }

  newRegistration() {
    if (this.state.page === 0) {
      this.setState({page: 1});
    } else {
      this.setState({page: 0});
    }
  }



render() {
if (this.state.page === 0) {
return(
  <Login 
    newRegistration = {this.newRegistration}
    page={this.state.page}
    />
    )
};

if (this.state.page === 1) {
  return( 
    <Signup 
      newRegistration = {this.newRegistration}

    />
  )
}    
}     

//if thiis
// render( 
//   <Dashboard />

//   , document.getElementById("root"));

}
export default App;