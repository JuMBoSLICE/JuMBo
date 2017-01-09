import React, { Component } from 'react';
import {Link} from 'react-router';
import ViewProject from './viewProject';

class ProjectContainer extends Component {
  render() {
    return (
      <div>
        <ViewProject/>
      </div>
    )
  }
}

export default ProjectContainer;