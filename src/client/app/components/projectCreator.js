import React, { Component } from 'react';
import {Link} from 'react-router';

class ProjectCreator extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      summary: '',
      members: [],
    }
  }

  titleChange(e) {
    const state = {};
    state.title = e.target.value;
    this.setState(state);
    // console.log(this.state);
  }

  summaryChange(e) {
    const state = {};
    state.summary = e.target.value;
    this.setState(state);
    // console.log(this.state);
  }

  handleEnterPress(e) {
    if (e.key == 'Enter') {
      const members = this.state.members.slice();
      members.push(e.target.value);
      this.setState({
        members : members
      });
      e.preventDefault();
    }
  }

  saveProject(e) {
    // post request to database sending title and summary
    console.log(this.state.title);
    console.log(this.state.summary);
    console.log(this.state.members);
    fetch('/createProject', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: this.state.title,
        summary: this.state.summary,
        team_members: this.state.members,
        tasks: [],
        messages: []
      })
    })
      .then(res => {
      })
      .then(res => {
        console.log(res);
      });
  }
  render() {
    const style = {
      width: '100%', 
      border: '1px solid #eaeaea'
    };
    return (
      <div className="container">
        <div className="content">
          <h2>Create Project</h2>
          <form id="create-project">
            <div className="form-row clearfix">
              <div className="input-half project-title">
                <label>Project Title</label><input type="text" id="project-name" name="project-name"  onChange={ (e) => {this.titleChange(e)}} />
              </div>
              <div className="input-half project-select">
                <label>Add Team Members</label>
                <input type="text" id="project-members" name="project-members" onKeyPress={(e) => {this.handleEnterPress(e)}} />
              </div>
            </div>
            <div className="input-full project-summary">
              <label>Summarize Your Project</label>
              <textarea id="project-summary" id="project-summary" onChange={ (e) => {this.summaryChange(e)}} ></textarea>
            </div>
            <div className="clearfix">
              <button onClick={(e) => {this.saveProject(e)}} id="project-submit">Save Project</button><a href="#" className="reset-project">Reset Project</a>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default ProjectCreator;