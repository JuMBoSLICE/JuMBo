import React, { Component } from 'react';

class Header extends Component {
  render () {
    return (
    <header>
    <div className="container">
      <h1 className="logo"><a href="dashboard.html"><img src="http://i.imgur.com/dLQMwZp.png" /></a></h1>
      <nav>
        <ul id="navigation">
  <li><a onClick={ () => {changeView(2)}}>Dashboard</a></li>
  <li><a onClick={ () => {changeView(3)}}>Add Project</a></li>
  <li><a onClick={ () => {changeView(2)}}>Profile</a></li>
        </ul>
      </nav>
    </div>
  </header>
    )
  }
}

export default Header;