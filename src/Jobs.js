import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import fetchJsonp from 'fetch-jsonp';
import { Link } from 'react-router-dom';

class Jobs extends Component {

  constructor() {
    super();

    this.state = {
      jobs: []
    }
  }

  componentDidMount() {

    fetchJsonp(`https://jobs.github.com/positions.json`)
      .then(response => response.json())
      .then((data) => {
        console.log(data);

        this.setState({
          jobs: data
        });
      }).catch((err) => {
        console.log(err);
        alert("Somethign went wrong!");
      });

  }

  render() {
    return (
      <div className="container">
        <h1>Job Board</h1>
        <div className="row">
          {this.state.jobs.map((job, i) =>
            <div className="col-sm-4" style={styles.item} key={i}>
              <img src={job.company_logo} style={styles.img} />
              <h2>{job.title}</h2>
              <div dangerouslySetInnerHTML={{__html: job.description.substr(0, 250)}} />
              <Link className="btn btn-primary" to={{pathname: `/job/${job.id}`, state: job}}>Read More</Link>
              <br />
            </div>
          )}
        </div>
      </div>
    );
  }
}

const styles = {
  container: {},
  row: {
    padding: '20px',
    boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)'
  },
  item: {
    margin: '20px 0',
    heigth: '400px',
    padding: '15px'
  },
  img: {
    maxWidth: '300px',
    maxHeight: '200px',
    margin: 'auto'
    // float: 'left'
  },
  btn: {
    float: 'right',
    clear: 'both'
  }
}

export default Jobs;
