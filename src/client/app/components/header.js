import React, { Component } from 'react';

class Header extends Component {
  render () {
    return (
    <header>
    <div className="container">
      <h1 className="logo"><a href="dashboard.html"><img src="http://i.imgur.com/dLQMwZp.png" /></a></h1>
      <nav>
        <ul id="navigation">
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Add Project</a></li>
          <li><a href="#">Profile</a></li>
        </ul>
      </nav>
    </div>
  </header>
    )
  }
}

export default Header;