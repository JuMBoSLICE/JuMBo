import React, { Component } from 'react';
import Header from './header';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <section id="main">
          <div className="container">
            <div className="content">
              <h2>Projects</h2>
              <p className="no-projects">You currently have no projects. <a href="#" onClick={this.props.viewChange}>Create a project</a>.</p>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Dashboard;