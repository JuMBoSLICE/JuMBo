import React, { Component } from 'react';

class AddTask extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      priority: '',
      assigned: '',
      status: '',
    }
  }

  titleChange(e) {
    const state = {};
    state.title = e.target.value;
    this.setState(state);
    // console.log(this.state);
  }

  priorityChange(e) {
    const state = {};
    state.priority = e.target.value;
    this.setState(state);
    // console.log(this.state);
  }

  assignChange(e) {
    const state = {};
    state.assigned = e.target.value;
    this.setState(state);
    // console.log(this.state);
  }

  statusChange(e) {
    const state = {};
    state.status = e.target.value;
    this.setState(state);
    // console.log(this.state);
  }

  render() {
    return (
      <div>
        <label>Task Title</label><input type="text" id="task-name" name="task-name"  onChange={ (e) => {this.titleChange(e)}} />
        <label>Priority</label><input type="text" id="priority" name="priority"  onChange={ (e) => {this.priorityChange(e)}} />
        <label>Assigned to:</label><input type="text" id="assigned" name="assigned"  onChange={ (e) => {this.assignChange(e)}} />
        <label>Status:</label><input type="text" id="status" name="status"  onChange={ (e) => {this.statusChange(e)}} />
        <button className="update-task">Add Task</button>
      </div>
    )
  }
}

export default AddTask;