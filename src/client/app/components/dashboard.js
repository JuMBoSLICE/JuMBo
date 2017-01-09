import React, { Component } from 'react';
import Header from './header';
import {Link} from 'react-router';
import PdListItems from './pdListItems';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      projects: [{title: 'Title Project', description: 'an even better project'}]
    }
  }
  
  componentDidMount(){

    //make ajax database call to update project list
  }


  render() {
    const projectArray = [];
        for(let i =0; i < this.state.projects.length; i++){
          projectArray.push(<PdListItems key={i} title={this.state.projects[i].title} description={this.state.projects[i].description}/>)
        }
    return (
      <div>
        <section id="main">
          <div className="container">
            <div className="content">
              <h2>Projects</h2>
              <p className="no-projects">You currently have no projects. <a href="#" >Create a project</a>.</p>
            </div>
            <ul id='project-list'>
             {projectArray}
            </ul>
          </div>
        </section>
      </div>
    )
  }
}

export default Dashboard;