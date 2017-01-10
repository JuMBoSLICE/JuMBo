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
    fetch('/viewProjects', {
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
        console.log('retrieved projects:', res);
      });
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
              <p className="no-projects">You currently have no projects. <Link to='/createProject'>Create a project</Link>.</p>
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