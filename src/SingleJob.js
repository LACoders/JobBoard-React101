import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import fetchJsonp from 'fetch-jsonp';
import { Link } from 'react-router-dom';

class SingleJob extends Component {

  constructor() {
    super();

    this.state = {
      job: {}
    }
  }

  componentDidMount() {

    this.setState({
      job: this.props.location.state
    });

  }

  render() {

    const { job } = this.state;

    return (
      <div className="container">
      <Link to="/">&larr; Go Back</Link>
      <br />
        <div className="row">
        <h1>{job.title}</h1>
        <div dangerouslySetInnerHTML={{__html: job.description}} />
        </div>
      </div>
    );
  }
}


export default SingleJob;
