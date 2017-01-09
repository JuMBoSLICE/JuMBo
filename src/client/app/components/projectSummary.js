import React, { Component } from 'react';

class ProjectSummary extends Component {

  constructor(props){
    super(props);
    
  }


  render(){
  	return (
  		<div id="project-summary">
        <h3>Project Summary</h3>
        <p>{this.props.projectSummary}</p>
      </div>
      )

  }
}


  export default ProjectSummary;