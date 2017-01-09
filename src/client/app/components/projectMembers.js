import React, { Component } from 'react';

class ProjectMembers extends Component {

  constructor(props){
    super(props);
  }


  render(){
  	return (
  		<div>
		  	<div className="team one-third">
		      <h3>Team Members</h3>
		     <p>{this.props.teamMembers}</p>
		    </div>
		    <div className="project-date one-third">
			    <h3>Project Date</h3>
			    <p>{this.props.projectDate}</p>
			  </div>
			  <div className="project-status one-third">
			    <h3>Tasks Completed</h3>
			    <p>{this.props.tasksCompleted} of {this.props.tasks.length}</p>
			  </div>
			 </div>
	  )

  }
}



  export default ProjectMembers;