import React, { Component } from 'react';
import {Link} from 'react-router';

class TaskItems extends Component {
  render(){

    return (
      <li className="clearfix">
        <h3>Create Webpack File</h3>
        <div className="one-quarter">
          <p>Priority: <span>Medium</span></p>
        </div>
        <div className="one-quarter">
          <p>Assigned to: <span>Jon</span></p>
        </div>
        <div className="one-quarter">
          <p>Status: <span>Completed</span></p>
        </div>
        <a href="#" className="delete-task">Erase Task</a>
        <a href="#" className="update-task">Update Task</a>
      </li>
    )
  }
}


export default TaskItems;