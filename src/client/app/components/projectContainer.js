import React, { Component } from 'react';
import {Link} from 'react-router';
import MessageBoard from './MessageBoard';

class ProjectContainer extends Component {
  render() {
    return (
      <div>
        <projectView />
        <taskContainer />
        <MessageBoard />
      </div>
    )
  }
}

export default ProjectContainer;