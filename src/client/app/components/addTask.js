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

  // titleChange(e) {
  //   const state = {};
  //   state.title = e.target.value;
  //   this.setState(state);
  //   // console.log(this.state);
  // }

  render() {
    return (
      <li>
        <h2> {this.state.title}</h2>
        <p> Priority: {this.state.priority}</p>
        <p> Priority: {this.state.assigned}</p>
        <p> Priority: {this.state.status}</p>
        <button className="erase">Erase Task</button>
        <button className="update">Update Task</button>
      </li>
    )
  }
}

export default AddTask;