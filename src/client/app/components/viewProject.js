import React, { Component } from 'react';
import Header from './header';
import ProjectMembers from './projectMembers';
import ProjectSummary from  './projectSummary';
import MessageBoard from  './messageBoard';
import TaskContainer from './taskContainer';

class ViewProject extends Component {

  constructor(props){
    super(props);
    this.state = {
      id: '',
      projectTitle: '',
      summary: '',
      teamMembers: '' ,
      projectDate: '',
      tasks: [],
      messages: []
    }
  }

  messagePost() {
    // post message to database for project
    // pass down as prop to messageBoard
  }

  componentDidMount(){
    //make ajax database call to update project/task info
    const url = `/viewProject/${this.props.params.projectID}`;
    console.log(url);
    fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then(res => {
        // console.log('retrieved projects:', res);
        return res.json();
      })
      .then(res => {
        console.log('recieved project:', res);
        this.setState({
          id: res.id,
          projectTitle: res.title,
          summary: res.summary,
          teamMembers: res.team_members,
          projectDate: res.createdAt,
          tasks: res.tasks,
          messages: res.messages
        });
      })
  }

  addTask() {
    
  }




  render() {

    console.log('project id:', this.props.params);
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
                <ProjectMembers teamMembers={this.state.teamMembers} projectDate={this.state.projectDate.slice(0,10)} tasks={this.state.tasks}/> 
                </div>
                <div className="project-row clearfix">
                 <ProjectSummary summary={this.state.summary}  />
                </div>
              </div>
              <div id="section_2">
                <TaskContainer tasks={this.state.tasks} />
                <MessageBoard messages={this.state.messages} />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
  
}

export default ViewProject;