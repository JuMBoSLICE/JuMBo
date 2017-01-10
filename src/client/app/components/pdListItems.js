import React, { Component } from 'react';
import Header from './header';
import {Link} from 'react-router';

class PdListItems extends Component {
  render(){
    const url = '/viewProject/' + this.props.id.toString();
    return (
      <li>
        <h3> {this.props.title}</h3>
        <p> {this.props.description}</p>
        <Link to={url} > view project</Link>
      </li>
    )
  }
}


export default PdListItems;