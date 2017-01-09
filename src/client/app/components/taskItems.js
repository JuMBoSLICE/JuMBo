import React, { Component } from 'react';
import {Link} from 'react-router';

class TaskItems extends Component {
  render(){

    return (
      <li class="clearfix">
        <h3>Create Webpack File</h3>
        <div class="one-quarter">
          <p>Priority: <span>Medium</span></p>
        </div>
        <div class="one-quarter">
          <p>Assigned to: <span>Jon</span></p>
        </div>
        <div class="one-quarter">
          <p>Status: <span>Completed</span></p>
        </div>
        <a href="#" class="delete-task">Erase Task</a>
        <a href="#" class="update-task">Update Task</a>
      </li>
    )
  }
}


export default TaskItems;