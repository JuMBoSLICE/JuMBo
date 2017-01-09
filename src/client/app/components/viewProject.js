import React, { Component } from 'react';
import Header from './header';
import ProjectMembers from './projectMembers';
import ProjectSummary from  './projectSummary';
import MessageBoard from  './messageBoard';
//import ProjectTask from './projectTask'

class ViewProject extends Component {

  constructor(props){
    super(props);
    this.state = {
      projectTitle: '',
      teamMembers: '' ,
      projectDate: '',
      tasks: [],
      tasksCompleted:'',
      messages: []
    }
  }

  messagePost() {
    // post message to database for project
    // pass down as prop to messageBoard
  }

  componentDidMount(){

    //make ajax database call to update project/task info
  }




  render() {
    const taskArray = [];
    for(let i = 0; i < this.state.tasks.length; i++){
      projectArray.push(<ProjectTask key={i}/>)
    }


    return (
      <div>
        <section id="main">
          <div className="container">
            <div className="content">
              <h2>{this.state.projectTitle}</h2>
               <h3 className="heading">Project Overview</h3>
               <div className="summary-container">
                <div className="project-row clearfix">
                {/*<ProjectMembers /> */}
                </div>
                <div className="project-row clearfix">
                 {/*<ProjectSummary />*/}
                </div>
              </div>

              <div id="tasks">
                <h3 className="heading">Project Tasks</h3>
                {/* {taskArray} */}
              </div>
              
              <MessageBoard />
            </div>
          </div>
        </section>
      </div>
    )
  }
  
}

export default ViewProject;