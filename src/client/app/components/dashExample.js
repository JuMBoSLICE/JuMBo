import React, { Component } from 'react';
import Header from './header';

class DashExample extends Component {
  render() {
    return (
      <div>
        <Header changeView = {this.props.changeView}/>
        <section id="main">
          <div className="container">
            <div className="content">
              <h2>Projects</h2>
              <ul id="project-list">
                <li>
                  <h3>Codesmith Senior Project</h3>
                  <p>Create an app that everyone loves and no one complains about on hacker news.</p>
                  <a href='#' onClick={() => {this.props.changeView(4)}}>View Project</a>
                </li> 
              </ul>             
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default DashExample;