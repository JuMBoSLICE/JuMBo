import React, { Component } from 'react';

class AddProj extends Component {

  render() {
    return (
      <div>
        <section id="main">
          <div className="container">
            <div className="content">
              <h2>Create Project</h2>
              <div id="create-project">
                <div className="form-row clearfix">
                  <div className="input-half project-title">
                    <label>Project Title</label><input type="text" id="project-name" name="project-name"></input>
                  </div>
                  <div className="input-half project-select">
                    <label>Add Team Members</label>
                    <select name="team-select" id="team-select" placeholder="Type to find your teammate" multiple="multiple">
                    </select>
                  </div>
                </div>
                <div className="input-full project-summary">
                  <label>Summarize Your Project</label>
                  <textarea id="project-summary" id="project-summary"></textarea>
                </div>
                <div className="clearfix">
                  <button type="submit" id="project-submit" onClick={() => {this.props.changeView(2)}}>Save Project</button><a href="#" className="reset-project">Reset Project</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default AddProj;