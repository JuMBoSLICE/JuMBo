import React, { Component } from 'react';
import Header from './header';

class ViewProject extends Component {
  render() {
    return (
      <div>
        <Header changeView = {this.props.changeView}/>
          <section id="main">
            <div className="container">
              <div className="content">
                <h2>Codesmith Senior Project</h2>
                <h3 className="heading">Project Overview</h3>
                <div className="project-row clearfix">
                  <div className="team one-third">
                    <h3>Team Members</h3>
                    <p>Brian, Jon, Max, Mike</p>
                  </div>
                  <div className="project-date one-third">
                    <h3>Project Date</h3>
                    <p>01/05/2017</p>
                  </div>
                  <div className="project-status one-third">
                    <h3>Tasks Completed</h3>
                    <p>0 of 0 (0%)</p>
                  </div>
                </div>
                <div className="project-row clearfix">
                  <div id="project-summary">
                    <h3>Project Summary</h3>
                    <p>Create an app that everyone loves and no one complains about on hacker news.</p>
                  </div>
                </div>
                <div id="tasks">
                  <h3 className="heading">Project Tasks</h3>
                  <p>No tasks are currently assigned. <a href="#" onClick={ () => {this.props.changeView(5)}}>Create task</a></p>
                </div>
              </div>
            </div>
        </section>
      </div>
    )
  }
}

export default ViewProject;