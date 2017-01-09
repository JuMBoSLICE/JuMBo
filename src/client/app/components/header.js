import React, { Component } from 'react';
import {Link} from 'react-router';

class Header extends Component {
  render () {
    return (
      <div>
        <header>
          <div className="container">
            <h1 className="logo"><a href="#"><img src="http://i.imgur.com/dLQMwZp.png" /></a></h1>
            <nav>
              <ul id="navigation">
                <li><Link to='/'>Dashboard</Link></li>
                <li><Link to='/createProject'>Add Project</Link></li>
              </ul>
            </nav>
          </div>
         
        </header>
        {this.props.children}
      </div>
    )
  }
}

export default Header;