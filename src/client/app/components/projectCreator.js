import React, { Component } from 'react';
import {Link} from 'react-router';

class ProjectCreator extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      summary: '',
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

  saveProject() {
    // post request to database sending title and summary
    console.log(this.state.title);
    console.log(this.state.summary);
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
                <select name="team-select" id="team-select" placeholder="Type to find your teammate" style={style} multiple="multiple">
                  <option value="1">Anto</option>
                  <option value="2">Brian</option>
                  <option value="3">Chris</option>
                  <option value="4">Dave</option>
                  <option value="5">Jon</option>
                  <option value="6">Max</option>
                  <option value="7">Mike</option>
                  <option value="8">Scott</option>
                </select>
              </div>
            </div>
            <div className="input-full project-summary">
              <label>Summarize Your Project</label>
              <textarea id="project-summary" id="project-summary" onChange={ (e) => {this.summaryChange(e)}} ></textarea>
            </div>
            <div className="clearfix">
              <button onClick={() => {this.saveProject()}} id="project-submit">Save Project</button><a href="#" className="reset-project">Reset Project</a>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default ProjectCreator;