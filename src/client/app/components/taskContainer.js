import React, { Component } from 'react';
import {Link} from 'react-router';
import AddTask from './addTask';
import TaskItems from './taskItems';

class TaskContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      displayAddTask: false,
    }
  }

  addTask() {
    if (this.state.displayAddTask) {
      this.setState({displayAddTask: false});
    } else {
      this.setState({displayAddTask: true});
    }
  }

  render() {
    let a;
    let taskButton = <button onClick={() => this.addTask()}>Add Task</button>;
    if (this.state.displayAddTask) {
      a = <AddTask />
      taskButton = <button onClick={() => this.addTask()}>Cancel Task</button>;
    }

    return (
      <div id="tasks">
        <h3 className="heading">Project Task</h3>
        { taskButton }
        { a }
        <ul>
          <TaskItems />
        </ul>
      </div>
    )
  }
}

export default TaskContainer;