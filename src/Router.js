import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Jobs from './Jobs';
import SingleJob from './SingleJob';


class Router extends Component {

  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Jobs} />
          <Route path="/job/:id" component={(props) => <SingleJob {...props} />}  />
        </Switch>
      </BrowserRouter>
    );
  }

}

export default Router;
