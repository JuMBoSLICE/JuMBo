import React, { Component } from 'react';

class Header extends Component {
  render () {
    return (
    <header>
    <div className="container">
      <h1 className="logo"><a href="#" onClick={ () => {this.props.changeView(2)}}><img src="http://i.imgur.com/dLQMwZp.png" /></a></h1>
      <nav>
        <ul id="navigation">
          <li><a href="#" onClick={ () => {this.props.changeView(5)}}>Dashboard</a></li>
          <li><a href="#" onClick={ () => {this.props.changeView(3)}}>Add Project</a></li>
          <li><a href="#" >Profile</a></li>
        </ul>
      </nav>
    </div>
  </header>
    )
  }
}

export default Header;